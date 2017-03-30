/**
 * module dependencies
 */
const express = require('express');
const chalk = require('chalk');
const log = console.log;
app = express();

// get port
const port = process.env.port || 5000;

require('./config/express')(app);

app.listen(port,err=>{
    if(err) throw new Error(err);
    log(chalk.blue(`App server listen ${port}`))
});