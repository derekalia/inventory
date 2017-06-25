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
    this.handleLogin.bind(this);
    this.handleSignup.bind(this);
  }

  handleLogin() {
    // const email = this.state.email;
    // const password = this.state.password;
    const { email, password } = this.state;
    console.log(email);
    this.props.login(email, password);
    this.setState({
      email: '',
      password: '',
    });
  }

  handleSignup() {
    const email = this.state.email;
    const password = this.state.password;
    console.log(email);
    this.props.signup(email, password);
    // this.setState({
    //   email: '',
    //   password: '',
    // });
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

        <Button title="signup" onPress={() => this.handleSignup()} />
        <Button title="login" onPress={() => this.handleLogin()} />
      </View>


    );
  }
}

export default Landing;
