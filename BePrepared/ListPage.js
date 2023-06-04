// liste d'ateliers/ de confs quand on selectionne liste atelier..

import React from 'react';

import { View, Image, StyleSheet, StatusBar, SafeAreaView, TouchableOpacity, Text, ScrollView, ImageBackground, Alert } from 'react-native';
import Card from './AtelierCard';



export default class AtelierPage extends React.Component {
  constructor(props) {
    super(props)
    this.navigation = this.props.navigation
    const ateliersData = [
      {
        title: 'Relecture de CV',
        imageSource: require("../assets/cardImg/relecture_cv.jpg"),
        infoTopRight: '8h00',
        infoBottomRight: 'MG.004'
      },
      {
        title: 'Negociation de salaire',
        imageSource: require('../assets/cardImg/nego_salaire.jpg'),
        infoTopRight: '10h00',
        infoBottomRight: 'VI.003'
      },
      {
        title: 'Simulation entretien',
        imageSource: require('../assets/cardImg/simulation_entretien.jpg'),
        infoTopRight: '8h30',
        infoBottomRight: 'e.180'
      },
    ]

    const EvenementsData = [
      {
        title: 'Tables rondes',
        imageSource: require('../assets/cardImg/table_ronde.jpg'),
        infoTopRight: '11h00',
        infoBottomRight: 'sd.002'
      },
      {
        title: 'Cocktail de cloture',
        imageSource: require('../assets/cardImg/buffet.jpg'),
        infoTopRight: '19h00',
        infoBottomRight: 'Espace Capable'
      },
      {
        title: 'Conférence Apple',
        imageSource: require('../assets/cardImg/conference.jpg'),
        infoTopRight: '17h00',
        infoBottomRight: 'Théatre Rousseau'
      },
    ]

    this.section = this.props.route.params.section;

    this.data = (this.section === 'ateliers') ? ateliersData : EvenementsData;
    //   const test = this.data[0]['title'].toString()
    //   Alert.alert(test)

  }

  render() {
    const Cards = ({ data }) => {
      return (
        <View>
          {data.map((item, index) => (
            <Card key={index} title={data[index].title} imageSource={data[index].imageSource} navigation={this.navigation} />
          ))}
        </View>
      );
    };

    return <ImageBackground
      style={styles.backgroundImage}
      source={require('../assets/backgrounds/wavyblue.jpg')}
    ><ScrollView>

        <Text style={styles.title}>Tous les ateliers</Text>
        <Cards data={this.data}></Cards>
        {/* <Card title='Relecture de CV' imageSource={require('../assets/img/fores.jpg')} infoTopRight='8h00' infoBottomRight='MG.004' navigation={this.props.navigation}></Card>
            <Card title='Negociation de salaire' imageSource={require('../assets/img/forest2.jpg')} infoTopRight='10h00' infoBottomRight='VI.003' navigation={this.props.navigation}></Card>
            <Card title='Simulation entretien' imageSource={require('../assets/img/forest3.jpg')} infoTopRight='8h30' infoBottomRight='e.180'  navigation={this.props.navigation}></Card> */}
      </ScrollView>
    </ImageBackground>
  }
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height: '100%',
    padding: 10,
  }
})