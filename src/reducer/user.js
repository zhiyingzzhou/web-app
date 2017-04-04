import {USER_LOGIN,USER_REGISTER,MY_RESUME,PERSONAL_STATISTICS,APPLY_RECORD} from 'constants/ActionTypes';

const initialState = {

};

export default function users(state = initialState,actions){
    switch(actions.type){
        case USER_LOGIN: 
            return {...state,baseInfo:actions.user};
        case USER_REGISTER:
            return {...state,type:'USER_REGISTER'};
        case MY_RESUME:
            return {...state,myResume:actions.myResume};
        case APPLY_RECORD:
            return {...state,applyRecord:actions.applyRecord};
        case PERSONAL_STATISTICS: 
            return {...state,personalStatistics: actions.personalStatistics};
        default: 
            return state;
    }
} 