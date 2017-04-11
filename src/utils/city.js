import picker from './picker';

module.exports = (function(){
    let City = function() {};

    City.prototype.format = function(key){
        require.ensure([],()=>{
            const data = require('data/city.min');
            let province = [];
            let city = {};
            data.forEach(item=>{
                province.push({
                    text: item.p,
                    value: item.p
                });
                if(item.c){
                    city[item.p] = [];
                    item.c.forEach(cItem=>{
                        city[item.p].push({
                            text: cItem.n,
                            value: cItem.n
                        });
                    });
                }
            });
            picker.showCity(key,{province:province,city:city});
        },'city');
    }

    return new City();
})();