import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Dimensions
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import Card from './AtelierCard'

export default class SnapCarousel extends React.Component {

  constructor(props) {
    super(props);
    this.section = this.props.section;
    this.navigation = this.props.navigation;
    this._renderItem = this._renderItem.bind(this);

    // ateliers ou evenements..
    const carouselItemsAteliers = [
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

    const carouselItemsEvenements = [
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

    this.carouselItems = (this.section === 'ateliers') ? carouselItemsAteliers : carouselItemsEvenements;
    this.state = {
      activeIndex: 0,
      carouselItems: this.carouselItems
    }
  }

  _renderItem({ item, index }) {
    return (
      <Card title={item.title} imageSource={item.imageSource} infoBottomRight={item.infoBottomRight} infoTopRight={item.infoTopRight} navigation={this.navigation}></Card>
      // il faut ajouter navigation = {this.props.navigation}
    )
  }

  render() {
    const screenWidth = Dimensions.get('window').width;
    return (
      <SafeAreaView style={{
        flex: 1,
        //  backgroundColor:'#C3E9FC', 
        paddingTop: 50,
        maxHeight: 250
      }}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
          <Carousel
            loop='true'
            autoplay='true'
            autoplayInterval={5000}
            layout={"default"}
            ref={ref => this.carousel = ref}
            data={this.state.carouselItems}
            sliderWidth={screenWidth}
            itemWidth={270}

            renderItem={this._renderItem}
            onSnapToItem={index => this.setState({ activeIndex: index })} />
        </View>
      </SafeAreaView>
    );
  }
}
