const os = require('os'),
fs = require('fs');
const chalk = require('chalk'),
log = console.log;

let localIp = '127.0.0.1';

const ifaces = os.networkInterfaces();
if(ifaces['本地连接'] || ifaces['无线网络连接']){
    const connect = ifaces['本地连接'] || ifaces['无线网络连接'];
    connect.forEach(item=>{
        if(item.family == 'IPv4'){
            localIp = item.address;
        }
    });

    const data = `ip=${localIp}\nNODE_ENV=development`;

    fs.writeFile('.env',data,err=>{
        if(err) throw new Error(err);
        log(chalk.green(`set env success!\nlocalIp=${localIp}\nNODE_ENV=development`));
    });
    
}else{
    log(chalk.red('local connect error!'));
}

