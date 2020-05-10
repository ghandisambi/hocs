import * as React from 'react';
import { Text, View,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Menu from '../ecrans/recherche/Developpement/Menu'


function HommeScreen() {
  return (
    
     <ScrollView style={{ flex: 1}} >
      <Menu/>
    </ScrollView>
    
  );
}

function FemmeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Femme!</Text>
    </View>
  );
}

function PromotionsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Promotions!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Homme"
      tabBarOptions={{
       activeTintColor: 'black',
        labelStyle: { fontSize: 12,fontWeight: 'bold', },
        style: { backgroundColor: 'powderblue' },
      }}
    >
      <Tab.Screen
        name="Homme"
        component={HommeScreen}
        options={{ tabBarLabel: 'Homme' }}
      />
      <Tab.Screen
        name="Femme"
        component={FemmeScreen}
        options={{ tabBarLabel: 'Femme' }}
      />
      <Tab.Screen
        name="Promotions"
        component={PromotionsScreen}
        options={{ tabBarLabel: 'Promotions' }}
      />
    </Tab.Navigator>
  );
}

