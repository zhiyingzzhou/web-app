import React,{Component,PropTypes} from 'react';

// png
import ArrowRightPng from 'images/arrow-right.png';
import MapIconPng from 'images/job-info/map-icon.png';

import J from 'utils/jump';

export default class CompanyInfoComponent  extends Component {

    static contextTypes = {
        router: PropTypes.object
    }

    render() {
        const {corpInfo={},hideTitle=false} = this.props;
        // corpname 公司名称
        // industry 公司行业
        // scope 公司规模
        // nature 公司性质
        // city 所在地
        // address 公司详细地址
        // corpid 公司id
        const {corpname='',industry='',scope='',nature='',city='',address='',corpid} = corpInfo;
        const list = [
            {
                key: '公司行业',
                value: industry
            },
            {
                key: '公司规模',
                value: scope
            },
            {
                key: '公司性质',
                value: nature
            },
            {
                key: '地区',
                value: city
            }
        ];
        return (
            <div className="list-block company-info">
                {!hideTitle && 
                    <p className="title" onClick={J.jumpPage.bind(this,`/companyInfo/${corpid}`)}>
                        {corpname}
                        <img src={ArrowRightPng} alt="查看公司详情"/>
                    </p>
                }
                <ul>
                    {
                        list.map( (item,index)=> {
                            return (
                                <li key={index}>
                                    <span style={{letterSpacing: item.key.length === 2 ? '2em' : ''}}>{item.key}</span>
                                    <span>{item.value}</span>
                                </li>
                            )
                        })
                    }
                </ul>
                <p className="address text-ellipsis">
                    <img src={MapIconPng} alt="地址"/>
                    {address}
                </p>
            </div>
        );
    }
}