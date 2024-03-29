var path = require('path');
var glob = require('glob');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var helpers = require('./helpers.js');

//一些文件夹的路径

// var BUILD_PATH = path.resolve(__dirname, './dist');
var BUILD_PATH = path.resolve(__dirname);


//项目中的入口文件，应该会有好多
function getEntry() {
  var entry = {};
  glob.sync(process.cwd() + '/dev/entry/*.js').forEach(function (name) {
    console.log(name);
    var n = name.match(/([^/]+?)\.js/)[1];
    entry[n] = './dev/entry/'+n+'.js';
  });
  return entry;
}

function getHtmlPlugin() {
    var plugins = [];
    glob.sync(process.cwd() + '/src/index.html').forEach(function (name) {
        var n = name.match(/([^/]+?)\.html/)[1];
        plugins.push(
            new HtmlwebpackPlugin({
                filename:'./index.html',
                template:name,
                inject:false
            })
        )
    });
    return plugins;
}



var metadata = {
  host: "http://localhost:8080"
};

module.exports = {
  //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
  },
  // devtool: '#eval-source-map',
  devtool: '#cheap-module-eval-source-map',
  entry: {
    main: './src/main.js',
    vendor: ['vue', 'vuex', 'vue-router']
  },

  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: BUILD_PATH,
    publicPath: 'http://localhost:8080/',
    filename: '/build/[name].js',
    sourceMapFilename: '/build/[file].map',
    chunkFilename: '/build/chunk/[name].js'
  },
  module: {
    //和loaders一样的语法，很简单
    perLoaders: [
        {
            test: /\.js$/,
            loader: 'eslint',
        }
    ],
    loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel',
          // include: APP_PATH + '/dev',
          exclude: /node_modules/
        },
        {
          test: /\.vue$/,
          loader: 'vue',
          // include: APP_PATH + '/dev',
          exclude: /node_modules/
        },
        {
          test: /\.(css)$/,
          loader: 'style-loader!css-loader'
        },
        {
          test: /\.scss$/,
          loaders: ['style', 'css', 'sass?sourceMap'],
        },
        {
          test: /\.(png|jpg|jpeg)$/,
          loader: 'url-loader',
          query:{
            limit:2048,
            path:path.join(process.cwd()),
            name:'images/[name].[ext]'
          }
        }

    ]
  },
  resolve: {
      // require时省略的扩展名，如：require('module') 不需要module.js
      extensions: ['', '.js', '.vue'],
      // 别名，可以直接使用别名来代表设定的路径以及其他
      alias: {
        'iscroll-lite': path.join(process.cwd(), 'node_modules/iscroll/build/iscroll-lite.js'),
        'common.scss': path.join(process.cwd(), '..','common/scss/common.scss'),
        'app.scss': path.join(process.cwd(), '..','common/scss/app.scss'),
        'Vcontent': path.join(process.cwd(), '..', 'common/components/vcontent'),
        'Mask': path.join(process.cwd(), 'src/components/Mask.vue'),
        'PageView': path.join(process.cwd(), 'src/components/PageView.vue')

      }
  },

  vue: {
    loaders: {
      css: 'style!css!autoprefixer!sass'
    }
  },

  //添加我们的插件 会自动生成一个html文件
  plugins: [
      //把入口文件里面的数组打包成verdors.js
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    }),
    // new webpack.optimize.CommonsChunkPlugin('/build/common.js'),

    new webpack.DefinePlugin({
        metadata: JSON.stringify(metadata),
        PRODUCTION: JSON.stringify(false)
    }),
    new webpack.ProvidePlugin({
    }),
    // new CopyWebpackPlugin([{
    //     from: 'dev/htmlImg',
    //     to: 'htmlImg'
    // }]),

  ].concat(getHtmlPlugin()),
  
};
