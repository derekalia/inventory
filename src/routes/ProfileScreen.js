import React from 'react';
import {View, Text,Button} from 'react-native'

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Does this work?!',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Profile', { name: 'Jane' })
        }
      />
    );
  }
}

export default ProfileScreen