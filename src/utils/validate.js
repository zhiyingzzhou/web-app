module.exports = (function() {
    let validete = function(){};

    // 验证是否是手机号
    const validatePhoneNumber = (phoneNumber) => {
        const pattern = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
        if(phoneNumber.length != 11 || !pattern.test(phoneNumber)){
            return false;
        }else{
            return true;
        }
    }

    //验证注册表单
    validete.prototype.validateRegisterForm = function() {
        const {userRegisterPost} = this.props;
        const {isChecked,phoneNumber,code,passWord} = this.state;
        if(phoneNumber.length === 0 ){
            alert('手机号码不能为空!');
        }else if (!validatePhoneNumber(phoneNumber)) {
            alert('请输入有效的手机号码!');
        }else if(code.length === 0 ) {
            alert('验证码不能为空!');
        }else if(passWord.length === 0) {
            alert('密码不能为空');
        }else if(!isChecked) {
            alert('51金融圈协议务必同意!');
        }else{
            userRegisterPost({
                ...this.state
            });
        }
    }

    //验证登录表单
    validete.prototype.validateLoginForm = function() {
        // 点击登录
        const {userName,passWord} = this.state;
        if(userName.length === 0){
            alert('请输入用户名');
        }else if(passWord.length === 0) {
            alert('请输入密码');
        }else{
            const {userLoginPost} = this.props.actions;
            userLoginPost({
                ...this.state
            });
        }
    }
    return new validete();
})();