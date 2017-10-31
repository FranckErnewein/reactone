import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { styles } from '../../constants/styles';
import { NativeRouter, Route, Link } from 'react-router-native';
import PageUn from '../pages/PageUn';
import PageDeux from '../pages/PageDeux';

const routes = [
  { path: '/',
    exact: true,
    title: 'Home'
  },
  { path: '/pageun',
    component: PageUn,
    title: 'Page Un'
  },
  { path: '/pagedeux',
    component: PageDeux,
    title:'Page Deux'
  }
];

export default class SideBar extends React.Component {

    render() {
    return (
      <View style={styles.nav}>
        <Link
          to="/"
          underlayColor='#f0f4f7'
          style={styles.navItem}>
            <Text>Home</Text>
        </Link>
        <Link
          to="/pageun"
          underlayColor='#f0f4f7'
          style={styles.navItem}>
            <Text>Page Un</Text>
        </Link>
        <Link
          to="/pagedeux"
          underlayColor='#f0f4f7'
          style={styles.navItem}>
            <Text>Page Deux</Text>
        </Link>
      </View>
    )
  }
}
