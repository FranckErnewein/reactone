import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Image } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

export default function NavBar(){

    return <nav>
        <Link to="/pageun">Page un</Link>
        <Link to="/pagedeux">Page deux</Link>
    </nav>;
}
