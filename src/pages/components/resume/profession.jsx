import React,{Component} from 'react';

import TitleComponent from './title.jsx';

export default class ProfessionComponent  extends Component {

    render() {
        const {postids='',functions='',sitecity='',expectsalarycode='',poststime='',selfremark=''} = this.props.profession;
        return (
            <div className='list-block profession info-item'>
                <TitleComponent title="职业意向" type="edit" />
                <ul>
                    <li>
                        <span>期望行业</span>
                        <span>{postids}</span>
                    </li>
                    <li>
                        <span>期望职位</span>
                        <span>{functions}</span>
                    </li>
                    <li>
                        <span>期望地点</span>
                        <span>{sitecity}</span>
                    </li>
                    <li>
                        <span>期望月薪</span>
                        <span>{expectsalarycode}</span>
                    </li>
                    <li>
                        <span>到岗时间</span>
                        <span>{poststime}</span>
                    </li>
                    <li>
                        <span>自我评价</span>
                        <span></span>
                    </li>
                </ul>
                <div className="text-area">
                    {selfremark}
                </div>
            </div>
        );
    }
}