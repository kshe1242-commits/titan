/* =========================================
   캐릭터 데이터 (주둔병단)
========================================= */
const characters = [
  {
    id: 1,
    name: "도트 픽시스",
    images: [
      "/titan/joodun/img/pixis_1.webp",
      "/titan/joodun/img/pixis_2.webp",
      "/titan/joodun/img/pixis_3.jpg",
    ],
    video: "./video/pixis.mp4",
    profile: "출생 : 9월 13일 <br>주둔병단 남방사령관 ",
    story:
      "선천적으로 타고난 지휘관이라기보다는 수많은 경험과 짬밥을 통해 완성된 지휘관이다. 엘빈 스미스가 혁명가 스타일의 지휘관이라면 도트 픽시스는 우리가 흔히 생각하는 전형적인 재치와 입담이 좋은 장군 스타일이다. 행동 패턴에 있어서도 엘빈과 큰 차이를 보이는데, 엘빈의 목적이 세계의 진실을 알아내는 것이라면 픽시스의 목적은 방벽 내부 인류의 수호이다. 배고픈 늑대보다는 배부른 돼지를, 잔혹한 진실보다는 달콤한 거짓을 선택할 수도 있는 인물. 때문에 작중 내내 굉장히 보수적인 입장을 보이며 무고한 희생을 줄이는 데 만전을 기한다. 시민과 재산의 보호가 주목적인 주둔병단에 있어서는 가장 알맞는 지휘관이다.",
  },
  {
    id: 2,
    name: "안카 라인베르거",
    images: [
      "/titan/joodun/img/anka_1.webp",
      "/titan/joodun/img/anka_2.webp",
      "/titan/joodun/img/anka_3.webp",
    ],
    video: "./video/anka.mp4",
    profile: "출생 : 6월 1일 <br>주둔병단 소속 병사",
    story:
      "단발의 갈색 머리카락과 밝은 갈색 눈을 가진 젊은 여성으로, 항상 구스타브와 함께 도트 픽시스의 뒤에서 참모로 일 하고 있다. 병단의 최고위 급에 해당하는 도트 픽시스가 자신의 호위를 맡길 정도로 안카를 신뢰하는 것으로 보아, 병사로서의 자질은 대단한 것으로 추정된다. 주둔병단의 참모인 만큼 작중에서도 꽤 전략적인 면모를 꽤 보여주었는데 트로트스 구 공방전에서는 상황을 신속하게 전달하며 평가했으며, 구스타브와 아르민과 함께 추가 상황을 예측하면서 전투 계획을 수립하였다.",
  },
  {
    id: 3,
    name: "구스타브",
    images: ["/titan/joodun/img/gustav_1.webp", "img/gustav_2.jpg"],
    video: "./video/gustav.gif", // GIF 파일
    profile: "출생 : 7월 20일 <br>주둔병단 소속 병사",
    story:
      "도트 픽시스의 참모. 픽시스가 발트 공과 체스를 두고 있을 때 안카 라인베르거와 함께 대기하고 있다가 트로스트 구에 거인이 침공하고 있다는 소식이 전해졌는데 곧장 픽시스를 따라서 트로스트 작전 전략에 대해 아르민을 많이 도와주었다. 이후 갑옷 거인과 초대형 거인이 정체를 드러내고 엘런을 납치해가자 픽시스에게 이 사실을 보고한다. 이후에는 도트 픽시스 옆에서 병풍으로 가끔씩 등장한다. 그 후 행적은 불명.",
  },
  {
    id: 4,
    name: "킷츠 벨만",
    images: ["/titan/joodun/img/kitz_1.webp", "/titan/joodun/img/kitz_2.webp"],
    video: "./video/kitz.mp4",
    profile: "출생 : 8월 2일 <br>주둔병단 제1사단 정예부대 대장",
    story:
      "애니메이션에서는 원작보다 등장이 앞당겨져서 초대형 거인이 침공했을 때 훈련병들에게 상황 설명과 이후의 작전의 개요를 지시하며 첫 등장했다. 트로스트구 공방전에서 픽시스의 연설을 듣고 탈영한다는 병사들에게 칼을 뽑고 즉결 처분하겠다고 했고, 전투 중 도주는 사형에 해당한다며 목숨을 바쳐 임무를 바쳐라라고 훈련병들을 몰아붙였지만 정작 본인 및 측근들은 그나마 안전한 가스 보급소에 있었고 그마저도 전투 시작 후 얼마 지나지 않아 증원부대 편성이란 명목으로 돌출구역이 아닌 월 로제 안쪽으로 도망가버린다.",
  },
  {
    id: 5,
    name: "이안 디트리히",
    images: ["/titan/joodun/img/ian_1.webp"],
    video: "./video/ian.mp4",
    profile: "출생 : 3월 10일 <br>주둔병단 소속 정예반 반장",
    story:
      "5년 만의 초대형 거인의 습격에서 비롯된 대응 작전 와중에 처음 등장한다. 피난하는 주민들을 보호하는 임무를 맡은 주둔병단의 정예부대의 일원으로, 훈련병 중 특별한 실력을 인정받고 있었던 미카사를 자신들의 임무에 편입하는 명령을 내린다. 같이 작전을 수행하며 거인들을 도륙하는 미카사의 비범한 재능을 한눈에 알아봤으며, 실력이 뛰어나다고는 해도 아직 훈련병에 불과했던 미카사의 의견을 많이 존중해 주었다. 엘런의 첫 거인화 이후 그를 위험요소로 받아들이고 패닉을 일으키던 주둔병단 중에서도 침착한 모습을 보였으며, 미카사가 엘런을 지키고자 앞으로 나서서 살기를 내뿜었을 때 킷츠 벨만에게 그녀의 남다른 가치를 역설하며 그녀를 잃는다면 인류에게 대손해라 말하기도 했다.",
  },
  {
    id: 6,
    name: "미타비 야르나하",
    images: [
      "/titan/joodun/img/mitabi_1.webp",
      "/titan/joodun/img/mitabi_2.webp",
      "/titan/joodun/img/mitabi_3.webp",
    ],
    video: "./video/mitabi.mp4",
    profile: "출생 : 2월 20일 <br>주둔병단 소속 정예반 반장",
    story:
      "에렌이 벽을 틀어막을 때 거인들이 유인책에도 자신들을 쫓아오지 않자 따라올 때까지 접근할 수밖에 없다면서 죽음을 각오하고 지상으로 내려가서 거인이 따라올 때까지 거인이 있는 쪽으로 가서 욕설을 해서 따라오도록 했다. 벽 가까이는 외곽지역이라 입체기동장치를 사용해 오를 만한 피사체가 없기 때문에 말도 타지 않은 인간의 걸음으로는 대부분 거인에게 잡아먹히는 것이 자명한데도 목숨을 바쳐서 유인하는 임무를 수행했으며, 자신과 함께 거인을 유인하던 동료가 거인에게 잡아먹히려는 것을 보고 당황하다가 거인에게 밟혀서 사망한다.",
  },
  {
    id: 7,
    name: "리코 브렌체스카",
    images: [
      "/titan/joodun/img/rico_1.webp",
      "/titan/joodun/img/rico_2.webp",
      "/titan/joodun/img/rico_3.jpg",
    ],
    video: "./video/rico.mp4",
    profile: "출생 : 12월 7일 <br>주둔병단 소속 정예반 반장",
    story:
      "트로스트 구 주둔병단의 세 개 정예반을 이끄는 세 사람의 반장 중 한 사람이다. '리코 반장'이라고 불린다. 트로스트 구 탈환 작전에서 엘런을 보조한다. 강직한 성품에 보수적이며 꽤나 저돌적인 성격을 가지고 있다. 엘런의 거인화 직후 포위 전에서는 킷츠 벨만에게 공격할 것을 진언하기도 하며, 트로스트 구 탈환 전 당시에 픽시스가 엘런 예거의 거인화를 이용해 트로스트 구를 탈환하려고 할 때 인간 병기란 것이 정말 기동하냐고 의심하는 태도를 보이기도 한다. 애니메이션에서는 출진할 때 엘런에게 병사들의 이름을 나열하면서 죽어간 병사들과 엘런이 짊어질 책임에 대해 일침을 놓는 모습이 나왔다.",
  },
  {
    id: 8,
    name: "한네스",
    images: [
      "/titan/joodun/img/hannes_1.webp",
      "/titan/joodun/img/hannes_2.webp",
      "/titan/joodun/img/hannes_3.webp",
    ],
    video: "./video/hannes.mp4",
    profile: "출생 : 1월 18일 <br>주둔병단 주둔대 대장",
    story:
      "주인공 엘런 예거의 고향인 월 마리아 남쪽 미끼 구역 시간시나 구를 지키는 주둔병단 병사였다. 과거 도시 전체에 전염병이 돌았을 때 한네스의 아내도 병에 걸렸는데, 엘런의 아버지인 그리샤 예거가 약을 가지고 나타나 한네스의 아내를 비롯한 모든 사람들을 구했기에 은인으로 여기고 있었다. 이 때문에 그리샤의 아들인 엘런과 아내인 카를라 예거, 그리고 엘런의 소꿉친구인 미카사 아커만, 아르민 알레르토하고도 매우 친한 사이였다.",
  },
  {
    id: 9,
    name: "프록 폴스타",
    images: [
      "/titan/joodun/img/floch_1.webp",
      "/titan/joodun/img/floch_2.webp",
      "/titan/joodun/img/floch_3.webp",
    ],
    video: "./video/floch.mp4",
    profile: "출생 : 10월 8일<br>조사병단 소속 병사, 예거파 대변인 및 부사령관",
    story:
      "주인공 엘런 예거와 같은 기수인 104기 남부 훈련병단에서 졸업한 줄 알았으나, 월 마리아 탈환 작전 전에 보면 신병인 것이 밝혀졌다. 한동안 주둔병단에 몸담은 뒤 조사병단의 월 마리아 최종 탈환 작전에 참여해 조사병단으로 전입하였다.1부 당시에는 그냥 평범한 신병 A에 불과했지만, 2부에서는 예거파의 2인자이자 실질적인 지휘관 겸 행동대장으로서 상당한 능력들을 선보인다. 병사생활만 해온 사람 치고는 의외로 지휘능력이 뛰어나다. 파라디 섬 항구 전투 당시 수적으로 예거파가 우세했다고는 하나, 연합 또한 아홉 거인들을 보유한 데다 병단 최고의 베테랑들로 이루어져 있어 결코 쉬운 상대가 아니었다. 그러나 프록은 처음부터 끝까지 능숙하게 예거파를 지휘하여, 전투를 거의 승리 직전까지 몰고 갔다. ",
  },
  {
    id: 10,
    name: "다즈",
    images: [
      "/titan/joodun/img/daz_1.webp",
      "/titan/joodun/img/daz_2.jpg",
      "/titan/joodun/img/daz_3.webp",
    ],
    video: "./video/daz.mp4",
    profile: "출생 : 9월 22일 <br> 주둔병단 - 조사병단 - 예거파",
    story:
      "선천적으로 병사라는 직업 자체에 안 맞는 성격이다. 미디어에서 흔히 볼 수 있는 전형적인 고문관 or 폐급 병사 캐릭터이다. 정상적인 인간이라면 거인한테 먹히는 게 겁이 안 날 수가 없는 상황이지만 다즈는 다른 이들에 비해 유독 공포를 잘 극복하지 못하고 자신의 감정 통제에 어려움을 겪는 캐릭터로 그려진다. 첫 실전 때 출전하기도 전에 겁을 먹고 구토를 하질 않나, 거인의 습격에서 겨우 살아나 죽음의 공포로 인해 PTSD에 시달리게 되는데 이로 인해 병사임에도 불구하고 중요한 작전을 앞두고 심각하게 동요하게 되는데 다즈의 이런 행동은 본인뿐 아니라 다른 병사들의 사기를 낮추고 동요시켜 병단 조직 체제를 와해시킬 뻔했다. 지휘관을 신뢰하지 않고, 자신에 동조하는 다른 병사과 도주하는 것에 의기투합하는 것을 보면 병사로서 영 자격 미달이다. 단, 배짱이 전혀 없는 마냥 겁쟁이인 것만은 아닌데, 사단장 상대로 칼을 뽑는 등 하극상을 벌이려고 할 때의 모습 때문. 이때 탈영한다는 사람은 꽤 있었으나 막는 상관에게 칼을 뽑은건 다즈뿐이다.",
  },
  {
    id: 11,
    name: "사무엘 링케 잭슨",
    images: [
      "/titan/joodun/img/samuel_1.webp",
      "/titan/joodun/img/samuel_2.webp",
      "/titan/joodun/img/samuel_3.webp",
    ],
    video: "./video/samuel.mp4",
    profile: "출생 : 12월 20일<br>조사병단 - 예거파",
    story:
      " 땅울림 반대 세력과 예거파의 교전이 벌어지는 상황, 트로스트 구 공방전 당시 방벽 위에서의 추억담을 꺼내며 코니 스프링거를 쏘기를 주저하다가 결국 총을 빼앗겨 코니에게 다즈가 살해당하고, 사무엘도 안면에 총을 맞아 사망한다. ",
  },
  {
    id: 12,
    name: "로보프",
    images: ["/titan/joodun/img/lobov_1.webp"],
    video: "./video/lobov.mp4",
    profile: "출생 : 8월 11일<br>주둔병단 사단장 - 조사병단 소속 병사",
    story:
      "레벨리오 전투 당시 다른 동료들이 비행선에 오를 때까지 마지막으로 엄호했다.가비 브라운이 총을 들고 오는 것을 발견하고 가비를 향해 먼저 조준하였으나 어린 애인 것을 확인하고 망설이는 바람에 가비가 쏜 총알에 안면을 관통당하여 즉사했다.",
  },
];

