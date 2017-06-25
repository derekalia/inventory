import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  TextInput
} from 'react-native';
import firebase from '../firebase'

var database = firebase.database();

class Item extends Component {
  onLearnMore = (user) => {
    this.props.navigation.navigate('Details', { ...user });
  };

  state = {
      name: 'test',
      color: '',
      cat: ''
  }

writeUserData() {
  firebase.database().ref('test/').set({
    working: 'yes'
  });
}

  render() {
    return (
      <View>
          <Text>Name</Text>
           <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(name) => this.setState({name})}
        value={this.state.name}
      />
      <Text>Color</Text>
       <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(color) => this.setState({color})}
        value={this.state.color}
      />
      <Text>Category</Text>
       <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(cat) => this.setState({cat})}
        value={this.state.cat}
      />

      <Button
        title={'Submit'}   
        onPress={()=>this.writeUserData()}     
      />
          </View>
    );
  }
}

export default Item;