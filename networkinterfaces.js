const os = require('os'),
fs = require('fs');
const chalk = require('chalk'),
log = console.log;

let localIp = '127.0.0.1';

const ifaces = os.networkInterfaces();
if(!ifaces['本地连接']){
    log(chalk.red('local connect error!'));
    return;
}

ifaces['本地连接'].forEach(item=>{
    if(item.family == 'IPv4'){
        localIp = item.address;
    }
});

const data = `ip=${localIp}\nNODE_ENV=development`;

fs.writeFile('.env',data,err=>{
    if(err) throw new Error(err);
    log(chalk.green(`set env success!\nlocalIp=${localIp}\nNODE_ENV=development`));
});
