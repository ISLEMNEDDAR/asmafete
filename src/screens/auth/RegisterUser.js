import React, {Component} from 'react';
import {SafeAreaView} from "react-native-safe-area-context";
import {Text, View,Button} from "react-native";

class RegisterUser extends Component {
    render() {
        return (
            <SafeAreaView>
                <View>
                    <Text>register User</Text>
                    <Button title={"to Home"} onPress={()=>{
                        this.props.navigation.navigate("Home")
                    }}/>
                </View>
            </SafeAreaView>
        );
    }
}

export default RegisterUser;