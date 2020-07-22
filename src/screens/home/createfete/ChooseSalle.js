import React, {Component} from 'react';
import {SafeAreaView, ScrollView, Text, View} from "react-native";
import StyleCommon from "../../../constante/StyleCommon";
import HeaderComponent from "../../../components/HedearCompenent";
import Colors from "../../../constante/Colors";
import FormCreateFete from "./formfete/FormCreateFete";
import ListSalle from "./formfete/LisTSalle";
import {listSalle} from "../../../constante/Data";

class ChooseSalle extends Component {
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
                    text={"Choisir une Salle"}
                    iconBack={'chevron-left'}
                    onPressBack={() => {
                        this.props.navigation.goBack();
                    }}
                    colorIconBack={Colors.$wihtePrimary}
                />
                <View style={[StyleCommon.container, {marginHorizontal : "5%"},StyleCommon.margin10Horizontal]}>
                    <ListSalle listSalle={listSalle} />
                </View>
            </SafeAreaView>
        );
    }
}

export default ChooseSalle;