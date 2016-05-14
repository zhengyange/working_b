import zepto from 'zepto';

module.exports = (function($) {
    var obj = function(callback) {
        this.callback = callback;
    }
    obj.prototype = {
        init: function() {
            var _this = this;
            $(document).ready(function() {
                var range = 50; //距下边界长度/单位px
                var elemt = 500; //插入元素高度/单位px
                var num = 1;
                var totalheight = 0;
                $(window).scroll(function() {
                    var srollPos = $(window).scrollTop(); //滚动条距顶部距离(页面超出窗口的高度)

                    totalheight = parseFloat($(window).height()) + parseFloat(srollPos);
                    if (($(document).height() - range) <= totalheight) {
                        _this.callback();
                    }
                });
            });
        },
        unInit:function(){
            $(window).off('scroll');
        }
    }
    return obj;
})(zepto)
