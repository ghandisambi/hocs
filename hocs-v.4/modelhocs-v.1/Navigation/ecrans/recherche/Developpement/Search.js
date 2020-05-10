import React from 'react'
import { StyleSheet, View, TextInput, Button, Text,FlatList,ListView,ActivityIndicator,TouchableOpacity,Dimensions,SafeAreaView,StatusBar
 } from 'react-native'
import Constants from 'expo-constants';
import { FontAwesome } from "@expo/vector-icons";
import Item from './Item'
class Searched extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      temp: [],
      error: null,
      search: null,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    this.setState({ loading: true });

    try {
      const response = await fetch(url);
      const json = await response.json();
      this.setResult(json);
    } catch (e) {
      this.setState({ error: 'Error Loading content', loading: false });
    }
  };

  setResult = res => {
    this.setState({
      data: [...this.state.data, ...res],
      temp: [...this.state.temp, ...res],
      error: res.error || null,
      loading: false,
    });
  };

  renderHeader = () => {
    return (
      <View >
       <View style={{flexDirection:"row",}}>
            <View style={{backgroundColor:"white", borderRadius:1, flex:1, padding:12, }}>
                <View style={{height:40, backgroundColor:"#DCE0DE", borderRadius:100, flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingHorizontal:10, }}>
                    <TextInput style={styles.textinput}       placeholder='Rechercher'
        lightTheme
        round
        editable={true}
        value={this.state.search}
        onChangeText={this.updateSearch} />
                    <FontAwesome name="search" size={24} />
                </View>
            </View>
            
        </View>
        <View   style={{backgroundColor:"#FFFFFF", height:50, }}>
        <View style={{height:0.5, backgroundColor:"#DDDDDD", }}></View>
       
        <View 
        on
        onTouchMove={(event)=>{console.log('homme et femme'+'(x='+
        event.nativeEvent.locationX+')(y='+
        event.nativeEvent.locationY+')')}} 
        style={{flex:1, height:49, flexDirection:"row",paddingBottom:5 }}>

            <TouchableOpacity onPress={()=>{this.getData()}}  style={{flex:1, justifyContent:"center", alignItems:"center", }}>
                <Text style={{color:"#7CC2C6", fontFamily:"themify", fontSize:24, }}>homme</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{console.log('femme')}} style={{flex:1, justifyContent:"center", alignItems:"center", }}>
                <Text style={{color:"#949CA9", fontFamily:"themify", fontSize:24, marginTop:2, }}>Femme</Text>
            </TouchableOpacity>
            
            
        </View>
    </View>
        </View>
    );
  };
 

  updateSearch = search => {
    this.setState({ search }, () => {
      if ('' == search) {
        this.setState({
          data: [...this.state.temp],
        });
        return;
      }
     
      this.state.data = this.state.temp
        .filter(function(item) {
          return item.name.includes(search);
        })
        .map(function({ id, name, email }) {
          return { id, name, email };
        });

      
       
        
    });
  };
  render() {
    console.log(this.state.data)
    return <View style={{flex:6}} >
      
      {(this.state.error!=null)?(
        
        <ActivityIndicator />
      
      ):<SafeAreaView style={styles.flatlist} >{this.renderHeader()}<FlatList style={styles.flatlist}
      
  data={this.state.data}
  keyExtractor={item => item.id}
  renderItem={({item}) => <Item donnes={item}/>}
/></SafeAreaView>} 
      
      </View>;
  }
}



const styles = StyleSheet.create({
  
  textinput: {
    flex:1,
    height: 40,
    backgroundColor:'transparent',
    borderColor: 'black',
    borderWidth: 1,
  },
  flatlist:{
    backgroundColor:"transparent"
  }
})

export default Searched