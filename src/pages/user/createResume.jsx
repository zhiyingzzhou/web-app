import React,{Component} from 'react';

// navbar components
import NavbarBack from 'components/navbar-back';

// redux
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from 'actions';

// png
import morePng from 'images/create-resume/more.png';

// data
import data from 'data/create-resume';

// picker 组件
import Picker from 'utils/picker';

class CreateResumePage  extends Component {

    // bind event
    getInput = this._getInput.bind(this);

    componentDidMount() {
    }

    _getInput(item,index) {
        const data = [
            {text:'男',value:0},
           {text:'女',value:1}
        ];
        return item.readonly ? <input type={`${index === 3 ? 'number' : 'text'}`} readOnly /> 
        : <input type={`${index === 3 ? 'number' : 'text'}`} onClick={Picker.show.bind(this,data)} />;
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
                                        <li key={`list_${index}`}>
                                            <div className="item-content">
                                                <div className="item-inner">
                                                    <div className={`item-title ${item.name.length === 2 ? 'letter-spacing' : ''}`}>
                                                        {item.name}
                                                    </div>
                                                    <div className="item-input">
                                                        {this.getInput(item,index)}
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

