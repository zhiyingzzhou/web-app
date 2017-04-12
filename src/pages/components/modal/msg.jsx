import React,{Component} from 'react';

import successPng from 'images/success.png';
import errorPng from 'images/error.png';

export default class MessageComponent  extends Component {

    render() {
        return (
            <div className="modal-message">
                <img src={successPng} className="success" alt="成功"/>
                <img src={errorPng} className="error" alt="失败"/>
                <div className="modal-text">
                    收藏职位失败
                </div>
            </div>
        );
    }
}
