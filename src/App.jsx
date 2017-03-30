import React from 'react';
import IndexPage from 'pages/index';
import Panel from './panel';

export default class App extends React.Component {
    constructor() {
        super();
    }

    componentWillMount(){
    }

    componentDidMount() {
        // Initialize your app
        var myApp = new Framework7({
            // animateNavBackIcon:true
        });

        // Add main View
        var mainView = myApp.addView('.view-main', {
            // Enable Dom Cache so we can use all inline pages
            domCache: true,
            pushState: true,
        });

    }

    render() {
        return (
            <div id="content-inner">
                <div className="panel-overlay"></div>
                <Panel />
                 <div className="views">
                    <div className="view view-main">
                        <div className="pages">
                            <IndexPage />
                        </div>
                    </div>
                </div>    
            </div>
        );
    }
};