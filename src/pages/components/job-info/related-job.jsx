import React,{Component,PropTypes} from 'react';

import Title from '../index/title';

import arrowRightPng from 'images/arrow-right.png';

import J from 'utils/jump';

export default class RelatedJobComponent  extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    _jumPage(item) {
        const {isCompanyPage=false} = this.props;
        const {corpid=0,id=0,jobid} = item;
        J.jumpPage.bind(this,`/companyJobInfo/${corpid}/${isCompanyPage ? jobid : id}`)();
    }

    render() {
        const {relatedJobs,isCompanyPage=false,corpname=''} = this.props;
        return (
            <div className="list-block related-job">
               {!isCompanyPage && <Title title="相关职位推荐" />}
              <ul>
                  {
                      relatedJobs.map( (item,index)=>{
                          // jobname 工作名称
                          // salary 薪资
                          // jobcity 工作城市
                          // corpname 公司名称
                          const {jobname='',salary='',jobcity=''} = item;
                          return (
                                <li key={index} className="item" onClick={this._jumPage.bind(this,item)}>
                                    <div className="title">
                                        <div className="top">
                                            {item.jobname || ''}
                                        </div>
                                        <div className="bottom text-ellipsis">
                                            {salary !== '面议' ? salary+'元/月' : salary} | {jobcity} | {isCompanyPage ? corpname : item.corpname}
                                        </div>
                                    </div>
                                    <div className="after">
                                        <img src={arrowRightPng} alt="详细信息"/>
                                    </div>
                                </li>
                          )
                      })
                  }
              </ul>
            </div>
        );
    }
}