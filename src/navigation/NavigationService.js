import { StackActions } from '@react-navigation/native';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    StackActions.navigate(
      routeName,{
      params,
    }),
  );
}

function replace(routeName, params) {
    _navigator.dispatch(
        StackActions.replace(
            routeName,{
            params,
        }),
    );
}

const NavigationService = {
  navigate,
  setTopLevelNavigator,
    replace
};
// add other navigation functions that you need and export them

export default NavigationService;
