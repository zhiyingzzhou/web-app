import Modal from 'utils/modal';
import * as types from 'constants/ActionTypes.js';

import store from 'store';

import {ajaxPost,ajaxPostByToken} from 'utils/ajax';

const COMPANY_JOB_INFO = {type:types.COMPANY_JOB_INFO};

export const getCompanyJobInfo = (corpid,jobid) => (dispatch,getState) => {

    //打开preloader
    Modal.openPreloader('加载中...');

    const {token} = store.get('user') || {};
    if(token){
        ajaxPostByToken(`${prefixUrl}/companyjob`,{
            "head": {
                "transcode": "Q0002"
            },
            "data": {
                corpid: corpid,
                jobid: jobid
            }
        },(res)=>{
            dispatch($.extend(COMPANY_JOB_INFO,{companyJobInfo:res.data}));
        })
    }
}