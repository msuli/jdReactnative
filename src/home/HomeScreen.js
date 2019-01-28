import React, {Component} from "react";
import {Button, Image, TextInput, View} from "react-native";
import {SafeAreaView} from "react-navigation";
import MyPage from "../common/slider";
import search from "../img/search.png";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }

  // static navigationOptions = {
  //   title: 'Home',  //页面标题
  //   headerTitle: <LogoTitle />, //自定义标题
  //   headerRight: (
  //     <Button
  //       onPress={() => alert('This is a button!')}
  //       title="Info"
  //       color="#fff"
  //     />
  //   ),
  //   //样式写这里只会影响当前页
  //   headerStyle: {
  //     backgroundColor: '#f4511e',
  //   },
  //   headerTintColor: '#fff',
  //   headerTitleStyle: {
  //     fontWeight: 'bold',
  //   },
  // }


  render() {
    let pic = {
      uri: search
    };
    return ( <
      SafeAreaView style={
      styles.container
    }>
      <MyPage/>
      <View style={
        styles.input
      }> { /*<Image source={{uri: require('../img/search.png')}}  style={{width: 20, height: 20}}/>*/ } <
        TextInput placeholder="请输入搜索"
                  onFocus={
                    () => this.props.navigation.navigate('SearchPage')
                  }
      />
      </View >
      <View style={
        styles.flexContainer}>
        <View style={styles.categoryContainer}>
          <View style={styles.cateItem}>
            <View style={
              styles.imageWrape}>
              <Image source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
              }}
                     style={styles.imageWidth}/>
            </View >
            <Button title="生鲜1" onPress={this._showMoreApp}/>
          </View >
          <View style={styles.cateItem}>
            <View style={styles.imageWrape}>
              <Image
                source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}
                style={styles.imageWidth}
              />
            </View >
            <Button title="生鲜2" onPress={this._showMoreApp}/>
          </View >
          <View style={styles.cateItem}>
            <View style={styles.imageWrape}>
              <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}
                     style={styles.imageWidth}/>
            </View >
            <Button title="生鲜3" onPress={this._showMoreApp}/>
          </View > <View style={styles.cateItem}>
          <View style={styles.imageWrape}>
            <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}
                   style={styles.imageWidth}/>
          </View >
          <Button title="生鲜4"
                  onPress={this._showMoreApp}/>
        </View >
          <View style={styles.cateItem}>
            <View style={styles.imageWrape}>
              <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}
                     style={styles.imageWidth}/>
            </View >
            <Button title="生鲜5" onPress={this._showMoreApp}/>
          </View >
        </View>
        <View style={styles.categoryContainer}>
          <View style={styles.cateItem}>
            <View style={
              styles.imageWrape}>
              <Image source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
              }}
                     style={styles.imageWidth}/>
            </View >
            <Button title="生鲜1" onPress={this._showMoreApp}/>
          </View >
          <View style={styles.cateItem}>
            <View style={styles.imageWrape}>
              <Image
                source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}
                style={styles.imageWidth}
              />
            </View >
            <Button title="生鲜2" onPress={this._showMoreApp}/>
          </View >
          <View style={styles.cateItem}>
            <View style={styles.imageWrape}>
              <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}
                     style={styles.imageWidth}/>
            </View >
            <Button title="生鲜3" onPress={this._showMoreApp}/>
          </View > <View style={styles.cateItem}>
          <View style={styles.imageWrape}>
            <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}
                   style={styles.imageWidth}/>
          </View >
          <Button title="生鲜4"
                  onPress={this._showMoreApp}/>
        </View >
          <View style={styles.cateItem}>
            <View style={styles.imageWrape}>
              <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}
                     style={styles.imageWidth}/>
            </View >
            <Button title="生鲜5" onPress={this._showMoreApp}/>
          </View >
        </View>
      </View>
        <Button title="展示更多页面"
                onPress={this._showMoreApp}/>
        <Button title="退出登录" onPress={this._signOutAsync}/>

    </SafeAreaView >
  );}

  _showMoreApp = () => {
    this.props.navigation.navigate('GoodsList');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
  }

  const styles = StyleSheet.create({
    container: {
    flex: 1,
  },
    input: {
    borderColor: '#ddd',
    borderWidth: 1,
    height: 40,
    borderRadius: 30,
    width: '80%',
    position: 'absolute',
    top: 45,
    left: '10%',
    backgroundColor: '#fff',
    padding: 10,
  },
    flexContainer: {
    borderColor: 'purple',
    borderWidth: 5,
    margin: 10,
    justifyContent: 'space-around',
    height: 220
  },
    categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
    height: 80
  },
    cateItem: {
    backgroundColor: 'red',
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'space-around'
  },
    imageWrape: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
    imageWidth: {
    width: 50,
    height: 50,
  }
  });