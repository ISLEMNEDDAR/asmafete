import React, {Component} from 'react';
import StyleCommon from "../../../../constante/StyleCommon";
import {ScrollView, View} from "react-native";
import Deco from "./Deco";

class ListDecoration extends Component {
    render() {
        return (
            <View style={StyleCommon.container}>
                <ScrollView vertical>
                    {this.props.listDecoration.map((deco,i)=>{
                        return <Deco key={i} deco={deco}/>
                    })}
                </ScrollView>
            </View>
        );
    }
}

export default ListDecoration;