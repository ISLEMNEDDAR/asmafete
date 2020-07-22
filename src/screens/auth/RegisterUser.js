import React, {Component} from 'react';
import {SafeAreaView} from "react-native-safe-area-context";
import {Text, View,Button} from "react-native";
import StyleCommon from "../../constante/StyleCommon";
import FormCreateFete from "../home/createfete/formfete/FormCreateFete";
import FormSignUp from "./FormSignUp";

class RegisterUser extends Component {
    render() {
        return (
            <SafeAreaView style={[StyleCommon.container,{backgroundColor : "#FFF"}]}>
                <View style={{flex : 0.2,alignItems : "center",justifyContent : "center"}}>
                    <Text style={{fontWeight : "bold", fontSize : 20}}>Inscreption</Text>
                </View>
                <View style={[StyleCommon.container,StyleCommon.margin10Vertical,{elevation: 20}]}>
                    <FormSignUp navigation={this.props.navigation}/>
                </View>
            </SafeAreaView>
        );
    }e
}

export default RegisterUser;