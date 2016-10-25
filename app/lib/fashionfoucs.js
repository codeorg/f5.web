
(function (name, context, definition) {
    "use strict";
    if (typeof module !== "undefined" && module.exports) { module.exports = definition(); }
    else if (typeof define === "function" && define.amd) { define(definition); }
    else { context[name] = definition(); }
})("Fashionfoucs", this, function() {
    "use strict";


    var curIndex = 0;
    var time = 800;
    var slideTime = 300000;
    var adTxt = $("#banner_img>li>div>.ad_txt");
    //var adTxt=$(".ad_txt");
    //console.log("adTxt",adTxt)
    var adImg = $("#banner_img>li>div>.ad_img");
    var int = setInterval(function () {
        autoSlide();
    }, slideTime);
    // $("#banner_ctr>ul>li[class!='first-item'][class!='last-item']").click(function () {
    //     show($(this).index("#banner_ctr>ul>li[class!='first-item'][class!='last-item']"));
    //     window.clearInterval(int);
    //     int = setInterval("autoSlide()", slideTime);
    // });
    function autoSlide() {
        curIndex + 1 >= $("#banner_img>li").size() ? curIndex = -1 : false;
        show(curIndex + 1);
    }
    function show(index) {
        $.easing.def = "easeOutQuad";
        $("#drag_ctr,#drag_arrow").stop(false, true).animate({ left: index * 153 + 20 }, 300);
        $("#banner_img>li").eq(curIndex).stop(false, true).fadeOut(time);
        $(".ad_txt").eq(curIndex).stop(false, true).animate({ top: "340px" }, time);
        adImg.eq(curIndex).stop(false, true).animate({ right: "10px" }, time);
        setTimeout(function () {
            $("#banner_img>li").eq(index).stop(false, true).fadeIn(time);
            $(".ad_txt").eq(index).children("p").css({ paddingTop: "50px", paddingBottom: "50px" }).stop(false, true).animate({ paddingTop: "0", paddingBottom: "0" }, time);
            $(".ad_txt").eq(index).css({ top: "0", opacity: "0" }).stop(false, true).animate({ top: "170px", opacity: "1" }, time);

            //$("#ttt").children("p").css({ paddingTop: "50px", paddingBottom: "50px" }).stop(false, true).animate({ paddingTop: "0", paddingBottom: "0" }, time);
            //$("#ttt").css({ top: "0", opacity: "0" }).stop(false, true).animate({ top: "170px", opacity: "1" }, time);
            //adTxt.eq(index).children("p").css({ paddingTop: "50px", paddingBottom: "50px" }).stop(false, true).animate({ paddingTop: "0", paddingBottom: "0" }, time);
            //adTxt.eq(index).css({ top: "0", opacity: "0" }).stop(false, true).animate({ top: "170px", opacity: "1" }, time);
            adImg.eq(index).css({ right: "-50px", opacity: "0" }).stop(false, true).animate({ right: "10px", opacity: "1" }, time);
        }, 200)
        curIndex = index;
    }

    function animation() {
        var _bannerList=$('#banner_list .banner_box'),
            _listLength=2,
            _gbTime=1,
            _time=null;

        /*Loading Delay*/
        function loadDelay(){
            _time=setInterval(function () {
                fnTime();
            },5000)
            _bannerList.eq(0).removeClass('on_delay');
        }
        var n = new Image();
        n.onload = function(){
            loadDelay();
        }
        n.src = "/img/bg1_1.png"

        /*Focus Image Play*/
        function fnFocusAct(actNum){
            window.clearInterval(_time);
            var _toHide=$('#banner_list').find('.on'),
                _toAct=_bannerList.eq(actNum);


            _toAct.addClass('on2');
            _toHide.fadeTo(600,0,function(){
                _toHide.removeClass('on');
                _toAct.removeClass('on2');
                _toAct.siblings().css('opacity','1');
                _toAct.addClass('on');
            })
            _gbTime=actNum;
            if(_gbTime>=_listLength){
                _gbTime=0;
            }else{
                _gbTime++;
            }
            _time=setInterval(function () {
                fnTime();
            },5000)
        }

        function fnTime(){
            fnFocusAct(_gbTime);
        }

    }


    return {
        animation:animation,
        show:show,
        autoSlide:autoSlide,
        click:function (index) {
            show(index)
            window.clearInterval(int);
            int = setInterval(function () {
                autoSlide();
            }, slideTime);
        }
    }

})
