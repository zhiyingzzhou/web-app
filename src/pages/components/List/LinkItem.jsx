import React,{Component} from 'react';

// png
import arrowRightPng from 'images/arrow-right.png';

export default class LinkItem extends Component {


    // bind event
    onClick = this._onClick.bind(this);

    _onClick() {
        const {onClick} = this.props;
        if(onClick) {
            onClick();
        }
    }

    render(){
        const {title,after=null} = this.props;
        return (
            <li onClick={this.onClick.bind(this)}>
                <div className="item-content">
                    <div className="item-inner">
                        <div className="item-title" dangerouslySetInnerHTML={{__html:title}}>
                        </div>
                        <div className="item-after">
                            {!after ? <img src={arrowRightPng} alt="查看详情"/> : after}
                        </div>
                    </div>
                </div>
            </li>
        );
    }

};
