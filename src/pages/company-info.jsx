import React,{Component} from 'react';

// navbar components
import NavbarBack from 'components/navbar-back';

// redux
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from 'actions';

// footer component
import FooterComponent from 'components/footer';

class CompanyInfoPage extends Component {

    state ={};

    componentDidMount() {
        setTimeout(()=>{
            const {getjobInfo,routeParams={}} = this.props;
            const {corpid=0,jobid=0} = routeParams;
            getjobInfo(corpid,jobid);
        },400);
    }

    render() {
        const {data,location,actions} = this.props;
        return (
            <div className="page" data-page="company-info">
                <NavbarBack title="企业详情" right={this._generateRight()} />
                <div  className="page-content" >
                </div>
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
)(CompanyInfoPage);