import React, {Component} from 'react';
import {SafeAreaView} from "react-native-safe-area-context";
import {Text, View,Button} from "react-native";

class Login extends Component {
    render() {
        return (
            <SafeAreaView>
                <View>
                    <Text>login</Text>
                    <Button title={"toHome"} onPress={()=>{
                        this.props.navigation.navigate("HomeStack")
                    }}/>
                </View>
            </SafeAreaView>
        );
    }
}
export default Login;