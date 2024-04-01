// 김동일

//스크롤시 이벤트
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 1) {
    console.log("현재 스크롤 Y 위치가 200px보다 크다");
  } else {
    console.log("현재 스크롤 Y 위치가 200px보다 작다");
  }
});

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

// 자회사 클릭시 모당창 팝업
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
// 자회사 클릭시 모당창 팝업 end

//weather api 가져오기

//전역변수
// let weatherMap;
let cities;
let cityCnt = 0;
let params = {
  appid: "852d267b2f480b2a7538f551fee08af7",
  units: "metric",
  lang: "ko",
};
const weatherApi = "https://api.openweathermap.org/data/2.5/weather";

//함수
function mapInit() {
  var options = {
    center: new kakao.maps.LatLng(37.55587, 126.97302),
    level: 13,
    // draggable:false,
    // zoomable:false,
    disableDoubleClick: true,
  };

  map = new kakao.maps.Map($("#weatherMap")[0], options);
  axios.get("./json/cities.json").then(onGetCity);
}

function onGetCity(r) {
  // console.log(r.data);
  cities = r.data.cities; // []
  cities.forEach(function (item) {
    params.lat = item.lat; // cities[i].lat
    params.log = item.lon;
    params.id = item.id;
    // console.log(item.lat);
    console.log(params.lat);
    axios.get(weatherApi, { params }).then(onCreateMaker);
  });
}

function onCreateMaker(r) {
  console.log(r.data);
  cityCnt++;
  //   console.log(cityCnt);

  let city = cities.filter(function (v) {
    return v.id === r.data.id;
  });
  console.log(city);

  let content = "";
  for (let i = 0; i < cities.length; i++) {
    content += `
    <div class="weatherCard">
        <div class="weatherTitle">
          <div class="weatherName">${city[i].name}</div>
          <div class="weatherImg"><img src="http://openweathermap.org/img/wn/${r.data.weather[0].icon}.png"></div>
        </div>
        <div class="weatherTemp">현재온도 : ${r.data.main.temp}도</div>
      </div>
    `;
  }
  let position = new kakao.maps.LatLng(r.data.coord.lat, r.data.coord.lon);

  // 커스텀 오버레이를 생성합니다
  var customOverlay = new kakao.maps.CustomOverlay({
    position: position,
    content: content,
  });
  // 커스텀 오버레이를 지도에 표시합니다
  customOverlay.setMap(map);
}

//실행
mapInit();

//weather api 가져오기 end
