import React,{Component} from 'react';

// navbar components
import NavbarBack from 'components/navbar-back';

// redux
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from 'actions';

// 公司详细信息
import CompanyInfoComponent from 'components/job-info/company-info';
import CompanyDescriptionComponent from 'components/company-info/company-description';

import getTransition from 'utils/getTransition';

// 职位列表
import RelatedJobComponent from 'components/job-info/related-job';

// footer component
import FooterComponent from 'components/footer';

class CompanyInfoPage extends Component {

    state = {
        selectedIndex: 0
    };

    componentDidMount() {
        setTimeout(()=>{
            const {getCompanyInfo,routeParams={}} = this.props;
            const {corpid=0} = routeParams;
            if(getTransition.bind(this)() === 'right'){
                getCompanyInfo(corpid);
            }
        },400);
    }

    _changeType(index) {
        const {selectedIndex} = this.state;
        if(selectedIndex != index){
            this.setState({
                selectedIndex: index
            });
        }
    }

    render() {
        const {data,location,pushHistory,popHistory} = this.props,
            {corpinfo={},companyJobs} = data,
            {logo='',corpname='',description} = corpinfo,
            {selectedIndex} = this.state;
        return (
            <div className="page" data-page="company-info">
                <NavbarBack title="企业详情" />
                <div className="page-content">
                    <div className="header" style={{backgroundImage:"url(images/company-info/banner.jpg)"}}>
                        <img src={logo} alt={corpname} />
                        <p>{corpname}</p>
                    </div>
                    <div className="tabbar">
                        <div className={`tab-item ${!selectedIndex ? 'active' : '' }`} onClick={this._changeType.bind(this,0)}>
                            公司概况
                        </div>
                        <div className={`tab-item ${selectedIndex ? 'active' : '' }`} onClick={this._changeType.bind(this,1)}>
                            热招职位
                        </div>
                    </div>
                    {!selectedIndex &&
                        <div className="corpInfo">
                            <CompanyInfoComponent corpInfo={corpinfo} hideTitle={true} />
                            <CompanyDescriptionComponent description={description} />
                        </div>
                    }
                    {!!selectedIndex && companyJobs && companyJobs.length > 0 &&
                        <RelatedJobComponent isCompanyPage={true} location={location} pushHistory={pushHistory} popHistory={popHistory} corpname={corpname} relatedJobs={companyJobs} />
                    }
                    <FooterComponent location={location} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    data: state.Company.companyInfo
})

const mapDispatchToProps = dispatch => ({
    getCompanyInfo: bindActionCreators(Actions.companyActions.getCompanyInfo, dispatch),
    pushHistory: bindActionCreators(Actions.historyActions.pushHistory, dispatch),
    popHistory: bindActionCreators(Actions.historyActions.popHistory, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CompanyInfoPage);