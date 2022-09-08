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
        test: /\.(png|svg|jpe?g|gif)$/i,
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
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
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