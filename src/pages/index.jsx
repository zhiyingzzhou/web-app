import React,{Component} from 'react';

// components
import Navbar from 'components/index/navbar';
import Feature from 'components/index/feature';
import RecommendJob from 'components/index/recommend-job';
import HotJob from 'components/index/hot-job';

export default class IndexPage extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
    }

    render() {
        return (
             <div className="page navbar-fixed" data-page="index">
                 <Navbar />
                 <div className="page-content">
                    <img className="banner" src="../www/images/homepage/banner.jpg" alt="宜信财富"/>
                    <Feature />
                    <RecommendJob />
                    <HotJob />
                 </div>
             </div>
        );
    }
}