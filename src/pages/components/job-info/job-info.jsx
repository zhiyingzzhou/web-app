import React,{Component} from 'react';

import moment from 'utils/moment';

export default class JobInfoComponent  extends Component {

    render() {
        const {jobInfo={}} = this.props;
        // jobname 工作名称
        // jobcity 工作城市
        // createdate 创建日期
        // salary 薪水
        // ebid 学历
        // workyears 职位年限
        // age 年龄
        // language 语言
        const {jobname='',jobcity='',createdate,salary='',ebid,workyears,age,language} = jobInfo;
        let tempArr = [ebid,workyears,age,language];
        return (
            <div className="list-block job-info">
                <ul>
                    <li>
                        <div className="item-content">
                            <div className="item-inner">
                                <div className="title">
                                    <div className="top">{jobname}</div>
                                    <div className="bottom">{`${jobcity} | 2017.03.23`}</div>
                                </div>
                                <div className="after">
                                    {salary}{salary !== '面议' ? '元/月' : ''}
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <span className="square">
                        </span>
                        <span className="square">
                        </span>
                        <span className="square">
                        </span>
                    </li>
                </ul>
                <ul>
                    {
                        tempArr.map((item,index)=>{
                            return (
                                item ? <li key={index}>
                                            <i className="square"></i>
                                            <span>{item}</span>
                                        </li> : null
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}