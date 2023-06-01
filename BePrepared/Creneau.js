// Créer une carte créneau (en longueur). Ca doit prendre en props tous ce qu'il faut + avoir un bouton paps/depaps (avec alert...)
import React from 'react';
import {View,Image,StyleSheet, StatusBar,SafeAreaView,TouchableOpacity,Text } from 'react-native';

export default class Creneau extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            dispo: true,
        }
    }

    handlePress(){
        console.log('pressed');
        this.setState({dispo:false});
    }

    render(){
        const style = (this.state.dispo) ? styles.papsDispo : styles.papsPasDispo;
        const text = (this.state.dispo) ? 'PAPS' : 'DEPAPS';
        return <View style={styles.creneauContainer}>
            <Text style={styles.information}>🕑 {this.props.time}</Text>
            <Text style={styles.information}>📍{this.props.location} </Text>
            <Text style={styles.information}>{this.props.disponibilite}</Text> 
            <TouchableOpacity onPress={this.handlePress} style={style}><Text>{text}</Text></TouchableOpacity>
            {/* on fetch avant.. mettre un bouton paps ? */}
        </View>
    }
}

const styles = StyleSheet.create({
    creneauContainer:{
        borderWidth:1,
        borderRadius:5,
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-around',
        alignItems:'center',
        width: '100%',   
        height: 50,
        flexDirection: 'row',
        marginTop: 4
    },
    information: {
        fontSize: 15,
        fontWeight:400
  },
  papsDispo:{
    borderWidth: 0.5,
    borderRadius: 10,
    padding:3,
    backgroundColor: '#93C572'	
  },
  papsPasDispo:{

  }
})