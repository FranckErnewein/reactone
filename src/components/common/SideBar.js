import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import { PageUn } from '../pages/PageUn';
import { PageDeux } from '../pages/PageDeux';

export default class SideBar extends React.Component {
    render() {
    return (
     <NativeRouter>
    <View style={styles.container}>
      <View>
        <View>
          <Link to="/" underlayColor='#f0f4f7'>
            <Text>Home</Text>
          </Link>
          <Link to="/pageun" underlayColor='#f0f4f7'>
            <Text>Page un</Text>
          </Link>
          <Link to="/pagedeux" underlayColor='#f0f4f7'>
            <Text>Page deux</Text>
          </Link>
        </View>
      </View>      
    </View>
  </NativeRouter>
    )
  }
}
