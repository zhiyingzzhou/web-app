import React,{Component} from 'react';

import Title from '../index/title';

export default class JobDescriptionComponent  extends Component {

    render() {
        const {jobInfo={}} = this.props;
        return (
            <div className="list-block job-description">
               <Title title="职位描述" />
               <p className="content" dangerouslySetInnerHTML={{__html:jobInfo.jobdescription || ''}}>
               </p>
            </div>
        );
    }
}