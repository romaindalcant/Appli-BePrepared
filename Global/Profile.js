//Bouton deconnexion, bouton pour activer les notifications/tester les pushs
import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  ImageBackground,
  Alert,
  ActivityIndicator
} from 'react-native';
import { getToken } from '../auth';


export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        token: null,
        personalInfo: null,
      },
      loading: true,
    };
    console.log(this.props.setAuthenticated)
  }

  handleLogout(){
    // Effectuer les opérations de déconnexion ici
    this.props.setAuthenticated(false); // Mettre à jour l'état à false
  };

  async getPersonalInfo() {

    const token = await getToken().then((response) => {
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          token: response,
        },
      }));
      return response
    });

    const personalInfo = await fetch('https://auth.viarezo.fr/api/user/show/me', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.state.data.token}`,
      },
    }).then((response) => response.json());

    this.setState({ loading: false });
    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        personalInfo: personalInfo,
      },
    }));
  }

  componentDidMount() {
    this.getPersonalInfo();
  }

  render() {
    const { data, loading } = this.state;

    if (loading) {
      return <ActivityIndicator />;
    }

    if (!data.personalInfo) {
      return null;
    }

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.profileContainer}>
          <View style={styles.profile}>
            <Image
              style={styles.image}
            //mettre image perso avec la bonne requête ! (on ne peut pas)
              source={require('../assets/emojis/user.png')}
            ></Image>
            <View>
              <Text style={styles.name}>{data.personalInfo.firstName}</Text>
              <Text style={styles.name}>{data.personalInfo.lastName}</Text>
            </View>
          </View>

          <TouchableOpacity onPress={this.handleLogout}>
            <Text style={styles.forgotText}>Se déconnecter</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => this.props.navigation.navigate('ListPage')}
          // ou essayer onPress={() => this.props.navigation.navigate('HomeStack',{screen: 'ListPage'})}
        >
          <Text style={styles.loginText}>Je réserve un atelier</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => this.props.navigation.navigate('Mon BP')}
        >
          <Text style={styles.loginText}>Voir mes ateliers</Text>
        </TouchableOpacity>

      {/* Ajouter un bouton 'Activer les notifications' */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    name:{
        textAlign:'center',
        fontWeight:'500',
        fontSize:15
    },
    profile:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems:'center',
        width:'100%',
        maxHeight:130,
        marginTop:-50
    },
    profileContainer:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginHorizontal: 100,
        width:'90%',
        borderWidth: 1,
        borderRadius: 7,
        marginVertical: 30,
        backgroundColor: 'white',
        maxHeight:170
    },
    container:{
        height: '100%',
        backgroundColor: '#ecfcff',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    image:{
        marginTop:25,
        width: 70,
        height: 140,
        resizeMode:'contain'
    },
    loginText:{
        height: 40,
        width:'70%',
        fontWeight:500,
        flex: 1,
        margin: 10,
        marginTop:15,
        textAlign:'center'
    },
    loginBtn: {
        width: '70%',
        borderWidth:1,
        borderRadius: 25,
        height:45,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        backgroundColor: '#F5F5F5',
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: {
        width: 0,
        height: 2,
        },
    },
    forgotText:{
        marginTop:10,
        color: '#3F71A8',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
      }
    })