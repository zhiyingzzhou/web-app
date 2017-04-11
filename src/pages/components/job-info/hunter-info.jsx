import React,{Component,PropTypes} from 'react';

// png
import ArrowRightPng from 'images/arrow-right.png';
import MapIconPng from 'images/job-info/map-icon.png';

import J from 'utils/jump';

export default class HunterInfoComponent  extends Component {

    static contextTypes = {
        router: PropTypes.object
    }

    render() {
        const {hunterInfo={}} = this.props;
        // corpname 公司名称
        // industry 公司行业
        // scope 公司规模
        // nature 公司性质
        // city 所在地
        // address 公司详细地址
        // corpid 公司id
        const {username='',jobtitle='',location='',company=''} = hunterInfo;
        const list = [
            {
                key: '猎头姓名',
                value: username
            },
            {
                key: '猎头职称',
                value: jobtitle
            },
            {
                key: '所在地',
                value: location
            },
            {
                key: '就职公司',
                value: company
            }
        ];
        return (
            <div className="list-block company-info">
                <p className="title">
                    猎头信息
                </p>
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
            </div>
        );
    }
}