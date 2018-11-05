import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import MainScreen from './src/components/MainScreen';
import Directory from './src/components/Directory';
import Detail from './src/components/Detail';
import network from './src/components/network';
export default class App extends Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}
const AppNavigator = StackNavigator({
  Directory: {screen: Directory},
  Main: {screen: MainScreen},
  Detail: {screen:Detail},
  network: {screen:network}
},{
  headerMode: 'screen'
},
{
  initialRouteName: 'Main',
}
);