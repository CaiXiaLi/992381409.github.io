
$(document).ready(function(){
  $(".textLi:even").css({"background":"rgba(135,206,234,0.6)"});

  $("body").scrollTop();
  
  $("#nav a").hover(
    function(){
       $(this).addClass("active");
     },
    function(){
      $(this).removeClass("active");
  })

  $("#musicimg").click(function(){
    var mymusic=document.getElementById("media");
    
    if( $(this).hasClass("pause") ){
      mymusic.pause();
      $(this).removeClass("pause").addClass("play");
      $(this).attr("src" ,"css/img/music_pause.png")
    }else{
      mymusic.play();
      $(this).removeClass("play").addClass("pause");
      $(this).attr("src" ,"css/img/music_play.gif")
    }
  })

  // 点击 input 页面滚动至指定的位置
  $("#btn input").on("click", function(evt){
    var _index = $(this).closest("li").index();      // 获取到当前点击的 input 父元素的 index
    var _height = _index * $height;                  // 拿这个 index 去获取 body 应该滚动的高度
    $("body").animate({scrollTop: _height}, 800, "swing");
  })

  // 页面调整尺寸的时候对应的调整 section 的尺寸
  $(window).resize(getSectionSize);

  // 滚动调整input的checked的状态
  $(window).scroll(function() {
    var _top = $(window).scrollTop();                 // 拿到当前页面据顶部的高度
    var _index = (_top / $height).toFixed(0);         // 获取当前在哪个 index 范围内，.toFixed(0) 四舍五入
    $("#btn input").eq(_index).prop("checked", true); // 把获取到的 index 对应的 input 置为checked状态
  })

  getSectionSize();

  document.onmousewheel = function(evt) {
    evt.preventDefault();                             // 阻止默认的滚动事件
    scrollTopCB(evt.wheelDelta);
  }

  function getSectionSize() {
    var $height = document.documentElement.clientHeight;
    var $width = document.documentElement.clientWidth;
    $("section").css({height: $height, width: $width});
  }

  var $height = document.documentElement.clientHeight;
  var $scrollHeight = 0;
  function scrollTopCB(data) {
    if(data > 0) {
      $scrollHeight -= $height;
    }else {
      $scrollHeight += $height;
    }
    if($scrollHeight > document.body.scrollHeight || $scrollHeight < 0) return
    $("body:not(:animated)").animate({scrollTop:$scrollHeight}, 800, "swing");
  }

  $("#textp").css({
    "background":"#F5F5F5",
    "color":"#FFA07A",
  })
})
