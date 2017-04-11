import {CRESTE_RESUME} from 'constants/ActionTypes';

const initialState = {
};

export default function resume(state = initialState,actions){
    switch(actions.type){
        case CRESTE_RESUME: 
            return {...state};
        default: 
            return state;
    }
} 