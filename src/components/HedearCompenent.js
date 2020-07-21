import React, {Component, useRef} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity, // Renders text
  View, // Container component
} from 'react-native';
import {Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from "react-redux";

const HeaderComponent = (
  {
    color1,
    color2,
    height,
    iconCenter,
    sizeIconCenter,
    colorIconCenter,
    tailleFont,
    colorText,
    text,
    iconBack,
    onPressBack,
    colorIconBack,
    iconRight,
    onPressRight,
    colorIconRight,
  } = this.props,
) => {



  return (
    <LinearGradient
      colors={[color1, color2]}
      style={{height: height, justifyContent: 'center'}}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: tailleFont,
            color: colorText,
            marginLeft: '2%',
          }}>
          {text}
        </Text>
      </View>
      <View style={styles.iconBack}>
        <Icon
          name={iconBack}
          type="font-awesome"
          onPress={onPressBack}
          color={colorIconBack}
          underlayColor={'transparent'}
        />
      </View>
        <TouchableOpacity style={styles.iconRight}>
          <View>
            <Icon
              name={iconRight}
              type="font-awesome"
              onPress={onPressRight}
              color={colorIconRight}
              underlayColor={'transparent'}
            />
          </View>
        </TouchableOpacity>

    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconBack: {
    position: 'absolute',
    marginStart: '5%',
  },
  iconRight: {
    paddingTop: 5,
    width: 30,
    height: 30,
    borderRadius: 20,
    position: 'absolute',
    right: '5%',
  },
});

export default HeaderComponent
