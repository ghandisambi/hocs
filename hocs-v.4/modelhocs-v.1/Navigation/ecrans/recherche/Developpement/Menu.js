import * as React from 'react';
import { Text, View, StyleSheet,StatusBar,ScrollView,SafeAreaView,TouchableOpacity,Image,Dimensions,FlatList } from 'react-native';
import Constants from 'expo-constants';
// You can import from local files
// or any pure javascript modules available in npm
import {FontAwesome,AntDesign} from 'react-native-vector-icons'
import ItemMenu from './Item'
import datamenu from './dataMenu'

const taille = Dimensions.get('window').width/2

export default function App() {
  
  return (
<ScrollView style={{flex:1,backgroundColor:"transparent",padding:8}}>




<FlatList 
  
  data={datamenu}
  keyExtractor={(item) => item.id}
  renderItem={({item}) => <ItemMenu donnes={item}/>}
/>

</ScrollView>
  );
}

function vu(){
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'transparent',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
  return <View style={{flexDirection:"row", paddingHorizontal:12, marginBottom:12, }}>
            <View style={{backgroundColor:"#BEA6E3", borderRadius:6, flex:1, paddingTop:12, overflow:"hidden", }}>
                <View style={{flexDirection:"row", justifyContent:"space-between", paddingHorizontal:"3%", }}>
                    <Text style={{color:"#FFFFFF", fontFamily:"Raleway", fontWeight:"normal", fontSize:20, marginLeft:"3%", }}>texte</Text>
                    <TouchableOpacity style={{height:24, width:60, borderRadius:4, borderWidth:0.5, borderColor:"#FFFFFF", justifyContent:"center", alignItems:"center", }}>
                        <Text style={{color:"#FFFFFF", fontFamily:"Lato", fontSize:12, }}>texte</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:10, paddingHorizontal:"3%", }}>
                    <TouchableOpacity style={{}}>
                        <Image source={[{"uri":"https://cnet4.cbsistatic.com/img/dsx7DGvcYPzHXh9C96Q7a_2fzMU=/936x527/2017/02/22/9e08ae4c-d1ed-4b41-928f-f85e9ec7a10e/2017-19.jpg"}]} style={{width:"100%", aspectRatio:1.78, borderRadius:8, }}/>
                    </TouchableOpacity>
                    <View style={{flexDirection:"row", marginTop:10, marginBottom:10, }}>
                        <TouchableOpacity >
                            <Image source={[{"uri":"https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/1f/12/55/1f125573-b2f9-bf87-cb7d-c6cb0345bd60/mzl.uktqqgzi.png/246x0w.jpg"}]} style={{height:60, width:60, borderRadius:10, }}/>
                        </TouchableOpacity>
                        <View style={{flex:1, marginLeft:12, }}>
                            <View style={{flexDirection:"row", justifyContent:"space-between", }}>
                                <Text numberOfLines={1} style={{color:"#FFFFFF", fontFamily:"Lato", fontSize:16, marginBottom:6, }}>texte</Text>
                                <View style={{flexDirection:"row", }}>
                                    <Text style={{color:"#FFFFFF", fontFamily:"Genericons-Neue", fontSize:18, }}>texte</Text>
                                    <Text style={{color:"#FFFFFF", fontFamily:"Genericons-Neue", fontSize:18, }}>texte</Text>
                                    <Text style={{color:"#FFFFFF", fontFamily:"Genericons-Neue", fontSize:18, }}>texte</Text>
                                    <Text style={{color:"#FFFFFF", fontFamily:"Genericons-Neue", fontSize:18, }}>texte</Text>
                                    <Text style={{color:"#FFFFFF", fontFamily:"Genericons-Neue", fontSize:18, }}>texte</Text>
                                </View>
                            </View>
                            <Text numberOfLines={2} style={{color:"#FFFFFF", fontFamily:"Lato", fontSize:12, marginTop:2, }}>texte</Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:"row", justifyContent:"space-evenly", paddingHorizontal:"3%", backgroundColor:"#A06ED8", paddingTop:10, }}>
                    <TouchableOpacity style={{flex:1, flexDirection:"row", }}>
                        <Image source={[{"uri":"https://is5-ssl.mzstatic.com/image/thumb/Purple118/v4/99/a9/dd/99a9dd47-2160-a752-c3a1-fb76deb41568/AppIcon-1x_U007emarketing-85-220-0-6.png/246x0w.jpg"}]} style={{height:40, width:40, borderRadius:6, }}/>
                        <View style={{justifyContent:"space-between", flex:1, paddingRight:10, }}>
                            <Text numberOfLines={2} ellipsizeMode={"tail"} style={{color:"#FFFFFF", fontFamily:"Lato", fontSize:12, marginLeft:10, }}>texte</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1, flexDirection:"row", }}>
                        <Image source={[{"uri":"https://is5-ssl.mzstatic.com/image/thumb/Purple114/v4/53/75/7a/53757a7f-0bc4-18ea-47c5-4366df653a18/AppIcon-0-1x_U007emarketing-0-85-220-7.png/246x0w.jpg"}]} style={{height:40, width:40, borderRadius:6, }}/>
                        <View style={{justifyContent:"space-between", flex:1, }}>
                            <Text numberOfLines={2} ellipsizeMode={"tail"} style={{color:"#FFFFFF", fontFamily:"Lato", fontSize:12, marginLeft:10, paddingRight:10, }}>texte</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row", justifyContent:"space-evenly", paddingHorizontal:"3%", paddingTop:10, backgroundColor:"#A06ED8", paddingBottom:10, }}>
                    <TouchableOpacity style={{flex:1, flexDirection:"row", }}>
                        <Image source={[{"uri":"https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/32/15/c2/3215c2e0-345f-6f2a-60de-d76e165f3787/mzl.gvamrcjy.png/246x0w.jpg"}]} style={{height:40, width:40, borderRadius:6, }}/>
                        <View style={{justifyContent:"space-between", flex:1, paddingRight:10, }}>
                            <Text numberOfLines={2} ellipsizeMode={"tail"} style={{color:"#FFFFFF", fontFamily:"Lato", fontSize:12, marginLeft:10, }}>texte</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1, flexDirection:"row", }}>
                        <Image source={[{"uri":"https://is5-ssl.mzstatic.com/image/thumb/Purple124/v4/df/e4/dd/dfe4dddd-8d3d-2c1e-5be4-7759c30f2da1/AppIcon-1x_U007emarketing-85-220-6.png/246x0w.jpg"}]} style={{height:40, width:40, borderRadius:6, }}/>
                        <View style={{justifyContent:"space-between", flex:1, }}>
                            <Text numberOfLines={2} ellipsizeMode={"tail"} style={{color:"#FFFFFF", fontFamily:"Lato", fontSize:12, marginLeft:10, }}>texte</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
}

const styles = StyleSheet.create({

});