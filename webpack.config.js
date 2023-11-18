module.exports = {
    mode: 'development',
    entry: './src/index.js',
   devServer: {
     static: './dist',
     hot: true,
     port: 3001,
   },
   devtool: 'inline-source-map',
    output: {
      filename: 'main.js',
    },
};