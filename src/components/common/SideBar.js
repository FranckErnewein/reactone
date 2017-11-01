import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated, Alert, Easing } from 'react-native';
import { styles, colors } from '../../constants/styles';
import { NativeRouter, Route, Link } from 'react-router-native';
import PageUn from '../pages/PageUn';
import PageDeux from '../pages/PageDeux';
import Icon from 'react-native-vector-icons/FontAwesome'

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
let SideMenuWidth = 300
class SideBar extends React.Component {
    constructor(props) {
          super(props)
          this.state = {
              animX: new Animated.Value(-SideMenuWidth),
              menuOpened: false
          }
    }
    
    expandMenu() {
      this.state = {
          animX: new Animated.Value(0),
          menuOpened: true
      }
    }

    render() {
    return (
        <Animated.View style={[stylemenu.sideMenu, this.props.style || {}, { transform: [{translateX: this.state.animX}] }]}>

              <View style={{ paddingHorizontal: 30 }}>
                  <TouchableOpacity style={ stylemenu.menu }>
                        <Icon name='home' size={24} color={colors.txtWhite} />
                        <Link to="/"><Text style={stylemenu.menuText}>Home</Text></Link>
                  </TouchableOpacity>
                  <TouchableOpacity style={ stylemenu.menu }>
                        <Icon name='university' size={24} color={colors.txtWhite} />
                        <Link to="/pageun"><Text style={stylemenu.menuText}>Page Un</Text></Link>
                  </TouchableOpacity>
                  <TouchableOpacity style={ stylemenu.menu }>
                        <Icon name='ship' size={24} color={colors.txtWhite} />
                        <Link to="/pagedeux"><Text style={stylemenu.menuText}>Page Deux</Text></Link>
                  </TouchableOpacity>

              </View>
        </Animated.View>

    )
  }
}

const stylemenu = StyleSheet.create({
    sideMenu: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom:0,
        width: SideMenuWidth,
        backgroundColor: '#214559',
        paddingTop:50
    },
    menu: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 5,
        marginBottom: 10
    },
    menuText: {
        marginLeft: 20,
        color:'#fff'
    }
})
export default SideBar
