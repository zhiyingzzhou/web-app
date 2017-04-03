import Modal from 'utils/modal';
import * as types from 'constants/ActionTypes.js';

import {ajaxPost,ajaxPostByToken} from 'utils/ajax';
// md5 
import md5 from 'md5';
import store from 'store';

const userLogin = {
    type: types.USER_LOGIN
};

const userRegister = {
    type: types.USER_REGISTER
};

export const getUserInfo = userInfo => (dispatch,getStat) => {
    dispatch($.extend(userLogin,{user:userInfo}));
}

// 用户登录
export const userLoginPost = userInputInfo => (dispatch,getState) => {
    const {userName,passWord} = userInputInfo;
    ajaxPost(`${prefixUrl}/login`,{
            "head": {
                "transcode": "D0001"
            },
            "data": {
                "username": $.trim(userName),
                "passwd": md5($.trim(passWord))
            }
    },res=>{
        const userInfo = $.extend(res.data,{token:res.token,tokenKey:res.tokenKey});
        //本地保存用户信息
        store.set('user',userInfo);
        dispatch($.extend(userLogin,{user:userInfo}));
    })
}

// 注册获取验证码
export const userGetVerifyCode = phoneNumber => (dispatch,getState) => {
    ajaxPost(`${prefixUrl}/regphone`,{
            "head": {
                "transcode": "R0002"
            },
            "data": {
                "phone": $.trim(phoneNumber)
            }
    },(res)=>{
    });
}

// 用户注册
export const userRegisterPost = registerInfo => (dispatch,getState) => {
    const {phoneNumber,verifycode,passWord} = registerInfo;
    ajaxPost(`${prefixUrl}/regphone`,{
            "head": {
                "transcode": "R0001"
            },
            "data": {
                "verifycode": $.trim(verifycode),
                "password": $.trim(passWord),
                "phone": $.trim(phoneNumber)
            }
    },res=>{
    })
}

//获取简历列表

export const getResumeList = () => (dispatch,getState) => {
    ajaxPostByToken(`${prefixUrl}/persoanl`,{
        "head": {
            "transcode": "P0001"
        }
    },getState,res=>{
        console.log(res);
    });
}