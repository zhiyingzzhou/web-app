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

// footer component
import FooterComponent from 'components/footer';

class CompanyJobInfoPage extends Component {

    state ={};

    componentDidMount() {
        setTimeout(()=>{
            const {getCompanyjobInfo,getHunterjobInfo,location,routeParams={}} = this.props;
            const {corpid=0,jobid=0} = routeParams;
            // 判断是获取猎头职位详细还是企业职位详细
            if(this._getPath() === 'companyJobInfo'){
                getCompanyjobInfo(corpid,jobid);
            }else if(this._getPath() === 'hunterJobInfo'){
                getHunterjobInfo(corpid,jobid);
            }
            // 添加debounce,防止滚动频繁
            $('.page-content').on('scroll',$.debounce(300,this._onscroll.bind(this)));
        },400);
    }
    _generateRight() {
        const {data} = this.props;
        const {isFav=false} = data;
        return !isFav ? (
            <a href="javascript:void(0);">
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
    render() {
        let cacheData;
        const {data,location,pushHistory,popHistory} = this.props,
        {companyJobInfo,hunterJobInfo} = data,
        {isDown=false} = this.state; // isDown 判断页面是否已经滚动到底部(true已经滚动到底部,false没有滚动到底部)
        // isDelivery 是否投递简历
        if(this._getPath() === 'companyJobInfo'){
            cacheData = companyJobInfo;
        }else if(this._getPath() === 'hunterJobInfo'){
            cacheData = hunterJobInfo;
        }
        const {
            jobInfo,
            corpInfo,
            relatedJobs=[],
            isDelivery=true, //是否投递 true: 已投递 false: 未投递
            hunterInfo
        } = cacheData;
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
                            className={`button ${isDown ? 'static' : 'active'} ${isDelivery ? 'disabled' : ''}`}>
                            投递简历
                        </a>
                    }
                    {jobInfo && 
                        <FooterComponent location={location} />
                    }
                </div>
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
    pushHistory: bindActionCreators(Actions.historyActions.pushHistory, dispatch),
    popHistory: bindActionCreators(Actions.historyActions.popHistory, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CompanyJobInfoPage);