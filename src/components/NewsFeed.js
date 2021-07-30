import React, { Component } from 'react';
import { TextDecoder, StyleSheet, View, Text } from 'react-native';

export default function Header() {
    return(
        <View style={{
            marginTop: constant.statusBarHeight,
            height: 30,
            backgroundColor: 'E3CD13'
        }}>
            <Header 
            leftComponent= {{ text: 'Explore' }}
            centerComponent= {{ text: 'My Feed' }}
            rightComponent= {{ icon: 'rotate-cw', color: '#000'}}
        />
        </View>
        

)};
