import React from 'react';
// 侧边栏
import PanelComponent from '../panel';

import TransitionPages from 'app/components/TransitionPages';

import Panel from 'utils/panel';
import Modal from 'utils/modal';
import Methods from 'utils/methods';
export default class Framework extends React.Component {
    
    componentDidMount() {
        $.extend($.ajaxSettings,{
            global: false,
            complete(xhr) {
                const {status,statusText} = xhr;
                if(status !== 200){
                    Modal.openToast('抱歉！请求失败，请稍后重试！');
                }
            }
        });

        // 关闭弹窗
        $('.close-toast').on('click',()=>{
            Modal.closeToast();
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
                <PanelComponent location={location} />
                <div className="views">
                    <div className="view">
                        <TransitionPages location={location}>
                            {this.props.children}
                        </TransitionPages>
                    </div>
                </div>
                <div className="modal-overlay">
                </div>
                <div className="modal">
                    <div className="modal-inner">
                        <div className="modal-text">
                            是否删除该项目
                        </div>
                    </div>
                    <div className="modal-buttons">
                        <span className="modal-button close-toast">
                            确定
                        </span>
                    </div>
                </div>
            </div>
        );
    }
};
