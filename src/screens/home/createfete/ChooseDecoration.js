import React, {Component} from 'react';
import {SafeAreaView, Text, View} from "react-native";
import StyleCommon from "../../../constante/StyleCommon";
import HeaderComponent from "../../../components/HedearCompenent";
import Colors from "../../../constante/Colors";
import {listDecoraton, listSalle} from "../../../constante/Data";
import ListDecoration from "./formfete/ListDecoration";

class ChooseDecoration extends Component {
    render() {
        return (
            <SafeAreaView style={StyleCommon.container}>
                <HeaderComponent
                    color1={Colors.$pink}
                    color2={Colors.$pink}
                    height={65}
                    iconCenter={"tint"}
                    sizeIconCenter={30}
                    colorIconCenter={Colors.$wihtePrimary}
                    tailleFont={20}
                    colorText={Colors.$wihtePrimary}
                    text={"Choisir une décoration"}
                    iconBack={'chevron-left'}
                    onPressBack={() => {
                        this.props.navigation.goBack();
                    }}
                    colorIconBack={Colors.$wihtePrimary}
                />
                <View style={[StyleCommon.container, {marginHorizontal : "5%"},StyleCommon.margin10Horizontal]}>
                    <ListDecoration listDecoration={listDecoraton} />
                </View>
            </SafeAreaView>
        );
    }
}

export default ChooseDecoration;