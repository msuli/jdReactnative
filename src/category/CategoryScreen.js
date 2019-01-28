import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import {SafeAreaView} from 'react-navigation'

export default class CategoryScreen extends React.Component{
  render(){
    return (
      <SafeAreaView>
        <Text>CategoryScreen</Text>
      </SafeAreaView>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});