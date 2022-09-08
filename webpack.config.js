const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  watch:true,
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        
         options: {
          name: '[name].[ext]',
          outputPath: 'assets/images/',
       },
    },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
    
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist'),
  },
  
  plugins: [new HtmlWebpackPlugin({
    title: `Development`,
  })],
};  