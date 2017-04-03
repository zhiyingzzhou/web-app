/**
 * login and register's navbar
 */

import React,{Component,PropTypes} from 'react';

// navbar components
import Navbar from './navbar';

import TransitionPages from 'TransitionPages';

// 图片
import backIconPng from 'images/back-icon.png';

// redux
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from 'actions';

class NavbarBack extends Component {

    // bind event
    goBack = this._goBack.bind(this);

    static contextTypes = {
        router: PropTypes.object
    };

    _goBack(){
        let transitionType = TransitionPages.getState('left');
        const {popHistory} = this.props.actions;
        const {history} = this.props.state;
        const {router} = this.context;
        const lastPath = history[history.length - 1];
        router.push({
            pathname: lastPath ? lastPath : '/',
            state: transitionType
        });
        popHistory();
    }

    _generateLeftEle() {
        //生成left dom
        return (
            <a href="javascript:void(0);" onClick={this.goBack} >
                <img className="back-icon" src={backIconPng} alt="返回"/>
            </a>
        );
    }

    _generateCenterEle() {
        const {title} = this.props;
        //生成center dom
        return (
            <a href="javascript:void(0);">{title}</a>
        );
    }

    _generateRightEle() {
        const {right} = this.props;
        //生成right dom
        return right;
    }

    render() {
        return (
            <Navbar
                left={this._generateLeftEle()}
                center={this._generateCenterEle()}
                right={this._generateRightEle()}
            />
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
)(NavbarBack);