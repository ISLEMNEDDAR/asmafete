import React, {Component} from 'react';
import {ScrollView, View} from "react-native";
import StyleCommon from "../../../../constante/StyleCommon";
import Salle from "./Salle";

class ListSalle extends Component {
    render() {
        return (
            <View style={StyleCommon.container}>
                <ScrollView vertical>
                    {this.props.listSalle.map((salle,i)=>{
                        return <Salle key={i} salle={salle}/>
                    })}
                </ScrollView>
            </View>
        );
    }
}

export default ListSalle;