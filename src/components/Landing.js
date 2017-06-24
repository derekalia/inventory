import React, { Component } from 'react';
import { Text, View, Button, TextInput, AsyncStorage } from 'react-native';

import firebase, { auth } from '../firebase';
// import { auth, database, googleAuthProvider } from '../firebase';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  async signup() {
    const email = this.state.email;
    const pass = this.state.password;
    try {
      await auth
            .createUserWithEmailAndPassword(email, pass);
      await AsyncStorage.setItem('@Auth:token', 'signedIn');

      console.log(auth);
      console.log('Account created');

        // Navigate to the Home page, the user is auto logged in
    } catch (error) {
      console.log(error.toString());
    }
  }


  async login() {
    const email = this.state.email;
    const pass = this.state.password;
    try {
      await auth
            .signInWithEmailAndPassword(email, pass);
      const value = await AsyncStorage.getItem('@Auth:token');
      console.log(value);
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

        // Navigate to login view
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <View>
        <TextInput
          style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
          placeholder="email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
          placeholder="password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />

        <Button title="signup" onPress={this.signup.bind(this)} />
        <Button title="login" onPress={this.login.bind(this)} />
        <Button title="logout" onPress={this.logout.bind(this)} />
      </View>


    );
  }
}

export default Landing;
