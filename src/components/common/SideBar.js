import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
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

    render() {
    return (
        <View style={[stylemenu.sideMenu, this.props.style || {}]}>

              <View style={{ paddingHorizontal: 30 }}>
                  <TouchableOpacity style={ stylemenu.menu }>
                        <Icon name='home' size={24} color={colors.txtWhite} />
                        <Link to="/"><Text style={stylemenu.menuText}>Home</Text></Link>
                  </TouchableOpacity>
                  <TouchableOpacity style={ stylemenu.menu }>
                        <Icon name='user-o' size={24} color={colors.txtWhite} />
                        <Link to="/pageun"><Text style={stylemenu.menuText}>Page Un</Text></Link>
                  </TouchableOpacity>
                  <TouchableOpacity style={ stylemenu.menu }>
                        <Icon name='cog' size={24} color={colors.txtWhite} />
                        <Link to="/pagedeux"><Text style={stylemenu.menuText}>Page Deux</Text></Link>
                  </TouchableOpacity>

              </View>
        </View>

    )
  }
}

const stylemenu = StyleSheet.create({
    sideMenu: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
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
