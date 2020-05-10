import * as React from 'react';
import { Text, View,StatusBar,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons,FontAwesome,FontAwesome5,Foundation } from '@expo/vector-icons';
import {MyTabsBottom} from './modelhocs-v.1/Navigation/BottomTabNavigation/exportFunctionNav/MybottomTabs'



export default function App() {
  
  return (
    <SafeAreaView style={{flex:1}}>
    <StatusBar  translucent = {true}/>
    <NavigationContainer style={{flex:1}}>
      <MyTabsBottom/>
    </NavigationContainer>
  
    </SafeAreaView>

  );
}
