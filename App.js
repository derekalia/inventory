import React from 'react';
import { StyleSheet, Text, View , AsyncStorage} from 'react-native';
import Landing from './src/components/Landing';
import { Tabs } from './src/routes';

export default class App extends React.Component {
    render() {
      // try {
      // const loggedIn = await AsyncStorage.getItem('@Auth:token');
      // }catch(error){
      //   console.log(error) 
      // }
      // console.log(loggedIn) 
    return (
      // {loggedIn ? <Tabs />  : 
      // <View>
      //   <Landing />              
      // </View>}
               <Tabs />
              
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
