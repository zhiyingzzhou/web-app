import React,{Component} from 'react';

export default class ProgressComponent  extends Component {

    render() {
        return (
            <div className='progress'>
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