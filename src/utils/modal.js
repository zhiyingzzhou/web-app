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
        $('.modal .modal-text').text(text);
        $('.modal').css('display','block');
        this.openOverlay();
        setTimeout(()=>{
            $('.modal').addClass('modal-in');
        },100);
    }

    Modal.prototype.closeDialog = function() {
        $('.modal').removeClass('modal-in').css('display','none');
        this.closeOverlay();
        $('.modal .modal-text').text('');
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

    return new Modal();
})();