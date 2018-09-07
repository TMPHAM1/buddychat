import chatReducer from './chat_reducer';
import {reducer as form} from 'redux-form';
import {combineReducers} from 'redux'; 

export default combineReducers({form, chatReducer}); 


