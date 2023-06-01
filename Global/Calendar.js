import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet,ScrollView} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';

export default class Calendar extends React.Component {
    constructor(){
      super()
      this.renderFooter = this.renderFooter.bind(this)
      this.data = {lundi: [
        {time: '12:00', title: "Tables rondes", icon: require('../assets/emojis/necktie.png')},
        {time: '16:30', title: 'Conférence Symposium', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',icon: require('../assets/emojis/personal-computer.png')},
      ], 
      mercredi: [
        {time: '09:00', title: 'Relecture de CV', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ', icon: require('../assets/emojis/briefcase.png')},
        {time: '10:45', title: 'Négociation de salaire', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' , icon: require('../assets/emojis/money-bag.png')},
        {time: '12:00', title: "Simulation d'entretien", icon: require('../assets/emojis/necktie.png')},
        {time: '14:00', title: 'Comportement en entreprise', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',icon: require('../assets/emojis/shoe.png')},
        {time: '16:30', title: 'Relecture de lettre de motivation', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',icon: require('../assets/emojis/personal-computer.png')},
      ],
      jeudi: [
        {time: '09:00', title: 'Relecture de CV', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ', icon: require('../assets/emojis/briefcase.png')},
        {time: '10:45', title: 'Négociation de salaire', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' , icon: require('../assets/emojis/money-bag.png')},
        {time: '12:00', title: "Simulation d'entretien", icon: require('../assets/emojis/necktie.png')},
        {time: '14:00', title: 'Comportement en entreprise', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',icon: require('../assets/emojis/shoe.png')},
        {time: '16:30', title: 'Relecture de lettre de motivation', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',icon: require('../assets/emojis/personal-computer.png')},
      ]}

      this.state = {
        isRefreshing: false,      
        waiting: false,
        data: this.data
      }
    } 
  
  renderFooter() {
      if (this.state.waiting) {
          return <ActivityIndicator />;
      } else {
          return <Text>~</Text>;
      }
    }

    render() {
      return (
        <ScrollView style={styles.calendarContainer}>

          <Text style={styles.title}>Lundi</Text>

          <Timeline 
            style={styles.list}
            data={this.state.data.lundi}
            circleSize={25}
            circleColor='#ecfcff'
            lineColor='#3F71A8'
            timeContainerStyle={{minWidth:52, marginTop: -2,marginRight:10}}
            timeStyle={{textAlign: 'center', backgroundColor:'#F5F5F5', color:'black',fontWeight:600, marginTop:2, padding:5, borderRadius:10,borderWidth:1}}
            titleStyle={{color:'#000', textAlign:'center'}}
            renderFullLine='true'
            separator='true'
            eventDetailStyle={{backgroundColor:'#F5F5F5', borderRadius:10, margin:8,shadowColor: "#000", shadowOffset:{width: 0,height: 3,},
  shadowOpacity: 0.29,
  shadowRadius: 4.65,
  elevation: 7,}}
            columnFormat='single-column-left'
            descriptionStyle={{color:'#7D7D7D', textAlign:'left', marginHorizontal:6}}
            options={{
              style:{marginTop:5},
              renderFooter: this.renderFooter,
            }}
            innerCircle={'icon'}
          />

          <Text style={styles.title}>Mercredi</Text>


          <Timeline 
            style={styles.list}
            data={this.state.data.mercredi}
            circleSize={25}
            circleColor='#ecfcff'
            lineColor='#3F71A8'
            timeContainerStyle={{minWidth:52, marginTop: -2,marginRight:10}}
            timeStyle={{textAlign: 'center', backgroundColor:'#F5F5F5', color:'black',fontWeight:600, marginTop:2, padding:5, borderRadius:10,borderWidth:1}}
            titleStyle={{color:'#000', textAlign:'center'}}
            renderFullLine='true'
            separator='true'
            eventDetailStyle={{backgroundColor:'#F5F5F5', borderRadius:10, margin:8,shadowColor: "#000", shadowOffset:{width: 0,height: 3,},
  shadowOpacity: 0.29,
  shadowRadius: 4.65,
  elevation: 7,}}
            columnFormat='single-column-left'
            descriptionStyle={{color:'#7D7D7D', textAlign:'left', marginHorizontal:6}}
            options={{
              style:{marginTop:5},
              renderFooter: this.renderFooter,
            }}
            innerCircle={'icon'}
          />

          <Text style={styles.title}>Jeudi</Text>

          <Timeline 
            style={styles.list}
            data={this.state.data.jeudi}
            circleSize={25}
            circleColor='#ecfcff'
            lineColor='#3F71A8'
            timeContainerStyle={{minWidth:52, marginTop: -2,marginRight:10}}
            timeStyle={{textAlign: 'center', backgroundColor:'#F5F5F5', color:'black',fontWeight:600, marginTop:2, padding:5, borderRadius:10,borderWidth:1}}
            titleStyle={{color:'#000', textAlign:'center'}}
            renderFullLine='true'
            separator='true'
            eventDetailStyle={{backgroundColor:'#F5F5F5', borderRadius:10, margin:8,shadowColor: "#000", shadowOffset:{width: 0,height: 3,},
  shadowOpacity: 0.29,
  shadowRadius: 4.65,
  elevation: 7,}}
            columnFormat='single-column-left'
            descriptionStyle={{color:'#7D7D7D', textAlign:'left', marginHorizontal:6}}
            options={{
              style:{marginTop:5},
              renderFooter: this.renderFooter,
            }}
            innerCircle={'icon'}
          />
        </ScrollView>
      );
    }
  }

  // Mettre plusieurs Timeline les une après les autre (sous ls=es sous titres Lundi, Mercredi, Jeudi) en fetchant à chaque fois les datas..

  const styles = StyleSheet.create({

    calendarContainer: {
        flex: 1,
        padding: 20,
        backgroundColor:'#ecfcff'
      },
      title:{
        fontWeight: "bold",
        fontSize: 20,
        textAlign:'center',
        marginVertical: 20
        },
      list: {
        flex: 1,
        paddingTop:20,
      },
})