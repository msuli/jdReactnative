/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from "react";
import {FlatList, Image, Platform, StyleSheet, Text, View, TouchableHighlight, Alert,Button, Animated} from "react-native";
import {SafeAreaView} from 'react-navigation'

export default class GoodsList extends Component<Props> {
  //设置标题栏显示的标题
  static navigationOptions = ({ navigation }) => {
    return {
      title: '商品列表',
      headerLeft: (
      <TouchableHighlight onPress={() => navigation.navigate('App')} underlayColor="white">
        <View style={styles.backButton}>
          <Image source={require('./img/leftArrow.png')} style={{width: 20, height: 20}}/>
          <Text style={styles.backButtonText}>Back</Text>
        </View>
      </TouchableHighlight>
      ),
    }

  }
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      lineFillAnimation: new Animated.Value(0),
    }
    this.fetchData = this.fetchData.bind(this);
    this._onPressButton=this._onPressButton.bind(this);
  }

  fetchData() {
    fetch('http://localhost:3006/specialPrice/specialPrice?catId=13&pageSize=20&pageIndex=1')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          movies: responseData.data,
        });
      })
  }

  componentDidMount() {
    this.fetchData();
  }


  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          正在加载电影数据……
        </Text>
      </View>
    );
  }

  _onPressButton(){
    //Alert.alert('eeeee');
    return this.props.navigation.navigate('OtherScreen');
  }

  renderMovie(item) {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.list}>
        <View>
          <Image source={{uri: item.itemUrl}} style={{ width: 120, height: 120}} />
        </View>
        {/*<Image source={pic} style={{width: 120, height: 120}}/>*/}
        {/*<Image source={{uri: movie.itemUrl}} style={{ width: 53, height: 81}} />*/}
        <View style={styles.goodsName}>
          <View>
            <Text
              style={styles.title}
              ellipsizeMode="tail"
              numberOfLines={1}
            >{item.itemName}
            </Text>
            <Text style={styles.quickBuy}>火热抢购中</Text>
          </View>
          <View style={styles.buttonWrap}>
            <View>
              <Text style={styles.price}>¥{item.price}</Text>
              <Text style={styles.samplePrice}>¥{item.samplePrice}</Text>
            </View>
            <View style={styles.buttonParent}>
              <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
                <View style={styles.button}>
                  <Text style={styles.buttonText}>立即抢购</Text>
                </View>
              </TouchableHighlight>
              <View>
                <Text style={styles.persent}>已售56%
                </Text>
                {/*<View style={{}}>*/}
                {/*<Svg height="16" width="225">*/}
                {/*<G fill="none" stroke="#3d5875">*/}
                {/*<Path strokeLinecap="round" strokeWidth="8" d="M5 8 l215 0" />*/}
                {/*</G>*/}
                {/*<G fill="none" stroke="#00e0ff">*/}
                {/*<AnimatedPath strokeLinecap="round" strokeWidth="8" d={this.lineAnimation}/>*/}
                {/*</G>*/}
                {/*</Svg>*/}
                {/*</View>*/}
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }

  render() {
    if (!this.state.movies) {
      return this.renderLoadingView();
    }
    return (
      <SafeAreaView>
      <FlatList data={this.state.movies} renderItem={({item}) => this.renderMovie(item)} style={styles.container}
                      keyExtractor={(item, index) => item.itemId}/>
      </SafeAreaView>)
  }
}

const styles = StyleSheet.create({
  container: {
    //paddingTop: 50,
    paddingRight: 10,
    paddingLeft: 10,
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 10,
    paddingTop: 10,
    borderBottomWidth: 0.5,
    borderStyle: 'solid',
    borderBottomColor: '#ddd'
  },
  title: {
    fontSize: 15,
    marginBottom: 10,
    textAlign: 'left',
    overflow: 'hidden',

  },
  price: {
    textAlign: 'left',
    fontSize: 20,
    color: 'red',
  },
  samplePrice: {
    fontSize: 15,
    color: '#999',
    textDecorationStyle:'solid',
    textDecorationColor: '#999',
    textDecorationLine: 'line-through'
  },
  goodsName: {
    flex: 1,
    paddingLeft: 20,
    flexWrap: 'nowrap',
    justifyContent: 'space-between'
  },
  quickBuy: {
    fontSize: 12,
    color: 'red',
  },
  backButton:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    fontSize: 15,
    width: 100,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 4
  },

  backButtonText: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 10,
    color: '#00a7ff',
  },
  buttonWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonParent: {

  },
  button: {
    fontSize: 15,
    width: 100,
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 4
  },
  buttonText: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 10,
    paddingRight: 10,
    color: 'white'
  },
  persent: {
    fontSize: 10,
    color: '#999'
  },
});
