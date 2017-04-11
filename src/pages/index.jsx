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

// redux
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from 'actions';

class IndexPage extends Component {

    render() {
        const {pushHistory,popHistory,location} = this.props;
        return (
             <div className="page navbar-fixed" data-page="index">
                 <PanelComponent location={location} />
                 <Navbar {...this.props} />
                 <div className="page-content">
                    <img className="banner" src="../www/images/homepage/banner.jpg" alt="宜信财富"/>
                    <Feature pushHistory={pushHistory} popHistory={popHistory} location={location} />
                    <RecommendJob />
                    <HotJob />
                    <FamousCompany />
                    <FooterComponent location={location} />
                 </div>
             </div>
        );
    }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
    pushHistory: bindActionCreators(Actions.historyActions.pushHistory, dispatch),
    popHistory: bindActionCreators(Actions.historyActions.popHistory, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IndexPage);