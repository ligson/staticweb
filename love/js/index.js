/**
 * Created by ligson on 2016/3/2.
 */

var loveDate = Date.parseFromText("2015-09-13 21:30", "yyyy-MM-dd HH:mm");
function resizeUI() {
    $(".page1").css({width: $(window).width() + "px", height: $(window).height() + "px"});
}

function updateTime() {
    var now = new Date();
    var date3 = now.getTime() - loveDate.getTime();
    //alert(date3);

    //计算出相差天数
    var days = Math.floor(date3 / (24 * 3600 * 1000));

    //计算出小时数
    var leave1 = date3 % (24 * 3600 * 1000);    //计算天数后剩余的毫秒数
    var hours = Math.floor(leave1 / (3600 * 1000));
    //计算相差分钟数
    var leave2 = leave1 % (3600 * 1000);        //计算小时数后剩余的毫秒数
    var minutes = Math.floor(leave2 / (60 * 1000));
    //计算相差秒数
    var leave3 = leave2 % (60 * 1000);      //计算分钟数后剩余的毫秒数
    var seconds = Math.round(leave3 / 1000);
    if(seconds<10){
        seconds = "0"+seconds;
    }
    var dateString = days + "天 " + hours + "小时 " + minutes + "分钟" + seconds + "秒";

    $("#time").empty().append(dateString);

}


$(function () {
    resizeUI();
    $(window).resize(function () {
        resizeUI();
    });
    $("#startDate").empty().append(loveDate.format("yyyy年MM月dd日"));
    setInterval(updateTime,1000);
});
