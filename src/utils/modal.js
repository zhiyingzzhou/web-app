module.exports = (function(){

    let Modal = function() {
    }

    Modal.prototype.openOverlay = function(){
        $('.modal-overlay').addClass('modal-overlay-visible');
    }

    Modal.prototype.closeOverlay = function(){
        $('.modal-overlay').removeClass('modal-overlay-visible');
    }

    Modal.prototype.openDialog = function(text = 'm(-_-)m'){
        $('.modal-text').text(text);
        $('.modal').css('display','block');
        setTimeout(()=>{
            $('.modal').addClass('modal-in');
        },100);
    }

    Modal.prototype.closeDialog = function() {
        $('.modal').removeClass('modal-in').css('display','none');
        $('.modal-text').text('');
    }

    Modal.prototype.openPreloader = function() {
        $().addClass();
        $().addClass();
    }

    return new Modal();
})();