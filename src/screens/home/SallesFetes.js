import React, {Component} from 'react';
import {SafeAreaView, Text, View} from "react-native";
import StyleCommon from "../../constante/StyleCommon";
import HeaderComponent from "../../components/HedearCompenent";
import Colors from "../../constante/Colors";

class SallesFetes extends Component {
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
                    text={"Salles Des Fetes"}
                    iconBack={'chevron-left'}
                    onPressBack={() => {
                        this.props.navigation.goBack();
                    }}
                    colorIconBack={Colors.$wihtePrimary}
                />
                <View style={StyleCommon.container}>
                    <Text>fsfd</Text>
                </View>
            </SafeAreaView>
        );
    }
}

export default SallesFetes;