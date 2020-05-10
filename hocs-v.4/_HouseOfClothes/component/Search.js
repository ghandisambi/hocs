// Components/Search.js

import React, { useContext, useEffect }  from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, ActivityIndicator,ScrollView,Dimensions } from 'react-native'
import ProductsItem from './ProductsItem'
import { getProductsFromApiWithSearchedText,getImageFromApi } from '../API/ShopifyApi'
import {Card} from 'react-native-paper'
import {ParallaxBackground,HorizontalWrapper} from 'react-native-parallax-background'
import { ShopContext } from '../API/shop/shopContext'
import Client from "shopify-buy";

const client = Client.buildClient({
  storefrontAccessToken: "3393228624ead2811e2790bca4108bdc",
  domain: "ghs-achat-rapide.myshopify.com",
});
const boutique = Client.buildClient({
  storefrontAccessToken:"ad8daa76a475ebd1023e6d8dfc034abe",
  domain:"houseofclothesbymrk.myshopify.com"
});



const {height, width} = Dimensions.get('window')


class Search extends React.Component {
       
  
  constructor(props) {
    super(props)
    
    this.searchedText = ""
    this.state = {
      products: [],
      isLoading: false,
    }
    
    


  }
 

  _loadproducts() {
    if (this.searchedText.length > 0) {
     boutique.product.fetchAll().then((products) => {
       // Do something with the products
  this.setState({products:products, isLoading: true })
});

    }
    
  }


  _searchTextInputChanged(text) {
    this.searchedText = text

    this._searchproducts()
  }


  _searchproducts() {
    this.setState({isLoading:false})
    this.setState({
      products: [],
    }, () => { if(this.searchedText.length > 0){
        this._loadproducts()}else{
      this._init()
    }
    })
  }
  
  _init(){
   
    this.setState({
      products: [],isLoading:false
    })
  }
 _displayDetail=(id)=>{
    this.props.navigation.navigate('Details')
    
    
  }
  _displayLoading() {

    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }

  render() {
    

    return (
      <View style={styles.main_container}>
      <Card style={{}}>
        <TextInput
          style={styles.textinput}
          placeholder='Recherche'
          onChangeText={(text) => this._searchTextInputChanged(text)}
          onSubmitEditing={() => this._searchproducts()}
        />
        
        <View style={{flexDirection:"row"}}>
        </View>
        </Card>
        
        <ScrollView>
        <FlatList
          data={this.state.products}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <ProductsItem produit={item} display={this._displayDetail} />}
        />
       
          <View>
              
          </View>  
       
        </ScrollView>


        
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor:'#1b1e23'
    
    
  },
  textinput: {
    
    height: 35,
    borderWidth: 1,
    

  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
  
})

export default Search