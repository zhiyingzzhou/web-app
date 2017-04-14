import React,{Component} from 'react';

// navbar components
import NavbarBack from 'components/navbar-back';

// redux
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from 'actions';

// Component 
// 简历完成度区域
import ProgressComponent from 'components/resume/progress';
// 基本信息区域
import BaseInfoComponent from 'components/resume/baseinfo';
// 工作经历区域
import WorkComponent from 'components/resume/work';
// 教育经历区域
import EducationComponent from 'components/resume/education';

class MyResumePage  extends Component {

    componentDidMount() {
        const {routeParams} = this.props,
            {resumeid} = routeParams;
        setTimeout(()=>{
            this.props.getResumeBaseInfo(resumeid);
        },400);
    }

    render() {
        const {resume} = this.props;
        const {baseinfo} = resume;
        return (
            <div className='page' data-page='my-resume'>
                <NavbarBack title="我的简历1" />
                <div className="page-content">
                    <ProgressComponent baseinfo={baseinfo} />
                    <BaseInfoComponent baseinfo={baseinfo} />
                    <WorkComponent />
                    <EducationComponent />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    resume: state.Resume
})

const mapDispatchToProps = dispatch => ({
    getResumeBaseInfo: bindActionCreators(Actions.resumeActions.getResumeBaseInfo, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyResumePage);