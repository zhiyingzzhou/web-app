import React,{Component} from 'react';

export default class Navbar extends Component {
    
    // static propTypes = {
    //     left: PropTypes.oneOfType([PropTypes.node,PropTypes.string,PropTypes.element]),
    //     center: PropTypes.oneOfType([PropTypes.node,PropTypes.string,PropTypes.element]),
    //     right: PropTypes.oneOfType([PropTypes.node,PropTypes.string,PropTypes.element])
    // }

    render() {
        const {left='',center='',right=''} = this.props;
        return (
            <div className="navbar">
                <div className="navbar-inner">
                    <div className="left">
                        {left}
                    </div>
                    <div className="center">
                        {center}
                    </div>
                    <div className="right">
                        {right}
                    </div>
                </div>
            </div>  
        );
    }
}