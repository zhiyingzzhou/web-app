import {OPEN_PANEL,CLOSE_PANEL} from 'constants/ActionTypes';

const initialState = {
    isPanelOpen: false
};

export default function panel(state = initialState,actions){
    switch(actions.type){
        case OPEN_PANEL: 
            return {...state,isPanelOpen:true}
        case CLOSE_PANEL:
            return {...state,isPanelOpen: false}
        default: 
            return state;
    }
} 