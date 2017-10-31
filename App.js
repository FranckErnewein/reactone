import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Image } from 'react-native';
import { styles } from './src/constants/styles';
import { NativeRouter, Route, Link } from 'react-router-native';
import PageUn from './src/components/pages/PageUn';
import PageDeux from './src/components/pages/PageDeux';
import SideBar from './src/components/common/SideBar';

export class Home extends React.Component {
  render() {
    return (
      <Text>Home</Text> 
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <SideBar/>
          <View>
            <Route exact path="/" component={Home}/>
            <Route path="/pageun" component={PageUn}/>
            <Route path="/pagedeux" component={PageDeux}/>
          </View>
        </View>
      </NativeRouter>
    );
  }
}
