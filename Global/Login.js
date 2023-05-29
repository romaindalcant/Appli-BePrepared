// A tej 


import React from 'react';
import { View, StyleSheet, Image, StatusBar, Text, TouchableOpacity, TextInput,SafeAreaView ,KeyboardAvoidingView,Alert} from 'react-native';


export default class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
            errorText: ''
        }
    }

    setEmail(newemail){
        this.setState({email: {newemail}})
    }

    setPassword(newpassword){
        this.setState({password: {newpassword}})
    }

    

    render(){
        StatusBar.setBarStyle('dark-content', true);
        return(
        <SafeAreaView style={styles.container}>
            <Image
            style={styles.image}
            source={require('../assets/img/logoForumNoir.png')}
            />

            <StatusBar style="auto" />
            
            <View style={styles.input}>
            <TextInput
                style={styles.inputText}
                placeholder="Email"
                placeholderTextColor="#003f5c"
                onChangeText={(newemail) => this.setEmail(newemail)}
            />
            </View>

            <View style={styles.input}>
            <TextInput
                style={styles.inputText}
                placeholder="Mot de passe"
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={(newpassword) => this.setPassword(newpassword)}
            />
            </View>
            
            

            <TouchableOpacity>
            <Text style={styles.forgotText}>J'ai oublié mon mot de passe</Text>
            </TouchableOpacity>

            <Text style={styles.errorText}>{this.state.errorText}</Text>

            <TouchableOpacity style={styles.loginBtn}   onPress={this.handleLogin.bind(this)}>
            <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </SafeAreaView>
        )
    }

    handleLogin() {
        const emailRegex = /^(.{6,})$/;
        // mettre ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
        const passwordRegex = /^(.{6,})$/;
        const { email, password } = this.state;
        
        if (emailRegex.test(email) 
         && passwordRegex.test(password)
         ){
        // Alert.alert('c"est bon')
        this.setState({ errorText: '' });
        this.props.navigation.navigate('Mon Profil');
        //   mettre ce qu'on veut faire!
        } else {
        // Alert.alert((passwordRegex.test(password)).toString())
        // Alert.alert((emailRegex.test(email)).toString())
        
        this.setState({ errorText: 'Email ou mot de passe incorrect' });
        }
      }
}



  
const styles = StyleSheet.create({
container:{
    height: '100%',
    backgroundColor: '#ecfcff',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
},
image:{
    width: '80%',
    height: 200,
    marginBottom: 40, 
    marginTop: -30, 
    resizeMode :'stretch',
},
input: {
    backgroundColor: '#F5F5F5',
    borderWidth:1,
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
    textAlign: 'center',
    alignItems: 'center',
},
inputText:{
    height: 50,
    width:'70%',
    flex: 1,
    margin: 10,
},
loginBtn: {
    width: '80%',
    borderWidth:1,
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#F5F5F5',
},
forgotText:{
    height: 30,
    marginBottom: 0,
    color: '#3F71A8',
},
errorText:{
    // fontSize:10,
    color:'red',
    textAlign:'center'
}
})