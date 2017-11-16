;(function($){
    var loadImg = function(pics, callback, num){
        var index = 0;
        var len = pics.length;
        var img = new Image();
        var flag = false;
        var progress = function(w){
            num.html(w);
        }
        var load = function(){
            img.src = pics[index];
            img.onload = function() {
                // 控制台显示加载图片信息
                progress(Math.floor(((index + 1) / len) * 100));
                index ++ ;
                if (index < len) {
                    load();
                }else{
                    callback();
                }
            }
            return img;
        }
        if(len > 0){
            load();
        }else{
            progress("100%");
        }
        return {
            pics: pics,
            load: load,
            progress: progress
        };
    }
    
    if(typeof(pics) == 'undefined'){
        pics = [];
    }
    console.log(123);
    $.extend({
        uImgLoad : function(options){

            var options = options || {};
            var defaults = {
                pics : [],
                loaded : function(){},
            }
            options = $.extend({},defaults,options);
            loadImg(options.pics, function(){
                setTimeout(function(){
                   options.loaded();
                }, 1200);
            },options.num);
        }
    });
})(jQuery);
$(function (){
    // 进度加载
    (function () {
        var pics = [
            'images/btn_01.png',
            'images/btn_02.png',
            'images/btn_03.png',

            'images/boy.png',
            'images/boy-head.png',
            'images/girl.png',
            'images/girl-head.png',
            
            'images/icon_01.png',
            'images/icon_02.png',
            'images/icon_03.png',
            'images/icon_04.png',
            'images/icon_05.png',

            'images/img_01.png',
            'images/img_02.png',
            'images/img_03.png',

            'images/title.png',
            
            

        ];
        var $loading_num = $('.loading-num');
        var $loading = $('.loading');
        $.uImgLoad({
            pics : pics,
            num:$loading_num,
            loaded: function(){
                $loading.css('opacity',0);
                setTimeout(function(){
                    $loading.hide();
                    
                },800);
                $('.content-boy').addClass('leftIn');
                    $('.content-girl').addClass('rightIn');
                    $('.handle-panel').addClass('fadeIn');

            }
        });
    })();
    
    $('.active-rule').on('touchend', function (event) {
        event.preventDefault();
        $('.rule-page').css({
           'transform': 'translateX(0)'
        });
    });
    $('.rule-page-return').on('touchend', function (event) {
        event.preventDefault();
        $('.rule-page').css({
           'transform': 'translateX(7.5rem)'
        });
    });

    $('.record-btn').on('touchend', function (event) {
        event.preventDefault();
        $('.record-page').css({
           'transform': 'translateX(0)'
        });
    });
    $('.record-page-btn').on('touchend', function (event) {
        event.preventDefault();
        $('.record-page').css({
           'transform': 'translateX(7.5rem)'
        });
    });
});
