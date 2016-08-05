webpackJsonp([5,8],{

/***/ 88:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(89)
	__vue_script__ = __webpack_require__(91)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] dev/js/components/appSlides/bookmarks/index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(94)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-0f0a8d60/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 89:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(90);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../../node_modules/css-loader/index.js!./../../../../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../../../../node_modules/sass-loader/index.js!./../../../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./index.vue", function() {
				var newContent = require("!!./../../../../../../../node_modules/css-loader/index.js!./../../../../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../../../../node_modules/sass-loader/index.js!./../../../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 90:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

	// exports


/***/ },

/***/ 91:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	__webpack_require__(92);

	exports.default = {
		data: function data() {
			return {
				currentMark: 0,
				bookMarks: [{ title: '书签栏' }, { title: '常用' }, { title: 'React' }, { title: '工具' }]
			};
		},
		methods: {
			changeSelected: function changeSelected(index) {
				this.currentMark = index;
			}
		}
	};

/***/ },

/***/ 92:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(93);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../../node_modules/css-loader/index.js!./bookmarks.css", function() {
				var newContent = require("!!./../../../../../../../node_modules/css-loader/index.js!./bookmarks.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 93:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "#bookmarksLeft,#bookmarksRight{height:100%;overflow-y:scroll;overflow-x:hidden}#bookmarksSlideBigBox,.bookmarksFolders{position:relative}#allBookmark{width:100%;height:100%;box-sizing:border-box;padding-top:50px}#bookmarksLeft{width:106px;float:left;box-shadow:#ccc 0 5px 10px}#bookmarksLeft::-webkit-scrollbar{width:0;background-color:transparent}#bookmarksRight{width:240px;float:right}.bookmarksFolders,.bookmarksName{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:12px;cursor:pointer}.bookmarksFolders{width:102px;height:40px;line-height:40px;padding-left:6px;color:#999}.bookmarksFolders:not(.selected):hover{background-color:rgba(41,128,185,.5);color:#fdfdfd}.bookmarksItem{width:100%;height:36px;padding:5px;border-radius:5px;color:#848484;cursor:pointer;margin:5px auto 10px}.bookmarksItem:hover{background-color:rgba(245,240,246,1);color:#3498DB}.bookmarksIcon{width:14px;height:14px;float:left;margin-top:6px;cursor:pointer}.bookmarksName{float:left;width:185px;margin-left:10px;height:45px;line-height:48px;margin-top:-12px}#bookmarkSearch{width:100%;height:50px;position:absolute;text-align:center;box-shadow:#ccc 0 0 10px}#searchBookmarks{margin-top:10px}#searchFolder{-webkit-transition:height .3s ease;height:0;color:#fdfdfd;background-color:#2980B9;}\n.selected{background-color: #2980B9;color:#fdfdfd;}\n", ""]);

	// exports


/***/ },

/***/ 94:
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div id=\"bookmarksSlide\" class=\"Slide\">\n\t<div class=\"slideTitle cf\" style=\"background-color:#3498DB;\">\n\t\t<div class=\"topMenu fl\" in=\"todosSlide\" with=\"todos0\" style=\"\">书签</div>\n\t</div>\n\t<div id=\"bookmarksSlideBigBox\" class=\"SlideBigBox\">\n\t\t<div id=\"bookmarkSearch\">\n\t\t\t<input type=\"search\" id=\"searchBookmarks\" i18n-placeholder=\"searchBookmarks\" placeholder=\"搜索书签\">\n\t\t</div>\n\t\t<div id=\"allBookmark\">\n\t\t\t<div id=\"bookmarksLeft\">\n\t\t\t\t<div class=\"bookmarksFolders\" id=\"searchFolder\" bookmarkfolderid=\"1\">搜索</div>\n\t\t\t\t<div class=\"bookmarksFolders\" v-for=\"mark in bookMarks\" title=\"{{mark.title}}\" bookmarkfolderid=\"{{$index}}\"\n\t\t\t\t\t:class=\"{selected: currentMark === $index}\"\n\t\t\t\t\t@click=\"changeSelected($index)\"\n\t\t\t\t>\n\t\t\t\t\t{{mark.title}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div id=\"bookmarksRight\">\n\t\t\t\t<div class=\"bookmarksItem cf\" url=\"http://jenkins.stage.com/\" title=\"B5G-DNS_172.16.111.11 172.16.11.16 [Jenkins]\">\n\t\t\t\t\t<img src=\"" + __webpack_require__(95) + "\" height=\"160\" width=\"160\" class=\"bookmarksIcon\">\n\t\t\t\t\t<div class=\"bookmarksName\">B5G-DNS_172.16.111.11 172.16.11.16 [Jenkins]</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"bookmarksItem cf\" url=\"http://gitlab.izene.com/bwm-front-projects/b5m-static-web\" title=\"bwm-front-projects / b5m-static-web | GitLab\">\n\t\t\t\t\t<img src=\"" + __webpack_require__(95) + "\" class=\"bookmarksIcon\">\n\t\t\t\t\t<div class=\"bookmarksName\">bwm-front-projects / b5m-static-web | GitLab</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\t\t\t\n\t</div>\n\n</div>\n";

/***/ },

/***/ 95:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "buildImg/jd.png";

/***/ }

});