import Modal from 'utils/modal';
import * as types from 'constants/ActionTypes.js';

import store from 'store';

import {ajaxPost,ajaxPostByToken} from 'utils/ajax';

const COMPANY_JOB_INFO = {type:types.COMPANY_JOB_INFO};
const HUNTER_JOB_INFO = {type:types.HUNTER_JOB_INFO};
const GET_JOB_LIST = {type:types.GET_JOB_LIST};

export const getCompanyjobInfo = (corpid,jobid) => (dispatch,getState) => {
    // 查看企业职位详细

    // 获取已经保存的公司职位信息
    const {Job} = getState();
    if(!Job.companyJobInfo[corpid+jobid]){
        //打开preloader
        Modal.openPreloader('加载中...');
        const {token} = store.get('user') || {},
            data = {
                "head": {
                    "transcode": "Q0002"
                },
                "data": {
                    corpid: corpid,
                    jobid: jobid
                }
            },
            callback = res => {
                dispatch($.extend(
                    COMPANY_JOB_INFO,
                    {
                        data:res.data,
                        corpid: corpid,
                        jobid: jobid
                    }
                ));
            }
        // 判断是否登录
        if(token){
            ajaxPostByToken(`${prefixUrl}/companyjob`,data,callback)
        }else{
            ajaxPost(`${prefixUrl}/companyjob`,data,callback)
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

// 获取职位列表
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

// 收藏职位
export const collectionJob = (jobid,corpid,path) => (dispatch,getState) => {
    const uri = path == 'companyJobInfo' ? 'companyjob' : 'hunterjob';
    //打开preloader
    Modal.openPreloader('收藏中...');
    ajaxPostByToken(`${prefixUrl}/${uri}`,{
        "head": {
            "transcode": path == 'companyJobInfo' ? 'Q0004' : 'L0004' // Q0004 收藏企业职位交易码 L0004 收藏猎头职位交易码
        },
        "data": {
            "jobid":jobid+'' //将数字转为字符串
        }
    },(res)=>{
        Modal.openMsg(true,'收藏成功！');
        let {companyJobInfo} = getState().Job;
        companyJobInfo[corpid+jobid].isFav = true;
        dispatch(
            $.extend(
                COMPANY_JOB_INFO,
                {
                    data: companyJobInfo[corpid+jobid],
                    corpid: corpid,
                    jobid: jobid
                }
            )
        );
    })
}

// 投递简历
export const applyJob = (jobid,resumeid,corpid,path) => (dispatch,getState) => {
    const uri = path == 'companyJobInfo' ? 'companyjob' : 'hunterjob';
    //打开preloader
    Modal.openPreloader('投递简历中...');
    ajaxPostByToken(`${prefixUrl}/${uri}`,{
        "head": {
            "transcode": path == 'companyJobInfo' ? 'Q0003' : 'L0003'
        },
        "data": {
            "jobid":jobid+'', //将数字转为字符串
            "resumeid": resumeid
        }
    },(res)=>{
        Modal.openMsg(true,'投递简历成功');
        let {companyJobInfo} = getState().Job;
        companyJobInfo[corpid+jobid].isDelivery = true;
        dispatch(
            $.extend(
                COMPANY_JOB_INFO,
                {
                    data: companyJobInfo[corpid+jobid],
                    corpid: corpid,
                    jobid: jobid
                }
            )
        );
    })
}

