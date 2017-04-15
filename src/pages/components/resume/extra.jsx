import React,{Component} from 'react';

import TitleComponent from './title.jsx';

export default class ExtraComponent  extends Component {

    render() {
        return (
            <div className='list-block extra info-item'>
                <TitleComponent title="附加信息" type="plus" />
            </div>
        );
    }
}