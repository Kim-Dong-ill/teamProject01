// 김동일

//스크롤시 stiky 이벤트
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 1927) {
    $(".arrowUp").css("position", "absolute");
    $(".arrowUp").css("right", 50);
    $(".arrowUp").css("bottom", "1%");
  } else {
    $(".arrowUp").css("position", "fixed");
    $(".arrowUp").css("right", 50);
    $(".arrowUp").css("bottom", 50);
  }
});
window.addEventListener("scroll", function () {
  if (window.pageYOffset < 99) {
    $(".arrowUp").css("color", "white");
  } else {
    $(".arrowUp").css("color", "black");
  }
});
$(".arrowUp").click(function () {
  if (window.pageYOffset > 99) {
    $("html,body").animate({ scrollTop: 0 }, 0);
  } else {
    $("html,body").animate({ scrollTop: $(document).height() }, 0);
  }
});

//스크롤시 header 이벤트
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 10) {
    $(".header").addClass("active");
    $(".header").css("color", "black");
    $(".kor").css("border-color", "black");
    $(".familyBtn").css("border-color", "black");
    $(".headerLogo img").attr("src", "./images/header_logo_bk.png");
    $(".serch img").attr("src", "./images/hd_search_active.png");
    $("#kor img").attr("src", "/images/icon_fmsite_top_bk.png");
    $("#familyBtn img").attr("src", "/images/icon_fmsite_top_bk.png");
  } else {
    $(".header").removeClass("active");
    $(".header").css("color", "white");
    $(".kor").css("border-color", "white");
    $(".familyBtn").css("border-color", "white");
    $(".headerLogo img").attr("src", "./images/header_logo_wh.png");
    $(".serch img").attr("src", "./images/hd_search_icon.png");
    $("#kor img").attr("src", "/images/drop_down_wh.png");
    $("#familyBtn img").attr("src", "/images/drop_down_wh.png");
  }
});

// 언어 버튼 토글
$(".kor").click(function () {
  if (window.pageYOffset < 10) {
    $(".kor").css("border-radius", 0);
    $(".kor").css("border-top-left-radius", 25);
    $(".kor").css("border-top-right-radius", 25);
    $(".languageBtn li").css("background", "");
    $(".languageBtn li").css("border-color", "white");
    $(".languageBtn").stop().slideDown();
  } else {
    $(".languageBtn li").css("background", "white");
    $(".languageBtn li").css("border-color", "black");
    $(".languageBtn").stop().slideDown();
  }
});
$(".language").mouseleave(function () {
  $(".kor").css("border-radius", 40);
  $(".languageBtn").stop().slideUp();
});

//FAMILY사이트 버튼 토글
$(".familyBtn").click(function () {
  if (window.pageYOffset < 10) {
    $(".familyBtn").css("border-radius", 0);
    $(".familyBtn").css("border-top-left-radius", 25);
    $(".familyBtn").css("border-top-right-radius", 25);
    $(".familyEct li").css("background", "");
    $(".familyEct li").css("border-color", "white");
    $(".familyEct").stop().slideDown();
  } else {
    $(".familyEct li").css("background", "white");
    $(".familyEct li").css("border-color", "black");
    $(".familyEct").stop().slideDown();
  }
});
$(".family-site").mouseleave(function () {
  $(".familyBtn").css("border-radius", 80);
  $(".familyEct").stop().slideUp();
});

