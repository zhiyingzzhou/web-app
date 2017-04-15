import React,{Component} from 'react';

import TitleComponent from './title.jsx';

export default class WorkComponent  extends Component {

    _getArr(item) {
        const {postcode='',starttime='',endtime='',corpname='',industry='',corptype=''} = item;
        return [
            {
                key: '职位名称',
                value: postcode
            },
            {
                key: '开始时间',
                value: starttime
            },
            {
                key: '结束时间',
                value: endtime
            },
            {
                key: '公司名称',
                value: corpname
            },
            {
                key: '公司行业',
                value: industry
            },
            {
                key: '公司性质',
                value: corptype
            }
        ]
    }

    render() {
        const {work=[]} = this.props;
        console.log(work);
        return (
            <div className='list-block workinfo info-item'>
                <TitleComponent title="工作经历" type="plus" />
                {work.length > 0 &&
                    work.map((item,index)=>{
                        return (
                                    <ul key={index}>
                                        {
                                            this._getArr(item).map((v,i)=>{
                                                return (
                                                    <li key={i}>
                                                        <span>{v.key}</span>
                                                        <span>{v.value}</span>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                )
                            })
                }
            </div>
        );
    }
}