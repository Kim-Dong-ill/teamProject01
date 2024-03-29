// 하태민
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper = new Swiper(".mySwiper2", {
  spaceBetween: 25,
  effect: "fade",
  fadeEffect: { crossFade: true }, //페이드 겹침 방지
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function dataInit() {
  axios.get("./json/image.json").then(GetSlideContent1);
  axios.get("./json/image.json").then(GetSlideContent2);
  axios.get("./json/image.json").then(GetSlideContent3);
  axios.get("./json/image.json").then(GetSlideContent4);
}

function GetSlideContent1(res) {
  let content = res.data.content;
  let image = res.data.content[0].image;
  let text = "";
  text += `
      <h2>${content[0].title}</h2>
      <div class="textWrap">
        <p>${content[0].subtitle}</p>
        <p class="text">
          ${content[0].text}
        </p>
        <div class="button">
          <a href="#"
            >바로가기<img src="./images/arrow_link.png" alt=""
          /></a>
        </div>
      </div>`;

  document.querySelector(".axios1").innerHTML = text;

  let imageText = "";
  for (let i = 0; i < content[0].image.length; i++) {
    let i1 = content[0].image[i].path;
    imageText += ` <div class="swiper-slide ">
    <img src="${i1}" alt="" /></div> `;
  }
  document.querySelector(".axiosimage1").innerHTML = imageText;
}

function GetSlideContent2(res) {
  let content = res.data.content;
  let image = res.data.content[1].image;
  let text = "";
  text += `
        <h2>${content[1].title}</h2>
        <div class="textWrap">
          <p>${content[1].subtitle}</p>
          <p class="text">
            ${content[1].text}
          </p>
          <div class="button">
            <a href="#"
              >바로가기<img src="./images/arrow_link.png" alt=""
            /></a>
          </div>
        </div>`;

  document.querySelector(".axios2").innerHTML = text;

  let imageText = "";
  for (let i = 0; i < content[1].image.length; i++) {
    let i1 = content[1].image[i].path;
    imageText += ` <div class="swiper-slide ">
      <img src="${i1}" alt="" /></div> `;
  }
  document.querySelector(".axiosimage2").innerHTML = imageText;
}

function GetSlideContent3(res) {
  let content = res.data.content;
  let image = res.data.content[2].image;
  let text = "";
  text += `
          <h2>${content[2].title}</h2>
          <div class="textWrap">
            <p>${content[2].subtitle}</p>
            <p class="text">
              ${content[2].text}
            </p>
            <div class="button">
              <a href="#"
                >바로가기<img src="./images/arrow_link.png" alt=""
              /></a>
            </div>
          </div>`;

  document.querySelector(".axios3").innerHTML = text;

  let imageText = "";
  for (let i = 0; i < content[2].image.length; i++) {
    let i1 = content[2].image[i].path;
    imageText += ` <div class="swiper-slide ">
        <img src="${i1}" alt="" /></div> `;
  }
  document.querySelector(".axiosimage3").innerHTML = imageText;
}

function GetSlideContent3(res) {
  let content = res.data.content;
  let image = res.data.content[2].image;
  let text = "";
  text += `
            <h2>${content[2].title}</h2>
            <div class="textWrap">
              <p>${content[2].subtitle}</p>
              <p class="text">
                ${content[2].text}
              </p>
              <div class="button">
                <a href="#"
                  >바로가기<img src="./images/arrow_link.png" alt=""
                /></a>
              </div>
            </div>`;

  document.querySelector(".axios3").innerHTML = text;

  let imageText = "";
  for (let i = 0; i < content[2].image.length; i++) {
    let i1 = content[2].image[i].path;
    imageText += ` <div class="swiper-slide ">
          <img src="${i1}" alt="" /></div> `;
  }
  document.querySelector(".axiosimage3").innerHTML = imageText;
}

function GetSlideContent4(res) {
  let content = res.data.content6;
  let text = "";
  for (let i = 0; i < res.data.content6.length; i++) {
    text += `
        <div class="swiper-slide d-flex gap-5">
        <div class="imgWrap">
          <img
            src="${res.data.content6[i].image}"
            alt=""
          />
        </div>

        <div class="textbox">
          <div class="titlebox">
            <p>${res.data.content6[i].smallTitle}</p>
            <h3>${res.data.content6[i].title}</h3>
            <p>
            ${res.data.content6[i].titleText}
            </p>
          </div>
          <div class="titletextbox">
          ${res.data.content6[i].text}
          </div>
        </div>
      </div>`;
  }
  document.querySelector(".axios4").innerHTML = text;
}

dataInit();
