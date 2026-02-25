/* =========================================
   변수 및 DOM 연결
========================================= */
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const thumbnailContainer = document.getElementById("thumbnail-container");

let currentSlide = 0;

/* =========================================
   캐릭터 데이터
========================================= */
const characters = [
  {
    id: 1,
    name: "에렌 예거",
    images: [
      "/titan/titanimg/eren.png",
      "https://i.namu.wiki/i/VGTqQZHpViQlycP-QXKQFEUk1lZnapLbBH1pLPnnwqn0nA8sq7Huk6ypgH78mLykXAgffJut8sjpRIAEPC39tGBedO0J5ZFdUIJvCmJWR2pulSK5ccZepYkRNTwYCagQQnVrlCnh5aX47oidundUKg.webp",
      "https://i.namu.wiki/i/TqP_HGMvLPdEK-5rSBkoilJwOHIVeQu3sV_CRVMVwI1uNVge3-qo4UOe8LgH-_0T6E7gwNXeDWnhbwe4qqgZcoPaOB7Vg6ZN-tdlxZNtwm9hAfUupXaiM6FV1vPyb6SWdyUFDvNzH0L1Di0QOR1bGw.webp",
    ],
    gif: "/titan/titanimg/eren.gif",
    profile: "<br>15세<br>조사병단 104기",
    story:
      "월 마리아 남쪽의 미끼 구역인 시간시나 구 출신으로, 그리샤 예거와 카를라 예거의 아들이다. 이후 월 마리아 함락 사건과 어머니의 죽음을 눈 앞에서 보고 이를 계기로 모든 적들을 구축하겠다는 목표를 가지고 앞으로 나아가게 된다. 자신의 사상을 바탕으로 적에 대한 무한한 적개심과 극단적인 냉정함을 갖추고 있어, 보편적인 소년 만화 주인공들이 보이는 성장형 행보와는 크게 다른 것이 큰 특징이다.",
  },
  {
    id: 2,
    name: "미카사 아커만",
    images: [
      "/titan/titanimg/kasa.png",
      "https://i.namu.wiki/i/iXnMwPhQ4j8akjcQGqaXyz8jjuKcIhINfTAHeKYo-_GrvmaxyH0v_UpV0xQ0IG3jQra4scnfKimUSUm3pFKGziiuiTECo8hYecjN6peCNGzeuuJxYkreexpuES-fYCNlb7wseZcuoAv3ZiKHT6lV4Q.webp",
      "https://i.namu.wiki/i/OnmNmTRMIPIBQDKJ2IFP_y8Osr-xOewGHRi_gwrV2w_SLFC6H21nl9eceX3r-qRs19cQSZCUczaNASVaWOyhNQ.webp",
    ],
    gif: "/titan/titanimg/kasa.gif",
    profile: "<br>나이: 15세 <br>조사병단 104기",
    story:
      "리바이와 함께 조사병단 내 전투력 투톱을 달리는 초인으로 평가받는다. 무표정한 얼굴, 흐릿한 눈이 특징. 하지만 간혹 눈에 생기가 돌아오는 경우가 있는데, 대부분은 엘런 예거가 원인이다. 미카사는 과묵하고 감정 표현이 적으며 자신이 결정한 길과 우선되는 대상에 충실한 면이 강해 냉혹해 보일 정도다. 이처럼 엘런에 관한 일이라면 금방 공격적으로 나와서 호전적이고 비사교적인 느낌을 받기 쉽지만, 의외로 인간 관계는 좋은 편이고 동료들에게도 협조적이며, 도덕적인 윤리관을 갖고 있다.",
  },
  {
    id: 3,
    name: "아르민 알레르토",
    images: [
      "/titan/titanimg/armain.png",
      "https://i.namu.wiki/i/LAuQT4IWFDRCojmRS0MGFhc8AEBTPw3SeTBg7p5U765d8_bGCYLG5RF-p6AE_7o0viIiJbyJCZz-KOM-eIPCKyj6RYK8SA9BjP0GbclTfLu2hH_kWQzoMac_slMBnpQop0HoHfFNgFquReW1l-Pwxw.webp",
      "https://i.namu.wiki/i/q8xbuNU8-tEZ3TSdnEteVsT-XItoD4LFofeooNgrWtchO1g9x0HmHWBKb_L1T61Uz-xMhSOnBUcNWmJQj4kzDGOjgNuu-QT4E7riPPIdlnd6grkMRfqnNDGs1YlSHFbX3lygl8HCnuDiWioMmf6KVw.webp",
    ],
    gif: "/titan/titanimg/rmin.gif",
    profile: "<br>나이: 15세 <br>조사병단 104기",
    story:
      "조사병단 최상의 조커이자 와일드 카드. 엘빈 스미스, 한지 조에와 더불어 조사병단 브레인이다. 주인공 엘런과는 어릴 적부터 알고 지낸 소꿉친구. 할아버지가 숨겨두었던 책을 통해 벽 바깥 세상을 알고는 신이 나서 엘런에게 거대한 소금 호수와 불꽃 물, 모래 설원, 얼음 대지 등을 이야기함으로써 엘런이 바깥 세상에 대한 동경을 품게 한 장본인이다. 위급한 상황에서 언제나 옳은 답을 찾아낼 수 있는 기민한 상황 판단과 명쾌한 임기응변이 돋보이는 책략가.",
  },
  {
    id: 4,
    name: "엘빈 스미스",
    images: [
      "/titan/titanimg/erb.png",
      "https://i.namu.wiki/i/hJ8mJDzNtiysE3iUCxVDLnCX44QcqDHNRj6mZus2HAp012D6ORkGupdf0kvPQXbnd2F1OcDgcFxVwggKWhpbqZZNWZP25ucL3MGWJJm0hj8FrM3vsIa0ngxoTaNcHIKqg_I3GxeJ6FiizYWS4_h3mg.webp",
      "https://i.namu.wiki/i/1uP7_IW0iMHki7S3MnsgARDLhdh7sjoyDVojr1H4dPyW-EqWB8XtXGZwzR-t00cCM0O0taBZ9mFOmIW6ps1vNsst2jMUA1en01Po66hTs9yd8kih9ekjU7mpXDWwex_PAhCQ6Nn7KpQPkgihd_Dypw.webp",
    ],
    gif: "/titan/titanimg/erv.gif",
    profile: "<br>나이: 30세중후반 <br>조사 병단 13대 단장",
    story:
      "공무에 있어선 그야말로 비정한 야심가이지만 사생활에 있어선 끝없이 좌절을 겪어온 비운의 인물이다. 자기 자신의 행복에 대해선 생각조차 제대로 해보지 않았다는 언급이 있을 만큼 엘빈이 본질적으로는 살신성인을 추구하는 인물이기 때문이다.",
  },
  {
    id: 5,
    name: "리바이 아커만",
    images: [
      "/titan/titanimg/ri.png",
      "https://i.namu.wiki/i/zw-eUKQOPufc-aj8Tx2ARhUQS-Sn6_2sBIKGoRcuQoJcWbawgSP3L3B6daNwffwGNvKNwzqXF9v93ONc5uhtjmRIMYTMvi_h3ygyadOzxHlt_b_xkO7wjr2fasob1UPJ2XelOJ8Q-IqHY5pD-7wVQQ.webp",
      "https://i.namu.wiki/i/UFcJeO7wW1m7NePhx8tX6dUVbtAzs8EWlCYZWUJT95BJWgNZpOzpp2COi2zPZft5vpFZtT4EQP9BQp6Axo86c43UE6RQU7r_lvL5j2r9b8pnHSOBqN4JG1lnu-0GYon6wMzWw5U40Z5NTcbAS-Id-A.webp",
    ],
    gif: "/titan/titanimg/rivi.gif",
    profile: "<br>나이: 30세초반 <br>인류 최강의 병사",
    story:
      "호칭할 때는 주로 직급인 병사장을 붙여 리바이 병사장 혹은 리바이 병장이라고 불린다. 조사병단 안에서 단장 엘빈 스미스에 이어 사실상 2인자의 위치다. 3개 병단에서 가장 높은 직위를 가진 다리스 작클레 총통에게조차 딱히 예의를 갖추지 않는 성격이다.",
  },
  {
    id: 6,
    name: "한지 조에",
    images: [
      "/titan/titanimg/han.png",
      "https://i.namu.wiki/i/wCYyqzOhfIBmaWZgVURYgpll1pol4-s2uNGQ0JtzLkYwk7tWAXWz_a8h7g3RkMdvFXyPqjO4roCtJ0XM7JxLr8ZNK9i0dSbpgdxugTMqhtfyH2OwaqFCL0ByUOfiYYjRGzmNQkqrUQVcs-dsxriNRQ.webp",
      "https://i.namu.wiki/i/Ii6zaSqY44a037KKmDMmFfsKTxOQN7Mq1i-Md5G2nHqESUjBeO6ULVsOa4lQ0SQwv9_Xr1_f9vwqvuwF4wEy0CV79W9ULAt7kBIHJZKHZMKclNKjLkJU9ruX3C7u7WwxXulgju5SqIValX74a2oNPQ.webp",
    ],
    gif: "/titan/titanimg/han.gif",
    profile: "<br>나이: 30세초반 <br> 조사병단 제4분대 분대장",
    story:
      "조사병단의 제4분대장이자, 파라디 섬의 유일한 거인학자. 생포한 거인의 고문 같은 생체 실험을 맡고 있다. 짙은 갈색 머리에 고글을 쓴 것이 특징. 시력이 매우 나빠 평소에는 안경을 쓰고, 전투나 임무 도중에는 고글을 착용한다.",
  },
  {
    id: 7,
    name: "사샤 브라우스",
    images: [
      "/titan/titanimg/syasya.png",
      "https://i.namu.wiki/i/fV-rs0hGDi8Ir-hPnXth9bm-NruAWQK6fSLf2NsFFbvh6YY2G84aShb7Zhz1d2tjbtHXk5y4YN2iNBtiNtwnywPNVHK8HK7xS_po6jXmyPvIawM58p1apT95A5367alpyiIuieLZ6cAYwodMkwMjow.webp",
      "https://i.namu.wiki/i/hRIOGGyA38lajZNub2Vdhm69SbnwgDs7tunN1YihrfOT0F4c1mx5Mh2l5cY298TYNivfD6YftSprxzJ0viqc_CJA65Gj7ztfqRcZ9ecqkMG0bNoUTzkdZZakqZzQ1-x3tAHUscDk3ZjIKdoP68HsUw.webp",
    ],
    gif: "/titan/titanimg/sasa.gif",
    profile: "<br>나이: 16세 <br>조사병단 104기",
    story:
      "출신지가 월 로제 남구 산골에 박혀있는 수렵민족들의 마을 다우퍼 마을인지라 사샤는 어린 시절부터 아버지에게서 활을 배웠고, 사냥을 일상으로 삼으며 살아왔다. 몸놀림이 빠르고 감이 굉장히 뛰어난지라 작중 의외의 활약을 펼칠 때가 많다.",
  },
  {
    id: 8,
    name: "히스토리아 레이스",
    images: [
      "/titan/titanimg/megami.png",
      "https://i.namu.wiki/i/Z9QhntzMoTr1mXyOpIDbDLtN-y3V5AzYSkz227GAjwOVHN9ld4qcdSCGIMAGc0kKOJX2wSQmM4YABH18Zd8u-JrAwTuoCFZV5kTVt9fivPEwpBFWoqGno2hDPj9HJ4LlM7QCXWoEeT_DDXM4rjfWuQ.webp",
      "https://i.namu.wiki/i/UFhRqcIEtQ0-WJZK98ufuXONq54Km_pKMC8KH7V47z9SfK4ixzMlkR_3D0WwsS5aOfiNDexRFWnPMe5WTYnYss9f31__1UX1U12hz_0sLmWqlMT2Fs7hBJQwbhoXpT19Lk_gq8E_lh9nLaWus0eViA.webp",
    ],
    gif: "/titan/titanimg/his.gif",
    profile: "<br>나이: 15세 <br>조사병단 104기",
    story:
      "우트가르트 고성에 고립되어 거인들과 사투를 벌이는 와중에 상처를 입은 라이너를 치료해준다. 과거 크리스타라는 가짜 이름으로 '착한 아이'로서 살아가고 있었으나, 유미르의 일갈에 의해 본명인 히스토리아 레이스로서의 자아를 되찾게 된다.",
  },
  {
    id: 9,
    name: "장 키르슈타인",
    images: [
      "/titan/titanimg/jan.png",
      "https://i.namu.wiki/i/1rsYMklkPGa2ox-5Eh6B-gWDy7eSHPoVnSs-0StnXyOyJWjqYChc5Gk7jIWM7IaD5rFlOsmK9kFg7NCHzs9a5JH_ZZ-_nTRqg7HoqOi5Wdfu7IUpKWHxBy2T5YTvPwblgWdFu3ew0RA_bBCkddu5kQ.webp",
      "https://i.namu.wiki/i/V7z3udTdpQTXIjsjFigKuJBBs-rsgZw6OpCE0VO_fYYx5lr7yzcrxerS32Wjcg9W9HiyKaMDqq1YVMasWu_oALzo0ct6wn6O395UxIj_iYCkoVvbT8D8Rk9uKyDcp9gBPvO6TbYbOOSMrTGppvyNSA.webp",
    ],
    gif: "/titan/titanimg/jan.gif",
    profile: "<br>나이: 15세 <br>조사병단 104기",
    story:
      "훈련병 시절에는 안위만을 중시하는 현실적인 개인주의자였다. 하지만 마르코의 죽음을 겪으며 각성하고, 마르코가 생전에 남긴 '넌 약하지만 그래서 우리들을 지휘하는데 더 어울려'라는 평을 떠올리며 조사병단을 지원하기에 이른다.",
  },
  {
    id: 10,
    name: "코니 스프링거",
    images: [
      "/titan/titanimg/coni.png",
      "https://i.namu.wiki/i/02Aye0b7ZKQ-XWOba8Fyr46gdAvnNGObxFCZgav3aGiJCizENs87eVNpx-1dx0KDxqGqlxKd5Xn7Fm8hy_wEedZ9-lId3pN-sHUeXeWD7NNWvodH9NenSrZ7F6ipGU9SL6F2O1D9MLahj84h4U2rPg.webp",
      "https://i.namu.wiki/i/eR9vCTfej9AgG0iVoa8b130YPUFRgRxMIY9OqjhLJop1WVIefVSbsgiUaccFXnIejvtgBNoEyO7SL8s3mUB5YbrTiSoH4Z1IUim4l8CdaP3rWp7AFjQpOQ-Bm7Ml2kzgiEZTVqQu4tH1jV3aWvzR5g.webp",
    ],
    gif: "/titan/titanimg/coni.gif",
    profile: "<br>나이: 15세 <br>조사병단 104기",
    story:
      "밸런스 감각이 좋고 정교한 입체기동이 특기지만 머리 회전이 둔하고 상황 판단력이 부족한 편이다. 끝까지 살아남아 활약한 천지전에서는 짐승 거인의 투석을 전부 피하는 어마무시한 퍼포먼스를 보여주며 실력을 증명한다.",
  },
  {
    id: 11,
    name: "라이너 브라운",
    images: [
      "/titan/titanimg/uragirimono.png",
      "https://i.namu.wiki/i/6ORqJcMbLZX9rAw0C-PHtrMRS6mTgBQWf3tgDjUZDPTWCEUP52jlMYRfDySBLfs5wQS-q_kPDQTaWBbCgtBrLcDsdynnY09cpK60TbvfG4-39_1WUbH-WjsgcANGim52ZtMDmCcYmvV7CCfIS29b-Q.webp",
      "https://i.namu.wiki/i/Ul9Ftbgul3Ysszy0pK1HsIF-4g0aoAabf9xpPQ0YW4LIetuoTWH-_qT0wYLQEov-uufae9wL8Etq3fKA4MtkjeRUZMS9RZpeEI531h3GphvSHCNl9TBg-V3blQyvxl42IZ8X_8rUqalJKNoDDnjv-A.webp",
    ],
    gif: "/titan/titanimg/ura.gif",
    profile: "<br>나이: 17세 <br>조사병단 104기",
    story:
      "엘런과 같은 제104기 훈련병단 동기생. 훈련교관의 평가에 따르면 동료들로부터 깊은 신뢰를 얻고 있는 리더감이다. 미카사에 이어 차석으로 졸업할 정도로 성적이 우수하며 굉장한 실력자이다.",
  },
  {
    id: 12,
    name: "베르톨트 후버",
    images: [
      "/titan/titanimg/tallman.png",
      "https://i.namu.wiki/i/ywJ0gKnEExCj7Bw07H4VNURPzbd9hhHd6YmH0KgZS4QXQiz8lyGDBmYRRjMT2PimqlrC_NvLL8LJWYfKolZtgvBjBqIHlmDj7if5UJbACHddaQwQy11LePl3cn45eO5cVHtlV-_Po-zCoHE7SsYsJA.webp",
      "https://i.namu.wiki/i/StKMzMQcqOPINL7nexux4CHRoAxfjZYtyUgHvmozyWYzG3yKCD7miYxU1LqICn6afsVVTmsI-aG8LAp0gF0dKiJ3qYy1AgMc3RL57DJ4wC6TmRL1lzrnJSl44lo5hVd8trT-q-6OhOYG7F1czym3Hg.webp",
    ],
    gif: "/titan/titanimg/ura.gif",
    profile: "<br>나이: 16세 <br>조사병단 104기",
    story:
      "제104기 훈련병단에서 종합 성적 3위로 졸업한 인재. 상위 10명 중에서 키가 월등히 크다. 기본적으로 조용하며 점잖고 온화한 성격의 소유자이지만, 알고 보면 어린 나이에 초대형 거인을 완벽하게 통제한 어마무시한 재능의 소유자이다.",
  },
  {
    id: 13,
    name: "유미르",
    images: [
      "/titan/titanimg/mir.png",
      "https://i.namu.wiki/i/LrbxbBdh9CPl63ZwJl3hghCSMQ3AXXEFPEFxgqpTFiLoXfoTnXeJU4bZboMqEWRJwhIldzhfT_GbXgBKmp1oUb-UgYb8TQoN6eMhb3x0BuS3NpvQZVePUFegbmOnsIiONz33pJnJ4kiQVCyi9oMlqQ.webp",
      "https://i.namu.wiki/i/5Ya6nwFvwcgjSbBCdMtQh7JDIbyn-M-tjbTbaa2s92vmiURuJN6EYEjjiebKhWjslV0hu3JmO9ncxtzh5pDZ2meKfIE2YX3tgR2J8Ok31_Sf5K2SssV3_aaesnjDM8lnsDvBnDnWwfEi2MyBsgcYSw.webp",
    ],
    gif: "/titan/titanimg/mir.gif",
    profile: "<br>나이: ? <br>조사병단 104기",
    story:
      "크리스타와 쭉 붙어 다니며 크리스타를 지키려는 행동을 자주 한다. 철저하게 본인의 호불호를 확실히 가르며 개인주의적인 성향을 보이지만, 내면에는 남들의 행복을 바라는 마음과 크리스타를 향한 깊은 애정을 지니고 있다.",
  },
];

