/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createStackNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator} from 'react-navigation'

import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Image
} from 'react-native';

import HomeScreen from './src/home/HomeScreen';
import SignInScreen from './src/SignInScreen';
import OtherScreen from './src/OtherScreen';
import GoodsList from './src/GoodsList';
import CategoryScreen from './src/category/CategoryScreen';
import FindScreen from './src/find/FindScreen';
import UcenterScreen from './src/Ucenter/Ucenter';
import SearchPage from './src/search/search';
class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
const SearchStack = createStackNavigator({
   Home: HomeScreen,
   SearchPage: SearchPage
},{
  mode: 'SearchStack',
  headerMode: 'none',
});

const GoodsListStack = createStackNavigator({
  GoodsList: GoodsList,
  OtherScreen: OtherScreen
});
const TabNavigator = createBottomTabNavigator({
  //首页: HomeScreen,
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: '首页',
        tabBarIcon: ({tintColor}) => (
          <Image source={require('./src/img/home.png')} style={{width: 20, height: 20}} />
        ),
        tabBarOptions: {
          activeTintColor: 'red'
        }
      }
    },
  //分类: CategoryScreen,
    CategoryScreen: {
      screen: CategoryScreen,
      navigationOptions: {
        tabBarLabel: '分类',
        tabBarIcon: ({tintColor}) => (
          <Image source={require('./src/img/category.png')} style={{width: 20, height: 20}} />
        ),
        tabBarOptions: {
          activeTintColor: 'red'
        }
      }
    },
 // 发现: FindScreen,
    FindScreen: {
      screen: FindScreen,
      navigationOptions: {
        tabBarLabel: '发现',
        tabBarIcon: ({tintColor}) => (
          <Image source={require('./src/img/find.png')} style={{width: 20, height: 20}} />
        ),
        tabBarOptions: {
          activeTintColor: 'red'
        }
      }
    },
  //我的: UcenterScreen,
  My: {
    screen: UcenterScreen,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({tintColor}) => (
        <Image source={require('./src/img/mine.png')} style={{width: 20, height: 20}} />
      ),
      tabBarOptions: {
        activeTintColor: 'red'
      }
    }
  }
}
);

const AuthStack = createStackNavigator({ SignIn: SignInScreen });



export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: TabNavigator,
    Auth: AuthStack,
    GoodsList: GoodsListStack,
    Search: SearchStack
  },
  {
    initialRouteName: 'AuthLoading',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: 'red',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
