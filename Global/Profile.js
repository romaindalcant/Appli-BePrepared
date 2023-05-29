// Penser à l'inclure dans Calendar.js (photo, nom du mec...)
//Bouton deconnexion, bouton pour activer les notifications/tester les pushs

import React from 'react';
import { View, StyleSheet, Image, StatusBar, Text, TouchableOpacity, TextInput,SafeAreaView ,KeyboardAvoidingView, ImageBackground} from 'react-native';
import { ReservationButton } from './Paps';

export default class Profile extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return <SafeAreaView style={styles.container}>
        <View style={styles.profileContainer}>
            <View style={styles.profile}>
            <Image
            style={styles.image}
            source={require('../assets/emojis/user.png')}></Image>
            <View>
                <Text style={styles.name}>Gabriel</Text>
                <Text style={styles.name}>Landman</Text>
            </View>
            </View>
        

            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
        <Text style={styles.forgotText}>Se déconnecter</Text>
        </TouchableOpacity>
        </View>

        

    <TouchableOpacity style={styles.loginBtn}   onPress={() => this.props.navigation.navigate('MainPage')}>
        <Text style={styles.loginText}>Je réserve un atelier</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style={styles.loginBtn}   onPress={() => this.props.navigation.navigate('Ma journée')}>
    <Text style={styles.loginText}>Voir ma journée</Text>
    </TouchableOpacity>

    </SafeAreaView>
        // <ImageBackground
        // style={styles.backgroundImage}
        // source={require('../assets/backgrounds/gradientbleu.png') }
        // >
        
        {/* </ImageBackground> */}
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