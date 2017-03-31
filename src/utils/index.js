module.exports = (function(){

    let Utils = function() {
    }

    //是否是数字
    Utils.prototype.isNum = function(number) {
        return typeof number === 'number' ? true : false;
    }

    //是否是字符
    Utils.prototype.isString = function(string) {
        return typeof string === 'string' ? true : false;
    }

    return new Utils();
})();