import React from 'react'
import { StyleSheet, View, Text, Image,TouchableOpacity } from 'react-native'

import {Card} from 'react-native-paper'

class ProductsItem extends React.Component {
  render() {
    const {produit,display,client} = this.props
    const url = client.image.helpers.imageForSize(produit.variants[0].image, {maxWidth: 200, maxHeight: 200});
    return (
      <Card style={styles.card}>
      <TouchableOpacity onPress={()=>{}}>
      <View style={styles.main_container}>
        <Image
  style={styles.image}
  source={{uri:url }}
        />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            
            <Text style={styles.title_text}>{produit.title}</Text>
            <View style={{flex:0,backgroundColor:"transparent",width:1}}>
            <Text style={styles.vote_text}></Text>
            </View>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.vote_text} >{produit.variants[0].price}€</Text>

          </View>
          

        </View>
        
      </View>
      </TouchableOpacity>

      </Card>
    )
  }
}

const styles = StyleSheet.create({
  card:{margin:8,},

  main_container: {
    height:120,
    flexDirection: 'row',
    backgroundColor: 'transparent'
  },
  image: {
    width: 120,
    height: 110,
    margin: 5,
    backgroundColor: 'transparent'
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 4,
    flexDirection: 'row',
    backgroundColor: 'transparent'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 10,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5,
    
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#666666'
    
  },
  description_container: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
})

export default ProductsItem