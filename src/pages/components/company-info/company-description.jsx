import React,{Component} from 'react';

import Title from '../index/title';

export default class CompanyDescriptionComponent  extends Component {

    render() {
        const {description} = this.props;
        return (
            description ? <div className="list-block company-desc">
                <Title title="公司简介" />
                <p dangerouslySetInnerHTML={{__html:description}}>
                </p>
            </div> : null
        );
    }
}
