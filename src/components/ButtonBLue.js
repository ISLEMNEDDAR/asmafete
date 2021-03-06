import React, {Component} from 'react';
import {
  Text, // Renders text
  TouchableOpacity, // Pressable container
  View, // Container component
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from "../constante/Colors";

export default class ButtonBLue extends Component {
  render({onPress, width, icon, ...res} = this.props) {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{zIndex: 11, width: width}}
        {...res}>
        <View
          style={[
            styles.button,
            {
              paddingTop: this.props.paddingTop,
              paddingBottom: this.props.paddingBottom,
              paddingLeft: this.props.paddingLeft,
              paddingRight: this.props.paddingRight,
            },
            {
              flexDirection: 'row',
            },
          ]}>
          {icon ? (
            <Icon
              style={{marginRight: 20}}
              name={icon.name}
              size={icon.size}
              color={icon.color}
            />
          ) : null}
          <Text style={[styles.text, {fontSize: this.props.fontSize}]}>
            {this.props.text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = {
    button : {
        borderRadius : 50,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : Colors.$pink,
    },
    text : {
        color: Colors.$wihtePrimary,
        fontWeight: 'bold',
    }
}
