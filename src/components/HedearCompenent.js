import React, {Component, useRef} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity, // Renders text
  View, // Container component
} from 'react-native';
import {Icon} from 'react-native-elements';
import Colors from '../../constante/Colors';
import LinearGradient from 'react-native-linear-gradient';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
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
    menuCom,
      user
  } = this.props,
) => {
  const menu = useRef();

  const hideMenu = () => menu.current.hide();
  const showMenu = () => menu.current.show();

  return (
    <LinearGradient
      colors={[color1, color2]}
      style={{height: height, justifyContent: 'center'}}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
      <View style={styles.container}>
        <Icon
          name={iconCenter}
          type="font-awesome"
          size={sizeIconCenter}
          color={colorIconCenter}
        />
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
      {menuCom ? (
        <TouchableOpacity style={styles.iconRight}>
          <Menu
            ref={menu}
            button={
              <Icon
                onPress={showMenu}
                name={iconRight}
                type="font-awesome"
                //onPress={onPressRight}
                color={colorIconRight}
                underlayColor={'transparent'}
              />
            }>
            <MenuItem
              onPress={() => {
                hideMenu();
                onPressRight('ajouterami');
              }}>
              Ajouter Ami
            </MenuItem>
              <MenuDivider />
              {
                  user.user.is_doctor ? (

                      <MenuItem
                      onPress={() => {
                  hideMenu();
                  onPressRight('articles');
              }}>
                  Mes Articles
                  </MenuItem>
                  ):(
                      <MenuDivider />
                  )
              }

          </Menu>
        </TouchableOpacity>
      ) : (
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
      )}
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

export default connect(
    state => ({
        user: state.user,
    }),
)(HeaderComponent);
