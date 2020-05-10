import React, { Component } from 'react';
import { StyleSheet, View, Text, Image,TouchableOpacity,Dimensions,Button } from 'react-native'
import {FontAwesome,AntDesign} from 'react-native-vector-icons'
import SearchBar from './Developpement/SearchBar'
import {MyTabs} from '../../TopTabNavigation/TopTabNavigation'

const taille = Dimensions.get('window').width/2

class App extends Component {
  constructor(props){
    super(props);
    this.searchBarTouch=false
  }
 
  _SearchBarTouch(val){
   this.searchBarTouch=val
   console.log(this.searchBarTouch)

  }

  render() {
    return (
      <View className="Recherche" style={{flex:1,}}>
        <SearchBar diplay={(val)=>this._SearchBarTouch(val)}/>
        <MyTabs/>


        <View  style={{flex:0,flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',}} >
     <TouchableOpacity style={{ width:Dimensions.get('window').width, backgroundColor:"transparent",position:"absolute",}} >
                    
                    <View style={{backgroundColor:"rgba(0,0,0,0.6)", justifyContent:"center", }}>
                        <View style={{flexDirection:"row", alignItems:"center",justifyContent:"center", }}>
                            <FontAwesome name="arrow-circle-up" size={taille/(2*3)} color="white" />
                           
                        </View>
                    </View>
                </TouchableOpacity>
    </View>
      </View>
    );
  }
}

export default App;