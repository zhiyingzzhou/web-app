import TransitionPages from 'TransitionPages';

module.exports = (function() {
    let Jump = function(){};

    function pathOptions() {
        return {
            'user': '/user/'
        }
    }

    // login and register Jump
    Jump.prototype.jumpToLoginOrRegister = function(pathname){
        let transitionType = TransitionPages.getState();
        const {actions,location,state} = this.props;
        const {router} = this.context;
        const {history} = state;
        //获取history数组中的最后一个路径
        const lastPath = history[history.length-1];
        // 拼接要跳转页面的url
        const jumpPathname = `${pathOptions().user}${pathname}`;
        // 判断history数组中最后一个路径是否为要跳转到的页面
        if(history.length === 0 || `${lastPath}` !== jumpPathname){
            // 如果不是往history中添加当前路径
            if(lastPath !== location.pathname){
                actions.pushHistory(location.pathname);
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