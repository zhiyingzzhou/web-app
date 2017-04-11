import React,{Component} from 'react';

export default class DialogComponent  extends Component {

    render() {
        return (
            <div className="modal modal-dialog">
                <div className="modal-inner">
                    <div className="modal-text">
                    </div>
                </div>
                <div className="modal-buttons">
                    <span className="modal-button close-dialog">
                        确定
                    </span>
                </div>
            </div>
        );
    }
}
