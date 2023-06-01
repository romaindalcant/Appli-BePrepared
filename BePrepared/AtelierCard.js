import React from 'react';
import {View,Image,StyleSheet, StatusBar,SafeAreaView,TouchableOpacity,Text } from 'react-native';

// export default class AtelierCard extends React.Component{
//     constructor(props){
//         super(props)
//     }

//     render(){
//         return <TouchableOpacity style={styles.cardContainer}>
//             <View style={styles.cardImageContainer}>
//                 <Image
//             style={styles.cardImage}
//             source={this.props.image}>
//                 </Image>
//             </View>
//             <View style={styles.cardTitleContainer}>
//                 <Text style={styles.cardTitle}>{this.props.title}</Text>
//             </View>
            
//         </TouchableOpacity>
//     }
// }


export default class Card extends React.Component{
  // ({ imageSource, title, infoTopRight, infoBottomRight}) => {
  constructor(props){
    super(props)
    this.imageSource = this.props.imageSource
    this.title = this.props.title
    this.infoBottomRight = this.props.infoBottomRight
    this.infoTopRight = this.props.infoTopRight
  } 
    
  render(){

   
    return (
      <TouchableOpacity 
      style={styles.card} 
      onPress={() => this.props.navigation.navigate('AtelierPage',
      {
      imageSource : this.imageSource,
      title : this.title,
      location : this.infoBottomRight,
      time :this.infoTopRight,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
      })

      }>
        <Image style={styles.cardImage} source={this.imageSource} />
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>{this.infoTopRight}</Text>
        </View>
        <View style={styles.infoContainer2}>
          <Text style={styles.infoText}>{this.infoBottomRight}</Text>
        </View>
        
        <Text style={styles.title}>{this.title}</Text>
      </TouchableOpacity>
    );
  }
} 

const styles = StyleSheet.create({
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



