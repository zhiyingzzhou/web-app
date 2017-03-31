import {USER_LOGIN,USER_REGISTER} from '../constants/ActionTypes';

const initialState = {

};

export default function users(state = initialState,action){
    console.log(action);
    switch(action.type){
        case USER_LOGIN: 
        case USER_REGISTER:
        default: 
            return state;
    }
} 