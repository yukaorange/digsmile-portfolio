$(function () {
  //===========================
  //ヘッダーボタン/スライドメニュー
  //===========================
  $(".l-header_btn").click(function () {
    $(this).find("span").toggleClass("active");
    // スライドメニューを表示/非表示
    if ($(this).find("span").hasClass("active")) {
      $(".l-header_nav").children().addClass("active");
    } else {
      $(".l-header_nav").children().removeClass("active");
    }
  });
});

// リンククリックでメニューが閉じる
$(".l-header_nav-item a[href],.l-header_nav-bg").on("click", function (event) {
  $(".l-header_btn").trigger("click");
});

// スクロールするとヘッダーロゴの色変更
$(window).on("scroll", function () {
  const imageHeight = $(".scroll-checkPoint1").height();
  if (imageHeight - 40 < $(this).scrollTop()) {
    $(".l-header_logo").addClass("scrollColor");
  } else {
    $(".l-header_logo").removeClass("scrollColor");
  }
  // console.log(shadowHeight);
});
//スクロールするとスライドメニューボタンの変更
$(window).on("scroll", function () {
  const shadowHeight = $(".scroll-checkPoint2").height();
  if (shadowHeight - 45 < $(this).scrollTop()) {
    $(".l-header_btn").addClass("scrollColor");
  } else {
    $(".l-header_btn").removeClass("scrollColor");
  }
  // console.log(shadowHeight);
});
