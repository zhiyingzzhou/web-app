import React,{Component,PropTypes} from 'react';

// png
import rightPng from 'images/right.png';

import Modal from 'utils/modal';
import J from 'utils/jump';

export default class SelectResumeComponent  extends Component {

    // bind event
    closePrompt = this._closePrompt.bind(this);
    applyJob = this._applyJob.bind(this);

    _closePrompt() {
        const {closePrompt} = this.props;
        if(closePrompt){
            closePrompt();
        }
    }
    
    _applyJob() {
        // 申请职位
         const {selectResumeid} = this.state,
            {sendResume} = this.props;
        if(!selectResumeid){
            Modal.openDialog('请选择要投递的简历！');
        }else if(sendResume){
            sendResume(selectResumeid);
        }
    }

    state = {}

    static contextTypes = {
        router: PropTypes.object
    };

    selectRadio(resumeid) {
        this.setState({
            selectResumeid: resumeid
        });
    }

    _getResumeList() {
        const {selectResumeid} = this.state,
            {resumesList} = this.props;
        if(resumesList.length === 0){
            return (
                <ul>
                    <li>
                        <div className="item-title">
                            目前还没有简历，
                            <a 
                                href="javascript:void(0);"
                                onClick={J.jumpPage.bind(this,'/user/createResume')}
                            >去创建简历</a>
                        </div>
                    </li>
                </ul>
            )
        }
        return (
            <ul>
                {
                    resumesList.map( (item,index)=>{
                        const {resumename,resumeid} = item;
                        return (
                            <li key={index}>
                                <div className="item-title">
                                    {resumename}
                                </div>
                                <div className="item-after">
                                    <div 
                                        className={`radio ${selectResumeid && selectResumeid === resumeid ? 'active' : ''}`} 
                                        onClick={this.selectRadio.bind(this,resumeid)}
                                    >
                                        <img src={rightPng}/>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    render() {
        return (
            <div className='select-resume' >
                <p className="title">
                    请选择简历
                </p>
                {this._getResumeList()}
                <div className="buttons">
                    <a className="btn" onClick={this.closePrompt}>
                        关闭
                    </a>
                    <a className="btn" onClick={this.applyJob}>
                        立即申请
                    </a>
                </div>
            </div>
        );
    }
}

