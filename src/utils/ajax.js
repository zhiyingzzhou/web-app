import store from 'store';
import Modal from 'utils/modal';

export const ajaxPost = (url,data,callback) => {
    data.head.type = 'h';
    $.ajax({
        type: 'post',
        url: url,
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        data: JSON.stringify(data)
    })
    .done((response)=>{
         // 关闭preloader
        if($('.modal-preloader').hasClass('modal-in')){
            Modal.closePreloader();
        }
        const {returnCode,returnMsg} = JSON.parse(response);
        if(returnCode === 'AAAAAAA'){
            callback($.parseJSON(response));
        }else{
            Modal.openDialog(returnMsg);
        }
    })
    .fail(err=>{
         // 关闭preloader
        if($('.modal-preloader').hasClass('modal-in')){
            Modal.closePreloader();
        }
        Modal.openDialog('抱歉！请求失败，请稍后重试！');
    }) 
};

export const ajaxPostByToken = (url,data,callback) => {
    const user = store.get('user');
    data.head.type = 'h';
    data.data = data.data || {};
    data.data.token = user.token;
    data.data.tokenKey = user.tokenKey;
    ajaxPost(url,data,callback);
};