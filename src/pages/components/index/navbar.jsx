/**
 * index's navbar
 */

import React,{Component} from 'react';

// navbar components
import Navbar from '../navbar';

// 图片
import menuPng from 'images/navbar/menu.png';
import logoPng from 'images/navbar/logo.png';
import searchPng from 'images/navbar/search.png';

// redux
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from 'actions';

class NavbarIndex extends Component {

    // bind event
    openPanel = this._openPanel.bind(this);

    _openPanel() {
        const {openPanel} = this.props.actions;
        openPanel();
    }

    _generateLeftEle() {
        //生成主页left dom
        return (
            <a href="#" className="open-panel" onClick={this.openPanel}>
                <img className="menu" src={menuPng} alt="菜单"/>
            </a>
        );
    }

    _generateCenterEle() {
        //生成主页center dom
        return (
            <img className="logo" src={logoPng} alt="51金融圈"/>
        );
    }

    toLink() {
        const {history} = this.props;
        history.push('/login');
    }

    _generateRightEle() {
        //生成主页right dom
        return (
            <img className="search" src={searchPng} alt="搜索" onClick={this.toLink.bind(this)}/>
        );
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
  panel: state.Panel
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions.panelActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavbarIndex);