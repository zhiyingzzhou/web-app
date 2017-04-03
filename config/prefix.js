module.exports = () => {
    const {NODE_ENV,ip} = process.env;
    const host = ip ? ip : 'localhost';
    return NODE_ENV ===  "development" ? `http://${host}/51jrq/mobile/api`  : "http://m.51jrq.com/mobile/api";
}