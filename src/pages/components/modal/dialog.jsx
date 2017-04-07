import React,{Component} from 'react';

export default class DialogComponent  extends Component {

    render() {
        return (
            <div className="modal">
                <div className="modal-inner">
                    <div className="modal-text">
                    </div>
                </div>
                <div className="modal-buttons">
                    <span className="modal-button close-toast">
                        确定
                    </span>
                </div>
            </div>
        );
    }
}
