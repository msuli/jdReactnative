import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import {SafeAreaView} from 'react-navigation'

export default class FindScreen extends React.Component{
  render(){
    return (
      <SafeAreaView style={styles.container}>
        <Text>发现</Text>
      </SafeAreaView>
    )
  }
  _showMore = () => {
    //this.props.navigation.push('GoodsList')
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});