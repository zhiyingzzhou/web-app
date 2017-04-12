import React,{Component} from 'react';

// png 
import searchIcon from 'images/search.png';

export default class SearchComponent  extends Component {
    render() {
        return (
            <div className='search'>
                <div className="item-input">
                    <input type="text" placeholder="请输入关键词，如：销售总监" />
                </div>
                <div className="item-after">
                    <a href="javascript:void(0);">
                        <img src={searchIcon} alt="搜索" />
                    </a>
                </div>
            </div>
        );
    }
}

