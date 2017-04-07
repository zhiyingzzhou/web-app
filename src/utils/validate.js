import Modal from 'utils/modal';

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

    validete.prototype.validatePhoneNumber = validatePhoneNumber;

    //验证注册表单
    validete.prototype.validateRegisterForm = function() {
        const {isChecked,phoneNumber,verifycode,passWord} = this.state;
        if(phoneNumber.length === 0 ){
            Modal.openDialog('请输入您的手机号码！');
            return;
        }
        if (!validatePhoneNumber(phoneNumber)) {
            Modal.openDialog('请输入有效的手机号码！');
            return;
        }
        if(verifycode.length === 0 ) {
            Modal.openDialog('验证码不能为空！');
            return;
        }
        if(passWord.length === 0) {
            Modal.openDialog('密码不能为空！');
            return;
        }
        if(!isChecked) {
            Modal.openDialog('51金融圈协议务必同意!');
            return;
        }
        this.props.userRegisterPost({
            ...this.state
        });
    }

    //验证登录表单
    validete.prototype.validateLoginForm = function() {
        // 点击登录
        const {userName,passWord} = this.state;
        if(userName.length === 0){
            Modal.openDialog('请输入用户名！');
            return;
        }
        if(passWord.length === 0) {
            Modal.openDialog('请输入密码！');
            return;
        }
        this.props.userLoginPost({
            ...this.state
        },this);
    }
    return new validete();
})();