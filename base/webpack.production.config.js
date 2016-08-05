var path = require('path');
var glob = require('glob');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');


//一些文件夹的路径

var APP_PATH = path.resolve(process.cwd());
var BUILD_PATH = path.resolve(APP_PATH, 'src/build');

//项目中的入口文件，应该会有好多
function getEntry() {
  var entry = {};
  glob.sync(process.cwd() + '/dev/entry/*.js').forEach(function (name) {
    console.log(name);
    var n = name.match(/([^/]+?)\.js/)[1];
    entry[n] = './dev/entry/'+n+'.js';
  });
  // entry['a'] = 'webpack-dev-server/client?http://localhost:3000';
  // entry['b'] = 'webpack/hot/only-dev-server';
  return entry;
}

function getHtmlPlugin(type) {
    var plugins = [];
    glob.sync(process.cwd() + '/dev/*.html').forEach(function (name) {
        var n = name.match(/([^/]+?)\.html/)[1];
        plugins.push(
            new HtmlwebpackPlugin({
                filename:'../'+n+'.html',
                template:name,
                inject:false
            })
        )
    });
    return plugins;
}



var metadata = {
  host: "./build"
};

module.exports = {
  entry: getEntry(),

  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: BUILD_PATH,
    publicPath: './build/',
    filename: '[name].js'
  },
  module: {
    //和loaders一样的语法，很简单
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
          loaders: ['style', 'css', 'sass'],
        },
        {
          test: /\.(png|jpg)$/,
          loader: 'url-loader',
          query: {
            limit: 10000,
            path:path.join(process.cwd()),
            name:'buildImg/[name].[ext]'
          }
        }

    ]
  },
  resolve: {
      // require时省略的扩展名，如：require('module') 不需要module.js
      extensions: ['', '.js', '.vue'],
      // 别名，可以直接使用别名来代表设定的路径以及其他
      alias: {
        'zepto': path.join(process.cwd(), '..','common/plugins/zepto.min.js'),
        'swiper': path.join(process.cwd(), '..','common/plugins/swiper.min.js'),
        'imgLazyLoad': path.join(process.cwd(), '..','common/plugins/imglazyload.js'),
        'art-template': path.join(process.cwd(), '..','common/plugins/art-template.js'),
        'common.scss': path.join(process.cwd(), '..','common/scss/common.scss'),
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
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new webpack.DefinePlugin({
        metadata: JSON.stringify(metadata),
        PRODUCTION: JSON.stringify(true)
    }),
    new webpack.ProvidePlugin({
    }),
    new CopyWebpackPlugin([
      {from: 'dev/htmlImg', to: 'htmlImg'},
      {from: 'dev/manifast.json', to: '../manifast.json'}
    ]),
  ].concat(getHtmlPlugin()),
};
