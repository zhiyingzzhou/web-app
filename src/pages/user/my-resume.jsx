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
// 职业意向区域
import ProfessionComponent from 'components/resume/profession';
// 语言能力区域
import LanguageComponent from 'components/resume/language';
// 项目经验区域
import ProjectComponent from 'components/resume/project';
// 培训经历区域
import TrainComponent from 'components/resume/train';
// 证书区域
import CertificateComponent from 'components/resume/certificate';
// 附加信息区域
import ExtraComponent from 'components/resume/extra';
// 高级人才信息区域
import TalentComponent from 'components/resume/talent';

// footer component
import FooterComponent from 'components/footer';

class MyResumePage  extends Component {

    componentDidMount() {
        const {routeParams} = this.props,
            {resumeid} = routeParams;
        setTimeout(()=>{
            const {actions} = this.props;
            // 基本信息
            actions.getResumeBaseInfo(resumeid);
            // 工作经历
            actions.getResumeWork(resumeid);
            // 职业意向
            actions.getResumeProfession(resumeid);
        },400);
    }

    render() {
        const {resume,location} = this.props;
        const {baseinfo,work,profession} = resume;
        return (
            <div className='page' data-page='my-resume'>
                <NavbarBack title="我的简历1" />
                <div className="page-content">
                    <ProgressComponent baseinfo={baseinfo} />
                    <BaseInfoComponent baseinfo={baseinfo} />
                    <WorkComponent work={work} />
                    <EducationComponent />  
                    <ProfessionComponent profession={profession} />
                    <LanguageComponent />
                    <ProjectComponent />
                    <TrainComponent />
                    <CertificateComponent />
                    <ExtraComponent />
                    <TalentComponent />
                    <a href="javascript:void(0);" className="button">保存</a>
                    <FooterComponent location={location} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    resume: state.Resume
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions.resumeActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyResumePage);