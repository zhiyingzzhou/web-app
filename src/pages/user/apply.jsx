import React,{Component,PropTypes} from 'react';

// navbar components
import NavbarBack from 'components/navbar-back';

// png
import arrowRightPng from 'images/arrow-right.png';

// redux
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from 'actions';

import J from 'utils/jump';

class ApplyPage  extends Component {

     static contextTypes = {
        router: PropTypes.object
    };

    componentDidMount() {
        this.props.getApplyRecord();
    }

    jumpPage(item) {
        const {jobtype=0,companyid=0,jobid=0} = item;
        if(!jobtype){
            J.jumpPage.bind(this,`/companyJobInfo/${companyid}/${jobid}`)();
        }else{
            J.jumpPage.bind(this,`/hunterJobInfo/${companyid}/${jobid}`)();
        }
    }

    render() {
        const {applyRecord=[]} = this.props;
        return (
            <div className='page' data-page='apply'>
                <NavbarBack title="申请记录" />
                <div className="page-content">
                    <div className="list-block">
                        <ul>
                            {
                                applyRecord.length > 0 && 
                                applyRecord.map( (item,index) => {
                                    const {
                                        jobname='', // 职位名称
                                        jobcity='', // 工作城市
                                        corpname='', // 公司名称
                                        createdate='', // 创建时间
                                        hjobname='', // 猎头职位名称
                                        husername='', // 猎头名称
                                        jobtype=0  //职位类型 0为公司 1为猎头
                                    } = item;
                                    return (
                                        <li key={`apply_${index}`} onClick={this.jumpPage.bind(this,item)}>
                                            <div className="item-content">
                                                <div className="item-inner">
                                                    <div className="item-title">
                                                        <div className="top">{jobtype ? hjobname : jobname}</div>
                                                        <div className="middle">{jobtype? husername : jobcity+corpname}</div>
                                                        <div className="bottom">{createdate}</div>
                                                    </div>
                                                    <div className="item-after">
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
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    applyRecord: state.User.applyRecord
})

const mapDispatchToProps = dispatch => ({
    getApplyRecord: bindActionCreators(Actions.userActions.getApplyRecord, dispatch),
    pushHistory: bindActionCreators(Actions.historyActions.pushHistory, dispatch),
    popHistory: bindActionCreators(Actions.historyActions.popHistory, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ApplyPage);

