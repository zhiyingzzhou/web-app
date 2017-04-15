import {CRESTE_RESUME,RESUME_BASE_INFO,RESUME_WORK,RESUME_PROFESSION} from 'constants/ActionTypes';

const initialState = {
    baseinfo: {},
    profession: {}
};

export default function resume(state = initialState,actions){
    switch(actions.type){
        case CRESTE_RESUME: 
            return {...state};
        case RESUME_BASE_INFO:
            return {...state,baseinfo:actions.baseinfo};
        case RESUME_WORK:
            return {...state,work:actions.work};
        case RESUME_PROFESSION:
            return {...state,profession:actions.profession};
        default: 
            return state;
    }
} 