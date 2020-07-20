import React from 'react';
import{
    ActivityIndicator,
    View,
} from 'react-native'
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
            alignItems : "center"
        }}>
            <ActivityIndicator size="large"/>
        </View>)
    }
};

export default LoadingScreen;
