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

const getMyResume = {
    type: types.MY_RESUME
}

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

// 获取个人中心统计数据
export const getPersonalStatistics = () => (dispatch,getState) => {
    ajaxPostByToken(`${prefixUrl}/imain`,{
        "head": {
            "transcode": "I0001"
        }
    },(res)=>{
        console.log(res);
    })
}

//获取简历列表
export const getResumeList = () => (dispatch,getState) => {
    ajaxPostByToken(`${prefixUrl}/persoanl`,{
        "head": {
            "transcode": "P0001"
        }
    },getState,res=>{
        dispatch(
            $.extend(
                getMyResume,
                {
                    myResume:{
                        data:res.data,
                        datanum: res.datanum
                    }
                }
            )
        );
    });
}

//删除个人简历
export const deleteResumeList = () => (dispatch,getState) => {
    ajaxPostByToken(`${prefixUrl}/my`,{
        "head": {
            "transcode": "M0023"
        }
    },(res)=>{
    })
}