import React,{Component} from 'react';

import TitleComponent from './title.jsx';

export default class TrainComponent  extends Component {

    render() {
        return (
            <div className='list-block train info-item'>
                <TitleComponent title="培训经历" type="plus" />
            </div>
        );
    }
}