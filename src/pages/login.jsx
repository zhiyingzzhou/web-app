import React,{Component} from 'react';
import {Link} from 'react-router-dom';
// navbar components
import Navbar from 'components/login-and-register/navbar';
import Tips from 'components/login-and-register/tips';
import ListItem from 'components/List/ListItem';

export default class LoginPage extends Component {
    
    state = {
        userName: '',
        passWord: ''
    }

    // bind event
    toLogin = this._toLogin.bind(this);
    inputUserName = this._inputUserName.bind(this);
    inputPassword = this._inputPassword.bind(this);

    componentDidMount() {
    }

    _toLogin() {
        const V = require('../utils/validate');
        // 点击登录按钮
        const validateLoginForm = V.validateLoginForm.bind(this);
        validateLoginForm();
    }

    _inputUserName(event) {
        // 输入用户名
        this.setState({
            userName: event.target.value
        });
    }

    _inputPassword(event) {
        // 输入密码
        this.setState({
            passWord: event.target.value
        });
    }

    render() {
        const {userName,passWord} = this.state;
        return (
            <div className={`page navbar-fixed`} data-page='login'>
                <Navbar title="登陆51金融圈" right={<Link to="/register">注册</Link>} />
                <div className="page-content">
                    {/*表单*/}
                    <div className="list-block">
                        <ul>
                            <ListItem title="用户名" placeholder="请输入用户名" onChange={this.inputUserName} value={userName} />
                            <ListItem inputType="password" title="密码" placeholder="请输入密码" onChange={this.inputPassword} value={passWord} />
                        </ul>
                    </div>
                    {/*登录按钮*/}
                    <a href="javascript:void(0);" className="button" onClick={this.toLogin}>
                        登录
                    </a>
                    {/*忘记密码*/}
                    <div className="forget-passwd">
                        <a>忘记密码</a>
                    </div>
                    {/*提示*/}
                    <Tips />
                </div>
            </div> 
        );
    }
}