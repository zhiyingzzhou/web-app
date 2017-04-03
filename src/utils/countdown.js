module.exports = function(options) {
    let defaultConfig = {
        countDownTime: 60,
        codeText:'获取验证码'
    };
    const {countDownTime,codeText} = options ? options : defaultConfig;
    let time = countDownTime ? countDownTime : defaultConfig.countDownTime;
    const countDown = () => {
        setTimeout(function(){
            time--;
            this.setState({
                codeText:time
            });
            if(time < 0 ) {
                // 获取验证码按钮变为主题色
                this.setState({
                    codeText: codeText,
                    getcodeDisabled: false
                });
                return false;
            }
            countDown();
        }.bind(this),1000);
        // 获取验证码按钮变为灰色
        this.setState({
            getcodeDisabled: true
        });
    }
    countDown();
};