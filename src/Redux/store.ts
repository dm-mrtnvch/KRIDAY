import {applyMiddleware, combineReducers, createStore} from 'redux';
import {loginReducer} from './reducers/loginReducer';
import {registrationReducer} from './reducers/registrationReducer';
import {profileReducer} from './reducers/profileReducer';
import thunk from 'redux-thunk';
import {appReducer} from './reducers/appReducer';
import {cardReducer} from "./reducers/cardReducer";

const rootReducer = combineReducers({
    login: loginReducer,
    registration:registrationReducer,
    profile:profileReducer,
    app:appReducer,
    card:cardReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootStateType = ReturnType<typeof rootReducer>