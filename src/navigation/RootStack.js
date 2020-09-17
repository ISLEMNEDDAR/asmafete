import React, {Component} from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import FirstScreen from "../screens/FirstScreen";
import Login from "../screens/auth/Login";
import RegisterUser from "../screens/auth/RegisterUser";
import HomeStack from "./HomeStack";
import MesFetes from "../screens/home/MesFetes";
import {connect} from "react-redux";
import AuthStack from "./AuthStack";
class RootStack extends Component {
    render() {
        const RootList = createStackNavigator()
        return (
            <RootList.Navigator screenOptions={{headerShown: false}} headerMode='none' initialRouteName ="Register" >
                {this.props.user.logged ? (
                        <RootList.Screen name={"HomeStack"} component={HomeStack}/>
                    ) : (
                        <RootList.Screen name={"AuthScreen"} component={AuthStack}/>
                    )
                }
            </RootList.Navigator>
        );
    }
}

export default connect(
    state =>({
        user : state.user
    })
)(RootStack);