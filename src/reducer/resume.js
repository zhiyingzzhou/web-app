import {CRESTE_RESUME,RESUME_BASE_INFO} from 'constants/ActionTypes';

const initialState = {
    baseinfo: {}
};

export default function resume(state = initialState,actions){
    switch(actions.type){
        case CRESTE_RESUME: 
            return {...state};
        case RESUME_BASE_INFO:
            return {...state,baseinfo:actions.baseinfo};
        default: 
            return state;
    }
} 