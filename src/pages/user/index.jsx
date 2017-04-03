import React,{Component} from 'react';

// navbar components
import NavbarBack from 'components/navbar-back';

// redux
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from 'actions';

class UserIndexPage  extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <div className='page' data-page='personal'>
                <NavbarBack title="个人中心" />
                <div className="page-content">
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
)(UserIndexPage);