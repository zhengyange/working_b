import zepto from 'zepto';

module.exports = (function($) {
    $.fn.scrollToTop = function(scrollHeight ,duration) {    //目的 时间
        var $el = this;
        var el  = $el[0];
        var delta = scrollHeight;
        var startTime = Date.now();
        function scroll() {
            var fraction = Math.min(1, (Date.now() - startTime) / duration);
            el.scrollTop = scrollHeight - delta * fraction;
            if(fraction < 1) {
                setTimeout(scroll, 10);
            }
        }
        scroll();
    };
    return {
        allScrollGoTop: function(id) {
            var _this = this;
            window.SCROLLTOP = _this;
            if (typeof(id) == "undefined") {
                id = 'goTop_index';
            }
            var that = this;
            window.onscroll = function() {
                var scrollTop = document.body.scrollTop;
                var $html = $('<div id="' + id + '" class="goTop_img" onclick="SCROLLTOP.goTop()"></div>');
                if (scrollTop > 0) {
                    if ($('.goTop_img').length == 0) {
                        $('.viptg-cont').css('bottom', '0');
                        $html.appendTo($('body'));
                    }
                } else {
                    $('.goTop_img').remove();
                    $('.viptg-cont').css('bottom', '0');
                }
            }
        },
        goTop: function(ele) {
            var _body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
            var totalScroll = $('body').scrollTop();  //开始高度
                                        
            $('body').scrollToTop(totalScroll, '300');
            return false;
        },
        goToDiv: function(ele, targetEle) {
            var _body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
            $(ele).on('click', function() {
                _body.animate({
                    'scrollTop': $(targetEle).offset().top
                }, 600);
            })
        }
    }
})(zepto)
