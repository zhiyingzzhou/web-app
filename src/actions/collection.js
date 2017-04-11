import Modal from 'utils/modal';
import * as types from 'constants/ActionTypes.js';

import {ajaxPost,ajaxPostByToken} from 'utils/ajax';

const COLLECTION_LIST = {type:types.COLLECTION_LIST};
const DELETE_COLLECTION = {type:types.DELETE_COLLECTION};

export const getCollectionList = (corpid,jobid) => (dispatch,getState) => {
    ajaxPostByToken(`${prefixUrl}/persoanl`,{
        "head": {
            "transcode": "P0003"
        }
    },(res)=>{
        dispatch($.extend(COLLECTION_LIST,{collectionList:$.parseJSON(res.data)}));
    })
}

export const deleteCollection = (id) => (dispatch,getState) => {
    ajaxPostByToken(`${prefixUrl}/persoanl`,{
        "head": {
            "transcode": "M0027"
        },
        "data": {
            "id": id
        }
    },(res)=>{
        dispatch($.extend(DELETE_COLLECTION,{collectionList:$.parseJSON(res.data)}));
    })
}