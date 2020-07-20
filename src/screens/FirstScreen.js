import React, {Component} from 'react';
import {SafeAreaView} from "react-native-safe-area-context";
import {Text, View,Image} from "react-native";
import assets from "../assets/assets";
import Colors from "../constante/Colors";
import TextUnderline from "../components/TextUnderline";

class FirstScreen extends Component {
    goLogin = ()=>{
        this.props.navigation.navigate("Login")
    };

    toRegister = ()=>{
        this.props.navigation.navigate("Login")
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.containerApp}>
                        <View style={styles.containerImage}>
                            <Image source={assets.first.logo} style={styles.logo}/>
                        </View>
                        <View style={styles.containerText}>
                            <Text style={styles.textLogo}> Asma Fete</Text>
                            <Text >Réserver votre Salle des fete en un clic</Text>
                        </View>


                    </View>
                    <View style={styles.containerAuth}>
                        <TextUnderline text={"conncter-vous ?"}  onPress={this.goLogin}/>
                        <TextUnderline text={"inscrevez-vous ?"} onPress={this.toRegister}/>
                    </View>
                </View>
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
        alignItems : "center"
    },
    logo:{
        height: 200,
        width : 200,
        borderRadius : 200
    },
    textLogo:{
        fontSize: 25,
        fontWeight : "bold"
    },
}
export default FirstScreen;