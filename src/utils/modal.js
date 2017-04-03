module.exports = (function(){

    let Modal = function() {
    }

    Modal.prototype.openToast = function(text = 'm(-_-)m'){
        $('.modal-text').text(text);
        $('.modal').css('display','block');
        $('.modal-overlay').addClass('modal-overlay-visible');
        setTimeout(()=>{
            $('.modal').addClass('modal-in');
        },100);
    }

    Modal.prototype.closeToast = function() {
        $('.modal-overlay').removeClass('modal-overlay-visible');
        $('.modal').removeClass('modal-in').css('display','none');
        $('.modal-text').text('');
    }

    return new Modal();
})();