import React, {Component} from 'react';
import {Image, Text, TouchableHighlight, View} from "react-native";
import assets from "../../../../assets/assets";
import Colors from "../../../../constante/Colors";
import NavigationService from "../../../../navigation/NavigationService";

class Deco extends Component {
    Reserver = ()=>{
        NavigationService.replace("Home")
    }

    render() {
        const deco = this.props.deco
        return (
            <View style={{height : 120,margin : 4,flexDirection : "row",borderRadius : 20,elevation : 2,backgroundColor : "#FFF"}}>
                <View style={{flex : 0.4,}}>
                    <Image source={assets.first.logo} style={{height : 120,width : "100%" ,resizeMode : "stretch",borderTopLeftRadius : 100,borderBottomLeftRadius : 100}}/>
                </View>
                <View style={{flex : 0.6,marginHorizontal : "5%"}}>
                    <View style={{flex : 0.5,justifyContent : "center"}}>
                        <Text>{deco.name}</Text>
                    </View>
                    <View style={{flex : 0.5,flexDirection : "row",marginHorizontal : "5%",alignItems : "center",justifyContent : "center"}}>
                        <View style={{flex : 1}}>
                            <Text>prix : {deco.prix}</Text>
                        </View>
                        <View style={{flex : 1,alignItems : "flex-end",justifyContent : "center"}}>
                            <TouchableHighlight
                                style={{borderStyle : "solid",borderWidth : 1,padding : 8,borderColor : Colors.$redBootsrap,borderRadius : 10}}
                                onPress={this.Reserver}
                            >
                                <Text style={{fontSize : 16,fontWeight : "bold"}}>Réserver</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default Deco;