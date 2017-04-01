import React from 'react';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from './actions'

// pages
import IndexPage from 'pages/index';
import LoginPage from 'pages/login';
import RegisterPage from 'pages/register';
// 侧边栏
import Panel from './panel';

class App extends React.Component {
    
    componentDidMount() {
    }

    render() {
        const {Route} = this.props;
        return (
            <div id="content-inner">
                <div className="close-panel panel-overlay">
                </div>
                <Panel />
                 <div className="views">
                    <div className="view view-main">
                        <div className="pages">
                            <Route path="/" component={IndexPage} />
                            <Route path="/login" component={LoginPage} />
                            <Route path="/register" component={RegisterPage} />
                        </div>
                    </div>
                </div>    
            </div>
        );
    }
};

const mapStateToProps = state => ({
  User: state.User
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions.userActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
