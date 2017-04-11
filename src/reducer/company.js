import {COMPANY_INFO,COMPANY_LIST} from 'constants/ActionTypes';

const initialState = {
    companyInfo: {},
    companyList: {}
};

export default function company(state = initialState,actions){
    switch(actions.type){
        case COMPANY_INFO: 
            return {...state,companyInfo:actions.companyInfo};
        case COMPANY_LIST:
            return {...state,companyList:actions.companyList};
        default: 
            return state;
    }
} 