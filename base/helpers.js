var glob = require('glob');
var path = require('path');
// var HtmlWebpackPlugin = require('html-webpack-plugin');

function getProjectName(){
    // var parentNodeArr = process.cwd().split('/');
    var sp = '\/';
    if(process.cwd().indexOf(':') > 0){
        sp = '\\';
    }
    var parentNodeArr = process.cwd().split(sp);
    var projectName = parentNodeArr[parentNodeArr.length-1].replace(/\-wap/,'');
    console.log('projectName : ',projectName);
    return projectName;
}
function getHtmlPlugin(type) {
    var buildPath = '',projectName = getProjectName();
    switch(type){
        case 'wap':
            buildPath = path.join(process.cwd(),'..',projectName,'build_wap','/');
            break;
        case 'hybrid':
            buildPath = path.join(process.cwd(),'src','/');
            break;
        default:
            break;
    }
    var plugins = [];
    glob.sync(process.cwd() + '/dev/*.html').forEach(function (name) {
        var n = name.match(/([^/]+?)\.html/)[1];
        plugins.push(
            new HtmlWebpackPlugin({
                filename:buildPath+n+'.html',
                template:name,
                inject:false
            })
        )
    });
    // entry['a'] = 'webpack-dev-server/client?http://localhost:3000';
    // entry['b'] = 'webpack/hot/only-dev-server';
    return plugins;
}

function getCopyPlugin(){
    var currentPath = process.cwd().split(path.sep);
    var isMain = currentPath[currentPath.length-1];
    console.log(isMain)
    var plugins = [];
    glob.sync(path.join(process.cwd(), '../*')).forEach(function (pathName) {
        console.log(path.basename(pathName));
        var pathDir = path.basename(pathName);
        if(isMain === 'main'){
            plugins.push({
                from: path.join('../', pathDir, '/dev/htmlImg'),
                to: 'htmlImg'
            })
        }
        
    });
    return plugins
}

exports.getProjectName = getProjectName;
exports.getCopyPlugin = getCopyPlugin;
// exports.getHtmlPlugin = getHtmlPlugin;
