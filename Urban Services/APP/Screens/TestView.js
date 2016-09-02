'use strict'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  BackAndroid,
  AsyncStorage,
  Dimensions
} from 'react-native';



class TestView extends Component {
render(){
  return(
    <View>
      <Text>Test Login View - X Platform</Text>
    </View>

  );
}
}

const styles = StyleSheet.create({
  container: {
   backgroundColor : 'black',
   flex : 1
  },
  contentText :{
    color : 'white'
  }
});

export default TestView
