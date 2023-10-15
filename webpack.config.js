// webpack.config.js

module.exports = {
    // ...other webpack config options...
  
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
  };