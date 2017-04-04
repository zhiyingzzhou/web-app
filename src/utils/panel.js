module.exports = (function(){

    let Panel = function() {
    }

    Panel.prototype.openPanel = function(){
        $('.panel').addClass('active');
        $('.panel-overlay').addClass('active');
    }

    Panel.prototype.closePanel = function() {
        $('.panel').removeClass('active');
        $('.panel-overlay').removeClass('active');
    }

    return new Panel();
})();