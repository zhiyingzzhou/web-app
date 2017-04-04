import React,{Component} from 'react';

// navbar components
import NavbarBack from 'components/navbar-back';

// footer component
import FooterComponent from 'components/footer';

import arrowRightPng from 'images/arrow-right.png';

// redux
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from 'actions';

class UserIndexPage  extends Component {

    componentDidMount() {
        const {personalStatistics,getPersonalStatistics} = this.props;
        // 判断store中是否已经有个人数据统计
        if(JSON.stringify(personalStatistics) == '{}'){
            getPersonalStatistics();
        }
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.location.pathname = '/user/index';
    }

    render() {
        const {personalStatistics} = this.props;
        const {loginname='',resumenum=0,applynum=0,favnum=0} = personalStatistics;
        return (
            <div className='page' data-page='personal'>
                <NavbarBack title="个人中心" />
                <div className="page-content">
                    <div className="list-block">
                        <ul>
                            <li>
                                <div className="item-content">
                                    <div className="item-inner">
                                        <div className="item-title">欢迎您 ，{loginname}</div>
                                        <div className="item-after">
                                            <a className="create-resume center" href="javascript:void(0);">创建简历</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="list-block my-info">
                        <ul>
                            <li>
                                <div className="item-content">
                                    <div className="item-inner">
                                        <div className="item-title">
                                            我的简历 <span>({resumenum})</span>
                                        </div>
                                        <div className="item-after">
                                            <img src={arrowRightPng} alt="查看详情"/>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="item-content">
                                    <div className="item-inner">
                                        <div className="item-title">
                                            申请记录 <span>({applynum})</span>
                                        </div>
                                        <div className="item-after">
                                            <img src={arrowRightPng} alt="查看详情"/>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="item-content">
                                    <div className="item-inner">
                                        <div className="item-title">
                                            职位收藏 <span>({favnum})</span>
                                        </div>
                                        <div className="item-after">
                                            <img src={arrowRightPng} alt="查看详情"/>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="list-block">
                        <ul>
                            <li>
                                <div className="item-content">
                                    <div className="item-inner">
                                        <div className="item-title">
                                            修改密码
                                        </div>
                                        <div className="item-after">
                                            <img src={arrowRightPng} alt="查看详情"/>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <a href="javascript:void(0);" className="logout center">
                        退出登录
                    </a>
                    <FooterComponent />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    personalStatistics: state.User.personalStatistics || {}
})

const mapDispatchToProps = dispatch => ({
    getPersonalStatistics: bindActionCreators(Actions.userActions.getPersonalStatistics, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserIndexPage);