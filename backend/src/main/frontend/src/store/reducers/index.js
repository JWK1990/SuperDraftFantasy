import { combineReducers } from 'redux';
import {draftReducer} from "./DraftReducer";
import {authenticationReducer} from "./UserReducer";
import {alertReducer} from "./AlertReducer";
import {registrationReducer} from "./RegistrationReducer";

const rootReducer = combineReducers({
    alert: alertReducer,
    authentication: authenticationReducer,
    draft: draftReducer,
    registration: registrationReducer,
});

export default rootReducer;
