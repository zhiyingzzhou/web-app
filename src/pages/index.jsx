import React,{Component} from 'react';

// 侧边栏
import PanelComponent from '../panel';

// components
import Navbar from 'components/index/navbar';
import Feature from 'components/index/feature';
import RecommendJob from 'components/index/recommend-job';
import HotJob from 'components/index/hot-job';
import FamousCompany from 'components/index/famous-company';

// footer component
import FooterComponent from 'components/footer';

export default class IndexPage extends Component {

    render() {
        return (
             <div className="page navbar-fixed" data-page="index">
                 <PanelComponent location={location} />
                 <Navbar {...this.props} />
                 <div className="page-content">
                    <img className="banner" src="../www/images/homepage/banner.jpg" alt="宜信财富"/>
                    <Feature />
                    <RecommendJob />
                    <HotJob />
                    <FamousCompany />
                    <FooterComponent location={location} />
                 </div>
             </div>
        );
    }
}