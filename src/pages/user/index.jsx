import React,{Component,PropTypes} from 'react';

// navbar components
import NavbarBack from 'components/navbar-back';

// footer component
import FooterComponent from 'components/footer';
// linkitem component
import LinkItem from 'components/List/LinkItem';

// jump
import J from 'utils/jump';

// redux
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from 'actions';

//Modal
import Modal from 'utils/modal';

class UserIndexPage  extends Component {

    // bind event
    logout = this._logout.bind(this);

    static contextTypes = {
        router: PropTypes.object
    };

    _logout() {
        Modal.openDialog('是否退出登录！');
    }

    componentDidMount() {
        const {personalStatistics,actions} = this.props;
        // 判断store中是否已经有个人数据统计
        if(JSON.stringify(personalStatistics) == '{}'){
            actions.getPersonalStatistics();
        }
    }
    render() {
        const {personalStatistics,location} = this.props;
        const {loginname='',resumenum=0,applynum=0,favnum=0} = personalStatistics;
        return (
            <div className='page' data-page='personal'>
                <NavbarBack title="个人中心" />
                <div className="page-content">
                    <div className="list-block">
                        <ul>
                            <LinkItem 
                                title={`欢迎您 ，${loginname}`}
                                after={
                                    <a className="create-resume center" 
                                        href="javascript:void(0);" 
                                        onClick={J.jumpPage.bind(this,'/user/createResume')}>
                                            创建简历
                                    </a>
                                }
                            />
                        </ul>
                    </div>
                    <div className="list-block my-info">
                        <ul>
                            <LinkItem 
                                title={`我的简历 <span>(${resumenum})</span>`}
                                onClick={J.jumpPage.bind(this,'/user/resume')}
                            />
                            <LinkItem 
                                title={`申请记录 <span>(${applynum})</span>`}
                                onClick={J.jumpPage.bind(this,'/user/apply')}
                            />
                            <LinkItem 
                                title={`职位收藏 <span>(${favnum})</span>`}
                                onClick={J.jumpPage.bind(this,'/user/collection')}
                            />
                        </ul>
                    </div>
                    <div className="list-block">
                        <ul>
                            <LinkItem 
                                title={'修改密码'}
                                onClick={J.jumpPage.bind(this,'/user/changePasswd')}
                            />
                        </ul>
                    </div>
                    <a href="javascript:void(0);" onClick={this.logout.bind(this)} className="logout center">
                        退出登录
                    </a>
                    <FooterComponent location={location} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    personalStatistics: state.User.personalStatistics || {}
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({...Actions.userActions,...Actions.historyActions}, dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserIndexPage);