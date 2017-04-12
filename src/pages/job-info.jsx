import React,{Component} from 'react';

// navbar components
import NavbarBack from 'components/navbar-back';

// redux
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from 'actions';

// png
import CollectionPng from 'images/job-info/collectiion.png';

//职位详情
import JobInfoComponents from 'components/job-info/job-info';
// 公司详情
import CompanyInfoComponent from 'components/job-info/company-info';
// 猎头详情
import HunterInfoComponent from 'components/job-info/hunter-info';
// 职位描述
import JobDescriptionComponent from 'components/job-info/job-description';
// 相关职位推荐
import RelatedJobComponent from 'components/job-info/related-job';

import getTransition from 'utils/getTransition';

import Modal from 'utils/modal';

// footer component
import FooterComponent from 'components/footer';

// 选择简历弹窗
import SelectResumeComponent from 'components/select-resume';

class CompanyJobInfoPage extends Component {

    state = {}

    //bind event
    collectionJob = this._collectionJob.bind(this);
    applyJob = this._applyJob.bind(this);
    closePrompt = this._closePrompt.bind(this);
    sendResume = this._sendResume.bind(this);

    _collectionJob() {
        // 收藏职位
        const {jobInfo,isLogin} = this._getData();
        if(isLogin){
            const {jobid,corpid} = jobInfo;
            this.props.collectionJob(jobid,corpid,this._getPath());
        }else{
            Modal.openPrompt('你还没有登录,是否去登录？');
        }
    }

    _applyJob() {
        // 申请职位
        const {isLogin} = this._getData();
        if(isLogin){
            // 显示弹窗
            this.setState({
                showModal: true
            });
        }else{
            Modal.openPrompt('你还没有登录,是否去登录？');
        }
    }

    _sendResume(resumeid) {
        const {applyJob} = this.props,
            {jobInfo} = this._getData(),
            {jobid,corpid} = jobInfo;
        this.setState({
            showModal: false
        });
        applyJob(jobid,resumeid,corpid,this._getPath());
    }

    componentDidMount() {
        setTimeout(()=>{
            const {getCompanyjobInfo,getHunterjobInfo,location,routeParams={}} = this.props;
            const {corpid=0,jobid=0} = routeParams;
            if(getTransition.bind(this)() === 'right'){
                // 判断是获取猎头职位详细还是企业职位详细
                if(this._getPath() === 'companyJobInfo'){
                    getCompanyjobInfo(corpid,jobid);
                }else if(this._getPath() === 'hunterJobInfo'){
                    getHunterjobInfo(corpid,jobid);
                }
            }
            // 添加debounce,防止滚动频繁
            $('.page-content').on('scroll',$.debounce(300,this._onscroll.bind(this)));
        },400);
    }
    _generateRight() {
        const {isFav=false} = this._getData();
        return !isFav ? (
            <a href="javascript:void(0);" onClick={this.collectionJob}>
                <img src={CollectionPng} alt="收藏"/>
            </a>
        ) : (
            <a href="javascript:void(0);">已收藏</a>
        );
    }
    _onscroll() {
        const {scrollTop,clientHeight,scrollHeight} = this.refs.PageContent;
        const distance = parseInt($('html').css('font-size'))*Math.floor(220/75);
        if(scrollTop + clientHeight > scrollHeight - distance){
            this.setState({
                isDown: true
            });
        }else{
            this.setState({
                isDown: false
            });
        }
    }
    _getPath() {
        // 从路径获取是企业职位详情还是猎头职位详情 hunterJobInfo 猎头职位先前 companyJobInfo 企业职位详情
        const {location} = this.props;
        const {pathname=''} = location;
        return pathname.split('/')[1] || '';
    }

    _getData() {
        const {companyJobInfo,hunterJobInfo} = this.props.data;
        const {corpid,jobid} = this.props.routeParams;
        if(this._getPath() === 'companyJobInfo'){
            return companyJobInfo[corpid+jobid] || {};
        }else if(this._getPath() === 'hunterJobInfo'){
            return hunterJobInfo;
        }
        return {};
    }

