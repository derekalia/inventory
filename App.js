import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import Landing from './src/components/Landing';
import { Tabs } from './src/routes';
import firebase, { auth } from './src/firebase';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  state = {
    loggedIn: false,
  }

  async signup(email, pass) {
    try {
      await auth
            .createUserWithEmailAndPassword(email, pass);
      await AsyncStorage.setItem('@Auth:token', 'signedIn');
      this.renderApp();

      console.log(auth);
      console.log('Account created');

        // Navigate to the Home page, the user is auto logged in
    } catch (error) {
      console.log(error.toString());
    }
  }


  async login(email, pass) {
    try {
      await auth
            .signInWithEmailAndPassword(email, pass);
      const value = await AsyncStorage.getItem('@Auth:token');
      console.log(value);
      this.renderApp();
        // Navigate to the Home page
    } catch (error) {
      console.log(error.toString());
    }
  }


  async logout() {
    try {
      await auth.signOut();
      await AsyncStorage.setItem('@Auth:token', '');
      const value = await AsyncStorage.getItem('@Auth:token');
      console.log(value);
      this.renderApp();

        // Navigate to login view
    } catch (error) {
      console.log(error);
    }
  }

  async renderApp() {
    try {
      const loggedIn = await AsyncStorage.getItem('@Auth:token');
      console.log(loggedIn);
      this.setState({ loggedIn: !!loggedIn });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return this.state.loggedIn ? <Tabs /> : <View><Landing signup={this.signup} login={this.login} /></View>;
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
