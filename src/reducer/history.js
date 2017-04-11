import {PUSH_HISTORY,POP_HISTORY} from 'constants/ActionTypes';

const initialState = [];

export default function history(state = initialState,actions){
    switch(actions.type){
        case PUSH_HISTORY: 
            state.push(actions.path);
            return state;
        case POP_HISTORY:
            state.pop();
            return state;
        default: 
            return state;
    }
} 