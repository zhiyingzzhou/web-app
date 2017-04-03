import React,{Component} from 'react';

// navbar components
import NavbarBack from 'components/navbar-back';

// redux
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from 'actions';

class CreateResumePage  extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <div className='page' data-page='createResume'>
                <NavbarBack title="创建简历" />
                <div className="page-content">
                </div>
            </div>
        );
    }
}

// const mapStateToProps = state => ({
//     state: {
//         user: state.User
//     }
// })

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions.userActions, dispatch)
})

export default connect(
    // mapStateToProps,
    mapDispatchToProps
)(CreateResumePage);

