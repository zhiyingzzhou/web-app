import Modal from 'utils/modal';
import * as types from 'constants/ActionTypes.js';

import store from 'store';

import {ajaxPost,ajaxPostByToken} from 'utils/ajax';

const COMPANY_JOB_INFO = {type:types.COMPANY_JOB_INFO};
const GET_JOB_LIST = {type:types.GET_JOB_LIST};

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

export const getJobList = () => (dispatch,getState) => {
    ajaxPost(`${prefixUrl}/companyjob`,{
        "head": {
            "transcode": "Q0001"
        },
        "data": {
            "areaid":"北京",
            // "industryid":"P2P/互联网金融",
            "publicdate":"近一月",
            // "keyword":"人事",
            "pageNo": 1
        }
    },(res)=>{
        dispatch($.extend(GET_JOB_LIST,{jobList:res.data}));
    })
}