import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput
} from 'react-native';
import {SafeAreaView} from 'react-navigation'

export default class UcenterScreen extends React.Component{
  render(){
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          {/*<Image source={{uri: require('../img/search.png')}}  style={{width: 20, height: 20}}/>*/}
          <TextInput
            style={styles.input}
            placeholder="请输入搜索"
            onFocus={() => this.props.navigation.navigate('SearchPage')}
          />
          <Button style={styles.button} title="取消" onPress={() => {
            this.props.navigation.navigate('Home');
          }} />
        </View>
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
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    top: 45,
    left: 10,
    width: '100%'
  },
  input: {

    borderColor: '#ddd',
    borderWidth: 1,
    height: 40,
    borderRadius: 30,
    width: '80%',

    backgroundColor: '#fff',
    padding: 10,
  },
  button: {
    position: 'absolute',
    right: '-10',
    top: 0

  }
});