import {COMPANY_JOB_INFO} from 'constants/ActionTypes';

const initialState = {
    companyJobInfo: {}
};

export default function users(state = initialState,actions){
    switch(actions.type){
        case COMPANY_JOB_INFO: 
            return {...state,companyJobInfo:actions.companyJobInfo};
        default: 
            return state;
    }
} 