import React from 'react';
import {TabNavigator,StackNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements'

import Feed from '../screens/Feed';
import UserDetail from '../screens/UserDetail';
import Item from '../screens/Item'
import Box from '../screens/Box'

import Home from '../screens/Home'
import Search from '../screens/Search'


export const FeedStack = StackNavigator({
  Feed: {
    screen: Feed,
  },
  Details: {
    screen: UserDetail,
  },
  Item: {
      screen: Item,
  },
  Box: {
      screen: Box,
  }
});


export const Tabs = TabNavigator({
    Home:{
        screen: Home,
        navigationOptions:{
            tabBarlabel: 'Home',
            tabBarIcon: ({tintColor}) => <Icon name='home' size={25} color={tintColor}/>
        }
    },
    Search: {
        screen: Search,
        navigationOptions:{
            tabBarlabel: 'Profile',
            tabBarIcon: ({tintColor}) => <Icon name='search' size={25} color={tintColor}/>
        }
    },
    Add: {
        screen: FeedStack,    
        navigationOptions:{
            tabBarlabel: 'Add',
            tabBarIcon: ({tintColor}) => <Icon name='add' size={25} color={tintColor}/>
        }
    }
},
{
    swipeEnabled:true,
    animationEnabled:true
    }
)