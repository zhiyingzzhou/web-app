import {COMPANY_JOB_INFO,GET_JOB_LIST,HUNTER_JOB_INFO} from 'constants/ActionTypes';

const initialState = {
    companyJobInfo: {},
    hunterJobInfo: {},
    jobList: []
};

export default function job(state = initialState,actions){
    switch(actions.type){
        case COMPANY_JOB_INFO: 
            return {...state,companyJobInfo:actions.companyJobInfo};
        case HUNTER_JOB_INFO:
            return {...state,hunterJobInfo:actions.hunterJobInfo};
        case GET_JOB_LIST:
            return {...state,jobList:actions.jobList};
        default: 
            return state;
    }
} 