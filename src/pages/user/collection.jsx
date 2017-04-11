import React,{Component,PropTypes} from 'react';

// navbar components
import NavbarBack from 'components/navbar-back';

// png
import deletePng from 'images/delete.png';
import arrowRightPng from 'images/arrow-right.png';

// redux
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from 'actions';

import Modal from 'utils/modal';
import J from 'utils/jump';

class CollectionPage  extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    componentDidMount() {
        this.props.getCollectionList();
    }

    jumpPage(item) {
        const {jobtype,companyid,jobid} = item;
        if(!jobtype){
            J.jumpPage.bind(this,`/companyJobInfo/${companyid}/${jobid}`)();
        }else{
            J.jumpPage.bind(this,`/hunterJobInfo/${companyid}/${jobid}`)();
        }
    }

    deleteCollection(id,event) {
        event.stopPropagation();
        // 取消收藏
        Modal.openPrompt('是否删除此收藏记录？');
    }

    _generateList() {
        const {collectionList} = this.props;
        if(collectionList.length == 0 ) return null;
        return (
            <div className="list-block">
                <ul>
                    {
                        collectionList.map( (item,index)=>{
                            // jobtype 0为公司职位 1为猎头职位
                            const {jobtype,jobcollectionid} = item,
                            jobname = jobtype ? item.hjobname :  item.jobname,
                            jobcity = jobtype ? '' : item.jobcity,
                            corpname = jobtype ? item.husername : item.corpname;
                            return (
                                <li key={index} onClick={this.jumpPage.bind(this,item)}>
                                    <div className="item-content">
                                        <div className="item-inner">
                                            <div className="item-title">
                                                <div className="top">
                                                    {jobname}
                                                </div>
                                                <div className="middle">
                                                    {jobcity}{corpname}
                                                </div>
                                                <div className="bottom">
                                                    {item.createdate}
                                                </div>
                                            </div>
                                            <div className="item-after">
                                                <a href="javascript:void(0);" onClick={this.deleteCollection.bind(this,jobcollectionid)}>
                                                    <img src={deletePng} alt="删除收藏"/>
                                                </a>
                                                <img className="detail" src={arrowRightPng} alt="查看详情"/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }

    render() {
        return (
            <div className='page' data-page='collection'>
                <NavbarBack title="职位收藏" />
                <div className="page-content">
                    {this._generateList()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    collectionList: state.Collection.collectionList
})

const mapDispatchToProps = dispatch => ({
    pushHistory: bindActionCreators(Actions.historyActions.pushHistory, dispatch),
    popHistory: bindActionCreators(Actions.historyActions.popHistory, dispatch),
    getCollectionList: bindActionCreators(Actions.collectionActions.getCollectionList, dispatch),
    deleteCollection: bindActionCreators(Actions.collectionActions.deleteCollection, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CollectionPage);

