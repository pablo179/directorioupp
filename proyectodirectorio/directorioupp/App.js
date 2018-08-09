import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import {Text} from 'react-native';
import MainScreen from './src/components/MainScreen';
import Directory from './src/components/Directory';
export default class App extends Component {
  render() {
    return (
      <Text>asd</Text>
    );
  }
}
const AppNavigator = StackNavigator({
  Directory: {screen: Directory},
  Main: {screen: MainScreen},
},{
  headerMode: 'screen'
},
{
  initialRouteName: 'Directory',
}
);