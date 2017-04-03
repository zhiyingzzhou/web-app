import Methods from './methods';

module.exports = (function(){

    let Panel = function() {
    }

    Panel.prototype.openPanel = function(){
        $('#content-inner').removeClass('with-panel-left-reveal-out').addClass('with-panel-left-reveal');
        $('.panel-overlay').addClass('active');
        $('.panel').addClass('active');
    }

    Panel.prototype.closePanel = function() {
        $('#content-inner').removeClass('with-panel-left-reveal').addClass('with-panel-left-reveal-out');
        Methods.transitionEnd.bind($('.views'),()=>{
            $('.panel-overlay').removeClass('active');
            $('.panel').removeClass('active');
        })();
    }

    return new Panel();
})();