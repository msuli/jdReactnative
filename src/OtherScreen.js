import React, {Component} from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import {SafeAreaView} from 'react-navigation'

export default class OtherScreen extends React.Component{
  render(){
    return (
      <SafeAreaView>
        <Text>OtherScreen</Text>
      </SafeAreaView>
    )
  }
}