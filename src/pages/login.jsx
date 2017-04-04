import React,{Component,PropTypes} from 'react';

// navbar components
import NavbarBack from 'components/navbar-back';
import Tips from 'components/login-and-register/tips';
import ListItem from 'components/List/ListItem';

// footer component
import FooterComponent from 'components/footer';

// 验证表单
import V from 'utils/validate';
//跳转页面
import J from 'utils/jump';

// redux
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from 'actions';

class LoginPage extends Component {
    
    static contextTypes = {
        router: PropTypes.object
    };

    state = {
        userName: '',
        passWord: ''
    }

    // bind event
    toLogin = this._toLogin.bind(this);
    inputUserName = this._inputUserName.bind(this);
    inputPassword = this._inputPassword.bind(this);
    onFocus = this._onFocus.bind(this);
    onBlur = this._onBlur.bind(this);

    _toLogin() {
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

    _onFocus(){
        this.setState({
            footerHidden: true
        });
    }
    _onBlur() {
        this.setState({
            footerHidden: false
        });
    }

    render() {
        const {userName,passWord,footerHidden} = this.state;
        return (
            <div className='page' data-page='login'>
                <NavbarBack title="登陆51金融圈" right={<a className="link" onClick={J.jumpToLoginOrRegister.bind(this,'register')}>注册</a>} />
                <div className="page-content">
                    {/*表单*/}
                    <div className="list-block">
                        <ul>
                            <ListItem 
                                title="用户名" 
                                placeholder="请输入用户名" 
                                onChange={this.inputUserName} 
                                value={userName} 
                                onFocus={this.onFocus} 
                                onBlur={this.onBlur}
                            />
                            <ListItem 
                                inputType="password" 
                                title="密码" 
                                placeholder="请输入密码" 
                                onChange={this.inputPassword} 
                                value={passWord} 
                                onFocus={this.onFocus} 
                                onBlur={this.onBlur}
                            />
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
                    <FooterComponent isHidden={footerHidden} />
                </div>
            </div> 
        );
    }
}

const mapStateToProps = state => ({
    History:state.History
})

const mapDispatchToProps = dispatch => ({
    pushHistory: bindActionCreators(Actions.historyActions.pushHistory, dispatch),
    popHistory: bindActionCreators(Actions.historyActions.popHistory, dispatch),
    userLoginPost: bindActionCreators(Actions.userActions.userLoginPost, dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage);