import Modal from 'utils/modal';
import * as types from 'constants/ActionTypes.js';

import {ajaxPost,ajaxPostByToken} from 'utils/ajax';

const CRESTE_RESUME = {type:types.CRESTE_RESUME};

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