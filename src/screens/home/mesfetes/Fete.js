import React, {Component} from 'react';
import {Text, TouchableHighlight, View} from "react-native";
import Colors from "../../../constante/Colors";

class Fete extends Component {
    consoleHeurs = (heursFete)=>{
        let stringHeurs = "";
        if(heursFete.length>0){
            stringHeurs += heursFete[0];
            for (let i=1;i<heursFete.length;i++){
                stringHeurs += " ,"+heursFete[i];
            }
        }
        return stringHeurs;
    }

    render() {
        const fete = this.props.fete
        return (
            <View style={{flexDirection : "row",elevation : 2,borderRadius : 10,backgroundColor : "#FFF",marginVertical : 10}}>
                <View style={{margin : 10,flex : 0.5}}>
                    <Text>Type Fete : <Text>{fete.type}</Text></Text>
                    <Text>Date : <Text>{fete.date}</Text></Text>
                    <Text>Nombre des Invité : <Text>{fete.nombre_invite}</Text></Text>
                    <Text>Wilaya : <Text>{fete.wilaya}</Text></Text>
                    <Text>Heurs : <Text>{this.consoleHeurs(fete.heurs_fete)}</Text></Text>
                </View>
                <View style={{flex : 0.5,alignItems : "center",justifyContent : "center"}}>
                    <TouchableHighlight
                        style={{
                            borderStyle: "solid",
                            borderWidth: 1,
                            padding: 8,
                            borderColor: Colors.$redBootsrap,
                            borderRadius: 10
                        }}
                        onPress={this.Reserver}
                    >
                        <Text style={{fontSize: 16, fontWeight: "bold"}}>Réserver</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const style = {

}
export default Fete;