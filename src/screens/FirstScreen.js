import React, {Component} from 'react';
import {SafeAreaView} from "react-native-safe-area-context";
import {Text, View, Image, ImageBackground} from "react-native";
import assets from "../assets/assets";
import TextUnderline from "../components/TextUnderline";
import Colors from "../constante/Colors";

class FirstScreen extends Component {
    goLogin = ()=>{
        console.log("login to ")
        this.props.navigation.navigate("Login")
    };

    toRegister = ()=>{
        this.props.navigation.navigate("Register")
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={assets.first.backgroundImage} style={[styles.container,{width : "100%",height : "100%",resize : "stretch"}]}>
                    <View style={styles.containerApp}>
                        <View style={styles.containerImage}>
                            <Image source={assets.first.logo} style={styles.logo}/>
                        </View>
                        <View style={styles.containerText}>
                            <Text style={styles.textLogo}> Asma Fete</Text>
                            <Text style={{flex : 0.10}}>Réserver votre Salle des fete en un clic</Text>
                            <Image source={assets.first.salleBackground} style={{flex: 0.8,resizeMode : "stretch"}}/>
                        </View>
                    </View>
                    <View style={styles.containerAuth}>
                        <TextUnderline text={"conncter-vous ?"}  onPress={this.goLogin}/>
                        <TextUnderline text={"inscrevez-vous ?"} onPress={this.toRegister}/>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}

const styles = {
    container : {
        flex : 1,
    },
    containerApp : {
        flex: 1,
        justifyContent : "flex-start",
        alignItems: "center",
    },
    containerAuth : {
        height : 70,
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "center"
    },
    containerImage : {
      flex : 1,
        justifyContent: "center",
        alignItems: "center"
    },
    containerText : {
      flex : 1,
        alignItems : "center",
    },
    logo:{
        height: 200,
        width : 200,
        borderRadius : 200
    },
    textLogo:{
        flex : 0.10,
        fontSize: 25,
        fontWeight : "bold"
    },
}
export default FirstScreen;