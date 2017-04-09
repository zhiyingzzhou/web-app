import React, { Component } from 'react';

import TitleComponent from './title';

// data
import data from 'data/hot-job';

export default class HotJob extends Component {
    state = {  }

    generateJobList() {
        return (
            <li>
               <div>银行职位</div>
               <ul>
                   
               </ul>
            </li>
        )
    }
    render() {
        return (
            <div className="hot-job">
                <TitleComponent title="热门职位" />
                <ul>
                    {this.generateJobList()}
                </ul>
                <a href="javascript:void(0);" className="more">
                    查看更多
                </a>
            </div> 
        );
    }
}