    _closePrompt() {
        this.setState({
            showModal: false
        });
    }

    render() {
        const {location,pushHistory,popHistory} = this.props,
        {isDown=false,showModal=false} = this.state; // isDown 判断页面是否已经滚动到底部(true已经滚动到底部,false没有滚动到底部)
        // isDelivery 是否投递简历
        const {
            jobInfo,
            corpInfo,
            relatedJobs=[],
            isDelivery=true, //是否投递 true: 已投递 false: 未投递
            hunterInfo,
            resumesList=[], //简历列表
            isLogin //是否登录
        } = this._getData();
        return (
            <div className="page" data-page="job-info">
                <NavbarBack title="职位详情" right={this._generateRight()} />
                <div ref="PageContent" className="page-content" >
                    {/*职位信息*/}
                    {jobInfo && 
                        <JobInfoComponents 
                            jobInfo={jobInfo} 
                        />
                    }
                    {/*公司信息*/}
                    {!hunterInfo && 
                        <CompanyInfoComponent 
                            location={location} 
                            pushHistory={pushHistory} 
                            popHistory={popHistory} 
                            corpInfo={corpInfo} 
                        />
                    }
                    {/*猎头信息*/}
                    {hunterInfo && 
                        <HunterInfoComponent 
                            location={location} 
                            pushHistory={pushHistory} 
                            popHistory={popHistory} 
                            hunterInfo={hunterInfo} 
                        />
                    }
                    {/*职位要求*/}
                    {jobInfo && 
                        <JobDescriptionComponent jobInfo={jobInfo} />
                    }
                    {/*相关职位推荐*/}
                    {relatedJobs && relatedJobs.length > 0 ? 
                        <RelatedJobComponent 
                            location={location} 
                            pushHistory={pushHistory} 
                            popHistory={popHistory} 
                            relatedJobs={relatedJobs} 
                        /> 
                        : null
                    }
                    {jobInfo && 
                        <a 
                            href="javascript:void(0);" 
                            className={`button ${isDown ? 'static' : 'active'} ${isDelivery ? 'disabled' : ''}`}
                            onClick={this.applyJob}
                        >
                            投递简历
                        </a>
                    }
                    {jobInfo && 
                        <FooterComponent location={location} />
                    }
                </div>
                <div 
                    className="resume-overlay" 
                    style={{opacity:`${showModal ? 1 : 0}`,visibility:`${showModal ? 'visible' : 'hidden'}`}}
                ></div>
                {isLogin && showModal  && 
                    <SelectResumeComponent 
                        resumesList={resumesList} 
                        location={location}
                        pushHistory={pushHistory} 
                        popHistory={popHistory} 
                        closePrompt={this.closePrompt} //关闭弹窗
                        sendResume={this.sendResume}
                    />
                }
                {/*{jobInfo && 
                    <a href="javascript:void(0);" className={`button active ${isDelivery ? 'disabled' : ''}`} style={{visibility: !isDown ? 'initial' : 'hidden' }}>
                        投递简历
                    </a>
                }*/}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    data: {
        companyJobInfo: state.Job.companyJobInfo,
        hunterJobInfo : state.Job.hunterJobInfo
    }
})

const mapDispatchToProps = dispatch => ({
    getCompanyjobInfo: bindActionCreators(Actions.jobActions.getCompanyjobInfo, dispatch),
    getHunterjobInfo: bindActionCreators(Actions.jobActions.getHunterjobInfo, dispatch),
    collectionJob: bindActionCreators(Actions.jobActions.collectionJob, dispatch),
    applyJob: bindActionCreators(Actions.jobActions.applyJob, dispatch),
    pushHistory: bindActionCreators(Actions.historyActions.pushHistory, dispatch),
    popHistory: bindActionCreators(Actions.historyActions.popHistory, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CompanyJobInfoPage);