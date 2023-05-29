import React, {useState,useEffect,useCallback} from 'react'
import {View, Image, Text, StyleSheet,Button,Animated, ActivityIndicator} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getToken } from './auth';

import MainBP from './BePrepared/MainBP';
import MainForum from './Forum/MainForum';
import Login from './Global/Login';
import Calendar from './Global/Calendar';
import Profile from './Global/Profile';
import HomePage from './Global/HomePage';
import Card from './BePrepared/AtelierCard';
import  ListPage  from './BePrepared/ListPage';
import SnapCarousel from './BePrepared/CarouselSnap';
import AtelierPage from './BePrepared/AtelierPage';
import {MyWeb} from './Global/HomePage';

const Tab = createBottomTabNavigator ()
const Stack = createNativeStackNavigator()


/* Attention pour les api : utiliser un base_url avant chaque appel !!!! pour pas avoir a tout hardcode quand on change de serveur!!!!*/

function ProfileStack(){
  return <Stack.Navigator initialRouteName='Login'>
    <Stack.Screen name='Login' component={Login}  options={{ headerShown: false}}></Stack.Screen>
    <Stack.Screen name='Mon Profil' component={Profile}  options={{ headerShown: false }}></Stack.Screen>
  </Stack.Navigator>
}

function HomeStack(){
  return <Stack.Navigator initialRouteName='HomePage'>
    <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }}></Stack.Screen>
    <Stack.Screen name="MainForum" component={MainForum} options={{ headerShown: false }}></Stack.Screen>
    {/* <Stack.Screen name="MainBP" component={MainForum}></Stack.Screen> */}
    <Stack.Screen name="MainBP" component={MainBP} options={{ headerShown: false }} ></Stack.Screen>
    <Stack.Screen name="ListPage" component={ListPage} options={{ headerShown: false }}></Stack.Screen>
    <Stack.Screen name="AtelierPage" component={AtelierPage} initialParams={{ title: 'Hello, world!' }}></Stack.Screen>
  </Stack.Navigator>
}
export default function App() {
  const [loading, setLoading] = useState(true);

  const [authenticated, setAuthenticated] = useState(false);

  const onSuccess = useCallback(() => setAuthenticated(true), []);

  useEffect(() => {
    getToken().then(token => !!token, () => false).then(hasToken => {
      setAuthenticated(hasToken);
      setLoading(false);
    });
  }, []);

  if (loading) {
    // TODO Improve design
    return <ActivityIndicator size={"large"} />;
  }

  if (!authenticated){
    return <MyWeb onSuccess={onSuccess} />;
  }

  return <NavigationContainer>
    <Tab.Navigator 
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'ios-information-circle': 'ios-information-circle-outline';
          } else if (route.name === 'Ma journée') {
            iconName = focused ? 'ios-time' : 'ios-time';
          }
          else {
            iconName = focused ? 'ios-person' : 'ios-person';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />
        
        },
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopWidth: 0,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5,
          paddingVertical: 10,
          paddingHorizontal: 20,
        },
        tabBarItemStyle: {
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',   
        

      })}
      >
      
      <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }}></Tab.Screen>
      
      <Tab.Screen name="Ma journée" component={Calendar} options={{headerStyle: {
        height: 80,
        borderBottomWidth: 3,
        borderBottomColor: '#3F71A8',
        }}}></Tab.Screen>

      <Tab.Screen name="Profil" component={ProfileStack} options={{headerStyle: {
        height: 80,
        borderBottomWidth: 3,
        borderBottomColor: '#3F71A8',
      },}}></Tab.Screen>

      
    </Tab.Navigator>
  </NavigationContainer>
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
