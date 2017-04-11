import React,{Component} from 'react';

export default class PromptComponent  extends Component {

    render() {
        return (
            <div className="modal modal-prompt">
                <div className="modal-inner">
                    <div className="modal-text">
                    </div>
                </div>
                <div className="modal-buttons">
                    <div className="button-inner">
                        <span className="modal-button">
                            确定
                        </span>
                    </div>
                    <div className="button-inner">
                        <span className="modal-button cancel-button">
                            取消
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}
