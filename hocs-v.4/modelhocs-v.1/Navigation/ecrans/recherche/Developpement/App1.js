import React, { Component } from 'react';
import { StyleSheet, View, Text, Image,TouchableOpacity,Dimensions,Button } from 'react-native'

class App extends Component {
  constructor(props){
    super(props);
  }
  handleEvent(){
    console.log(this.props);
  }
  render() {
    return (
      <View className="App">
        <button onClick={this.handleEvent}>Please Click</button>
      </View>
    );
  }
}

export default App;