webpackJsonp([5,8],{95:function(o,e,t){var i,r;t(96),i=t(98),r=t(101),o.exports=i||{},o.exports.__esModule&&(o.exports=o.exports["default"]),r&&(("function"==typeof o.exports?o.exports.options||(o.exports.options={}):o.exports).template=r)},96:function(o,e,t){var i=t(97);"string"==typeof i&&(i=[[o.id,i,""]]);t(9)(i,{});i.locals&&(o.exports=i.locals)},97:function(o,e,t){e=o.exports=t(6)(),e.push([o.id,"",""])},98:function(o,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),t(99),e["default"]={data:function(){return{currentMark:0,bookMarks:[{title:"书签栏"},{title:"常用"},{title:"React"},{title:"工具"}]}},methods:{changeSelected:function(o){this.currentMark=o}}}},99:function(o,e,t){var i=t(100);"string"==typeof i&&(i=[[o.id,i,""]]);t(13)(i,{});i.locals&&(o.exports=i.locals)},100:function(o,e,t){e=o.exports=t(6)(),e.push([o.id,"#bookmarksLeft,#bookmarksRight{height:100%;overflow-y:scroll;overflow-x:hidden}#bookmarksSlideBigBox,.bookmarksFolders{position:relative}#allBookmark{width:100%;height:100%;box-sizing:border-box;padding-top:50px}#bookmarksLeft{width:106px;float:left;box-shadow:0 5px 10px #ccc}#bookmarksLeft::-webkit-scrollbar{width:0;background-color:transparent}#bookmarksRight{width:240px;float:right}.bookmarksFolders,.bookmarksName{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:12px;cursor:pointer}.bookmarksFolders{width:102px;height:40px;line-height:40px;padding-left:6px;color:#999}.bookmarksFolders:not(.selected):hover{background-color:rgba(41,128,185,.5);color:#fdfdfd}.bookmarksItem{width:100%;height:36px;padding:5px;border-radius:5px;color:#848484;cursor:pointer;margin:5px auto 10px}.bookmarksItem:hover{background-color:#f5f0f6;color:#3498db}.bookmarksIcon{width:14px;height:14px;float:left;margin-top:6px;cursor:pointer}.bookmarksName{float:left;width:185px;margin-left:10px;height:45px;line-height:48px;margin-top:-12px}#bookmarkSearch{width:100%;height:50px;position:absolute;text-align:center;box-shadow:0 0 10px #ccc}#searchBookmarks{margin-top:10px}#searchFolder{-webkit-transition:height .3s ease;height:0}#searchFolder,.selected{color:#fdfdfd;background-color:#2980b9}",""])},101:function(o,e,t){o.exports=' <div id=bookmarksSlide class=Slide> <div class="slideTitle cf" style=background-color:#3498DB> <div class="topMenu fl" in=todosSlide with=todos0 style="">书签</div> </div> <div id=bookmarksSlideBigBox class=SlideBigBox> <div id=bookmarkSearch> <input type=search id=searchBookmarks i18n-placeholder=searchBookmarks placeholder=搜索书签> </div> <div id=allBookmark> <div id=bookmarksLeft> <div class=bookmarksFolders id=searchFolder bookmarkfolderid=1>搜索</div> <div class=bookmarksFolders v-for="mark in bookMarks" title={{mark.title}} bookmarkfolderid={{$index}} :class="{selected: currentMark === $index}" @click=changeSelected($index)> {{mark.title}} </div> </div> <div id=bookmarksRight> <div class="bookmarksItem cf" url=http://jenkins.stage.com/ title="B5G-DNS_172.16.111.11 172.16.11.16 [Jenkins]"> <img src='+t(102)+' height=160 width=160 class=bookmarksIcon> <div class=bookmarksName>B5G-DNS_172.16.111.11 172.16.11.16 [Jenkins]</div> </div> <div class="bookmarksItem cf" url=http://gitlab.izene.com/bwm-front-projects/b5m-static-web title="bwm-front-projects / b5m-static-web | GitLab"> <img src='+t(102)+" class=bookmarksIcon> <div class=bookmarksName>bwm-front-projects / b5m-static-web | GitLab</div> </div> </div> </div> </div> </div> "},102:function(o,e,t){o.exports=t.p+"buildImg/jd.png"}});