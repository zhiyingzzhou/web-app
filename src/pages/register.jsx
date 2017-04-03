import React,{Component , PropTypes} from 'react';
// navbar
import NavbarBack from 'components/navbar-back';
//Tips
import Tips from 'components/login-and-register/tips';
//ListItem
import ListItem from 'components/List/ListItem';

// right png
import rightPng from 'images/right.png';

// utils
import U from 'utils';
// 验证表单
import V from 'utils/validate';
//跳转页面
import J from 'utils/jump';
import countDown from 'utils/countdown';
import Modal from 'utils/modal';

// redux
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from 'actions';

class RegisterPage extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    //bind event
    inputPhoneNumber = this._inputPhoneNumber.bind(this);
    inputCode = this._inputCode.bind(this);
    inputPassWord = this._inputPassWord.bind(this);
    getCode = this._getCode.bind(this);
    toRegister = this._toRegister.bind(this);

    state = {
        isChecked: false, // checkbox 默认没有选中
        phoneNumber: '',
        verifycode: '',
        passWord: '',
        codeText: '获取验证码',
        getcodeDisabled: false
    }

    componentDidMount() {
    }

    aggressProtocal() {
        // 同意协议 
        const {isChecked} = this.state;
        this.setState({
            isChecked: !isChecked
        });
    }

    _inputPhoneNumber(event) {
        //输入手机号码
        this.setState({
            phoneNumber: event.target.value
        });
    }

    _inputCode(event){
        //输入验证码
        this.setState({
            verifycode: event.target.value
        });
    }

    _inputPassWord(event) {
        //输入密码
        this.setState({
            passWord: event.target.value
        });
    }

    _getCode() {
        // 获取验证码
        const {codeText,phoneNumber} = this.state;
        // 判断是否为数字,如果为数字说明倒计时直接return false
        if(U.isNum(codeText)) return false;
        if(phoneNumber.length === 0 ){
            Modal.openToast('请输入您的手机号码！');
            return;
        }
        if(!V.validatePhoneNumber(phoneNumber)){
            Modal.openToast('请输入有效的手机号码！');
            return;
        }
        const {userGetVerifyCode} = this.props.actions;
        userGetVerifyCode(phoneNumber);
        countDown.bind(this)({
            codeText: codeText
        });
    }

    _toRegister() {
        //点击注册按钮
        const validateRegisterForm = V.validateRegisterForm.bind(this);
        validateRegisterForm();
    } 

    render() {
        const {isChecked,phoneNumber,verifycode,passWord,codeText,getcodeDisabled} = this.state;
        return (
            <div className="page" data-page="register">
                <NavbarBack title="新用户注册" right={<a className="link" onClick={J.jumpToLoginOrRegister.bind(this,'login')}>登录</a>} />
                <div className="page-content">
                    {/*表单*/}
                    <div className="list-block">
                        <ul>
                            <ListItem 
                                inputType='number'
                                title="手机" 
                                placeholder="请输入手机号码" 
                                value={phoneNumber} 
                                onChange={this.inputPhoneNumber} 
                            />
                            <ListItem 
                                title="验证码" 
                                placeholder="请输入验证码" 
                                after={<a className={`get-code ${getcodeDisabled ? 'disabled' : ''}`} onClick={this.getCode}>{codeText}</a>} 
                                value={verifycode} 
                                onChange={this.inputCode} 
                            />
                            <ListItem 
                                inputType="password" 
                                title="密码" 
                                placeholder="请输入密码" 
                                value={passWord} 
                                onChange={this.inputPassWord} 
                            />
                        </ul>
                    </div>
                    {/*协议*/}
                    <div className="protocal">
                        <div className="table-row">
                            <div style={{display:"inline-block"}} onClick={this.aggressProtocal.bind(this)}>
                                <div className={`checkbox ${isChecked ? 'active' : ''}`}>
                                    <img src={rightPng} alt=""/>
                                </div>
                                已阅读并同意
                            </div>
                            <a href="javascript:void(0);">《51金融圈协议》</a>
                        </div>
                    </div>
                    {/*注册按钮*/}
                    <a href="javascript:void(0);" className="button" onClick={this.toRegister}>
                        提交
                    </a>
                    {/*提示*/}
                    <Tips />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
  state: {
        user:state.User,
        history:state.History
    }
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({...Actions.userActions,...Actions.historyActions}, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterPage);