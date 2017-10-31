import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Image } from 'react-native';
import { styles } from './src/constants/styles';
import { NativeRouter, Route, Link } from 'react-router-native';
import { PageUn } from './src/components/pages/PageUn';
import { PageDeux } from './src/components/pages/PageDeux';
import { NavBar } from './src/components/common/NavBar';

const routes = [
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
          <Text>yop</Text>
          <NativeRouter>
            <View>
                <Route exact path="/" component={PageUn}/>
                <Route path="/pageun" component={PageUn}/>
                <Route path="/pagedeux" component={PageDeux}/>
            </View>
        </NativeRouter>
      </View>
    );
  }
}
