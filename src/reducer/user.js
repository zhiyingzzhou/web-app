import {USER_LOGIN,USER_REGISTER,MY_RESUME} from 'constants/ActionTypes';

const initialState = {

};

export default function users(state = initialState,actions){
    switch(actions.type){
        case USER_LOGIN: 
            return {...state,baseInfo:actions.user};
        case USER_REGISTER:
            return {...state,type:'USER_REGISTER'};
        case MY_RESUME:
            return {...state,myResume:actions.myResume}
        default: 
            return state;
    }
} 