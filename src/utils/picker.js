module.exports = (function() {
    let picker = function() {};
    picker.prototype.show = function(data) {
        console.log(data);
        var pickerInstance = new Picker({
            data: [data],
            selectedIndex: [0],
            title: '我们都是小学生'
        });
        pickerInstance.show();
    };
    picker.prototype.hide = function() {
    };
    return new picker();
})();