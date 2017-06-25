import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import firebase from '../firebase';

var database = firebase.database();

class Box extends React.Component {
  state = {
    items: ['empty'],
    location: '',
    img: 'box.png',
    name: ''
  };

  pushBox() {
    firebase.database().ref('boxes/').push({
      items: this.state.items,
      location: this.state.location,
      img: this.state.img,
      name: this.state.name
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
        <Text>Location</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={location => this.setState({ location })}
          value={this.state.location}
        />
        <Text>Image</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={img => this.setState({ img })}
          value={this.state.img}
        />
        <Button title={'Submit'} onPress={() => this.pushBox()} />
      </View>
    );
  }
}

export default Box;
