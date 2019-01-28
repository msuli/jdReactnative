import React, {Component} from 'react';
import {
  View,
  AsyncStorage,
  Button,
  StyleSheet,
  Text,
TextInput,
  Alert,
  TouchableOpacity
} from 'react-native';
import {SafeAreaView} from 'react-navigation'

export default class SignInScreen extends React.Component{
  static navigationOptions = {
    title: '请登录',
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  render() {
    return (
      <SafeAreaView style={{
        flex: 1, justifyContent: 'center',
        paddingLeft: 20, paddingRight: 20
      }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to settings"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
        <View>
          <View style={styles.username}>
            <Text style={{flex: 1, textAlign: 'right'}}>请输入用户名:</Text>
            <TextInput style={styles.input}
                       placeholder="请输入用户名"
                       onChangeText={(text) => this.setState({username: text})}
            />
          </View>
          <View style={styles.password}>
            <Text style={{flex: 1, textAlign: 'right'}}>请输入密码:</Text>
            <TextInput style={styles.input}
                       placeholder="请输入密码"
                       keyboardType="number-pad"
                       maxLength={6}
                       clearButtonMode="while-editing"
                       onChangeText={(text) => this.setState({password: text})}
            />
          </View>
          <TouchableOpacity onPress={this._signInAsync}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>登录</Text>
            </View>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    );
  }

  _signInAsync = async () => {
    if(this.state.username === 'Suli'){
      await AsyncStorage.setItem('userToken', this.state.username);
      this.props.navigation.navigate('App');
    }else{
      Alert.alert('用户名错误')
    }

  };
}

const styles = StyleSheet.create({
  item: {
    fontSize: 30,
    color: '#00a7ff',
  },
  input: {
    height: 40,
    width: 200,
    marginLeft: 20,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    flex: 2,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: '#00a7ff'
  },
  username: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  password: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center'
  },
  button: {
    marginTop: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  },
})