/* =========================================
   DOM
========================================= */
const listView = document.getElementById("list-view");
const detailView = document.getElementById("detail-view");
const grid = document.getElementById("character-grid");
const sidebar = document.getElementById("character-sidebar");

const nameEl = document.getElementById("detail-name");
const video = document.getElementById("detail-video");
const gifImg = document.getElementById("detail-gif");
const profile = document.getElementById("detail-profile");
const story = document.getElementById("detail-story");

const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const thumbnailContainer = document.getElementById("thumbnail-container");

let currentSlide = 0;

/* =========================================
   💡 1. 카드 생성 (순위 뱃지 포함!)
========================================= */
function renderList() {
  grid.innerHTML = "";

  // 💡 주둔병단의 이름표인 "garrisonViews"를 넣어서 순위표를 받아옵니다!
  let rankMap = ViewManager.getRankMap("garrisonViews", characters);
  let views = JSON.parse(localStorage.getItem("garrisonViews")) || {};

  characters.forEach((c) => {
    let data = views[c.id];
    let currentCount = typeof data === "number" ? data : data ? data.count : 0;

    // 💡 1위, 2위, 3위 뱃지 달아주기
    let badgeHTML = "";
    if (rankMap[c.id] === 1) {
      badgeHTML = `<div style="position: absolute; top: 10px; right: 10px; background: #FFD700; color: #000; padding: 5px 10px; border-radius: 5px; font-weight: bold; font-size: 0.9rem; z-index: 10; box-shadow: 0 2px 5px rgba(0,0,0,0.5);">🥇 1위 (조회수: ${currentCount}회)</div>`;
    } else if (rankMap[c.id] === 2) {
      badgeHTML = `<div style="position: absolute; top: 10px; right: 10px; background: #C0C0C0; color: #000; padding: 5px 10px; border-radius: 5px; font-weight: bold; font-size: 0.9rem; z-index: 10; box-shadow: 0 2px 5px rgba(0,0,0,0.5);">🥈 2위 (조회수: ${currentCount}회)</div>`;
    } else if (rankMap[c.id] === 3) {
      badgeHTML = `<div style="position: absolute; top: 10px; right: 10px; background: #CD7F32; color: #fff; padding: 5px 10px; border-radius: 5px; font-weight: bold; font-size: 0.9rem; z-index: 10; box-shadow: 0 2px 5px rgba(0,0,0,0.5);">🥉 3위 (조회수: ${currentCount}회)</div>`;
    }

    grid.innerHTML += `
      <div class="character-card" onclick="openDetail(${c.id})" style="position: relative;">
        ${badgeHTML}
        <img src="${c.images[0]}">
        <h3>${c.name}</h3>
      </div>
    `;
  });

  // 애니메이션
  setTimeout(() => {
    document.querySelectorAll(".character-card").forEach((card, i) => {
      setTimeout(() => card.classList.add("show"), i * 120);
    });
  }, 10);
}

