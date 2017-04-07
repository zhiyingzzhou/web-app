module.exports = (function() {
    let picker = function() {};
    let referenceObj = {};
    picker.prototype.show = function(key,data) {
        require.ensure([],function(){
            const Picker = require('js/picker.min');
            if(!referenceObj[key]){
                referenceObj[key] = new Picker({
                    data: [ data ]
                });
            }
            referenceObj[key].show();
        },'picker');
        // if(pickerInstance) 
        //     pickerInstance.show();
        //     return;
         
        // pickerInstance.show();
    };
    picker.prototype.hide = function() {
    };
    return new picker();
})();