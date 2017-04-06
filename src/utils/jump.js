import TransitionPages from 'TransitionPages';

module.exports = (function() {
    let Jump = function(){};

    function pathOptions() {
        return {
            'user': '/user/'
        }
    }

    Jump.prototype.jumpByLoginSuccess = function(){
        const {History,location,popHistory} = this.props;
        let lastPath = History[History.length - 1] || '/';
            // 如果从注册页面进来直接返回首页,并且将注册页面从history中删除
            if(lastPath === '/user/register'){
                popHistory();
                lastPath = '/';
            }
            this.context.router.push({
                pathname: lastPath,
                state:TransitionPages.getState()
            });
    }

    Jump.prototype.jumpPage = function(pathname){
        let transitionType = TransitionPages.getState('right');
        const {actions,location} = this.props;
        var pattern = /\.html$/ig;
        if(pattern.test(location.pathname)){
            actions.pushHistory('/');
        }else{
            actions.pushHistory(location.pathname);
        }
        this.context.router.push({
            pathname: pathname,
            state: transitionType
        });
    }

    // login and register Jump
    Jump.prototype.jumpToLoginOrRegister = function(pathname){
        let transitionType = TransitionPages.getState();
        const {pushHistory,location,History} = this.props,
            {router} = this.context,
        //获取history数组中的最后一个路径
            lastPath = History[History.length-1],
        // 拼接要跳转页面的url
            jumpPathname = `${pathOptions().user}${pathname}`;
        // 判断history数组中最后一个路径是否为要跳转到的页面
        if(History.length === 0 || `${lastPath}` !== jumpPathname){
            // 如果不是说明上一个页面并不是要跳转到的页面
            if(lastPath !== location.pathname){
                pushHistory(location.pathname);
            }
            transitionType = TransitionPages.getState('right');
        }
        router.push({
            pathname: jumpPathname,
            state: transitionType
        });
    };

    return new Jump();
})();