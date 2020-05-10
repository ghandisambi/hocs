// Components/productsDetail.js

import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, Image } from 'react-native'
import {ParallaxBackground,HorizontalWrapper} from 'react-native-parallax-background'
import { getProductsDetailFromApi, getImageFromApi } from '../API/ShopifyApi'
import moment from 'moment'
import numeral from 'numeral'


class ProductsDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: undefined,
      isLoading: true
    }
  }

  componentDidMount() {
    getProductsDetailFromApi(this.props.route.params.id).then(data => {
      this.setState({
        products: data,
        isLoading: false
      })
    })
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

  _displayproducts() {
    const { products } = this.state
    if (products != undefined) {
      return (
         
          <ParallaxBackground
          uri={getImageFromApi(products.backdrop_path)}
          >
          <Text style={styles.title_text}>{products.title}</Text>
          

          <Text style={styles.description_text}>{products.overview}</Text>
          <Text style={styles.default_text}>Sorti le {moment(new Date(products.release_date)).format('DD/MM/YYYY')}</Text>
          <Text style={styles.default_text}>Note : {products.vote_average} / 10</Text>
          <Text style={styles.default_text}>Nombre de votes : {products.vote_count}</Text>
          <Text style={styles.default_text}>Budget : {numeral(products.budget).format('0,0[.]00 $')}</Text>
          <Text style={styles.default_text}>Genre(s) : {products.genres.map(function(genre){
              return genre.name;
            }).join(" / ")}
          </Text>
          <Text style={styles.default_text}>Companie(s) : {products.production_companies.map(function(company){
              return company.name;
            }).join(" / ")}
          </Text>
          
          <HorizontalWrapper>
        <ParallaxBackground
            maxHeight={300}
            uri={getImageFromApi(products.poster_path)}>
            <Text style={styles.title_text}>{products.title}</Text>
            </ParallaxBackground>
        <ParallaxBackground
            maxHeight={300}
            uri={getImageFromApi(products.backdrop_path)}>
            <Text style={styles.title_text}>{products.original_title}</Text>
            </ParallaxBackground>
        

        </HorizontalWrapper>
          </ParallaxBackground>
         
      )
    }
  }

  render() {
    return (
      <View style={styles.main_container}>
        {this._displayLoading()}
        {this._displayproducts()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  title_text: {
    fontWeight: 'bold',
    fontSize: 35,
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: '#000000',
    textAlign: 'center'
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
    margin: 5,
    marginBottom: 15
  },
  default_text: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  }
})

export default ProductsDetail