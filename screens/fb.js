import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
export default class fb extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Facebook</Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    },
    text:{
      fontSize:40,
      color:'blue',
      fontStyle:'italic'
    }
})