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
    
    state = {
        pages: [
            {
                path: '/',
                component: IndexPage,
                pageName: 'index',
                exact: true,
            },
            {
                path: '/login',
                component: LoginPage,
                pageName: 'login'
            },
            {
                path: '/register',
                component: RegisterPage,
                pageName: 'register'
            }
        ]
    }

    componentDidMount() {
    }

    generatePages() {
        const {Route} = this.props;
        const {pages} = this.state;
        let routes = [];
        pages.map( (route , index )=>{
            routes.push(
                <Route 
                    key={`route_${index}`} 
                    path={route.path} 
                    exact={route.exact}
                    component={route.component} 
                />
            )
        })
        return routes;
    }

    render() {
        return (
            <div id="content-inner">
                <div className="close-panel panel-overlay">
                </div>
                <Panel />
                 <div className="views">
                    <div className="view view-main">
                        <div className="pages">
                            {this.generatePages()}
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
