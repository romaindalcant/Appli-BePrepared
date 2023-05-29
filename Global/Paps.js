// Création d'un bouton de réservation utilisé dans plusieurs pages

import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export class ReservationButton extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return <TouchableOpacity style={styles.loginBtn}   onPress={() => this.props.navigation.navigate('MainPage')}>
                <Text style={styles.loginText}>Je réserve un atelier</Text>
             </TouchableOpacity>
        
    }
}

const styles = StyleSheet.create({
    loginText:{
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
    }
    })