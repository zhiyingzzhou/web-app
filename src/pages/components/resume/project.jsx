import React,{Component} from 'react';

import TitleComponent from './title.jsx';

export default class ProjectComponent  extends Component {

    render() {
        return (
            <div className='list-block project info-item'>
                <TitleComponent title="项目经验" type="plus" />
            </div>
        );
    }
}