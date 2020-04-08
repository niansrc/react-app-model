const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
      '/server',
      createProxyMiddleware({
        target: 'http://testwmapp.xinhuaapp.com/',
        changeOrigin: true,
      })
    );
};