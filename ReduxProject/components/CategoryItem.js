import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'

const screenWidth = Dimensions.get("window").width;
const numColumns = 2;
const tileSize = screenWidth / numColumns - 20;


const CategoryItem =  ({ title, color, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={{...styles.item,backgroundColor:color}}>
      <Text style={styles.title}>{title}</Text>
    </View>
    </TouchableOpacity>
  );

  
const styles = StyleSheet.create({
   
    item: {
      padding: 20,
      margin:8,
      height:tileSize,
      width:tileSize,          
      flex: 1, 
      alignItems: 'center',
      justifyContent: 'center', 
    },
   title:{
    
    
   }
  });

export default CategoryItem
