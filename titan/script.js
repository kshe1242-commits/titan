/* =========================================
   캐릭터 데이터 (모두 images 배열로 통일)
========================================= */
const characters = [
  {
    id: 1,
    name: "진격의 거인",
    images: [
      "/titan/titan/img/attack_t.jpg",
      "/titan/titan/img/attack_t2.webp",
      "/titan/titan/img/attack_t5.webp",
    ],
    video: "./video/attack_t.mp4",
    profile:
      "역대 계승자 : 불명 - 엘렌 크루거 - 그리샤 예거 - 엘렌 예거 <br>고유능력: 시간을 초월한 소통능력 <br>크기: 15 m ",
    story:
      "자유를 향한 의지를 상징하는 거인으로, 벽 안에 갇힌 인류의 운명을 바꾸는 핵심 힘이다. 에렌 예거가 계승하며, 과거와 미래의 기억 일부를 이어받아 전략적 판단과 전투가 가능하다. 단순한 힘이 아닌, 인간적 선택과 자유를 쟁취하려는 의지를 상징하며 이야기의 중심에 선다.",
  },
  {
    id: 2,
    name: "여성형 거인",
    images: [
      "/titan/titan/img/female_t.jpg",
      "/titan/titan/img/female_t2.jfif",
      "/titan/titan/img/female_t4.png",
    ],
    video: "./video/female_t.mp4",
    profile:
      "역대 계승자: 불명 - 애니 레온하트 <br>고유능력: 일부 거인 능력 사용 <br>크기: 14 m",
    story:
      "유연한 몸과 강력한 공격력으로 목표를 집요하게 추적하며 전투에서 민첩하게 움직인다. 애니 레온하트가 계승하며, 적의 약점을 파악하고 전략적으로 싸우는 능력을 갖는다. 단순한 힘이 아닌 인간적 판단과 감정을 가진 거인으로, 스토리 전개에서 중요한 역할을 맡는다.",
  },
  {
    id: 3,
    name: "갑옷 거인",
    images: [
      "/titan/titan/img/armored_t.jpg",
      "/titan/titan/img/armored_t2.jpg",
      "/titan/titan/img/armored_t3.webp",
    ],
    video: "./video/armored_t.mp4",
    profile:
      "역대 계승자 : 라이너 브라운 <br>고유능력: 상시 전신 경질화 <br>크기: 15 m",
    story:
      "전신이 장갑처럼 단단하여 공격을 거의 무력화하고 돌진으로 적을 압도한다. 라이너 브라운이 계승하며, 전투에서 방어와 공격을 동시에 수행하는 전투형 거인이다. 단단한 외피와 돌진 능력은 이야기 속 충돌과 긴장을 극대화하는 상징으로 작용한다.",
  },
  {
    id: 4,
    name: "초대형 거인",
    images: [
      "/titan/titan/img/colossal_t.jpg",
      "/titan/titan/img/colossal_t2.jfif",
      "/titan/titan/img/colossal_t4.jfif",
    ],
    video: "./video/colossal_t.mp4",
    profile:
      "역대 계승자 : 베르톨트 후버 - 아르민 알레르토 <br>고유능력: 증기 방출, 폭발적 거인화 <br>크기: 60 m",
    story:
      "압도적인 몸집과 파괴력으로 단숨에 적의 요새와 군세를 무너뜨릴 수 있는 존재다. 전투 시 증기 폭발과 강력한 돌진으로 아군과 적 모두에게 압박감을 준다. 베르톨트 후버가 소유하며, 적의 심리와 전황을 흔드는 상징적 존재로 등장한다.",
  },
  {
    id: 5,
    name: "짐승 거인",
    images: [
      "/titan/titan/img/beast_t.jpg",
      "/titan/titan/img/beast_t4.webp",
      "/titan/titan/img/beast_t3.webp",
    ],
    video: "./video/beast_t.mp4",
    profile:
      "역대 계승자 : 톰 쿠사바 - 지크 예거 <br>고유능력: 투척 능력 특화 <br>크기: 17 m",
    story:
      "장거리 투척 공격과 동물적 형태를 활용해 전장을 장악하는 전략형 거인이다. 지능적인 판단으로 다른 거인들을 지휘하고, 전투의 흐름을 유리하게 바꿀 수 있다. 지크 예거가 사용하며, 전술적 위협과 동시에 인간적 갈등을 보여주는 존재다.",
  },
  {
    id: 6,
    name: "턱 거인",
    images: [
      "/titan/titan/img/jaw_t.jpg",
      "/titan/titan/img/jaw_t4.webp",
      "/titan/titan/img/jaw_t5.jpg",
    ],
    video: "./video/jaw_t.mp4",
    profile:
      "역대 계승자 : 마르셀 - 유미르 - 포르코 - 팔코 <br>고유능력: 강력한 저작력 <br>크기: 5 m",
    story:
      "민첩한 속도와 강력한 턱, 발톱으로 적을 신속히 제압하고 기습 전투에 최적화된 거인이다. 포르코 가브리엘 등이 계승하며, 순간적인 판단과 기동력이 이야기 전개에서 중요한 역할을 한다. 작지만 날렵한 힘으로 큰 거인과 인간 사이의 긴장감을 만들어내는 존재다.",
  },
  {
    id: 7,
    name: "차력 거인",
    images: [
      "/titan/titan/img/cart_t.jpg",
      "/titan/titan/img/cart_t4.png",
      "/titan/titan/img/cart_t3.jfif",
    ],
    video: "./video/cart_t.mp4",
    profile:
      "역대 계승자 : 피크 핑거 <br>고유능력: 장시간 거인화 <br>크기: 4 m",
    story:
      "장시간 변신이 가능하고 장거리 운송 및 지원에 특화된 거인으로, 장기 작전에서 활약한다. 피크 핑거가 계승하며, 기계화 병기와 결합해 전장 지원을 수행한다. 단순 전투뿐 아니라 전략적 역할을 맡아 스토리에서 전쟁의 다층적 측면을 보여준다.",
  },
  {
    id: 8,
    name: "전퇴의 거인",
    images: [
      "/titan/titan/img/warhammer_t.jpg",
      "/titan/titan/img/warhammer_t4.webp",
      "/titan/titan/img/warhammer_t3.webp",
    ],
    video: "./video/warhammer_t.mp4",
    profile:
      "역대 계승자 : 라라 타이버 - 엘렌 예거 <br>고유능력: 경질화 무기 생성 <br>크기: 15 m",
    story:
      "신체 일부를 무기화하고 크리스탈화로 방어하며, 원거리에서 독창적인 공격이 가능한 거인이다. 타이버 가문이 계승하며, 전투의 판도를 바꾸는 독창적 힘을 가진 존재다. 거대한 구조물 생성과 공격을 통해 전투의 긴장감을 극대화하고, 전략적 서사를 만든다.",
  },
  {
    id: 9,
    name: "시조 거인",
    images: [
      "/titan/titan/img/founding_t.jpg",
      "/titan/titan/img/founding_t4.png",
      "/titan/titan/img/founding_t5.png",
    ],
    video: "./video/founding_t.mp4",
    profile:
      "역대 계승자 : 유미르 프리츠 ~ 엘렌 예거 <br>고유능력: 좌표 제어 <br>크기: 미정",
    story:
      "모든 거인의 힘을 조종하고 엘디아인의 기억과 역사를 조작할 수 있는, 세계를 바꿀 수 있는 힘이다. 프리츠 가문에서 이어져 에렌 예거에게 계승되며, 운명을 결정짓는 중심축 역할을 한다. 단순한 전투 이상의 의미를 가지며, 스토리 전체에서 인류와 거인의 운명을 연결하는 상징적 존재다.",
  },
  {
    id: 10,
    name: "종미의 거인",
    images: [
      "/titan/titan/img/final_t.jpg",
      "/titan/titan/img/final_t4.jpg",
      "/titan/titan/img/final_t5.webp",
    ],
    video: "./video/final_t.mp4",
    profile:
      "최후의 시조 거인 - 엘렌 예거 <br>능력: 땅울림 등 <br>크기: 600~2000m",
    story:
      "에렌은 초대 거인의 힘을 완전히 각성해, 자신만의 ‘심판’과 자유를 실현하기 위한 극단적 결단을 내린다. 그는 전 세계를 위협하는 압도적 힘으로 적과 동맹 모두를 긴장하게 만들며, 인류의 운명을 자신의 선택에 맡긴다. 종미의 거인으로서 그는 단순한 전투를 넘어, 자유와 복수, 희생을 둘러싼 인간과 거인의 경계까지 뒤흔드는 상징적 존재가 된다.",
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
const profile = document.getElementById("detail-profile");
const story = document.getElementById("detail-story");

const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const thumbnailContainer = document.getElementById("thumbnail-container");

let currentSlide = 0;

/* =========================================
   💡 1. 카드 목록 생성 (순위 뱃지 포함!)
========================================= */
function renderList() {
  grid.innerHTML = "";

  // 💡 공통 도구(조회수.js)에게 거인(titanViews) 순위표를 받아옵니다.
  let rankMap = ViewManager.getRankMap("titanViews", characters);
  let views = JSON.parse(localStorage.getItem("titanViews")) || {};

  characters.forEach((c) => {
    let data = views[c.id];
    let currentCount = typeof data === "number" ? data : data ? data.count : 0;

    // 💡 1위, 2위, 3위 뱃지 달아주기 (조회수 횟수 포함)
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
        <img src="${c.images[0]}" alt="${c.name}">
        <h3>${c.name}</h3>
      </div>
    `;
  });

  // 카드 스르륵 나타나는 애니메이션 (버그 방지용으로 이곳으로 옮김)
  setTimeout(() => {
    document.querySelectorAll(".character-card").forEach((card, i) => {
      setTimeout(() => card.classList.add("show"), i * 80);
    });
  }, 10);
}

/* =========================================
   💡 2. 상세 열기 (외부 카드 클릭)
========================================= */
function openDetail(id) {
  const c = characters.find((x) => x.id === id);

  // 💡 조회수.js를 호출해서 클릭 기록을 남깁니다!
  ViewManager.addView(
    "titanViews",
    id,
    c.name,
    c.images[0],
    "../거인/titan.html",
  );

  listView.style.display = "none";
  detailView.style.display = "block";

  setTimeout(() => detailView.classList.add("active"), 10);

  renderSidebar(id);
  renderDetail(id);
}

/* =========================================
   💡 3. 사이드바 (내부 클릭 시에도 조회수 기록)
========================================= */
function renderSidebar(activeId) {
  sidebar.innerHTML = "";

  characters.forEach((c, index) => {
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

// 💡 사이드바 클릭용 함수를 따로 분리했습니다!
function changeDetail(id) {
  const c = characters.find((x) => x.id === id);

  // 💡 내부 메뉴 클릭도 완벽하게 쿨타임 감시!
  ViewManager.addView(
    "titanViews",
    id,
    c.name,
    c.images[0],
    "../거인/titan.html",
  );

  renderDetail(id);
  renderSidebar(id);
}

/* =========================================
   상세 렌더 (기존 코드 그대로 유지)
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
  video.pause();
  video.src = c.video;
  video.load();

  profile.innerHTML = c.profile;
  story.innerHTML = c.story;
}

/* =========================================
   썸네일 생성 (기존 코드 그대로 유지)
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

/* =========================================
   슬라이드 (기존 코드 그대로 유지)
========================================= */
function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");

  const thumbs = thumbnailContainer.querySelectorAll("img");
  thumbs.forEach((t) => t.classList.remove("active-thumb"));
  thumbs[index].classList.add("active-thumb");
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
   💡 뒤로가기 (뒤로갈 때 순위 새로고침 추가!)
========================================= */
function goBack() {
  renderList(); // 💡 카드 순위와 조회수를 최신 상태로 갱신!
  detailView.style.display = "none";
  detailView.classList.remove("active");
  listView.style.display = "block";
  video.pause();
  video.src = "";
}

/* =========================================
   타이핑 효과 (기존 코드 그대로 유지)
========================================= */
const typingElement = document.getElementById("typing-text");
const quote = "모든 것은 한 소녀로부터 시작되었다.";

let i = 0;
function typeEffect() {
  if (i < quote.length) {
    typingElement.textContent += quote.charAt(i);
    i++;
    setTimeout(typeEffect, 60);
  }
}

/* =========================================
   초기화 실행 (카드 그리기 + 타이핑)
========================================= */
window.addEventListener("load", () => {
  renderList();
  typeEffect();
});
/* =========================================
   💡 [NEW] 부대 내 1위 실시간 뱃지 엔진
========================================= */
function updateLocalTopBadge() {
  // ⚠️ 파일에 맞게 이름 유지! (조사병단: scoutViews, 헌병단: militaryViews, 거인: titanViews)
  const storageKey = "titanViews";
  const topChar = ViewManager.getTroopTop1(storageKey);

  if (topChar) {
    document.getElementById("local-top-img").src = topChar.img;
    document.getElementById("local-top-name").innerText = topChar.name;
    document.getElementById("local-top-views").innerText =
      ` 조회수 ${topChar.count}회`;

    const badge = document.getElementById("local-top-badge");
    badge.style.display = "block";
    badge.style.cursor = "pointer"; // 💡 마우스를 올리면 클릭할 수 있게 손가락 모양으로 바뀝니다!

    // 💡 [핵심] 뱃지를 클릭했을 때의 동작을 추가합니다.
    badge.onclick = () => {
      // 1. 1위 캐릭터의 이름으로 전체 리스트(characters)에서 고유 ID 번호를 찾아냅니다.
      const targetChar = characters.find((c) => c.name === topChar.name);

      // 2. ID 번호를 찾았다면, 찬우 님이 만들어둔 SPA 상세 화면 열기 함수를 실행합니다!
      if (targetChar) {
        openDetail(targetChar.id);
      }
    };
  }
}

// 💡 1.5초마다 랭킹이 바뀌었는지 스스로 감시해서 실시간으로 바꿔줍니다!
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
