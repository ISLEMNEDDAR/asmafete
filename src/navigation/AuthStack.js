import React, {Component} from 'react';
import FirstScreen from "../screens/FirstScreen";
import Login from "../screens/auth/Login";
import RegisterUser from "../screens/auth/RegisterUser";
import {createStackNavigator} from "@react-navigation/stack";
import HomeStack from "./HomeStack";

class AuthStack extends Component {

    render() {
        const AuthList = createStackNavigator()
        return (
            <AuthList.Navigator screenOptions={{headerShown: false}} headerMode='none' initialRouteName ="FirstScreen" >
                <AuthList.Screen name={"FirstScreen"} component={FirstScreen}/>
                <AuthList.Screen name={"Login"} component={Login}/>
                <AuthList.Screen name={"Register"} component={RegisterUser}/>
            </AuthList.Navigator>
        );
    }
}

export default AuthStack;