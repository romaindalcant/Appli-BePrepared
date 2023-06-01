import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import Creneau from './Creneau';

const AtelierPage = ({route}) => {
  const { imageSource, title, description, time, location } = route.params
  return (
    <ScrollView style={styles.backgroundContainer}>
    <View style={styles.container}>
      <Image style={styles.image} source={imageSource} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}{'\u2728'}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.bottom}>
          {/* <Text style={styles.time}>🕑 {time}</Text>
          <Text style={styles.location}>📍{location} </Text> */}
        </View>
      <Creneau time="9h15" location="SD.102" disponibilite="0/1"></Creneau>
      <Creneau time="10h" location="SD.08" disponibilite="3/9"></Creneau>
      <Creneau time="12h" location="SD.09" disponibilite="0/1"></Creneau>
      <Creneau time="18h" location="Rideaux" disponibilite="0/1"></Creneau>
      <Creneau time="15h" location="Rideaux" disponibilite="0/1"></Creneau>

      </View>
      
      
    </View>
    </ScrollView>
  );
};
// Automatiser ca en fetchant tout ce qu'il faut!!

const styles = StyleSheet.create({
    
backgroundContainer:{
    backgroundColor:'#C3E9FC',
    height:'100%'
    },
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
    fontWeight:500
},
  papsDispo:{
    borderWidth: 0.5,
    borderRadius: 10,
    padding:3,
    backgroundColor: '#93C572'	
  },
  papsPasDispo:{

  },
  container: {
    // elevation: 5,
    // shadowColor: 'black',
    // shadowOpacity: 0.2,
    // shadowRadius: 5,
    // shadowOffset: {
    // width: 0,
    // height: 2,
    // },
    flexDirection:'column',
    justifyContent:'flex-end',
    borderWidth: 0.5,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    overflow: 'hidden',
    height:'100%'
  },
  image: {
    flex: 0.3,
    width: '100%',
    minHeight: 130,
    maxHeight:150,
    resizeMode:"cover"
  },
  content: {
    flex: 0.7,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign:'center'
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  bottom: {
    // position:'absolute',
    // bottom:0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width:'100%'
  },
  time: {
    // position:'absolute',
    // bottom:20,
    // left: 50,
    fontSize: 17,
    fontWeight:500,
  },
  location: {
    // position:'absolute',
    // bottom:20,
    // left:100,
    fontSize: 17,
    fontWeight:500
  },
});

export default AtelierPage;
// export default function CVPage(){
//     return <AtelierPage time="8h00" location="MG.004" title="Relecture de CV" imageSource={require('../assets/img/forest2.jpg')} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'></AtelierPage>
// }






