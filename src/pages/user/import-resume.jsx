import React,{Component} from 'react';

// navbar components
import NavbarBack from 'components/navbar-back';

// ListItem
import ListItem from 'components/List/ListItem';

// footer component
import FooterComponent from 'components/footer';

// png
import MorePng from 'images/create-resume/more.png';

// data
import data from 'data/resume-source';

import Modal from 'utils/modal';
import Picker from 'utils/picker';

// redux
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from 'actions';

class ImportResumePage extends Component {

    state = {
        name: '',
        pwd: ''
    }

    // bind event
    inputName = this._inputName.bind(this);
    inputPasswd = this._inputPasswd.bind(this);
    importResume = this._importResume.bind(this);

    _generateAfter() {
        return (
            <div className="item-after">
                <img src={MorePng} alt="选择来源"/>
            </div>
        );
    }
    _inputName(event) {
        const value = event.target.value;
        if(value == ' ') return false;
        this.setState({
            name: value
        });
    }
    _inputPasswd(event) {
        const value = event.target.value;
        if(value == ' ') return false;
        this.setState({
            pwd: value
        });
    }

    _getType(key) {
        const mapObj = {
            '前程无忧': 'my51job',
            '智联招聘': 'myZL',
            '猎聘网': 'myLiePin',
            '中华英才网': 'myChinaHr'
        }
        return mapObj[key];
    }

    _importResume() {
        const {name,pwd} = this.state;
        const resumeSource = $('#resume-source').val();
        if(resumeSource.length === 0){
            Modal.openDialog('请选择导入来源！');
            return false;
        }
        if(name.length === 0){
            Modal.openDialog('用户名不能为空！');
            return false;
        }
        if(pwd.length === 0){
            Modal.openDialog('密码不能为空！');
            return false;
        }
        this.props.createResume({
            type: this._getType(resumeSource),
            userName: name,
            password: pwd
        });
    }

    render() {
        const {location} = this.props,
            {name,pwd} = this.state;
        return (
            <div className="page navbar-fixed cached" data-page="import-resume">
                <NavbarBack title="导入简历" />
                <div className="page-content">
                    <div className="list-block">
                        <ul>
                            <ListItem 
                                title="来源" 
                                after={this._generateAfter()}
                                placeholder="请选择来源"
                                readOnly={true}
                                inputId="resume-source"
                                onClick={Picker.show.bind(this,"resume-source",data)}
                            />
                            <ListItem 
                                title="用户名" 
                                onChange={this.inputName} 
                                value={name} 
                                placeholder="请输入用户名"
                            />
                            <ListItem 
                                title="密码"
                                inputType="password"
                                onChange={this.inputPasswd} 
                                value={pwd}
                                placeholder="请输入密码" 
                            />
                        </ul>
                    </div>
                    <a href="javascript:void(0);" className="button" onClick={this.importResume}>
                        提交
                    </a>
                    <FooterComponent location={location}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
    createResume: bindActionCreators(Actions.resumeActions.createResume, dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImportResumePage);