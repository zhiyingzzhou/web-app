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
                <div className="progress-text">
                    完整度 : {percent || 0}%
                </div>
                <a href="javascript:void(0);" className="btn">预览简历</a>
            </div>
        );
    }
}