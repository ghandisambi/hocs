import React, { Component } from 'react';
import { StyleSheet, View, Text, Image,TouchableOpacity,Dimensions,ScrollView,SafeAreaView } from 'react-native'
import Login from '../../../design/screen/Login'
class App extends Component {
  constructor(props){
    super(props);
  }
  handleEvent(){
    
  }
  render() {
    return (
     <SafeAreaView style={{flex:1}}>
       <Login/>
      </SafeAreaView>
    );
  }
}

export default App;