import Modal from 'utils/modal';
import * as types from 'constants/ActionTypes.js';

import {ajaxPost,ajaxPostByToken} from 'utils/ajax';

// 公司详情
const COMPANY_INFO = {type:types.COMPANY_INFO};
// 公司列表
const COMPANY_LIST = {type: types.COMPANY_LIST};

export const getCompanyInfo = (corpid) => (dispatch,getState) => {

    //打开preloader
    Modal.openPreloader('加载中...');

    ajaxPost(`${prefixUrl}/company`,{
        "head": {
            "transcode": "CP002"
        },
        "data": {
            companyid: corpid,
            p: 0
        }
    },(res)=>{
        dispatch($.extend(COMPANY_INFO,{companyInfo:res.data}));
    })
}

export const getCompanyList = () => (dispatch,getState) => {

    //打开preloader
    Modal.openPreloader('加载中...');
    
    ajaxPost(`${prefixUrl}/company`,{
        "head": {
            "transcode": "CP001"
        },
        "data": {
            p: 0
        }
    },(res)=>{
        dispatch($.extend(COMPANY_LIST,{companyList:res.data}));
    })
}