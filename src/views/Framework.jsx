import React from 'react';
import TransitionPages from 'app/components/TransitionPages';

import Panel from 'utils/panel';
import Modal from 'utils/modal';

import DialogComponent from 'components/modal/dialog';

export default class Framework extends React.Component {
    
    componentDidMount() {
        $.extend($.ajaxSettings,{
            global: false,
            complete(xhr) {
                const {status=404,response} = xhr;
                if(status !== 200){
                    Modal.openDialog('抱歉！请求失败，请稍后重试！');
                }
                if(status === 200){
                    // 请求成功,判断是否返回正确的结果
                    const {returnCode,returnMsg} = JSON.parse(response);
                    if(returnCode !== 'AAAAAAA') {
                        Modal.openDialog(returnMsg);
                    }
                }
            }
        });

        // 关闭弹窗
        $('.close-toast').on('click',()=>{
            Modal.closeDialog();
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

