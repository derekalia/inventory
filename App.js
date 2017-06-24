import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './src/components/Landing';
import { StackNavigator } from 'react-navigation';
import { Tabs } from './src/routes';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Tabs />
        <Landing />
      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
