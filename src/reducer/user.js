import {USER_LOGIN,USER_REGISTER} from 'constants/ActionTypes';

const initialState = {

};

export default function users(state = initialState,actions){
    switch(actions.type){
        case USER_LOGIN: 
            return {...state,baseInfo:actions.user};
        case USER_REGISTER:
            return {...state,type:'USER_REGISTER'};
        default: 
            return state;
    }
} 