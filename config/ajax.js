module.exports = () => {
    const {NODE_ENV} = process.env;
    return NODE_ENV ===  "development" ? "http://localhost/51jrq/"  : "http://m.51jrq.com/";
}