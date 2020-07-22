import React, {Component} from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Home from "../screens/home/Home";
import FetesStack from "./FetesStack";
import MesFetes from "../screens/home/MesFetes";
import SallesFetes from "../screens/home/SallesFetes";
class HomeStack extends Component {
    render() {
        const HomeList = createStackNavigator()
        return (
            <HomeList.Navigator screenOptions={{headerShown: false}} headerMode='none'>
                <HomeList.Screen name={"Home"} component={Home}/>
                <HomeList.Screen name={"CreateFeteStack"} component={FetesStack}/>
                <HomeList.Screen name={"MesFetes"} component={MesFetes}/>
                <HomeList.Screen name={"SallesFetes"} component={SallesFetes}/>
            </HomeList.Navigator>
        );
    }
}

export default HomeStack;