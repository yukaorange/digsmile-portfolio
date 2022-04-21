$(function () {
  //===========================
  //loading
  //===========================
  // ロード完了したらクラス名「loaded」付与
  window.onload = function() {
    const loading = document.getElementById('c-loading');
    loading.classList.add('loaded');
  }


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

//===========================
//フォーム送信モジュール
//===========================
//非同期通信 & 送信後の挙動//
$("#p-contact-form").submit(function (event) {
  let formData = $("#form").serialize();
  $.ajax({
    url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfAzt2h5oM0nMrxGChjvql_Mhbwt5oGrahHngg6n3ObQv5l7A/formResponse", //formタグのaction属性と同じ値
    data: formData,
    type: "POST",
    dataType: "xml",
    statusCode: {
      0: function () {
        $(".p-contact-form_message").slideDown("slow");
        $(".p-contact-form_submit").fadeOut("fast");
      }, //送信成功後のメッセージ

      // 200: function () {
      //   $(".p-contact-form_false").slideDown();
      // }//送信失敗時に表示するメッセージ
    },
  });
  event.preventDefault();
});

//===========================
//フォームバリデーション
//===========================

const submit = $(".p-contact-form_submit");

// ラジオボタン↓↓
$("#p-contact-form input,#p-contact-form textarea").change(function () {
  if (
    $('#p-contact-form input[id="request"]').prop("checked") === true ||
    $('#p-contact-form input[id="recruit"]').prop("checked") === true ||
    $('#p-contact-form input[id="ir"]').prop("checked") === true ||
    $('#p-contact-form input[id="other"]').prop("checked") === true
  ) {
    submit.prop("disabled", false);
    submit.removeClass("_disabled");
  } else {
    submit.prop("disabled", true);
    submit.addClass("_disabled");
  }
});
// 必須テキスト↓↓
$("#p-contact-form input,#p-contact-form textarea").change(function () {
  if (
    $('#p-contact-form input[id="name"]').val() !== "" &&
    $('#p-contact-form input[type="email"]').val() !== "" &&
    $('#p-contact-form textarea[id="textarea"]').val() !== "" &&
    $('#p-contact-form input[name="checkbox"]').prop("checked") === true
  ) {
    submit.prop("disabled", false);
    submit.removeClass("_disabled");
  } else {
    submit.prop("disabled", true);
    submit.addClass("_disabled");
  }
});