/* =========================================
   💡 2. 상세 열기 (클릭 시 조회수 상승!)
========================================= */
function openDetail(id) {
  const c = characters.find((x) => x.id === id);

  // 💡 주둔병단 전용 저장소("garrisonViews")에 기록!
  ViewManager.addView(
    "garrisonViews",
    id,
    c.name,
    c.images[0],
    "/titan/joodun/titan.html",
  );

  listView.style.display = "none";
  detailView.style.display = "block";
  setTimeout(() => detailView.classList.add("active"), 10);

  renderSidebar(id);
  renderDetail(id);
}

/* =========================================
   💡 3. 사이드바 (사이드바 클릭 시 조회수 상승!)
========================================= */
function renderSidebar(activeId) {
  sidebar.innerHTML = "";
  characters.forEach((c) => {
    sidebar.innerHTML += `
      <div class="${c.id === activeId ? "active" : ""}"
           onclick="changeDetail(${c.id})">
        ${c.name}
      </div>
    `;
  });
  sidebar.querySelectorAll("div").forEach((item, i) => {
    setTimeout(() => item.classList.add("show"), i * 80);
  });
}

function changeDetail(id) {
  const c = characters.find((x) => x.id === id);
  ViewManager.addView(
    "garrisonViews",
    id,
    c.name,
    c.images[0],
    "../joodun/titan.html",
  );
  renderDetail(id);
  renderSidebar(id);
}

