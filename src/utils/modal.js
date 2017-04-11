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
        $('.modal-dialog .modal-text').text(text);
        $('.modal-dialog').css('display','block');
        this.openOverlay();
        setTimeout(()=>{
            $('.modal-dialog').addClass('modal-in');
        },100);
    }

    Modal.prototype.closeDialog = function() {
        $('.modal-dialog').removeClass('modal-in').css('display','none');
        this.closeOverlay();
        $('.modal-dialog .modal-text').text('');
    }

    Modal.prototype.openPreloader = function(text = 'm(-_-)m') {
        $('.modal-preloader .modal-title').text(text);
        $('.modal-preloader').css('display','block');
        this.openOverlay();
        setTimeout(()=>{
             $('.modal-preloader').addClass('modal-in');
        });
    }

    Modal.prototype.closePreloader = function() {
        $('.modal-preloader').removeClass('modal-in').css('display','none');
        this.closeOverlay();
        $('.modal-preloader .modal-title').text('');
    }

    Modal.prototype.openPrompt = function(text) {
        $('.modal-prompt .modal-text').text(text);
        $('.modal-prompt').css('display','block');
        this.openOverlay();
        setTimeout(()=>{
            $('.modal-prompt').addClass('modal-in');
        },100);
    }

    Modal.prototype.closePrompt = function() {
        $('.modal-prompt').removeClass('modal-in').css('display','none');
        this.closeOverlay();
        $('.modal-prompt .modal-text').text('');
    }

    return new Modal();
})();