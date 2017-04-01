import {USER_LOGIN,USER_REGISTER} from '../constants/ActionTypes';

const initialState = {
};

export default function users(state = initialState,actions){
    console.log(actions);
    switch(actions.type){
        case USER_LOGIN: 
            return {...state,type: 'USER_LOGIN'}
        case USER_REGISTER:
            return {...state,type:'USER_REGISTER'}
        default: 
            return state;
    }
} 