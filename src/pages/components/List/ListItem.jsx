import React,{Component} from 'react';

export default class ListItem extends Component {

    onChange = this._onChange.bind(this);

    // static propTypes = {
    //     title: PropTypes.string,
    //     placeholder: PropTypes.string,
    //     onChange: PropTypes.func
    // }

    _onChange(event) {
        const {onChange} = this.props;
        if(onChange){
            onChange(event);
        }
    }

    render(){
        const {title='',placeholder='',after,value='',inputType='text'} = this.props;

        return (
            <li>
                <div className="item-content">
                    <div className="item-inner">
                        <div className="item-title">{title}</div>
                        <div className="item-input">
                            <input type={inputType} placeholder={placeholder} value={value} onChange={this.onChange} />
                        </div>
                        {after && after}
                    </div>
                </div>
            </li>
        );
    }

};
