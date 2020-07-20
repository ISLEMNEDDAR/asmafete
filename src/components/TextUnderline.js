import React, {Component} from 'react';
import {Text, View} from "react-native";
import Colors from "../constante/Colors";

class TextUnderline extends Component {
    render() {
        return (
            <View>
                <Text
                    style={[
                        styles.blueText,
                        styles.textUnderline
                    ]}
                    onPress={this.props.onPress}>
                    {this.props.text}
                </Text>
            </View>
        );
    }
}

const styles = {
    textUnderline:{
        textDecorationLine : "underline",
        fontSize : 16,
        marginHorizontal : 15
    },
    blueText:{
        color : Colors.$bluePrimary
    }
}
export default TextUnderline;