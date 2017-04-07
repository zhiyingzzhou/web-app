import React,{Component,PropTypes} from 'react';

// png
import phonePng from 'images/telphone.png';
import letterPng from 'images/letter.png';

import J from 'utils/jump';

// redux
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from 'actions';

class FooterComponent  extends Component {

    static contextTypes = {
        router: PropTypes.object
    }

    render() {
        const {isHidden=false} = this.props;
        return (
            <div className="footer" style={{display: `${isHidden ? "none" : "block"}`}}>
                <div className="table">
                    <div className="table-cell">
                        <img src={phonePng} alt="电话"/>
                        <span>400-885-6112</span>
                    </div>
                    <div className="table-cell">
                        <img className="letter" src={letterPng} alt=""/>
                        <span className="aboutus" onClick={J.jumpPage.bind(this,'/aboutus')}>关于我们</span>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    state: {
    }
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions.historyActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FooterComponent);
