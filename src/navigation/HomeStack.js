import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import FirstScreen from "../screens/FirstScreen";
import Login from "../screens/auth/Login";
import RegisterUser from "../screens/auth/RegisterUser";
import Home from "../screens/home/Home";
class HomeStack extends Component {
    render() {
        const HomeList = createStackNavigator()
        return (
            <HomeList.Navigator screenOptions={{headerShown: false}} headerMode='none'>
                <HomeList.Screen name={"Home"} component={Home}/>
            </HomeList.Navigator>
        );
    }
}

export default HomeStack;