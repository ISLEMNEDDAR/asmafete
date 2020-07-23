/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {persistor, store} from "./src/redux/store";
import {Provider} from 'react-redux'
import {PersistGate} from "redux-persist/integration/react";
import 'react-native-gesture-handler';
import {NavigationContainer} from "@react-navigation/native";
import RootStack from "./src/navigation/RootStack";
import {navigationRef} from "./src/navigation/RootNavigation";
import NavigationService from "./src/navigation/NavigationService";
class App extends Component{
  render(){
    return(
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
            }}>
                <RootStack/>
            </NavigationContainer>
          </PersistGate>
        </Provider>
    )
  }
}




export default App;
