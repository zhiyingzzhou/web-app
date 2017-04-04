import React,{Component} from 'react';

// png
import phonePng from 'images/telphone.png';
import letterPng from 'images/letter.png';

export default class Footer  extends Component {

    render() {
        return (
            <div className="footer">
                <div className="table">
                    <div className="table-cell">
                        <img src={phonePng} alt="电话"/>
                        <span>400-885-6112</span>
                    </div>
                    <div className="table-cell">
                        <img className="letter" src={letterPng} alt=""/>
                        <span className="aboutus">关于我们</span>
                    </div>
                </div>
            </div>
        );
    }
}
