import * as React from 'react';
import { Text, View, StyleSheet,StatusBar,ScrollView,SafeAreaView,TouchableOpacity,Image,Dimensions,TextInput } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome } from "@expo/vector-icons";



import Client from "shopify-buy";

const client = Client.buildClient({
  storefrontAccessToken: "3393228624ead2811e2790bca4108bdc",
  domain: "ghs-achat-rapide.myshopify.com",
});
const boutique = Client.buildClient({
  storefrontAccessToken:"ad8daa76a475ebd1023e6d8dfc034abe",
  domain:"houseofclothesbymrk.myshopify.com"
});
const taille = Dimensions.get('window').width/2

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    
    this.searchedText = ""
    this.state = {
      products: [],
      isLoading: false,
    }
    
    
  }

      _searchTextInputChanged(text) {
       this.searchedText=text 
      
    }


  _loadproducts() {
    if (this.searchedText.length > 0) {
     boutique.product.fetchAll().then((products) => {
       // Do something with the products
     this.setState({products:products, isLoading: true })
});

 }
    
 }


 render(){
   
   
   return (
     <View style={{flexDirection:"row",backgroundColor:"white"}}>  
            <View style={{ borderRadius:2, flex:1, padding:12,borderWidth:1,borderColor:"#DCE0DE"}}>
                <View style={{height:35, backgroundColor:"#DCE0DE", borderRadius:100, flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingHorizontal:10, }}>
                    <TextInput style={styles.textinput}       placeholder='Rechercher'
        lightTheme
        round
        editable={true}
        onChangeText={(text) => this._searchTextInputChanged(text)} 
        saisie = {this.searchedText}
        onFocus={this.display}
        
         />

                    <FontAwesome name="search" size={24} />
                </View>
            </View>
            
        </View>
    );}
}
const styles = StyleSheet.create({
  
  textinput: {
    flex:1,
    height: 35,
    backgroundColor:'transparent',
    borderColor: 'transparent',
    borderWidth: 1,
  },
})
export default SearchBar;