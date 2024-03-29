// 김동일
// 언어 버튼 토글
$(".kor").click(function () {
  $(".kor").css("border-radius", 0);
  $(".kor").css("border-top-left-radius", 25);
  $(".kor").css("border-top-right-radius", 25);
  $(".languageBtn").stop().slideDown();
});
$(".language").mouseleave(function () {
  $(".kor").css("border-radius", 40);
  $(".languageBtn").stop().slideUp();
});

//FAMILY사이트 버튼 토글
$(".familyBtn").click(function () {
  $(".familyBtn").css("border-radius", 0);
  $(".familyBtn").css("border-top-left-radius", 25);
  $(".familyBtn").css("border-top-right-radius", 25);
  $(".familyEct").stop().slideDown();
});
$(".family-site").mouseleave(function () {
  $(".familyBtn").css("border-radius", 80);
  $(".familyEct").stop().slideUp();
});

// 메뉴 슬라이드 다운 업
$(".menu-wrap").mouseenter(function () {
  $(".subMenuWrap").stop().slideDown();
  $(".header").css("background", "white");
  $(".subMenuWrap").css("background", "white");
  $(".kor").css("border-color", "black");
  $(".familyBtn").css("border-color", "black");
  $(".header").css("color", "black");
  $(".header").css("font-weight", "bold");
  $(".headerLogo img").attr("src", "./images/header_logo_bk.png");
  $(".serch img").attr("src", "./images/hd_search_active.png");
  $(".familyBtn img").attr("src", "./images/icon_fmsite_top_bk.png");
  $(".kor img").attr("src", "./images/icon_fmsite_top_bk.png");
  // font-weight: bold;
});
$(".menu-wrap").mouseleave(function () {
  $(".subMenuWrap").stop().slideUp();
  $(".header").css("background", "");
  $(".header").css("color", "white");
  $(".familyBtn").css("border-color", "white");
  $(".kor").css("border-color", "white");
  $(".headerLogo img").attr("src", "./images/header_logo_wh.png");
  $(".serch img").attr("src", "./images/hd_search_icon.png");
  $(".familyBtn img").attr("src", "/images/drop_down_wh.png");
  $(".kor img").attr("src", "/images/drop_down_wh.png");
});

//버거메뉴 클릭시 모바일 메뉴 슬라이드
$(".burgerMenu").click(function () {
  $(".mobileMenu").stop().slideDown();
});
$(".mobileClose").click(function () {
  $(".mobileMenu").stop().slideUp();
});
