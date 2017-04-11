import React from 'react';
import TransitionPages from 'app/components/TransitionPages';

import Panel from 'utils/panel';
import Modal from 'utils/modal';

import DialogComponent from 'components/modal/dialog';
import PromptComponent from 'components/modal/prompt';

export default class Framework extends React.Component {
    
    componentDidMount() {
        $.extend($.ajaxSettings,{
            global: false
        });
        // 关闭dialog
        $('.close-dialog').on('click',()=>{
            Modal.closeDialog();
        });

        // 关闭prompt
        $('.cancel-button').on('click',()=>{
            Modal.closePrompt();
        });
        
    }

    shouldComponentUpdate(nextProps,nextState) {
        return this.props !== nextProps;
    }

    _closePanel() {
        //关闭侧边栏
        Panel.closePanel();
    }

    render() {
        const {location} = this.props;
        return (
            <div id="content-inner">
                <div onClick={this._closePanel} className="panel-overlay">
                </div>
                <div className="views">
                    <div className="view">
                        <TransitionPages location={location}>
                            {this.props.children}
                        </TransitionPages>
                    </div>
                </div>
                <div className="modal-overlay">
                </div>
                <DialogComponent />
                <PromptComponent />
                <div className="modal-preloader">
                    <div className="modal-inner">
                        <div className="modal-title">数据加载中</div>
                        <div className="modal-text">
                            <div className="preloader">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

