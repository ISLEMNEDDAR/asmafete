import React, {Component} from 'react';
import StyleCommon from "../../../constante/StyleCommon";
import {ScrollView, View} from "react-native";
import Fete from "./Fete";

class ListFete extends Component {
    render() {
        return (
            <View style={StyleCommon.container}>
                <ScrollView vertica  >
                    {this.props.listFetes.map((fete,i)=>{
                        return <Fete key={i} fete={fete}/>
                    })}
                </ScrollView>
            </View>
        );
    }
}

export default ListFete;