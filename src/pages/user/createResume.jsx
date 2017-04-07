import React,{Component} from 'react';

// navbar components
import NavbarBack from 'components/navbar-back';
// footer component
import FooterComponent from 'components/footer';

// redux
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from 'actions';

// png
import morePng from 'images/create-resume/more.png';

// data
import data from 'data/create-resume';

// picker 组件
import pickerMethods from 'utils/picker';

class CreateResumePage  extends Component {
    
    componentDidMount() {
    }

    _getInput(item,index) {
        return item.readonly ? <input type={item.inputType} readOnly /> 
        : <input type={item.inputType}/>;
    }

    _showPicker(item) {
        let tempData = [];
        item.data.forEach((item,index)=>{
            tempData.push({
                text: item,
                value: item
            });
        });
        pickerMethods.show(item.key,tempData);
    }

    save() {
        
    }

    render() {
        return (
            <div className='page' data-page='createResume'>
                <NavbarBack title="创建简历" />
                <div className="page-content">
                    <div className="header">
                        <h3>基本信息（必填）</h3>
                    </div>
                    <div className="list-block">
                        <ul>
                            {
                                data.map( (item,index) => {
                                    return (
                                        <li 
                                            key={`list_${index}`}
                                            onClick={item.readonly ? this._showPicker.bind(this,item) : null}
                                        >
                                            <div className="item-content">
                                                <div className="item-inner">
                                                    <div className={`item-title ${item.name.length === 2 ? 'letter-spacing' : ''}`}>
                                                        {item.name}
                                                    </div>
                                                    <div className="item-input">
                                                        {this._getInput(item,index)}
                                                    </div>
                                                </div>
                                                { item.multi &&
                                                    <div className="item-after">
                                                        <img src={morePng} alt="查看更多"/>
                                                    </div>
                                                }
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <a href="javascript:void(0);" className="button" onClick={this.save}>保存</a>
                    <FooterComponent location={this.props.location} />
                </div>
            </div>
        );
    }
}

// const mapStateToProps = state => ({
//     state: {
//         user: state.User
//     }
// })

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions.userActions, dispatch)
})

export default connect(
    // mapStateToProps,
    mapDispatchToProps
)(CreateResumePage);

