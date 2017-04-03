import React,{Component} from 'react';

// navbar components
import NavbarBack from 'components/navbar-back';

// redux
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from 'actions';

class ResumePage extends Component {

    componentDidMount() {
        this.props.actions.getResumeList();
    }

    render() {
        return (
            <div className='page' data-page='resume'>
                <NavbarBack title="我的简历" />
                <div className="page-content">
                    <div className="list-block">
                        <ul>
                            <li>
                                <div className="item-content">
                                    <div className="item-inner">
                                        <div className="item-title">目前还没有简历</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
  state: {
        user: state.User
    }
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions.userActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResumePage);

