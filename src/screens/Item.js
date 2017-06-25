import React, { Component } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import firebase from '../firebase';

var database = firebase.database();

class Item extends Component {
  onLearnMore = user => {
    this.props.navigation.navigate('Details', { ...user });
  };

  state = {
    name: '',
    color: '',
    category: '',
    img: 'pic.png'
  };

  pushItem() {
    firebase.database().ref('items/').push({
      name: this.state.name,
      color: this.state.color,
      category: this.state.category,
      img: this.state.img
    });
  }

  render() {
    return (
      <View>
        <Text>Name</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={name => this.setState({ name })}
          value={this.state.name}
        />
        <Text>Color</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={color => this.setState({ color })}
          value={this.state.color}
        />
        <Text>Category</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={category => this.setState({ category })}
          value={this.state.category}
        />

        <Button title={'Submit'} onPress={() => this.pushItem()} />
      </View>
    );
  }
}

export default Item;
