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
$(".l-header_nav-item a[href]").on("click", function (event) {
  $(".js-hamburger").trigger("click");
});
