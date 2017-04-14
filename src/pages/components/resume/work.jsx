import React,{Component} from 'react';

import TitleComponent from './title.jsx';

export default class WorkComponent  extends Component {

    render() {
        
        return (
            <div className='list-block workinfo info-item'>
                <TitleComponent title="工作经历" type="plus" />
            </div>
        );
    }
}