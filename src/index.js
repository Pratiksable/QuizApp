import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'

const QuizApp = () => {
    const navigation = useNavigation();
  return (
    <View style = {styles.container}>
      <View style = {styles.categoryContainer}>
        <TouchableOpacity
        style = {styles.category}
        onPress={()=>navigation.navigate('Playground',{category:'world-affairs'})}
        >
                 <Text style = {styles.categoryTitle}>World-Affair</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style = {styles.category}
        onPress={()=>navigation.navigate('Playground',{category:'science'})}
        >
                 <Text style = {styles.categoryTitle}>Science & Technology</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style = {styles.category}
        onPress={()=>navigation.navigate('Playground',{category:'technology'})}
        >
                 <Text style = {styles.categoryTitle}>Computer Science</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style = {styles.category}
        onPress={()=>navigation.navigate('Playground',{category:'sports'})}
        >
                 <Text style = {styles.categoryTitle}>Sports</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style = {styles.category}
        onPress={()=>navigation.navigate('Playground',{category:'Literature'})}
        >
                 <Text style = {styles.categoryTitle}>Arts and Literature</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style = {styles.category}
        onPress={()=>navigation.navigate('Playground',{category:'movies'})}
        >
                 <Text style = {styles.categoryTitle}>Movies</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default QuizApp

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#8B4513',
    },
    categoryContainer: {
      flexDirection: 'row',
      flexWrap:'wrap',
      justifyContent: 'center',
      alignItems:'center',
      marginTop:50,
    },
    category: {
      width:170,
      height:170,
      margin:10,
      borderRadius:20,
      backgroundColor:'#FFF5E1',
      shadowColor: '#000000',
      shadowOpacity:1,
      shadowRadius:5,
      elevation:10,
      justifyContent:'center',
      alignItems:'center',
    },
    categoryTitle:{
        fontSize :18, 
        fontWeight:"bold", 
        color:'#FFA500',
        alignItems:'center',
    }
  });