import React,{Component,PropTypes} from 'react';
// 图片png
import personalPng from 'images/panel/personal.png';

//跳转页面
import J from 'utils/jump';

// redux
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from 'actions';

import store from 'store';

import Panel from 'utils/panel';

// panel data
import panelData from 'data/panel';

class PanelComponent extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    componentDidMount() {
        setTimeout(()=>{
            const user = store.get('user');
            if(user){
                this.props.actions.getUserInfo(user);
                this.props.actions.getPersonalStatistics();
            }
        },400);
    }

    generateRecordNumber(num) {
        // 申请记录个数
        return (
            <div className="record-number">
                {num}
            </div>
        )
    }

    generateFeatureList() {
        const {state} = this.props,
            {personalStatistics={}} = state.user,
            {favnum=0,resumenum=0,applynum=0} = personalStatistics,
            listEle = [];
            panelData[1].num = resumenum;
            panelData[2].num = applynum;
            panelData[3].num = favnum;
        panelData.forEach((item,index)=>{
            listEle.push(
                <a key={`panel_item_${index}`} href="javascript:void(0);" onClick={this._jumpPage.bind(this,item.pathname)}>
                    <li className="table" key={`item_${index}`}>
                        <div className="table-cell">
                            <img src={item.img} alt={item.text} />
                            <p>{item.text}</p>
                            {item.num && item.num > 0 ? this.generateRecordNumber(item.num) : null}
                        </div>
                    </li>
                </a>
            );
        });
        return listEle;
    }

    _jumpPage(pathname) {
        J.jumpPage.bind(this,`/user/${pathname}`)();
    }

    render() {
        const {state={user:{}}} = this.props,
            {baseInfo,personalStatistics={}} = state.user,
            {loginname=''} = personalStatistics;
        return (
            <div className="panel panel-left panel-reveal">
                {!baseInfo && 
                    <div className="header-with-image">
                        <img src={personalPng} alt="用户头像"/>
                        <p className="user">
                            <a onClick={this._jumpPage.bind(this,'login')}>登陆</a>
                            /
                            <a onClick={this._jumpPage.bind(this,'register')}>注册</a>
                        </p>
                    </div>
                }
                {baseInfo &&
                    <div className="header-with-text">
                        <p className="login">欢迎您，</p>
                        <p className="login">{loginname}</p>
                    </div>
                }
                <ul className="feature-list">
                    {this.generateFeatureList()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
  state: {
        user: state.User,
        history:state.History
    }
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({...Actions.historyActions,...Actions.userActions}, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PanelComponent);

