module.exports = (function() {
    let picker = function() {};
    let referenceObj = {};

    function getDaysInOneMonth(year, month){  
        month = parseInt(month, 10);  
        var d= new Date(year, month, 0);  
        return d.getDate();  
    }  

    function refillColumn(picker,selectedYear,selectedMonth) {
        let daysCount = 0,daysArr=[];
        daysCount = getDaysInOneMonth(selectedYear,selectedMonth);
        for(let i=1;i<=daysCount;i++){
            daysArr.push({
                text: i,
                value: i
            });
        }
        picker.refillColumn(2, daysArr);
    }

    picker.prototype.showDate = function(key,data) {
        require.ensure([],function(){
            const Picker = require('js/picker.min'),
                selectedIndex = [35,0,0];
            if(!referenceObj[key]){
                referenceObj[key] = new Picker({
                    data: data,
                    selectedIndex: selectedIndex
                })
                referenceObj[key].on('picker.select',(selectVal,selectIndex)=>{
                    selectVal[1] = selectVal[1] >= 10 ? selectVal[1] : `0${selectVal[1]}`;
                    selectVal[2] = selectVal[2] >= 10 ? selectVal[2] : `0${selectVal[2]}`;
                    $(`#${key}`).val(selectVal.join('-'));
                });
                let selectedYear = data[0][selectedIndex[0]].value,
                    selectedMonth = data[1][selectedIndex[1]].value;
                referenceObj[key].on('picker.change',(index,selectIndex)=>{
                    if(index === 0) {
                        selectedYear = data[0][selectIndex].value;
                    }
                    if(index === 1){
                        selectedMonth = data[1][selectIndex].value;
                    }
                    refillColumn(referenceObj[key],selectedYear,selectedMonth);
                });
            }
            referenceObj[key].show();
        },'picker');
    }

    picker.prototype.show = function(key,data) {
        require.ensure([],function(){
            const Picker = require('js/picker.min');
            if(!referenceObj[key]){
                referenceObj[key] = new Picker({
                    data: [ data ],
                    selectedIndex: [0]
                })
                referenceObj[key].on('picker.select',(selectVal,selectIndex)=>{
                    $(`#${key}`).val(selectVal[0]);
                });
            }
            referenceObj[key].show();
        },'picker');
    };
    picker.prototype.showCity = function(key,data) {
        require.ensure([],function(){
            const Picker = require('js/picker.min');
            if(!referenceObj[key]){
                const {province,city} = data;
                referenceObj[key] = new Picker({
                    data: [ province,city[province[0].text] ],
                    selectedIndex: [0,0]
                })
                referenceObj[key].on('picker.select',(selectVal,selectIndex)=>{
                    let val = '';
                    selectVal.forEach(item=>{
                        val += item + ' '
                    });
                    $(`#${key}`).val(val);
                });

                referenceObj[key].on('picker.change',(index,selectIndex)=>{
                   if(index === 0){
                       // 选中的省份
                       const selectVal = province[selectIndex].value;
                       referenceObj[key].refillColumn(1,city[selectVal] || [{text:'',value:''}]);
                   }
                });
            }
            referenceObj[key].show();
        },'picker');
    };

    return new picker();
})();