/* =========================================
   상세 렌더 (찬우님의 GIF 분기 처리 유지!)
========================================= */
function renderDetail(id) {
  const c = characters.find((x) => x.id === id);

  slides.forEach((slide, index) => {
    slide.src = c.images[index] || c.images[0];
  });

  renderThumbnails(c.images);
  currentSlide = 0;
  showSlide(0);
  nameEl.textContent = c.name;

  const isGif = c.video.toLowerCase().endsWith(".gif");

  if (isGif) {
    video.style.display = "none";
    video.pause();
    gifImg.style.display = "block";
    gifImg.src = c.video;
  } else {
    gifImg.style.display = "none";
    video.style.display = "block";
    video.pause();
    video.src = c.video;
    video.load();
  }

  profile.innerHTML = c.profile;
  story.innerHTML = c.story;
}

/* =========================================
   썸네일 및 슬라이드 (기존 유지)
========================================= */
function renderThumbnails(images) {
  thumbnailContainer.innerHTML = "";
  images.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    if (index === 0) img.classList.add("active-thumb");
    img.addEventListener("click", () => {
      currentSlide = index;
      showSlide(index);
    });
    thumbnailContainer.appendChild(img);
  });
}

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  if (slides[index]) slides[index].classList.add("active");

  const thumbs = thumbnailContainer.querySelectorAll("img");
  thumbs.forEach((t) => t.classList.remove("active-thumb"));
  if (thumbs[index]) thumbs[index].classList.add("active-thumb");
}

