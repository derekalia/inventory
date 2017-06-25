import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Button
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { users } from '../data';

class Feed extends Component {
  onLearnMore = (user) => {
    this.props.navigation.navigate('Details', { ...user });
  };

  render() {
    return (
        <View>
            <Button
            title='Add Item'
            onPress={()=> this.props.navigation.navigate('Item')}
            />
            <Button
            title='Add Box'
            onPress={()=> this.props.navigation.navigate('Box')}
            />
        
      <ScrollView>
        <List>
          {users.map((user) => (
            <ListItem
              key={user.login.username}
              roundAvatar
              avatar={{ uri: user.picture.thumbnail }}
              title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}
              subtitle={user.email}
              onPress={() => this.onLearnMore(user)}
            />
          ))}
        </List>
      </ScrollView>
    </View>
    );
  }
}

export default Feed;