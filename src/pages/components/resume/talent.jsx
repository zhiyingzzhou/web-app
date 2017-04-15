import React,{Component} from 'react';

import TitleComponent from './title.jsx';

export default class TalentComponent  extends Component {

    render() {
        return (
            <div className='list-block talent info-item'>
                <TitleComponent title="高级人才信息" type="edit" />
                <ul>
                    <li>
                        <span>基本工资</span>
                        <span></span>
                    </li>
                    <li>
                        <span>年度奖金</span>
                        <span></span>
                    </li>
                    <li>
                        <span>股票</span>
                        <span></span>
                    </li>
                    <li>
                        <span>补贴/津贴</span>
                        <span></span>
                    </li>
                </ul>
            </div>
        );
    }
}