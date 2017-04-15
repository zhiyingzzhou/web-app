import React,{Component} from 'react';

import TitleComponent from './title.jsx';

export default class LanguageComponent  extends Component {

    render() {
        return (
            <div className='list-block language info-item'>
                <TitleComponent title="语言能力" type="plus" />
            </div>
        );
    }
}