/**
 * login and register's navbar
 */

import React,{Component} from 'react';

// navbar components
import Navbar from '../navbar';

// 图片
import backIconPng from 'images/back-icon.png';

export default class NavbarLoginAndRegister extends Component {
    constructor() {
        super();
    }

    _generateLeftEle() {
        //生成left dom
        return (
            <a href="#" className="back">
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