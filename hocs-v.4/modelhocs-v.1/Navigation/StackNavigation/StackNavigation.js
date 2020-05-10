import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../ecrans/recherche/EcranRecherche'
import PopScreen from './PopScreen'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createStackNavigator();
export const Mystack = () =>{
  return( 
   <Stack.Navigator initialRouteName="Recherche" >
        <Stack.Screen name="Recherche" component={SearchScreen} options={{headerShown: false}} />
        <Stack.Screen name="Pop" component={PopScreen} options={{headerShown: false}} />

        <Stack.Screen name="ItemsScreen" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{headerShown: false}} />
      </Stack.Navigator>)
}
function App() {
  return (
    <NavigationContainer>
     <Mystack/>
    </NavigationContainer>
  );
}

export default App;
