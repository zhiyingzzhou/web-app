import React,{Component,PropTypes} from 'react';

// 图片
import jobPng from 'images/homepage/job.png';
import companyPng from 'images/homepage/company.png';
import hunterPng from 'images/homepage/hunter.png';
import messagePng from 'images/homepage/message.png';

import J from 'utils/jump';

export default class IndexPage extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    listData = [
        {img:jobPng,text:'找职位',path:'/jobList'},
        {img:companyPng,text:'找公司',path:'/companyList'},
        {img:hunterPng,text:'找猎头'},
        {img:messagePng,text:'金融快讯'}
    ]

    generateList() {
        let listEle = [];
        this.listData.forEach( (item,index)=>{
            listEle.push(
                <li key={`feature_item_${index}`} className="feature-item" onClick={J.jumpPage.bind(this,item.path)}>
                    <img src={item.img} alt=""/>
                    <p>{item.text}</p>
                </li>
            )
        })
        return listEle;
    }

    render() {
        const jobNumber = 2643;
        return (
            <div className="feature">
                <p className="title">本周更新职位<span>{jobNumber}</span>个</p>
                <ul className="feature-list">
                    {this.generateList()}
                </ul>
            </div>
        );
    }
}