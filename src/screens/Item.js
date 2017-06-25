import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

class Item extends Component {
  onLearnMore = (user) => {
    this.props.navigation.navigate('Details', { ...user });
  };

  render() {
    return (
      <Text>hi</Text>
    );
  }
}

export default Item;