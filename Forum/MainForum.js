// On ne sait pas encore ce qu'il va y avoir içi

import React from 'react';
import {StyleSheet, Image, StatusBar, SafeAreaView,Text } from 'react-native';
import Test from '../APITest/TestView'

/*export default function MainForum(){
    return <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Restez branchés</Text>
        <Image
        style={styles.image}
        source={require('../assets/img/plug.png')}
        ></Image>
    </SafeAreaView>
}*/

export default function MainForum(){
    return <SafeAreaView style={styles.container}>
        <Text><Test/></Text>
    </SafeAreaView>
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#C3E9FC',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',  
    },
    image:{ 
        flex: 2, 
        maxHeight: 300, 
        maxWidth: 300,
        marginTop:50, 
        marginLeft: 120,
        resizeMode :'contain',
    },
    title:{
        fontWeight: "bold",
        fontSize: 24,
        },
})