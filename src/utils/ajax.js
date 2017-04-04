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
        const {returnCode,returnMsg} = JSON.parse(response);
        if(returnCode === 'AAAAAAA'){
            callback($.parseJSON(response));
        }
    })
};

export const ajaxPostByToken = (url,data,getState,callback) => {
    const {User} = getState();
    data.head.type = 'h';
    data.data = data.data || {};
    data.data.token = User.baseInfo.token;
    data.data.tokenKey = User.baseInfo.tokenKey;
    ajaxPost(url,data,callback);
};