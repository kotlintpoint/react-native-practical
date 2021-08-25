import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native'

const screenWidth = Dimensions.get("window").width;
const numColumns = 2;
const tileSize = screenWidth / 1.5 ;


const MealItem =  ({ title,imageUrl, duration, complexity, affordability }) => (
    <View style={styles.mealItem}>
        <ImageBackground
              source={{ uri: imageUrl}}
              style={styles.bgImage}
            >
               <View style={styles.titleContainer}>
                    <Text style={styles.title} numberOfLines={1}>{title}</Text>
                 
              </View>
              <View style={styles.mealRow}>
                        <Text style={styles.mealDetail}>{duration}m</Text>
                        <Text style={styles.mealDetail}>{complexity.toUpperCase()}</Text>
                        <Text style={styles.mealDetail}>{affordability.toUpperCase()}</Text>
                    </View>
      </ImageBackground>
  
    </View>
  );

  
const styles = StyleSheet.create({
  mealDetail:{
    color:'white'
  },
  mealRow: {
    flexDirection: 'row',    
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:'black',
    padding:8
  },
  mealItem: {
    height: tileSize,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
    paddingHorizontal:10,
    justifyContent:'flex-start',
    alignItems:'flex-start',
    flexDirection: 'column',
  },
  bgImage: {
    width: '100%',
    height: '88%',
    justifyContent: 'space-between',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12
  },
  title: {
    
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  }
   
  });

export default MealItem
