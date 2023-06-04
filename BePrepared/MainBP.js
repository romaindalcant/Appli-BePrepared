import React from 'react';
import { StyleSheet, Image, StatusBar, ScrollView, Text, View, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import CarouselSnap from './CarouselSnap';

export default class MainBP extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        const atelierString = 'Les ateliers >';
        const evenementsString = 'Les évenements >';
        return (

            <ScrollView contentContainerStyle={styles.container}>
                <Image
                    style={styles.image}
                    source={require('../assets/img/logo_BP.png')}
                ></Image>

                {/* <Image style={styles.planning} source={require('../assets/img/planning.jpg')}></Image> */}
                <View style={styles.smallContainer}>
                    <TouchableOpacity style={styles.subtitleContainer} onPress={() => this.props.navigation.navigate('ListPage', { section: 'ateliers' })} ><Text style={styles.subtitle}>{atelierString}</Text></TouchableOpacity>
                    <CarouselSnap section='ateliers' navigation={this.props.navigation}></CarouselSnap>

                </View>


                <View>
                    <TouchableOpacity style={styles.subtitleContainer} onPress={() => this.props.navigation.navigate('ListPage', { section: "évenements" })}><Text style={styles.subtitle}>{evenementsString}</Text></TouchableOpacity>
                    <CarouselSnap section='évenements' navigation={this.props.navigation}></CarouselSnap>
                </View>

                <TouchableOpacity style={styles.loginBtn} onPress={() => this.props.navigation.navigate('ListPage', { section: 'ateliers' })}>
                    <Text style={styles.loginText}>Je réserve un atelier</Text>
                </TouchableOpacity>


            </ScrollView>)
        // </ImageBackground>

    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ecfcff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    // planning: {
    //     width: '80%',
    //     resizeMode: 'contain',
    //     margin: 0,
    //     marginTop: -20, // Modification
    //   },
    //   logoContainer: {
    //     marginTop: 20, // Modification
    //   },
    image: {
        flex: 2,
        maxHeight: 160,
        maxWidth: 250,
        marginTop: 20,
        marginBottom: -10,
        resizeMode: 'contain',
    },
    subtitle: {
        fontWeight: 600,
        fontSize: 22,
    },
    subtitleContainer: {
        marginBottom: 6,
        marginTop: 30,
        marginLeft: 60
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        height: '100%'
    },
    loginText: {
        height: 40,
        width: '70%',
        fontWeight: 500,
        flex: 1,
        margin: 10,
        marginTop: 15,
        textAlign: 'center'
    },
    loginBtn: {
        width: '70%',
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        borderWidth: 1,
        borderRadius: 25,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 20,
        backgroundColor: '#F5F5F5',
    }
})