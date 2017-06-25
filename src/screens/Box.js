import React from 'react';
import { 
    View,
    Text, 
    Button, 
    TextInput, 
    Image, 
    TouchableOpacity,
    Platform,
    StyleSheet } from 'react-native';
import firebase from '../firebase';

import { ImagePicker,Constants, Location, Permissions } from 'expo';

var database = firebase.database();

class Box extends React.Component {
  state = {
    items: ['empty'],
    img: 'box.png',
    name: '',
    image: null,
    location: null,
    errorMessage: null
  };

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!'
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied'
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  pushBox() {
    firebase.database().ref('boxes/').push({
      items: this.state.items,
      location: this.state.location,
      img: this.state.img,
      name: this.state.name
    });
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  render() {
    let { image } = this.state;

    let text = 'Waiting..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    }

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

        <View>
          <Button title="Pick an image from camera roll" onPress={this._pickImage} />
          {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>

        <View>
          <Button title={'Submit'} onPress={() => this.pushBox()} />
        </View>


        <View>
        <Text >{text}</Text>
      </View>


      </View>
    );
  }
}

export default Box;
