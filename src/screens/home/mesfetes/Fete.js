import React, {Component} from 'react';
import {Text, TouchableHighlight, View} from "react-native";
import Colors from "../../../constante/Colors";

class Fete extends Component {
    render() {
        const fete = this.props.fete
        return (
            <View style={{flexDirection : "row",elevation : 2,borderRadius : 10,backgroundColor : "#FFF",marginVertical : 10}}>
                <View style={{margin : 10,flex : 0.5}}>
                    <Text>Type Fete : <Text>{fete.type}</Text></Text>
                    <Text>Date : <Text>{fete.date}</Text></Text>
                    <Text>Nombre des Invité : <Text>{fete.invite}</Text></Text>
                    <Text>Wilaya : <Text>{fete.Wilaya}</Text></Text>
                    <Text>Commune : <Text>{fete.commune}</Text></Text>
                    <Text>Heurs : <Text>{fete.commune}</Text></Text>
                </View>
                <View style={{flex : 0.5,alignItems : "center",justifyContent : "center"}}>
                    {!fete.isReserved ? (<TouchableHighlight
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
                    </TouchableHighlight>) : (
                        null
                    )}
                </View>
            </View>
        );
    }
}

const style = {

}
export default Fete;