const listView = document.getElementById("list-view");
const detailView = document.getElementById("detail-view");
const grid = document.getElementById("character-grid");
const sidebar = document.getElementById("character-sidebar");

const nameEl = document.getElementById("detail-name");
const gif = document.getElementById("detail-gif");
const profile = document.getElementById("detail-profile");
const story = document.getElementById("detail-story");

/* =========================================
   💡 1. 목록 카드 생성 (순위 뱃지 추가!)
========================================= */
function renderList() {
  grid.innerHTML = "";

  // 💡 공통 도구(조회수.js)에게 조사병단(scoutViews) 순위표를 받아옵니다.
  let rankMap = ViewManager.getRankMap("scoutViews", characters);
  let views = JSON.parse(localStorage.getItem("scoutViews")) || {};

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

  // 카드 스르륵 나타나는 애니메이션
  setTimeout(() => {
    document.querySelectorAll(".character-card").forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 120);
    });
  }, 10);
}

/* =========================================
   💡 2. 상세 열릴 때 (외부 클릭 시 조회수 추가!)
========================================= */
function openDetail(id) {
  const c = characters.find((x) => x.id === id);

  ViewManager.addView(
    "scoutViews",
    id,
    c.name,
    c.images[0],
    "../josa/scout.html",
  );

  listView.style.display = "none";
  detailView.style.display = "block";

  // 💡 영상 볼 때 BGM 볼륨 낮추기 (0.0 ~ 1.0)
  const bgm = document.getElementById("bgm");
  if (bgm) bgm.volume = 0.2;

  setTimeout(() => {
    detailView.classList.add("active");
  }, 10);

  renderSidebar(id);
  renderDetail(id);
}
/* =========================================
   💡 3. 사이드바 (내부 클릭 시 조회수 추가!)
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

  const items = sidebar.querySelectorAll("div");
  items.forEach((item, i) => {
    setTimeout(() => {
      item.classList.add("show");
    }, i * 80);
  });
}

// 💡 사이드바 메뉴 클릭 시 작동하는 전용 함수
function changeDetail(id) {
  const c = characters.find((x) => x.id === id);

  // 💡 안에서 다른 캐릭터를 눌러도 조회수 증가
  ViewManager.addView(
    "scoutViews",
    id,
    c.name,
    c.images[0],
    "../josa/scout.html",
  );

  renderDetail(id);
  renderSidebar(id);
}

/* =========================================
   상세 내용 렌더 및 기능
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
  gif.src = c.gif;
  profile.innerHTML = c.profile;
  story.innerHTML = c.story;
}

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

/* 목록 복귀 */
function goBack() {
  renderList();
  detailView.style.display = "none";
  listView.style.display = "block";

  // 💡 다시 목록으로 오면 BGM 볼륨 원래대로 복구
  const bgm = document.getElementById("bgm");
  if (bgm) bgm.volume = 1.0;
}

/* =========================================
   타이핑 효과 및 BGM, 초기화
========================================= */
const typingElement = document.getElementById("typing-text");
const quote =
  "모두, 표정이 좋군. 그러면 지금! 여기에 남아있는 자들을 새로운 조사병단으로 맞아들이겠다! 이것이 진짜 경례다! 심장을 바쳐라!!";
let i = 0;

function typeEffect() {
  if (i < quote.length) {
    typingElement.textContent += quote.charAt(i);
    i++;
    setTimeout(typeEffect, 60); // 속도 조절 가능
  }
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

/* 💡 페이지가 완전히 열릴 때 카드와 타이핑 효과 실행 */
window.addEventListener("load", () => {
  renderList(); // 💡 뱃지가 달린 렌더링 함수 실행!
  typeEffect();
});
/* =========================================
   💡 [NEW] 부대 내 1위 실시간 뱃지 엔진
========================================= */

function updateLocalTopBadge() {
  // ⚠️ 파일에 맞게 이름 유지! (조사병단: scoutViews, 헌병단: militaryViews, 거인: titanViews)
  const storageKey = "scoutViews";
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
