import React,{Component} from 'react';

// navbar
import Navbar from 'components/login-and-register/navbar';
//Tips
import Tips from 'components/login-and-register/tips';
//ListItem
import ListItem from 'components/List/ListItem';

// right png
import rightPng from 'images/right.png';

export default class RegisterPage extends Component {

    constructor() {
        super();
        // checkbox 默认没有选中
        this.state = {
            isChecked: false
        }
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

    render() {
        const {isChecked} = this.state;

        return (
            <div className="page navbar-fixed cached" data-page="register">
                <Navbar title="新用户注册" right={<a href="#login">登录</a>} />
                <div className="page-content">
                    {/*表单*/}
                    <div className="list-block">
                        <ul>
                            <ListItem title="手机" placeholder="请输入手机号码" />
                            <ListItem title="验证码" placeholder="请输入验证码" after="获取验证码" />
                            <ListItem title="密码" placeholder="请输入密码" />
                        </ul>
                    </div>
                    {/*协议*/}
                    <div className="protocal">
                        <div className="table-row" onClick={this.aggressProtocal.bind(this)}>
                            <div className={`checkbox ${isChecked ? 'active' : ''}`}>
                                <img src={rightPng} alt=""/>
                            </div>
                            已阅读并同意<a href="javascript:void(#);">《51金融圈协议》</a>
                        </div>
                    </div>
                    {/*注册按钮*/}
                    <a href="javascript:void(0);" className="button">
                        提交
                    </a>
                    {/*提示*/}
                    <Tips />
                </div>
            </div>
        );
    }
}