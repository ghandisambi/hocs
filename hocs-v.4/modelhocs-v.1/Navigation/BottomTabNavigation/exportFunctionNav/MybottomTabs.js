import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons,FontAwesome,FontAwesome5,Foundation } from '@expo/vector-icons';
import SearchScreen from '../../ecrans/recherche/EcranRecherche'
import LoginScreen from '../../ecrans/profile/profile'
import {Mystack} from '../../StackNavigation/StackNavigation'
import PopScreen from '../../StackNavigation/PopScreen'


function HomeScreen(){
 return (
    <View style={{ flex: 1 }}>
      <Text>Recherche!</Text>
    </View>
  );

}

function ShopScreen(){
 return (
    <View style={{ flex: 1 }}>
      <PopScreen/>
    </View>
  );

}
function FavorisScreen(){
 return (
    <View style={{ flex: 1 }}>
      <Text>Recherche</Text>
    </View>
  );

}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}


const TabBottom = createBottomTabNavigator();

export function MyTabsBottom() {
  return (
    <TabBottom.Navigator
      initialRouteName="Panier"
      tabBarOptions={{
        activeTintColor: 'powderblue',
      }}
    >
    
      <TabBottom.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ 
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <TabBottom.Screen
        name="Recherche"
        component={Mystack}
        options={{
          tabBarLabel: 'Recherche',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="search" color={color} size={size} />
          ),
        }}
      />
      <TabBottom.Screen
        name="Panier"
        component={ShopScreen}
        options={{
          tabBarLabel: 'Panier',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="shopping-bag" color={color} size={size} />
          ),
        }}
      />
      <TabBottom.Screen
        name="Favoris"
        component={FavorisScreen}
        options={{
          tabBarLabel: 'Favoris',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart-outline" color={color} size={size} />
          ),
        }}
      />
      <TabBottom.Screen
        name="Profile"
        component={LoginScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle-o" color={color} size={size} />
          ),
        }}
      />
    </TabBottom.Navigator>
  );
}