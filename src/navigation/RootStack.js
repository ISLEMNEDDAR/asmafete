import React, {Component} from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import FirstScreen from "../screens/FirstScreen";
import Login from "../screens/auth/Login";
import RegisterUser from "../screens/auth/RegisterUser";
import HomeStack from "./HomeStack";
class RootStack extends Component {
    render() {
        const RootList = createStackNavigator()
        return (
            <RootList.Navigator screenOptions={{headerShown: false}} headerMode='none' initialRouteName ="HomeStack" >
                <RootList.Screen name={"HomeStack"} component={HomeStack}/>
                <RootList.Screen name={"FirstScreen"} component={FirstScreen}/>
                <RootList.Screen name={"Login"} component={Login}/>
                <RootList.Screen name={"Register"} component={RegisterUser}/>
            </RootList.Navigator>
        );
    }
}

export default RootStack;