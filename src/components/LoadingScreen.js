import React from 'react';
import {
    ActivityIndicator, Text,
    View,
} from 'react-native'
import Colors from "../constante/Colors";
const LoadingScreen = ({hide} = this.props)=>{
    if(hide){
        return null
    }else{
        return (<View style={{
            position : "absolute",
            top : 0,
            left : 0,
            right : 0,
            bottom : 0,
            justifyContent : "center",
            alignItems : "center",
            zIndex : 100,
            elevation : 100
        }}>
            <ActivityIndicator color={Colors.$redBootsrap} size="large"/>
        </View>)
    }
};

export default LoadingScreen;
