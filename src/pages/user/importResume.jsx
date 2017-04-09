import React,{Component} from 'react';

// navbar components
import NavbarBack from 'components/navbar-back';

export default class ImportResumePage extends Component {
    render() {
        return (
            <div className="page navbar-fixed cached" data-page="import-resume">
                <NavbarBack title="导入简历" />
                <div className="page-content">
                    <div className="list-block">
                        
                    </div>
                </div>
            </div>
        );
    }
}