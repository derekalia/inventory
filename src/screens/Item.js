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
    img: 'pic.png',
    box: [],
  };

  pushItem() {
    firebase.database().ref('items/').push({
      name: this.state.name,
      color: this.state.color,
      category: this.state.category,
      img: this.state.img
    });
  }

  getBox(number) {
    var number = 0; // hard-coded to 0
    var data;
    firebase.database().ref('/boxes/').once('value').then((snapshot) => {
      console.log("Boxes are ", snapshot.val());
      data = snapshot.val();
      let array = [];
      for(var keys in data) {
        console.log(keys)
        array.push(data[keys]);
      }
      return array
    }).then((array) => {
      console.log("line 41", array)
      this.setState({
        box: array
      })
    })
  }

  render() {
    console.log(this.state.box)  
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

        <Button title={'Retrieve'} onPress= {() => this.getBox()} />
        <Button title={'Submit'} onPress={() => this.pushItem()} />
        {this.state.box.length ? this.state.box.map((box) => {return <Text>Name: {box.name}, Location: {box.location}</Text> }) : null}
      </View>
    );
  }
}

export default Item;
