import {COMPANY_INFO} from 'constants/ActionTypes';

const initialState = {
    companyInfo: {}
};

export default function users(state = initialState,actions){
    switch(actions.type){
        case COMPANY_INFO: 
            return {...state,companyInfo:actions.companyInfo};
        default: 
            return state;
    }
} 