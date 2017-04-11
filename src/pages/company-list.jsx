import React,{Component,PropTypes} from 'react';

// navbar components
import NavbarBack from 'components/navbar-back';

// png
import ArrowRightPng from 'images/arrow-right.png';

// redux
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from 'actions';

import getTransition from 'utils/getTransition';
import J from 'utils/jump';

class CompanyListPage  extends Component {

    static contextTypes = {
        router: PropTypes.object
    }

    componentDidMount() {
        setTimeout(()=>{
            if(getTransition.bind(this)() === 'right'){
                this.props.getCompanyList();
            }
        },400);
    }

    _generateCompanyList() {
        const {companyList} = this.props;
        const {list=[]} = companyList;
        if(!list || list.length === 0) return null;
        return (
            <div className="list-block">
                <ul>
                    {
                        list.map((item,index)=>{
                            const {logo,corpname,city,nature,scope,id} = item;
                            return (
                                <li key={index} onClick={J.jumpPage.bind(this,`/companyInfo/${id}`)}>
                                    <div className="item-content">
                                        <div className="item-inner">
                                            <img src={logo} alt={corpname}/>
                                            <div>
                                                <div className="item-title">
                                                    <div className="top">
                                                        {corpname}
                                                    </div>
                                                    <div className="bottom text-ellipsis">
                                                        {city} | {nature} | {scope}
                                                    </div>
                                                </div>
                                                <div className="item-after">
                                                    <img src={ArrowRightPng} alt="查看详情"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

    render() {
        return (
            <div className='page' data-page='company-list'>
                <NavbarBack title="公司列表" />
                <div className="page-content">
                    {this._generateCompanyList()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    companyList: state.Company.companyList
})

const mapDispatchToProps = dispatch => ({
    pushHistory: bindActionCreators(Actions.historyActions.pushHistory, dispatch),
    popHistory: bindActionCreators(Actions.historyActions.popHistory, dispatch),
    getCompanyList: bindActionCreators(Actions.companyActions.getCompanyList, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CompanyListPage);

