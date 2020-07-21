import React, {Component} from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Home from "../screens/home/Home";
import FetesStack from "./FetesStack";
import MesFetes from "../screens/home/MesFetes";
import SallesFetes from "../screens/home/SallesFetes";
import Profile from "../screens/home/Profile";
import FormFete from "../screens/home/createfete/FormFete";
import ChooseSalle from "../screens/home/createfete/ChooseSalle";
class HomeStack extends Component {
    render() {
        const HomeList = createStackNavigator()
        return (
            <HomeList.Navigator screenOptions={{headerShown: false}} headerMode='none'>
                <HomeList.Screen name={"ChooseSalle"} component={ChooseSalle}/>
                <HomeList.Screen name={"Home"} component={Home}/>
                <HomeList.Screen name={"CreateFeteStack"} component={FetesStack}/>
                <HomeList.Screen name={"MesFetes"} component={MesFetes}/>
                <HomeList.Screen name={"SallesFetes"} component={SallesFetes}/>
                <HomeList.Screen name={"Profile"} component={Profile}/>
            </HomeList.Navigator>
        );
    }
}

export default HomeStack;