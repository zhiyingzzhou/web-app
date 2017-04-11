import React,{Component} from 'react';

export default class ListItem extends Component {

    // bind event
    onChange = this._onChange.bind(this);
    onFocus = this._onFocus.bind(this);
    onBlur = this._onBlur.bind(this);
    onClick = this._onClick.bind(this);

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

    _onFocus() {
        const {onFocus} = this.props;
        if(onFocus){
            onFocus();
        }
    }

    _onBlur() {
        const {onBlur} = this.props;
        if(onBlur){
            onBlur();
        }
    }

    _onClick() {
        const {onClick} = this.props;
        if(onClick){
            onClick();
        }
    }

    shouldComponentUpdate(nextProps,nextState) {
        if(nextProps.value !== this.props.value){
            return true;
        }
        return false;
    }

    render(){
        const {
                title='',
                placeholder='',
                after,
                value='',
                inputType='text',
                readOnly=false,
                inputId=''
        } = this.props;

        return (
            <li>
                <div className="item-content">
                    <div className="item-inner">
                        <div className="item-title">{title}</div>
                        <div className="item-input">
                            <input 
                                id={inputId}
                                onFocus={this.onFocus} 
                                onBlur={this.onBlur} 
                                onChange={this.onChange}
                                type={inputType} 
                                placeholder={placeholder} 
                                value={value} 
                                readOnly={readOnly}
                                onClick={this.onClick}
                            />
                        </div>
                        {after && after}
                    </div>
                </div>
            </li>
        );
    }

};
