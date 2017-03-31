import React,{Component} from 'react';

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
        // 点击登录
        const {userName,passWord} = this.state;
        if(userName.length === 0){
            alert('请输入用户名');
        }else if(passWord.length === 0) {
            alert('请输入密码');
        }else{
            const {userLogin} = this.props.actions;
            userLogin({
                userName: userName,
                passWord: passWord
            });
        }
    }

    _inputUserName(event) {
        // 输入用户名
        const {value} = event.target;
        this.setState({
            userName: value
        });
    }

    _inputPassword(event) {
        // 输入密码
        const {value} = event.target;
        this.setState({
            passWord: value
        });
    }

    render() {
        const {userName,passWord} = this.state;
        return (
            <div className="page navbar-fixed cached" data-page="login">
                <Navbar title="登陆51金融圈" right={<a href="#register">注册</a>} />
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