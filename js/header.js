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

//modal창 팝업 버튼
// $(".family1").click(function () {});

$(".family2").click(function () {
  $(".mapModal").css("display", "block");
});

//modal창 close 버튼
$(".mapContentCloseBtn img").click(function () {
  $(".mapModal").css("display", "none");
});

// kakao map
var mapContainer = document.getElementById("map"), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(37.557782, 126.926323), // 지도의 중심좌표
    level: 3, // 지도의 확대 레벨
  };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커가 표시될 위치입니다
var markerPosition = new kakao.maps.LatLng(37.557782, 126.926323);

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
  position: markerPosition,
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

// kakao map modal json데이터
const company = [
  {
    name: "애경산업(주)",
    work: "제조업체",
    location: "서울 특별시 마포구 양화로188",
    phone: "02-768-2000",
  },
  {
    name: "애경산업(루나)",
    work: "유통업체",
    location: "충남 청양군 정산면 충의로 1547-9",
    phone: "02-869-3000",
  },
  {
    name: "애경산업(S.T)",
    work: "서비스업체",
    location: "서울 중구 을지로 30",
    phone: "02-153-4000",
  },
];

function family1(index) {
  let text = "";
  $(".mapModal").css("display", "block");
  $("body").css("background", "#000000c5");
  console.log(index);
  text += `
  <div class="mapTitle">${company[index].name}</div>
    <div class="mapSubTitle">
      <i class="fa-solid fa-city"></i>${company[index].work}
    </div>
    <div class="mapLocation">
      <i class="fa-solid fa-location-dot"></i>${company[index].location}
    </div>
    <div class="mapPhone">
      <i class="fa-solid fa-phone"></i>${company[index].phone}
    </div>
  `;
  $(".mapContentText").html(text);
}

function family2(index) {
  let text = "";
  $(".mapModal").css("display", "block");
  $("body").css("background", "#000000c5");
  console.log(index);
  text += `
  <div class="mapTitle">${company[index].name}</div>
    <div class="mapSubTitle">
      <i class="fa-solid fa-city"></i>${company[index].work}
    </div>
    <div class="mapLocation">
      <i class="fa-solid fa-location-dot"></i>${company[index].location}
    </div>
    <div class="mapPhone">
      <i class="fa-solid fa-phone"></i>${company[index].phone}
    </div>
  `;
  $(".mapContentText").html(text);
}

function family3(index) {
  let text = "";
  $(".mapModal").css("display", "block");
  $("body").css("background", "#000000c5");
  console.log(index);
  text += `
  <div class="mapTitle">${company[index].name}</div>
    <div class="mapSubTitle">
      <i class="fa-solid fa-city"></i>${company[index].work}
    </div>
    <div class="mapLocation">
      <i class="fa-solid fa-location-dot"></i>${company[index].location}
    </div>
    <div class="mapPhone">
      <i class="fa-solid fa-phone"></i>${company[index].phone}
    </div>
  `;
  $(".mapContentText").html(text);
}

// for (let i = 0; i < company.length; i++) {
//   text += `
//           <div class="mapTitle">${company[i].name}</div>
//             <div class="mapSubTitle">
//               <i class="fa-solid fa-city"></i>${company[i].work}
//             </div>
//             <div class="mapLocation">
//               <i class="fa-solid fa-location-dot"></i>${company[i].location}
//             </div>
//             <div class="mapPhone">
//               <i class="fa-solid fa-phone"></i>${company[i].phone}
//             </div>
//           `;
// }
// $(".mapContentText").html(text);