next.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

prev.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

/* =========================================
   💡 뒤로가기 (뒤로 갈 때 랭킹 갱신)
========================================= */
function goBack() {
  renderList(); // 최신 1위, 2위, 3위 뱃지로 갱신!
  detailView.style.display = "none";
  detailView.classList.remove("active");
  listView.style.display = "block";
  video.pause();
  video.src = "";
  gifImg.src = "";
}

/* =========================================
   타이핑 효과 및 초기화
========================================= */
const typingElement = document.getElementById("typing-text");
const quote = "모든 것은 한 소녀로부터 시작되었다.";
let idx = 0;
function typeEffect() {
  if (idx < quote.length) {
    typingElement.textContent += quote.charAt(idx);
    idx++;
    setTimeout(typeEffect, 60);
  }
}

window.addEventListener("load", () => {
  renderList(); // 카드 렌더링 시작
  typeEffect(); // 타이핑 효과 시작
});

/* =========================================
   💡 [주둔병단 전용] 우리 부대 1위 실시간 뱃지 엔진
========================================= */
function updateLocalTopBadge() {
  // 💡 주둔병단 이름표: "garrisonViews"
  const storageKey = "garrisonViews";
  const topChar = ViewManager.getTroopTop1(storageKey);

  if (topChar) {
    document.getElementById("local-top-img").src = topChar.img;
    document.getElementById("local-top-name").innerText = topChar.name;
    document.getElementById("local-top-views").innerText =
      `조회수 ${topChar.count}회`;

    const badge = document.getElementById("local-top-badge");
    badge.style.display = "block";
    badge.style.cursor = "pointer"; // 마우스 올리면 클릭 가능하게 변경

    // 💡 뱃지를 누르면 SPA 상세 모드로 바로 이동!
    badge.onclick = () => {
      const targetChar = characters.find((c) => c.name === topChar.name);
      if (targetChar) {
        openDetail(targetChar.id);
      }
    };
  }
}

// 💡 1.5초마다 랭킹 감시
window.addEventListener("load", () => {
  updateLocalTopBadge();
  setInterval(() => {
    updateLocalTopBadge();
  }, 1500);
});
/* 목록 복귀 */
function goBack() {
  renderList();
  detailView.style.display = "none";
  listView.style.display = "block";

  // :bulb: 다시 목록으로 오면 BGM 볼륨 원래대로 복구
  const bgm = document.getElementById("bgm");
  if (bgm) bgm.volume = 1.0;
}
// BGM 설정
window.addEventListener("DOMContentLoaded", () => {
  const bgm = document.getElementById("bgm");
  const musicBtn = document.getElementById("music-btn");

  let isPlaying = false;

  musicBtn.addEventListener("click", () => {
    if (!isPlaying) {
      bgm
        .play()
        .then(() => {
          musicBtn.textContent = "🔇 BGM OFF";
          isPlaying = true;
        })
        .catch((err) => {
          console.log("재생 실패:", err);
        });
    } else {
      bgm.pause();
      musicBtn.textContent = "🔊 BGM ON";
      isPlaying = false;
    }
  });
});
