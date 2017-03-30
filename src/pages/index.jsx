import React,{Component} from 'react';

// components
import Navbar from 'components/navbar';
import Feature from 'components/index/feature';
import RecommendJob from 'components/index/recommend-job';

export default class IndexPage extends Component {
    constructor() {
        super();
    }

    render() {
        return (
             <div className="page navbar-fixed" data-page="index">
                 <Navbar />
                 <div className="page-content">
                     <img className="banner" src="../www/images/homepage/banner.jpg" alt="宜信财富"/>
                     <Feature />
                     <RecommendJob />
                 </div>
             </div>
        );
    }
}