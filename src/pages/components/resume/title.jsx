import React,{Component} from 'react';

import editPng from 'images/resume/edit.png';
import plusPng from 'images/resume/plus.png';

export default class TitleComponent  extends Component {

    render() {
        const {title='',type='edit'} = this.props;
        return (
            <div className="resume-title">
                <div className="item-title">
                    {title}
                </div>
                    {type == 'edit' && 
                        <a className="after" href="javascript:void(0);">
                            <img className="edit" src={editPng} alt=""/>
                        </a>
                    }
                    {type == 'plus' && 
                        <a className="after">
                            <img className="plus" src={plusPng} />
                            添加{title}
                        </a>
                    }
            </div>
        );
    }
}
