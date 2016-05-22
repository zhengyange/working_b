var path = require('path');
var glob = require('glob');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

//一些文件夹的路径

var APP_PATH = path.resolve(process.cwd());
var BUILD_PATH = path.resolve(APP_PATH, 'build');

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
                filename:n+'.html',
                template:name,
                inject:false
            })
        )
    });
    return plugins;
}
getHtmlPlugin();



var metadata = {
  host: "b5m"
};

module.exports = {
  entry: getEntry(),

  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: BUILD_PATH,
    filename: '[name].js'
  },
  module: {
    //和loaders一样的语法，很简单
    perLoaders: [
        {
            test: /\.jsx?$/,
            include: APP_PATH,
            loader: 'jshint-loader'
        }
    ],
    loaders: [
    {
        test: /\.jsx?$/,
        loader: 'babel',
        include: APP_PATH,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: APP_PATH
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=40000'
      }

    ]
  },

  //添加我们的插件 会自动生成一个html文件
  plugins: [
      //把入口文件里面的数组打包成verdors.js
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new webpack.DefinePlugin({
        metadata: JSON.stringify(metadata)
    }),
    new webpack.ProvidePlugin({
    })
  ].concat(getHtmlPlugin()),
};
