

import React from 'react'
import { StyleSheet, View, Text, Image,TouchableOpacity,Dimensions } from 'react-native'
import {Card} from 'react-native-paper'
import {FontAwesome,AntDesign} from 'react-native-vector-icons'
const taille = Dimensions.get('window').width/2
class Item extends React.Component {
  
  render() {
    const donnes = this.props.donnes
    return (
      <TouchableOpacity >
      <View style={{backgroundColor:"rgba(220,220,220,0.8)",height: 130,marginTop:20,borderRadius:5,}}>
        <View style={styles.main_container} >
        
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            
            
          </View>
          <View style={styles.description_container}>
          <Text style={styles.title_text}>{donnes.title}</Text>
            <Text style={styles.description_text} numberOfLines={6}>{donnes.description}</Text>
            {/* La propriété numberOfLines permet de couper un texte si celui-ci est trop long, il suffit de définir un nombre maximum de ligne */}
          </View>
          
        </View>
        
        <Image
          style={styles.image}
          source={{uri:"http://lepassetempsderose.l.e.pic.centerblog.net/o/74fbe602.png"}}
        />
      
      </View>
      </View>
      </TouchableOpacity>
      
     
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 130,
    padding:5,
    flexDirection: 'row',
    justifyContent:"space-between",
    alignItems:"center",
    borderRadius:5,
    opacity:5

  },
  image: {
    width: 90,
    height: 120,
    margin: 5,
    backgroundColor: 'transparent',
    borderRadius:5,
  },
  content_container: {
    flex: 1,
    margin: 5,
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 15,
    flexWrap: 'wrap',
  },
  
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  
  
})

export default Item
