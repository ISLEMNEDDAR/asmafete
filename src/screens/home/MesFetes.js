import React, {Component} from 'react';
import {SafeAreaView, Text, View} from "react-native";
import StyleCommon from "../../constante/StyleCommon";
import HeaderComponent from "../../components/HedearCompenent";
import Colors from "../../constante/Colors";
import {listFetes, listSalle} from "../../constante/Data";
import ListFete from "./mesfetes/ListFete";

class MesFetes extends Component {
    render() {
        return (
            <SafeAreaView style={StyleCommon.container}>
                <HeaderComponent
                    color1={Colors.$blueGradient1}
                    color2={Colors.$blueGradient2}
                    height={65}
                    iconCenter={"tint"}
                    sizeIconCenter={30}
                    colorIconCenter={Colors.$wihtePrimary}
                    tailleFont={20}
                    colorText={Colors.$wihtePrimary}
                    text={"Mes Fetes"}
                    iconBack={'chevron-left'}
                    onPressBack={() => {
                        this.props.navigation.goBack();
                    }}
                    colorIconBack={Colors.$wihtePrimary}
                />
                <View style={[StyleCommon.container, {marginHorizontal : "5%"},StyleCommon.margin10Horizontal]}>
                    <ListFete listFetes={listFetes} />
                </View>
            </SafeAreaView>
        );
    }
}

export default MesFetes;