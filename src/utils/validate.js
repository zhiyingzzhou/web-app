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
        const {userRegisterPost} = this.props.actions;
        const {isChecked,phoneNumber,verifycode,passWord} = this.state;
        if(phoneNumber.length === 0 ){
            Modal.openToast('请输入您的手机号码！');
            return;
        }
        if (!validatePhoneNumber(phoneNumber)) {
            Modal.openToast('请输入有效的手机号码！');
            return;
        }
        if(verifycode.length === 0 ) {
            Modal.openToast('验证码不能为空！');
            return;
        }
        if(passWord.length === 0) {
            Modal.openToast('密码不能为空！');
            return;
        }
        if(!isChecked) {
            Modal.openToast('51金融圈协议务必同意!');
            return;
        }
        userRegisterPost({
            ...this.state
        });
    }

    //验证登录表单
    validete.prototype.validateLoginForm = function() {
        // 点击登录
        const {userName,passWord} = this.state;
        if(userName.length === 0){
            Modal.openToast('请输入用户名！');
            return;
        }
        if(passWord.length === 0) {
            Modal.openToast('请输入密码！');
            return;
        }
        const {userLoginPost} = this.props.actions;
        userLoginPost({
            ...this.state
        });
    }
    return new validete();
})();