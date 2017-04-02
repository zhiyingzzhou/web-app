import * as types from 'constants/ActionTypes.js';

const userLogin = () => ({
    type: types.USER_LOGIN
});

const userRegister = () => ({
    type: types.USER_REGISTER
});

export const userLoginPost = userInfo => (dispatch,getState) => {
    const {userName,passWord} = userInfo;
    $$.post(`${prefixUrl}/mobile/api/login`,JSON.stringify({
        "head": {
            "transcode": "D0001",
            "type": "h"
        },
        "data": {
            "username": userName,
            "passwd": passWord
        }
    }))
    .then((err,text,xhr)=>{
        if(err) {
            alert('m(-_-)m  出错了!');
        }else{
            const res = JSON.parse(text);
            if(xhr.status === 200) {
                if(res.returnCode != 'AAAAAAA') {
                    alert(res.returnMsg);
                }
            }
        }
            // console.log(res);
            // const {returnCode,returnMsg} = JSON.parse(res);
            // if(returnCode != 'AAAAAAA') {
            //     alert(returnMsg);
            // }else{
                
            // }
    });
}

export const userRegisterPost = registerInfo => (dispatch,getState) => {
    const {phoneNumber,verifycode,passWord} = registerInfo;
    $$.post(`${prefixUrl}/mobile/api/regphone`,JSON.stringify({
            "head": {
                "transcode": "R0001",
                "type": "h"
            },
            "data": {
                "verifycode": verifycode,
                "password": passWord,
                "phone": phoneNumber
            }
        }),(res,statusCode)=>{

        });
}
