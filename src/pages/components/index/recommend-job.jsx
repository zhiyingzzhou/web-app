import React,{Component} from 'react';

import TitleComponent from './title';

import arrowRightPng from 'images/arrow-right.png';

export default class IndexPage extends Component {

    generateJobList() {
        let listEle = [];
        let listData = [];
        for(var i=0;i<3;i++){
            listData.push({title:'风险控制专员',subTitle:'8-10K元/月 | 上海 | 上海玺鉴金融信息服务有限公司有限公司有限公司 '});
        }
        listData.forEach( (item,index)=> {
            listEle.push(
                <li key={`item_${index}`} className="item">
                    <div className="title">
                        <div className="top">
                            {item.title}
                        </div>
                        <div className="bottom text-ellipsis">
                            {item.subTitle}
                        </div>
                    </div>
                    <div className="after">
                        <img src={arrowRightPng} alt="详细信息"/>
                    </div>
                </li>
            );
        });
        return listEle;
    }

    render() {
        return (
            <div className="recommend-job">
                <TitleComponent title="职位推荐" />
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