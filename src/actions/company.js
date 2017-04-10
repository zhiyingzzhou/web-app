import Modal from 'utils/modal';
import * as types from 'constants/ActionTypes.js';

import {ajaxPost,ajaxPostByToken} from 'utils/ajax';

const COMPANY_INFO = {type:types.COMPANY_INFO};

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