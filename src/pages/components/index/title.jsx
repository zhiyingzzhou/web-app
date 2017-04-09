import React,{Component} from 'react';

// 图片
import iconPng from 'images/homepage/icon.png';

export default class TitleComponent  extends Component {

    render() {
        const {title} = this.props;
        return (
            <p className="title">
                <img className="icon" src={iconPng} alt="icon"/>
                {title}
            </p>
        );
    }
}