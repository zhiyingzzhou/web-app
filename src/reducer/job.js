import {COMPANY_JOB_INFO,GET_JOB_LIST} from 'constants/ActionTypes';

const initialState = {
    companyJobInfo: {},
    jobList: []
};

export default function users(state = initialState,actions){
    switch(actions.type){
        case COMPANY_JOB_INFO: 
            return {...state,companyJobInfo:actions.companyJobInfo};
        case GET_JOB_LIST:
            return {...state,jobList:actions.jobList};
        default: 
            return state;
    }
} 