//Bouton deconnexion, bouton pour activer les notifications/tester les pushs
import React from 'react';
import * as Notifications from 'expo-notifications'
import { NavigationContainer, useNavigation, withNavigation } from '@react-navigation/native';


import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  ImageBackground,
  Alert,
  ActivityIndicator,
  Linking,
  Platform
} from 'react-native';
import { getToken } from '../auth';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        token: null,
        personalInfo: null,
      },
      loading: true,
    };
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout() {
    // Effectuer les opérations de déconnexion ici
    console.log(this.handleLogout)
    this.props.setAuthenticated(false); // Mettre à jour l'état à false
  };


  redirectToSettings() {  //Redirige l'utilisateur vers les settings pour activer les notifications
    appSettingsUrl = Platform.select({
      ios: 'app-settings:',
      android: 'android.settings.APP_NOTIFICATION_SETTINGS'
    });

    Linking.openURL(appSettingsUrl);
  }

  async sendNotification() {    //Permet l'envoi d'une notification
    await Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
      }),
    });

    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Notification',
        body: 'Decris moi ce que tu veux',
        sound: 'default',
      },
      trigger: null, // Notification immédiate
    });
  }

  async getPersonalInfo() {

    const token = await getToken().then((response) => {
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          token: response,
        },
      }));
      return response
    });

    const personalInfo = await fetch('https://auth.viarezo.fr/api/user/show/me', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.state.data.token}`,
      },
    }).then((response) => response.json());

    this.setState({ loading: false });
    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        personalInfo: personalInfo,
      },
    }));
  }

  componentDidMount() {
    this.getPersonalInfo();
  }

  render() {
    const { data, loading } = this.state;

    if (loading) {
      return <ActivityIndicator />;
    }

    if (!data.personalInfo) {
      return null;
    }

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.profileContainer}>
          <View style={styles.profile}>
            <Image
              style={styles.image}
              //mettre image perso avec la bonne requête ! (on ne peut pas)
              source={require('../assets/asso.png')}
            ></Image>
            <View>
              <Text style={styles.name}>{data.personalInfo.firstName} {data.personalInfo.lastName}</Text>
              <Text style={{ ...styles.name, marginTop: 10 }}>P{data.personalInfo.promo}</Text>
            </View>
          </View>

          <TouchableOpacity onPress={this.handleLogout}>
            <Text style={styles.forgotText}>Se déconnecter</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.loginBtn}
          // onPress={() => this.props.navigation.navigate('ListPage')}
          onPress={() => this.props.navigation.navigate("HomeStack", { screen: 'ListPage' })}
        >
          <Text style={styles.loginText}>Je réserve un atelier</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => this.props.navigation.navigate('Mon BP')}
        >
          <Text style={styles.loginText}>Voir mes ateliers</Text>
        </TouchableOpacity>

        <TouchableOpacity   //Bouton qui redirige l'utilisateur vers ses settings de notifs
          style={styles.loginBtn}
          onPress={this.redirectToSettings}>
          <Text style={styles.loginText}> Activer les notifications </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  name: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 15
  },
  profile: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    maxHeight: 130,
    marginTop: -50
  },
  profileContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 100,
    width: '90%',
    borderWidth: 1,
    borderRadius: 7,
    marginVertical: 30,
    backgroundColor: 'white',
    maxHeight: 170
  },
  container: {
    height: '100%',
    backgroundColor: '#ecfcff',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  image: {
    marginTop: 25,
    width: 70,
    height: 140,
    resizeMode: 'contain'
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
    borderWidth: 1,
    borderRadius: 25,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#F5F5F5',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  forgotText: {
    marginTop: 10,
    color: '#3F71A8',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  }
})