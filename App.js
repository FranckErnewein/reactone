import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Image } from 'react-native';
import { styles } from './src/constants/styles';
import { NativeRouter, Route, Link } from 'react-router-native';
import { PageUn } from './src/components/pages/PageUn';
import { PageDeux } from './src/components/pages/PageDeux';
import { SideBar } from './src/components/common/SideBar';

const routes = [
  { path: '/',
    exact: true
  },
  { path: '/pageun',
    component: PageUn
  },
  { path: '/pagedeux',
    component: PageDeux
  }
];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SideBar/>
        <Text>Home</Text>
      </View>
    );
  }
}
