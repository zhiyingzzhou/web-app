import React,{Component} from 'react';

// 图片
import menuPng from 'images/navbar/menu.png';
import logoPng from 'images/navbar/logo.png';
import searchPng from 'images/navbar/search.png';

export default class Navbar extends Component {
    constructor() {
            super();
    }

    render() {
        return (
            <div className="navbar">
                <div className="navbar-inner">
                    <div className="left">
                        <a href="#" className="open-panel">
                            <img src={menuPng} alt="菜单"/>
                        </a>
                    </div>
                    <div className="center">
                        <img src={logoPng} alt="51金融圈"/>
                    </div>
                    <div className="right">
                        <img src={searchPng} alt="搜索"/>
                    </div>
                </div>
            </div>  
        );
    }
}