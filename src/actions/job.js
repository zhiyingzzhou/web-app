import Modal from 'utils/modal';
import * as types from 'constants/ActionTypes.js';

import store from 'store';

import {ajaxPost,ajaxPostByToken} from 'utils/ajax';

const COMPANY_JOB_INFO = {type:types.COMPANY_JOB_INFO};
const HUNTER_JOB_INFO = {type:types.HUNTER_JOB_INFO};
const GET_JOB_LIST = {type:types.GET_JOB_LIST};

export const getCompanyjobInfo = (corpid,jobid) => (dispatch,getState) => {
    // 查看企业职位详细
    const {Job} = getState();
    if(!Job.companyJobInfo[corpid+jobid]){
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
                dispatch($.extend(
                    COMPANY_JOB_INFO,
                    {
                        data:res.data,
                        corpid: corpid,
                        jobid: jobid
                    }
                ));
            })
        }
    }
}

export const getHunterjobInfo = (corpid,jobid) => (dispatch,getState) => {
    // 查看猎头职位详细
    //打开preloader
    Modal.openPreloader('加载中...');

    const {token} = store.get('user') || {};
    if(token){
        ajaxPostByToken(`${prefixUrl}/hunterjob`,{
            "head": {
                "transcode": "L0002"
            },
            "data": {
                corpid: corpid,
                jobid: jobid
            }
        },(res)=>{
            dispatch($.extend(HUNTER_JOB_INFO,{hunterJobInfo:res.data}));
        })
    }
}

export const getJobList = () => (dispatch,getState) => {
    //打开preloader
    Modal.openPreloader('加载中...');
    
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