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
            console.log(item);
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
                                    const {jobname='',jobcity='',corpname='',createdate='',hjobname='',husername='',jobtype=0} = item;
                                    {/*jobtype 0为公司,1为猎头*/}
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
    actions: bindActionCreators(Actions.historyActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ApplyPage);