// 메뉴 슬라이드 다운 업
$(".menu-wrap").mouseenter(function () {
  $(".header").removeClass("active");
  $(".subMenu").stop().slideDown();
  $("#subMenuBackGroundColor").stop().slideDown();
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
  if (window.pageYOffset < 10) {
    $(".subMenu").stop().slideUp();
    $("#subMenuBackGroundColor").stop().slideUp();
    $(".header").css("background", "");
    $(".header").css("color", "white");
    $(".familyBtn").css("border-color", "white");
    $(".kor").css("border-color", "white");
    $(".headerLogo img").attr("src", "./images/header_logo_wh.png");
    $(".serch img").attr("src", "./images/hd_search_icon.png");
    $(".familyBtn img").attr("src", "/images/drop_down_wh.png");
    $(".kor img").attr("src", "/images/drop_down_wh.png");
  } else {
    $(".subMenu").stop().slideUp();
    $("#subMenuBackGroundColor").stop().slideUp();
    $(".header").css("background", "white");
    $(".header").css("color", "black");
  }
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

function madalMap() {
  // kakao map
  var mapContainer = document.getElementById("map"), // 지도를 표시할 div
    mapOption = {
      center: new kakao.maps.LatLng(37.557782, 126.926323), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    };

  var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
  // 지도를 표시하는 div 크기를 변경하는 함수입니다

  function relayout() {
    // 지도를 표시하는 div 크기를 변경한 이후 지도가 정상적으로 표출되지 않을 수도 있습니다
    // 크기를 변경한 이후에는 반드시  map.relayout 함수를 호출해야 합니다
    // window의 resize 이벤트에 의한 크기변경은 map.relayout 함수가 자동으로 호출됩니다
    map.relayout();
  }
  // 마커가 표시될 위치입니다
  var markerPosition = new kakao.maps.LatLng(37.557782, 126.926323);

  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
    position: markerPosition,
  });

  // 마커가 지도 위에 표시되도록 설정합니다
  marker.setMap(map);
}

// kakao map modal json데이터 전역변수
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
  // console.log(company);
  let text = "";
  $(".mapModal").css("display", "block");
  // console.log(index);
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
  madalMap();
  console.log(text);
  $(".mapContentText").html(text);
}

function family2(index) {
  madalMap();
  let text = "";
  $(".mapModal").css("display", "block");
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
  madalMap();
  let text = "";
  $(".mapModal").css("display", "block");
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
let map;
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
    center: new kakao.maps.LatLng(37.046396, 126.714402),
    level: 12,
    // draggable:false,
    // zoomable:false,
    disableDoubleClick: true,
  };

  map = new kakao.maps.Map($("#weatherMap")[0], options);
  function relayout() {
    // 지도를 표시하는 div 크기를 변경한 이후 지도가 정상적으로 표출되지 않을 수도 있습니다
    // 크기를 변경한 이후에는 반드시  map.relayout 함수를 호출해야 합니다
    // window의 resize 이벤트에 의한 크기변경은 map.relayout 함수가 자동으로 호출됩니다
    map.relayout();
  }
  axios.get("./json/cities.json").then(onGetCity);
}

function onGetCity(r) {
  // console.log(r.data);
  cities = r.data.cities; // []
  cities.forEach(function (item) {
    params.lat = item.lat; // cities[i].lat
    params.lon = item.lon;
    params.id = item.id;
    // console.log(item.lat);
    // console.log(params.lat);
    axios.get(weatherApi, { params }).then(onCreateMaker);
  });
}

function onCreateMaker(r) {
  // console.log(params);
  // console.log(r.data.id);
  cityCnt++;
  // //   console.log(cityCnt);

  let city = cities.filter(function (v) {
    // console.log("v id" + v.id);
    // console.log("r.data id" + r.data.id);
    return v.id === r.data.id;
  });
  // console.log(city[0].name);

  let content = `
    <div class="weatherCard">
        <div class="weatherTitle">
          <div class="weatherName">${city[0].name}</div>
          <div class="weatherImg"><img src="http://openweathermap.org/img/wn/${r.data.weather[0].icon}.png"></div>
        </div>
        <div class="weatherTemp">현재온도 : ${r.data.main.temp}도</div>
      </div>
    `;

  $(".weatherMap").html(content);
  //  <div class="weatherName">${city[i].name}</div>
  let position = new kakao.maps.LatLng(r.data.coord.lat, r.data.coord.lon);

  // 커스텀 오버레이를 생성합니다
  var customOverlay = new kakao.maps.CustomOverlay({
    position: position,
    content: content,
  });
  // 커스텀 오버레이를 지도에 표시합니다
  customOverlay.setMap(map);
}

//weather api 가져오기 end

//weather 클릭시 팝업창
$("#serch a").click(function () {
  $("#weatherMap").css("display", "block");
  //실행
  mapInit();
});
$(".weatherMapWrapClose>img").click(function () {
  $("#weatherMap").css("display", "none");
});
