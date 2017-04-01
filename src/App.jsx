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
        // Initialize your app
        var myApp = new Framework7({
            onAjaxComplete: function(xhr) {
                //ajax complete
                console.log(xhr);
            }
        });
        // Add main View
        var mainView = myApp.addView('.view-main', {
            // Enable Dom Cache so we can use all inline pages
            domCache: true,
            pushState: true
        });
        window.myApp = myApp;
        myApp.onPageBeforeAnimation('login',function(page){
            myApp.closePanel();
        });
        myApp.onPageBeforeAnimation('register',function(page){
            myApp.closePanel();
        });

        // login and register preroute router
        $$('#toRegisterPage').on('click',function(){
            const history = myApp.mainView.history;
            if(history[history.length - 2] === '#register'){
                mainView.router.back();
            }else{
                mainView.router.load({
                    pageName: 'register'
                });
            }
        });
        $$('#toLoginPage').on('click',function(){
            const history = myApp.mainView.history;
            if(history[history.length - 2] === '#login'){
                mainView.router.back();
            }else{
                mainView.router.load({
                    pageName: 'login'
                });
            }
        });
    }

    render() {
        return (
            <div id="content-inner">
                <div className="close-panel panel-overlay">
                    <a href="javascript:void(0);" className="close-panel"></a>
                </div>
                <Panel />
                 <div className="views">
                    <div className="view view-main">
                        <div className="pages">
                            <IndexPage />
                            <LoginPage {...this.props.actions} />
                            <RegisterPage />
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
