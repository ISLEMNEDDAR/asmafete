import React, {Component} from 'react';
import {Image, Text, TouchableHighlight, TouchableNativeFeedback, View} from "react-native";
import assets from "../../../../assets/assets";
import Colors from "../../../../constante/Colors";

class Salle extends Component {
    render() {
        const salle = this.props.salle
        return (
            <View style={{height : 300,margin : 3}}>
                <View style={{flex : 0.6}}>
                    <Image source={assets.first.logo} style={styles.imageStyle}/>
                    <View style={styles.PriceStyle}>
                        <Text style={styles.PriceTextStyle}>{salle.prix} Million</Text>
                    </View>
                    <View style={styles.containerName}>
                            <View style={styles.textNameStyle}>
                                <Text style={styles.textStyle}>{salle.name}</Text>
                            </View>
                            <View style={styles.textNameStyle}>
                                <Text style={styles.textInvite}>{salle.invite} invités</Text>
                            </View>
                    </View>
                </View>
                <View style={styles.containerRow}>
                    <View style={{flexDirection : "row",marginHorizontal : "5%"}}>
                        <Text>{salle.Wilaya} {" > "} {salle.commune}</Text>
                    </View>
                </View>
                <View style={styles.containerRow}>
                    <View style={{flexDirection : "row",marginHorizontal : "5%",alignItems : "center",justifyContent : "center"}}>
                        <Text>{salle.type}</Text>
                        <View style={{flex : 1,alignItems : "flex-end",justifyContent : "center"}}>
                            <TouchableHighlight
                                style={{borderStyle : "solid",borderWidth : 1,padding : 8,borderColor : Colors.$redBootsrap,borderRadius : 10}}
                                onPress={()=>{}}
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

const styles = {
    imageStyle : {flex : 1,resizeMode : "stretch"},
    PriceStyle : {position : "absolute",justifyContent : "center",alignItems : "center", margin : "5%",borderColor : "#000",backgroundColor: "#000",borderRadius : 10},
    PriceTextStyle:{color : "#FFF",fontSize : 14,paddingVertical : 2},
    containerName : {position: "absolute",bottom : "5%",left : "5%"},
    containerSubName : {justifyItems: "flex-end"},
    textNameStyle : {padding : 5},
    textStyle:{fontSize : 16,color : "#FFF",fontWeight : "bold"},
    textInvite : {fontSize : 14,color : "#FFF",fontWeight : "bold"},
    containerRow : {flex : 0.2,flexDirection : "row",alignItems : "center",borderStyle:"solid",borderWidth : 1,borderColor: Colors.$greyPrimary}
}
export default Salle;