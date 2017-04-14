import React,{Component} from 'react';

import TitleComponent from './title.jsx';

export default class EducationComponent  extends Component {

    render() {
        
        return (
            <div className='list-block educationinfo info-item'>
                <TitleComponent title="教育经历" type="plus" />
            </div>
        );
    }
}