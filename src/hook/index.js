import store from 'store';

export const onEnterLoginHook = (nextState,replace) => {
    const {token} = store.get('user') || {};
    if(token) replace({pathname:'/'});
}

export const requireAuthHook = (nextState,replace) => {
    const {token} = store.get('user') || {};
    if(!token) replace({pathname:'/user/login'});
}