import React,{Component} from 'react';

// navbar components
import NavbarBack from 'components/navbar-back';

// redux
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from 'actions';

class JobListPage  extends Component {

    componentDidMount() {
        this.props.getJobList();
    }

    _generateList() {
        const {jobList} = this.props,
            {list=[]} = jobList;
        return (
            <div className="list-block">
                <ul>
                    {
                        list.map((item,index)=>{
                            const {mlogo,corpname='',jobname='',jobcity='',workyears='',ebid,salary} = item;
                            return (
                                <li key={index}>
                                    <div className="item-content">
                                        <div className="item-inner">
                                            <img src={mlogo} alt={corpname} />
                                            <div className="item-title">

                                            </div>
                                            <div className="item-after">

                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

    render() {
        const {jobList} = this.props,
            {list=[]} = jobList;
        return (
            <div className='page' data-page='job-list'>
                <NavbarBack title="职位列表" />
                <div className="page-content">
                    {
                        list.length > 0 ? this._generateList() : null
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    jobList: state.Job.jobList
})

const mapDispatchToProps = dispatch => ({
    getJobList: bindActionCreators(Actions.jobActions.getJobList, dispatch),
    pushHistory: bindActionCreators(Actions.historyActions.pushHistory, dispatch),
    popHistory: bindActionCreators(Actions.historyActions.popHistory, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(JobListPage);

