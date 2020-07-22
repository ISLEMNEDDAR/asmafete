import React, {Component} from 'react';
import {SafeAreaView} from "react-native-safe-area-context";
import {Text, View, Button, Image} from "react-native";
import ButtonBLue from "../../components/ButtonBLue";
import StyleCommon from "../../constante/StyleCommon";
import assets from "../../assets/assets";
class Login extends Component {

    goCreateFete = ()=>{
        this.props.navigation.navigate("CreateFeteStack")
    }
    MesFetes = ()=>{
        this.props.navigation.navigate("MesFetes")
    }
    Logout = ()=>{
        this.props.navigation.replace("Login")
    }
    SallesFetes = ()=>{
        this.props.navigation.navigate("Profile")
    }


    render() {
        return (
            <SafeAreaView style={StyleCommon.container}>
                <View style={[{flex : 0.25 },StyleCommon.centerBottom]}>
                    <Image source={assets.first.logo} style={StyleCommon.logoLogin}/>
                </View>
                <View style={[{flex :0.75,justifyContent : "center"},StyleCommon.margin10Vertical]}>
                    <View style={{flex : 1,justifyContent : "space-around",marginVertical : "30%"}}>
                        <ButtonBLue
                            text="Crée une Fete"
                            paddingTop={15}
                            paddingBottom={15}
                            paddingRight={16}
                            paddingLeft={16}
                            fontSize={14}
                            onPress={this.goCreateFete}
                        />
                        <ButtonBLue
                            text="Mes Fete"
                            paddingTop={15}
                            paddingBottom={15}
                            paddingRight={16}
                            paddingLeft={16}
                            fontSize={14}
                            onPress={this.MesFetes}
                        />
                        <ButtonBLue
                            text="Salles des Fetes"
                            paddingTop={15}
                            paddingBottom={15}
                            paddingRight={16}
                            paddingLeft={16}
                            fontSize={14}
                            onPress={this.SallesFetes}
                        />
                        <ButtonBLue
                            text="Déconnecter"
                            paddingTop={15}
                            paddingBottom={15}
                            paddingRight={16}
                            paddingLeft={16}
                            fontSize={14}
                            onPress={this.Logout}
                        />
                    </View>

                </View>
            </SafeAreaView>
        );
    }
}
export default Login;