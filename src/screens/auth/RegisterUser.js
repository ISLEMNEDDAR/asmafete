import React, {Component} from 'react';
import {SafeAreaView} from "react-native-safe-area-context";
import {Text, View, Button, ActivityIndicator} from "react-native";
import StyleCommon from "../../constante/StyleCommon";
import FormCreateFete from "../home/createfete/formfete/FormCreateFete";
import FormSignUp from "./FormSignUp";
import LoadingScreen from "../../components/LoadingScreen";
import {connect} from "react-redux";

class RegisterUser extends Component {
    render() {
        return (
            <SafeAreaView style={[{backgroundColor : "#FFF",flex : 1}]}>
                <LoadingScreen hide={!this.props.user.isLoading}/>
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

export default connect(
    state=>({
        user: state.user
    }),
    {}
)(RegisterUser);