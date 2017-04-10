import React,{Component} from 'react';

// navbar components
import NavbarBack from 'components/navbar-back';
import ListItem from 'components/List/ListItem';
import Tips from 'components/login-and-register/tips';

// footer component
import FooterComponent from 'components/footer';

// redux
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from 'actions';

class FindPasswdPage  extends Component {

    state = {inputValue:''}

    _onChange(event) {
        this.setState({
            inputValue:event.target.value
        });
    }
    _getCode() {
        const {inputValue} = this.state;
    }

    _generatData(step) {
        const data = [
            {
                title: '手机号',
                placeholder: '请输入注册时使用的手机号码',
                buttonText: '找回密码'
            },
            {
                title: '验证码',
                placeholder: '请输入手机接收到的验证码',
                buttonText: '验证手机',
                buttonEvent: this._getCode
            },
            {
                title: '新密码',
                placeholder: '请输入密码',
                buttonText: '重置密码'
            },
        ];
        return data[step - 1 ];
    }

    _generateProgressData(step) {
        return [
            {
                key: 1,
                val: '输入手机号',
                active: true
            },
            {
                key: 2,
                val: '手机验证',
                active: step == 2 || step == 3 ? true : false
            },
            {
                key: 3,
                val: '重置密码',
                active: step == 3 ? true : false
            }
        ];
    }

    render() {
        const {routeParams} = this.props,
            {step=1} = routeParams,
            {inputValue} = this.state,
            progressData = this._generateProgressData(step),
            data = this._generatData(step);
        return (
            <div className='page' data-page='find-passwd'>
                <NavbarBack title="手机找回" />
                <div className="page-content">
                    <div className="content">
                        {/*进度条*/}
                        <div className="progress">
                            <p className="middle-line"></p>
                            <div className="progress-inner">
                                 {
                                     progressData.map( (item,index) =>{
                                         const {key,val,active} = item;
                                            return (
                                                <div key={index} className={`progress-item ${active ? 'active' : ''}`}>
                                                    <p className="circle">{key}</p>
                                                    <p className="text">{val}</p>
                                                </div>
                                                
                                            )
                                     })
                                 }
                            </div>
                        </div>
                        {/*输入框*/}
                        <div className="list-block">
                            <ul>
                                <ListItem 
                                    title={data.title} 
                                    placeholder={data.placeholder} 
                                    onChange={this._onChange.bind(this)} 
                                    value={inputValue}
                                />
                            </ul>
                        </div>
                        <a href="javascript:void(0);" className="button">
                            {data.buttonText}
                        </a>
                        <Tips />
                        <FooterComponent />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    state: {
    }
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions.userActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FindPasswdPage);