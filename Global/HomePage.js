// Palette : coulaire primaire : #ecfcff
//             Couleur secondaire (bar et cases): #3F71A8, sinon blanc et noir. 
// Police: Roboto/ sans serif. Importer ? 

import React from 'react';
import {View,Image,StyleSheet, StatusBar,SafeAreaView,TouchableOpacity,ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import { setRefreshToken, CLIENT_ID, CLIENT_SECRET } from '../auth';


const REDIRECT_URI = 'https://app.beprepared.forum-cs.fr/oauth_callback'


'https://auth.viarezo.fr/oauth/authorize/?redirect_uri=https://app.beprepared.forum-cs.fr/oauth_callback&client_id=f8dc9e85e89b1cded2cf1127f1af4dd1f792802d&response_type=code&state=LOL&scope=default'

export class MyWeb extends React.Component {
  state = {
    loading : false
  }
  render() {
    if (this.state.loading)
    return <ActivityIndicator />;
    return <WebView
    source={{ uri: 'https://auth.viarezo.fr/oauth/authorize/?redirect_uri=' + REDIRECT_URI + '&client_id=' + CLIENT_ID + '&response_type=code&state=LOL&scope=default' }} 
    onNavigationStateChange={this.handleWebViewNavigationStateChange}
    />;
  }

  handleWebViewNavigationStateChange = async (newNavState) => {
    // newNavState looks something like this:
    // {
    //   url?: string;
    //   title?: string;
    //   loading?: boolean;
    //   canGoBack?: boolean;
    //   canGoForward?: boolean;
    // }
    const { url } = newNavState;
    if (!url) return;
    console.log(url);

    // handle certain doctypes
    if (url.startsWith(REDIRECT_URI)) {
      this.setState({loading: true})
      // console.warn(url);
      let params = url.split('?');
      // Strip the first part of the URL (before "?"")
      params.shift();
      // Merge back the rest (add any "?" in the rest), explode by &
      params = params.join("?").split('&');
      const parsed_values = {};
      for (const param in params) {
        const [name, ...values] = param.split('=');
        const value = values.join('=');
        parsed_values[name] = value;
      }

      // Fetch the token
      const token = await fetch('https://auth.viarezo.fr/oauth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=authorization_code' +
              '&code=' + parsed_values.code +
              '&redirect_uri=' + REDIRECT_URI +
              '&client_id=' + CLIENT_ID +
              '&client_secret=' + CLIENT_SECRET,
      })
      .then((response) => {
        console.log(response)
        return response.json()})
      .then(data => {
        // setToken(data.access_token, data.expires_at);
        // // c'est expires_at pas expires_in
        // setRefreshToken(data.refresh_token);
        setToken(data);
        setRefreshToken(data)
      })
      .catch(error => {
        console.error(error);
      });

      // All done, tell the parent container we're done!
      this.props.onSuccess?.();
    }
  };

}

class MainCard extends React.Component{
    render(){
      return (
        <TouchableOpacity style={styles.card} onPress={()=> this.props.navigation.navigate(this.props.name)}>
          <View>
            <Image style={styles.logo} source={this.props.image} />
          </View>
        </TouchableOpacity>
      );
    }
}

export default class HomePage extends React.Component{
    state = {
      authenticated: false,
    };

    render(){
      StatusBar.setBarStyle('dark-content', true);
      if(!this.state.authenticated) {
        return <MyWeb onSuccess={() => this.setState({authenticated: true})} />
      }
        return (
          <SafeAreaView style={styles.container}>
              <MainCard image={require('../assets/img/Forum-01.png')} name="MainForum" navigation={this.props.navigation}/>
              <MainCard image={require('../assets/img/logo_BP.png')} name="MainBP" navigation={this.props.navigation}/>
          </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
      height: '100%',
      backgroundColor: '#ecfcff',
      // backgroundColor: '#C3E9FC',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image:{
      width: 300,
      height: 300,
      marginBottom: 30, 
      marginTop: -40, 
      resizeMode :'contain',
    },
    card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '40%',
    margin: 20, 
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    borderWidth: 1
    },
    logo: {
        width: 230,
        height: 230,
        resizeMode: 'contain',
    },
})  