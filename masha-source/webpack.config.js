const path = require('path');


module.exports = {
   mode: 'development',
   entry: ['./src/index.js', './src/scss/style.scss'],
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
   },


    module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader'],
      },
      {
         test: /\.(png|jpe?g|svg|ttf|otf)$/i,
         use: [
           {
             loader: 'file-loader',
           }
         ],
       }
    ],
   }

   
};