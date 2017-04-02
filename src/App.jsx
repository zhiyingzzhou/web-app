import React from 'react';

// pages
import IndexPage from 'pages/index';
import LoginPage from 'pages/login';
import RegisterPage from 'pages/register';
// 侧边栏
import Panel from './panel';

// redux
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from 'actions';

class App extends React.Component {
    
    // bind event
    closePanel = this._closePanel.bind(this);

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

    _closePanel() {
        // 关闭侧边栏
        const {closePanel} = this.props.actions;
        closePanel();
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
        const {panel} = this.props;
        return (
            <div id="content-inner" className={`${panel.isPanelOpen ? 'with-panel-left-reveal' : 'with-panel-left-reveal-out'}`}>
                <div onClick={this.closePanel} className={`panel-overlay ${panel.isPanelOpen ? 'active' : ''}`}>
                </div>
                <Panel attr={panel} />
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
  panel: state.Panel
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions.panelActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);