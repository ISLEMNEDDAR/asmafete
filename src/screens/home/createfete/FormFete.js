import React, {Component} from 'react';
import {SafeAreaView, Text, View} from "react-native";
import StyleCommon from "../../../constante/StyleCommon";
import Colors from "../../../constante/Colors";
import HeaderComponent from "../../../components/HedearCompenent";
import FormCreateFete from "./formfete/FormCreateFete";

class FormFete extends Component {

    render() {
        return (
            <SafeAreaView style={[StyleCommon.container,{backgroundColor : "#FFF"}]}>
                <HeaderComponent
                    color1={Colors.$pink}
                    color2={Colors.$pink}
                    height={65}
                    iconCenter={"tint"}
                    sizeIconCenter={30}
                    colorIconCenter={Colors.$wihtePrimary}
                    tailleFont={20}
                    colorText={Colors.$wihtePrimary}
                    text={"Cree une fete"}
                    iconBack={'chevron-left'}
                    onPressBack={() => {
                        this.props.navigation.goBack();
                    }}
                    colorIconBack={Colors.$wihtePrimary}
                />
                <View style={[StyleCommon.container,StyleCommon.margin10Vertical,StyleCommon.margin10Horizontal]}>
                    <FormCreateFete navigation={this.props.navigation}/>
                </View>
            </SafeAreaView>
        );
    }
}

export default FormFete;