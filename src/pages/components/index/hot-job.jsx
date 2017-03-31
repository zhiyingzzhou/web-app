import React, { Component } from 'react';

// 图片 png
import iconPng from 'images/homepage/icon.png';

export default class HotJob extends Component {
    state = {  }
    render() {
        return (
            <div className="hot-job">
                <p className="title">
                    <img className="icon" src={iconPng} alt="icon"/>
                    职位推荐
                </p>
                <ul>
                    
                </ul>
            </div>
        );
    }
}