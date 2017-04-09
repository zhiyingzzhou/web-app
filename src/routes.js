import React from 'react';
import { Route, IndexRoute } from 'react-router';
import {onEnterLoginHook,requireAuthHook} from './hook';

export default function getRoutes () {
  return (
    <Route path='/' component={require('./views/Framework').default}>
      // 首页
      <IndexRoute component={require('./pages/index').default} />
      <Route path='user'>
        // 登陆
        <Route path='login' component={require('./pages/login').default} onEnter={onEnterLoginHook}  />
        // 注册
        <Route path='register' component={require('./pages/register').default} />
        // 个人中心
        <Route path='personal' component={require('./pages/user/index').default} onEnter={requireAuthHook}  />
        // 我的简历
        <Route path='resume' component={require('./pages/user/resume').default} onEnter={requireAuthHook} />
        // 申请记录
        <Route path='apply' component={require('./pages/user/apply').default} onEnter={requireAuthHook} />
        // 我的收藏
        <Route path='collection' component={require('./pages/user/collection').default} onEnter={requireAuthHook} />
        // 修改密码
        <Route path="changePasswd" component={require('./pages/user/changepasswd').default} onEnter={requireAuthHook} />
        // 创建简历
        <Route path='createResume' component={require('./pages/user/createResume').default} onEnter={requireAuthHook} />
        // 导入简历
        <Route path='importResume' component={require('./pages/user/importResume').default} onEnter={requireAuthHook} />
      </Route>
      // 关于我们
      <Route path='aboutus' component={require('./pages/about-us').default} />
      // 企业职位详情
      <Route path="companyJobInfo/:corpid/:jobid" component={require('./pages/company-job-info').default} />
    </Route>
  )
}
