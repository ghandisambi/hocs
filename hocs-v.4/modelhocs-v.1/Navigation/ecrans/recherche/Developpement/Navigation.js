

import React from 'react'
import { StyleSheet, View, Text, Image,TouchableOpacity,Dimensions } from 'react-native'
import {Card} from 'react-native-paper'
import {FontAwesome,AntDesign} from 'react-native-vector-icons'
const taille = Dimensions.get('window').width/2
class Navigations extends React.Component{
  
  render() {
    const donnes = this.props.donnes
    return (
      <View>
      <Text>Tab Navigator</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  
  
  
})

export default Navigations
