
import React, { Component } from 'react';
import {
    StyleSheet,
    Text, TouchableOpacity,             // Renders text
    View,              // Container component
} from 'react-native';
import {Icon} from 'react-native-elements';
import Colors from "../constante/Colors";

const PickerInput = ({onPress,text,height,backgroundColor,iconName,iconType,margintop,marginBottom} = this.props)=>(
    <TouchableOpacity style={{
        flexDirection : "row",
        alignItems : "center",
        backgroundColor : backgroundColor,
        borderRadius : 3,
        width : "100%",
        height : height,
        marginTop : margintop || 5,
        marginBottom : marginBottom || 5,
        borderColor : "grey",
        borderWidth : 1
    }}
        onPress={onPress}
    >
        <View style={{width : "70%",justifyContent : "center"}}>
            <Text style={{left : "10%"}}>{text}</Text>
        </View>
        <View style={{justifyContent:"center",width : "30%"}}>
            <Icon
                name= {iconName}
                type= {iconType}
                color={Colors.$warm_gray}
                onPress={onPress}
                size={20}
                iconStyle={{right : "2%"}}
            />
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
    },
    errorText: {
        color: 'red'
    }
});

export default PickerInput
