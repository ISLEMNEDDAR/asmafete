import React, {Component} from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Fetes from "../screens/Fetes/Fetes";
import FormFete from "../screens/home/createfete/FormFete";
import ChooseSalle from "../screens/home/createfete/ChooseSalle";
import ChooseDecoration from "../screens/home/createfete/ChooseDecoration";
class FetesStack extends Component {
    render() {
        const FetesList = createStackNavigator()
        return (
            <FetesList.Navigator screenOptions={{headerShown: false}} headerMode='none'>
                <FetesList.Screen name={"FormFete"} component={FormFete}/>
                <FetesList.Screen name={"ChooseSalle"} component={ChooseSalle}/>
                <FetesList.Screen name={"ChooseDecoration"} component={ChooseDecoration}/>
            </FetesList.Navigator>
        );
    }
}

export default FetesStack;