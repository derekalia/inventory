import React from 'react';
import {TabNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements'

import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Search from '../screens/Search'

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
    Profile: {
        screen: Profile,
        navigationOptions:{
            tabBarlabel: 'Profile',
            tabBarIcon: ({tintColor}) => <Icon name='account-circle' size={25} color={tintColor}/>
        }
    }
},
{
    swipeEnabled:true,
    animationEnabled:true
    }
)