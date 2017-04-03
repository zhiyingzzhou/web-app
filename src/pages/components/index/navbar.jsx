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


import Panel from 'utils/panel';

export default class NavbarIndex extends Component {

    _generateLeftEle() {
        //生成主页left dom
        return (
            <a href="#" className="open-panel" onClick={this._openPanel}>
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

    _generateRightEle() {
        //生成主页right dom
        return (
            <img className="search" src={searchPng} alt="搜索"/>
        );
    }

    _openPanel() {
        Panel.openPanel()
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