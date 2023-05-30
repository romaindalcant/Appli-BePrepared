// View React Native Test, l'utiliser dans la partie Forum

import React, {useState,useEffect} from 'react'
import {View,Image,StyleSheet, TouchableOpacity,Text } from 'react-native';

import {baseURL} from './constants';

function NewAtelierData ({id}) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!id) {
      console.warn("hé tocard faut passer un ID!")
      return;
    }
    const url = baseURL + `atelier/${id}`

    // Initial data fetching
    fetch(url)
    .then(response => response.json())
    .then(setData)
    .catch(error => console.error(error));

    return () => {
      console.log(id);
      setData(null);
    }
  }, [id]);

  return <View><Text style={styles.text}>21/11/2023</Text>
  <Text style={styles.text}>Palais des Congrés</Text>
  <Text style={styles.text}>Restez Branchés !</Text></View>

}

export default class Test extends React.Component{
    render(){
        return <NewAtelierData id='20'/> 
            
    }
}

const styles = StyleSheet.create({
  text:{
    color: 'black',
    fontSize: 27,
    fontWeight: 500,
    textAlign:'center',
    padding: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginVertical: 8,
  },
  cardImage: {
    height: 200,
    width:'100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  infoContainer: {
    borderWidth:1,
    position: 'absolute',
    top: 20,
    right: 10,
    padding: 7,
    backgroundColor:'white',
    borderRadius:10
  },
  infoContainer2: {
    borderWidth:1,
    position: 'absolute',
    top: 150,
    right: 10,
    padding: 8,
    backgroundColor:'white',
    borderRadius:10
  },
  infoText: {
    color: 'black',
    fontSize: 17,
    fontWeight: 500,
    marginBottom: 4,
    textAlign: 'right',
  },
  title: {
    textAlign:'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginVertical: 8,
  },
});