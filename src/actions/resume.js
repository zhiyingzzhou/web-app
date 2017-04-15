import Modal from 'utils/modal';
import * as types from 'constants/ActionTypes.js';

import {ajaxPost,ajaxPostByToken} from 'utils/ajax';

const CRESTE_RESUME = {type:types.CRESTE_RESUME};
const RESUME_BASE_INFO = {type:types.RESUME_BASE_INFO};
const RESUME_WORK = {type:types.RESUME_WORK};
const RESUME_PROFESSION = {type:types.RESUME_PROFESSION};

export const createResume = (data) => (dispatch,getState) => {
    //打开preloader
    // Modal.openPreloader('创建简历中...');

    ajaxPostByToken(`${prefixUrl}/my`,{
        "head": {
            "transcode": "M0013"
        },
        "data": data
    },(res)=>{
    })
}

// 简历基本信息查询
export const getResumeBaseInfo = (resumeid) => (dispatch,getState) => {
    //打开preloader
    Modal.openPreloader('加载中...');
    ajaxPostByToken(`${prefixUrl}/my`,{
        "head": {
            "transcode": "M0003"
        },
        "data": {
            "resumeid": resumeid
        }
    },(res)=>{
        dispatch($.extend(RESUME_BASE_INFO,{baseinfo:$.parseJSON(res.data)}));
    })
}

// 简历工作经历查询
export const getResumeWork = (resumeid) => (dispatch,getState) => {
    //打开preloader
    Modal.openPreloader('加载中...');
    ajaxPostByToken(`${prefixUrl}/my`,{
        "head": {
            "transcode": "M0005"
        },
        "data": {
            "resumeid": resumeid
        }
    },(res)=>{
        dispatch($.extend(RESUME_WORK,{work:$.parseJSON(res.data)}));
    })
}

// 简历求职意向信息
export const getResumeProfession = (resumeid) => (dispatch,getState) => {
    //打开preloader
    Modal.openPreloader('加载中...');
    ajaxPostByToken(`${prefixUrl}/my`,{
        "head": {
            "transcode": "M0004"
        },
        "data": {
            "resumeid": resumeid
        }
    },(res)=>{
        dispatch($.extend(RESUME_PROFESSION,{profession:$.parseJSON(res.data)}));
    })
}
