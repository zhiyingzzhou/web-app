import React,{Component} from 'react';

// navbar components
import NavbarBack from 'components/navbar-back';

// png
import arrowRightPng from 'images/arrow-right.png';

// redux
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from 'actions';

class ApplyPage  extends Component {

    componentDidMount() {
        this.props.getApplyRecord();
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
                                    const {jobname,jobcity,corpname,createdate} = item;
                                    return (
                                        <li key={`apply_${index}`}>
                                            <div className="item-content">
                                                <div className="item-inner">
                                                    <div className="item-title">
                                                        <div className="top">{jobname}</div>
                                                        <div className="middle">{jobcity+corpname}</div>
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
    getApplyRecord: bindActionCreators(Actions.userActions.getApplyRecord, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ApplyPage);

