import React,{Component} from 'react';

export default class ProgressComponent  extends Component {

    render() {
        const {baseinfo} = this.props;
        const {percent} = baseinfo;
        return (
            <div className='list-block progress'>
                <div className="progress-bar">
                    <div className="progress-bar-inner">
                    </div>
                </div>
                <div className="pregress-percent">
                </div>
            </div>
        );
    }
}