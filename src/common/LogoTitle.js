import React from 'react';
import {Image} from 'react-native';
export default class LogoTitle extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image
        source={pic}
        style={{ width: 80, height: 30 }}
      />
    );
  }
}