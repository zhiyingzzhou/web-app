import React,{Component} from 'react';

// navbar components
import NavbarBack from 'components/navbar-back';

import ListItem from 'components/List/ListItem';

// footer component
import FooterComponent from 'components/footer';

// redux
// import {bindActionCreators} from 'redux';
// import { connect } from 'react-redux';
// import * as Actions from 'actions';

export default class ChangePasswdPage  extends Component {

    state = {}

    componentDidMount() {
    }

    render() {
        const {footerHidden=false} = this.state;
        return (
            <div className='page' data-page='change-passwd'>
                <NavbarBack title="修改密码" />
                <div className="page-content">
                    <div className="list-block">
                        <ul>
                            <ListItem
                                title="原密码"
                                placeholder="请输入旧密码"
                            />
                            <ListItem
                                title="新密码"
                                placeholder="请输入新密码"
                            />
                            <ListItem
                                title="重复密码"
                                placeholder="请再一次输入您的密码"
                            />
                        </ul> 
                    </div>
                    {/*登录按钮*/}
                    {/*onClick={this.toLogin}*/}
                    <a href="javascript:void(0);" className="button">
                        保存
                    </a>
                    <FooterComponent isHidden={footerHidden} />
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

// const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators(Actions.userActions, dispatch)
// })

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )();