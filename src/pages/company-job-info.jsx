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
            const {getjobInfo,routeParams={}} = this.props;
            const {corpid=0,jobid=0} = routeParams;
            getjobInfo(corpid,jobid);
            $('.page-content').on('scroll',$.debounce(300,this._onscroll.bind(this)));
        },400);
    }

    componentWillUnmount() {
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

    render() {
        const {data,location,actions} = this.props;
        const {isDown=false} = this.state;
        // isDelivery 是否投递简历
        const {jobInfo,corpInfo,relatedJobs=[],isDelivery=true} = data;
        return (
            <div className="page" data-page="company-job-info">
                <NavbarBack title="职位详情" right={this._generateRight()} />
                <div ref="PageContent" className="page-content" >
                    {jobInfo && <JobInfoComponents jobInfo={jobInfo} />}
                    {corpInfo && <CompanyInfoComponent corpInfo={corpInfo} />}
                    {jobInfo && <JobDescriptionComponent jobInfo={jobInfo} />}
                    {relatedJobs && relatedJobs.length > 0 ? <RelatedJobComponent relatedJobs={relatedJobs} location={location} actions={actions} /> : null}
                    {jobInfo && 
                        <a href="javascript:void(0);" className={`button ${isDown ? 'static' : 'active'} ${isDelivery ? 'disabled' : ''}`}>
                            投递简历
                        </a>
                    }
                    <FooterComponent location={location} />
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
    data: state.Job.companyJobInfo
})

const mapDispatchToProps = dispatch => ({
    getjobInfo: bindActionCreators(Actions.jobActions.getCompanyJobInfo, dispatch),
    actions: bindActionCreators(Actions.historyActions, dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CompanyJobInfoPage);