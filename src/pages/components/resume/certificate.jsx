import React,{Component} from 'react';

import TitleComponent from './title.jsx';

export default class CertificateComponent  extends Component {

    render() {
        return (
            <div className='list-block certificate info-item'>
                <TitleComponent title="证书" type="plus" />
            </div>
        );
    }
}