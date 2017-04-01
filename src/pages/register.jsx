import React,{Component} from 'react';
import {Link} from 'react-router-dom';
// navbar
import Navbar from 'components/login-and-register/navbar';
//Tips
import Tips from 'components/login-and-register/tips';
//ListItem
import ListItem from 'components/List/ListItem';

// right png
import rightPng from 'images/right.png';

// utils
import U from '../utils';
import V from '../utils/validate';
import countDown from '../utils/countdown';

export default class RegisterPage extends Component {

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
        codeText: '获取验证码'
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
        const {codeText} = this.state;
        if(U.isNum(codeText)) return false;
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
        const {isChecked,phoneNumber,verifycode,passWord,codeText} = this.state;

        return (
            <div className="page navbar-fixed" data-page="register">
                <Navbar title="新用户注册" right={<Link to="/login">登录</Link>} />
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
                                after={<a className="get-code" onClick={this.getCode}>{codeText}</a>} 
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