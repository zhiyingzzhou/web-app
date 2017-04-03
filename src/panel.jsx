import React,{Component,PropTypes} from 'react';
// 图片png
import personalPng from 'images/panel/personal.png';
import personalCenterPng from 'images/panel/personal-center.png';
import myResumePng from 'images/panel/my-resume.png';
import applyRecordPng from 'images/panel/apply-record.png';
import myCollectionPng from 'images/panel/my-collection.png';
import importResumePng from 'images/panel/import-resume.png';

//跳转页面
import J from 'utils/jump';

// redux
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from 'actions';

import Panel from 'utils/panel';

class PanelComponent extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    state = {
        recordNumber: 9
    }

    listData = [
        {
            img: personalCenterPng,
            text: '个人中心'
        },
        {
            img: myResumePng,
            text: '我的简历'
        },
        {
            img: applyRecordPng,
            text: '申请记录'
        },
        {
            img: myCollectionPng,
            text: '我的收藏'
        },
        {
            img: importResumePng,
            text: '导入简历'
        },
    ];

    generateRecordNumber() {
        // 申请记录个数
        const {recordNumber = 0} = this.state;
        if(recordNumber === 0) return null;
        return (
            <div className="record-number">
                {recordNumber}
            </div>
        )
    }

    generateFeatureList() {
        const listEle = [];
        this.listData.forEach((item,index)=>{
            listEle.push(
                <a key={`panel_item_${index}`} href="#">
                    <li className="table" key={`item_${index}`}>
                        <div className="table-cell">
                            <img src={item.img} alt={item.text} />
                            <p>{item.text}</p>
                            {item.text === '申请记录' ? this.generateRecordNumber() : null}
                        </div>
                    </li>
                </a>
            );
        });
        return listEle;
    }

    shouldComponentUpdate(nextProps,nextState) {
        return this.props.attr !== nextProps.attr;
    }

    _jumpPage(pathname) {
        Panel.closePanel();
        J.jumpToLoginOrRegister.bind(this,pathname)();
    }

    render() {
        const {attr} = this.props;
        return (
            <div className="panel panel-left panel-reveal">
                <div className="header">
                    <img src={personalPng} alt=""/>
                    <p>
                        <a onClick={this._jumpPage.bind(this,'login')}>登陆</a>
                        /
                        <a onClick={this._jumpPage.bind(this,'register')}>注册</a>
                    </p>
                </div>
                <ul className="feature-list">
                    {this.generateFeatureList()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
  state: {
        history:state.History
    }
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions.historyActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PanelComponent);

