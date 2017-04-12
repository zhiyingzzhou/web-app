import React,{Component,PropTypes} from 'react';

// navbar components
import NavbarBack from 'components/navbar-back';

// footer component
import FooterComponent from 'components/footer';
// linkitem component
import LinkItem from 'components/List/LinkItem';

// png
import deletePng from 'images/delete.png';
import arrowRightPng from 'images/arrow-right.png';

// redux
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from 'actions';

import J from 'utils/jump';

class ResumePage extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    componentDidMount() {
        this.props.getResumeList();
    }

    render() {
        const {myResume={}} = this.props,
            {datanum=0,data} = myResume;
        return (
            <div className='page' data-page='resume'>
                <NavbarBack title="我的简历" />
                <div className="page-content">
                    <div className="list-block">
                        <ul>
                            {
                                datanum === 0 &&
                                <li>
                                    <div className="item-content">
                                        <div className="item-inner empty">
                                            <div className="item-title">目前还没有简历，<a href="javascript:void(0);" onClick={J.jumpPage.bind(this,'/user/createResume')}>去创建简历</a></div>
                                        </div>
                                    </div>
                                </li>
                            }
                            { typeof datanum === 'number' && datanum > 0 && 
                                $.parseJSON(data).map( (item,index) => {
                                    return (
                                        <li 
                                            key={index} 
                                            // 跳转到我的简历
                                            onClick={J.jumpPage.bind(this,`/user/myresume/${item.resumeid}`)}
                                        >
                                            <div className="item-content">
                                                <div className="item-inner">
                                                    <div className="item-title">
                                                        {item.resumename}
                                                    </div>
                                                    <div className="item-after">
                                                         <a href="javascript:void(0);">
                                                            <img className="delete" src={deletePng} alt="删除简历"/>
                                                        </a>
                                                        <img src={arrowRightPng} alt="查看详情"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <FooterComponent location={this.props.location} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    myResume: state.User.myResume
})

const mapDispatchToProps = dispatch => ({
    pushHistory: bindActionCreators(Actions.historyActions.pushHistory, dispatch),
    popHistory: bindActionCreators(Actions.historyActions.popHistory, dispatch),
    getResumeList: bindActionCreators(Actions.userActions.getResumeList, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResumePage);

