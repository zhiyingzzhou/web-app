import React,{Component} from 'react';

// navbar components
import NavbarBack from 'components/navbar-back';

export default class AboutUsPage extends Component {

    render() {
        return (
            <div className='page' data-page='about-us'>
                <NavbarBack title="关于我们" />
                <div className="page-content">
                    
                </div>
            </div>
        );
    }
}