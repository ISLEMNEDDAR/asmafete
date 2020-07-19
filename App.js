/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends Component{
  render(){
    return(
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Root
                ref={navigatorRef => {
                  NavigationService.setTopLevelNavigator(navigatorRef);
                }}/>
          </PersistGate>

        </Provider>
    )
  }
}




export default App;
