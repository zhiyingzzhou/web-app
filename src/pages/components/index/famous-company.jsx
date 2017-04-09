import React,{Component} from 'react';

import TitleComponent from './title';

export default class  extends Component {
    render() {
        const listData = [
            'img','img','img','img'
        ];
        return (
            <div className="famous-company">
                <TitleComponent title="名企推荐" />
                <ul>
                    {
                        listData.map((item,index)=>{
                            return (
                                <li key={`item_${index}`}>
                                    <div>
                                        <img src={`images/homepage/${item}.png`} alt=""/>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <a href="javascript:void(0);" className="more">
                    查看更多
                </a>
            </div>
        );
    }
}