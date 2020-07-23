import {createStore, applyMiddleware,compose} from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import reducer from "./reducer";
import {createLogger} from 'redux-logger'
import thunk from "redux-thunk"
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from "./reducer"
const middleware = [
    thunk
];
if(__DEV__){
    middleware.push(createLogger({collapsed : true}))
}

const persistConfig = {
    // RootStack
    key: 'root',
    // Storage Method (React Native)
    storage: AsyncStorage,
    timeout: null,

};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, undefined, compose(applyMiddleware(thunk,createLogger({collapsed : true}))));
let persistor = persistStore(store);
export {
    store,
    persistor
}

