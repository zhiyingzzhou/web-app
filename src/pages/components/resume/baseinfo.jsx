import React,{Component} from 'react';

import TitleComponent from './title.jsx';

export default class BaseInfoComponent  extends Component {

    render() {
        const {baseinfo} = this.props;
        const {username='',livecityid='',workyears='',jobstatus=''} = baseinfo;
        return (
            <div className='list-block baseinfo info-item'>
                <TitleComponent title="基本信息" type="edit" />
                <ul>
                    <li>
                        <span>真实姓名</span>
                        <span>{username}</span>
                    </li>
                    <li>
                        <span>当前城市</span>
                        <span>{livecityid}</span>
                    </li>
                    <li>
                        <span>工作年限</span>
                        <span>{workyears}</span>
                    </li>
                    <li>
                        <span>当前状态</span>
                        <span>{jobstatus}</span>
                    </li>
                </ul>
            </div>
        );
    }
}