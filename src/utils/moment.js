module.exports = (function(){
    let moment = function(){};

    moment.prototype.format = function(timeStamp){
        var a, jsdate=((timeStamp) ? new Date(timeStamp) : new Date());
    }
    return new moment();
})();