module.exports = {
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8082, // CHANGE YOUR PORT HERE!
    https: true,
    http2: true,
  },
};
