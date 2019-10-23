module.exports = {
  mode: 'none',
  //entry: { 'index.js': './src/index.ts', 'index.css': './src/index.scss' },
  entry: ['./src/index.ts', './src/index.scss'],
  output: {
    path: __dirname + '/dist/umd',
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'quillTableUI'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'tslint-loader',
        exclude: /node_modules/,
        enforce: 'pre',
        options: {
          emitErrors: true,
          failOnHint: true
        }
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          compilerOptions: {
            module: 'es2015',
            declaration: false
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].css'
            }
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'css-loader?-url'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.scss']
  }
};