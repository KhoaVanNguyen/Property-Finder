import React from 'react';
import { Text, View } from 'react-native';
import ListHome from './src/screens/ListHome'
import HomeScreen from './src/screens/HomeScreen'
import DetailHome from './src/screens/DetailHome'
import { StackNavigator } from 'react-navigation'
export default class App extends React.Component {
 
  render() {
    const App = StackNavigator({
      home: { screen: HomeScreen },
      listhome: { screen: ListHome },
      detail: { screen: DetailHome }
    } )
    return (
        <App />
    );
  }
}
