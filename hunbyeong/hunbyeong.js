// 1. 캐릭터 11명 데이터
const characters = [
  {
    id: 1,
    type: "regular",
    name: "나일 도크",
    img: "https://i.namu.wiki/i/1a41oy_SLTPX6APmBXpVNzrhybLA435T8MaJ513RrckFXDZMn24xiSWrrxv1ALe_1oCHDmmLiW_sgklcyc-Q4w06T4__YMlwLOYQR_Xyrd4xhCe1_1g2JqHVdj8fpnOIFbFBwrWI_bno0OWrfKchsg.webp",
    detailImages: [
      "https://i.namu.wiki/i/1a41oy_SLTPX6APmBXpVNzrhybLA435T8MaJ513RrckFXDZMn24xiSWrrxv1ALe_1oCHDmmLiW_sgklcyc-Q4w06T4__YMlwLOYQR_Xyrd4xhCe1_1g2JqHVdj8fpnOIFbFBwrWI_bno0OWrfKchsg.webp",
      "https://i.namu.wiki/i/cajBl_6_X9d1BTRZOcTyOLL9vVIRR4X7UMqhiXYlmXUICavvY7LbuRJKqk-KyiG-EjB6YUAAQN2yMfADssxWfg.webp",
      "https://i.namu.wiki/i/nkWgpv1p25L98lCRNacQPl01mB0PUuh2yQx3I_XpQJJqbr6Gvdsfo3YD8mtKzaBtZ4woKzAvXeJNcmc_RwxC7A.webp",
    ],
    video: "https://media1.tenor.com/m/A5r7IdKrx_oAAAAC/nile-dok-nile.gif",
    profile: "일반 헌병단 (사단장), 사랑꾼",
    story:
      "체제를 유지하려는 보수적인 성향을 지녔으나, 내면에는 가족을 아끼는 인간적인 면모를 지니고 있다. 마리를 지키려고 헌병단으로 지원",
  },
  {
    id: 2,
    type: "regular",
    name: "애니 레온하트",
    img: "https://i.namu.wiki/i/jegh5ZlyFnEtuiLx5sMZtv96szBWWu1mSndLoAnnx_MuV7KcuvmGXrzccU5uB0SmwZT_b8mabYS41Wa2m86WBR7p_yIahu4uEDB_ldsiaREIx76otAXwVrwUwjTsMxTlAKpxh10xRbNZxBMAryEVQQ.webp",
    detailImages: [
      "https://i.namu.wiki/i/jegh5ZlyFnEtuiLx5sMZtv96szBWWu1mSndLoAnnx_MuV7KcuvmGXrzccU5uB0SmwZT_b8mabYS41Wa2m86WBR7p_yIahu4uEDB_ldsiaREIx76otAXwVrwUwjTsMxTlAKpxh10xRbNZxBMAryEVQQ.webp",
      "https://i.namu.wiki/i/Wovt0Pzpxq3tp5L3PorefP1Ye5DA-1tPn_KEdv8NGWoJK8BYIgYR23keugYkPRmVgCimRopinrEYnb3MuOVJ_g.webp",
      "https://i.namu.wiki/i/inlztUWG9kWSRk761gXuNC0VKO1GaA9BfOQImt8hgUnLSh6_EaXn1SdYP7k5STSXHnu4ncLtcQXvQxQHPA-fkw.webp",
    ],
    video: "img/애니애니.gif",
    profile: "일반 헌병단 (제104기)",
    story:
      "유일하게 헌병단에 지원한 104기 출신. 뛰어난 격투술을 지녔으며 항상 무심하고 냉정한 태도를 유지한다.",
  },
  {
    id: 3,
    type: "regular",
    name: "히치 도리스",
    img: "https://i.namu.wiki/i/DNvDw2hoiN2ubNp11l26ZItcF2oPM_T1k_nb3gKXMoF3G21J9aVubdhKrCbi0o92FLrosMIjpfYKqpVfrb_fNdjiM43XCg8Yqy9EyQKTpOJPP4n4ELtQXfISvJoyqussBE0AmsdeFDnSWi5IU4l4kQ.webp",
    detailImages: [
      "https://i.namu.wiki/i/DNvDw2hoiN2ubNp11l26ZItcF2oPM_T1k_nb3gKXMoF3G21J9aVubdhKrCbi0o92FLrosMIjpfYKqpVfrb_fNdjiM43XCg8Yqy9EyQKTpOJPP4n4ELtQXfISvJoyqussBE0AmsdeFDnSWi5IU4l4kQ.webp",
      "https://i.namu.wiki/i/GMzS9bW67apeRPH87qpSYUhupoCqWhYBrXz37_SfZNC6MqFLVTn_E_pVz17PGyeIVAFNIRlfX47oFnnq2Cb4ZA.webp",
      "https://i.namu.wiki/i/SaL62kxVuxDGbNWBHqSujOZqzJdeeL05vDniWqDDwBtpCwjkCDNBC3Okg3RvmY6I-zj68or3bEW3aPxT5zwqeA.webp",
      "https://pbs.twimg.com/tweet_video_thumb/DIUdG26UIAExjFO.jpg",
    ],
    video: "https://media1.tenor.com/m/Xm_MqDcvTJwAAAAd/hitch-hitch-dreyse.gif",
    profile: "일반 헌병단 (스토헤스 구 지부)",
    story:
      "편하고 안전한 삶을 위해 입단했으나, 점차 부패한 조직의 현실을 직시하게 된다.",
  },
  {
    id: 4,
    type: "regular",
    name: "마를로 프로이덴베르크",
    img: "https://i.namu.wiki/i/8_nBGAVmd5yvUN1VQj7QRguCytoHKLR2vfFiiDirjPsq0q6eg2t3_1hUcfPBl2sIJtqmo0VYVG5MYxFpDW4ZSeYLlura5VTKFbilhsb_u580cRqnQ7QfBjwvVsoV7mint8alChkYjBjXDQzjqYS9xQ.webp",
    detailImages: [
      "https://i.namu.wiki/i/8_nBGAVmd5yvUN1VQj7QRguCytoHKLR2vfFiiDirjPsq0q6eg2t3_1hUcfPBl2sIJtqmo0VYVG5MYxFpDW4ZSeYLlura5VTKFbilhsb_u580cRqnQ7QfBjwvVsoV7mint8alChkYjBjXDQzjqYS9xQ.webp",
      "https://i.namu.wiki/i/YL9a8QyHJ5da-ZoVPE0gZqX5VaRdtzyF0omNsDp-oIVuNMaNrbeLqdOXLFJgkWTJ-dT-sxf1JLxJm1JpTiM6Og.webp",
      "https://i.namu.wiki/i/vtMdsyUpY7g-_PKrWey__lcfG-dUopdmn6ThxZRYdP4SYHhCJvOw-oTAEvoRs4gDe5hiAEboaqtP1VdQo9V27w.webp",
      "https://i.namu.wiki/i/Gq58n901szefw0Pt6l5WyCwVqnKoIv3NuCyhjZEFHwH8jVDpj1G3-U80Mt8XTVUDmYemtl5cGOZ7h8wsXnqOjg.webp",
    ],
    video:
      "https://media1.tenor.com/m/QBmfWa2D0-sAAAAd/floch-forster-marlowe-freudenberg.gif",
    profile: "일반 헌병단",
    story:
      "헌병단의 부패를 내부에서 개혁하겠다는 강직한 신념을 가진 인물. 나중에는 조사병단으로 이적한다.",
  },
  {
    id: 5,
    type: "regular",
    name: "보리스 호이르나",
    img: "https://i.namu.wiki/i/fONGRcc4l573PDMzbzasqUqITSw5mGFpdDwxcU_VVQVql8vcH2wde_UTnNXHVezQLsqTkaDPRQ6DLRONesKVHzDm9HSdRABHhVAjHiWnuFznKR4LJ2UpNjYFMKCuuqAF5S0Tte1iOmNdK238m94lcA.webp",
    detailImages: [
      "https://i.namu.wiki/i/fONGRcc4l573PDMzbzasqUqITSw5mGFpdDwxcU_VVQVql8vcH2wde_UTnNXHVezQLsqTkaDPRQ6DLRONesKVHzDm9HSdRABHhVAjHiWnuFznKR4LJ2UpNjYFMKCuuqAF5S0Tte1iOmNdK238m94lcA.webp",
      "https://i.namu.wiki/i/BIC4wRThhTJmNiM582JO5nBxdbRWr7yOlm89GrAId04dY27kqTHj9Fm9FF-Hizx6coeaNypHoV52i-Q_8rvqwn7ry7gtoCgiYFboW34vawr7Wd_H7nYiWCs7DnH7TJPuE5ra2KAWaG71YDoxvJjdLA.webp",
    ],
    video:
      "https://i.namu.wiki/i/KuAXMNBABfmudfiLx8yDIUUNurn0w2GqpqTBUjPPlFogyTN9dtrDE9NYLeGf47Q9ghKgtfLpmDkPxX-Ftl26qxA7f5Ns9jNgvsGGwBDMltac9onuu4DqLAWFSYEkARcVMOltqqQZIUfkFcBYcWlpmQ.webp",
    profile: "일반 헌병단",
    story:
      "애니, 마를로, 히치와 함께 배치된 동기 대원. 말수가 적고 주변 상황을 예리하게 관찰한다.",
  },
  {
    id: 6,
    type: "regular",
    name: "데니스 아이빙거",
    img: "https://i.namu.wiki/i/XlkynyT4SxxUkEvzuMEP0MhzwaYFncedNTQvsUsIzRNszVDQe2eGc-PXsZbD36kxTTG3DJL95i-0H9BsCkC6vb4BAA0OJXjZqS5gKvDSkuwgSHOKn7tDdpTJHOEs7lQ1B5zXWsNsU-DSEsc0Es0Yow.webp",
    detailImages: [
      "https://i.namu.wiki/i/XlkynyT4SxxUkEvzuMEP0MhzwaYFncedNTQvsUsIzRNszVDQe2eGc-PXsZbD36kxTTG3DJL95i-0H9BsCkC6vb4BAA0OJXjZqS5gKvDSkuwgSHOKn7tDdpTJHOEs7lQ1B5zXWsNsU-DSEsc0Es0Yow.webp",
      "https://i.namu.wiki/i/iin4SVyvl2fHGq-EIx_nqrYWJgTLNGEIiA5Coe9GucSI05hBZZQghUz4QkdDOaYyDt75wYNqA_fKp9_W-ia4A7CZMg1-f-c5L9X97L0pLeAvg8JALaDOo8FXV9MbUWhkSFENLjeg0_sA-C9-LpqUVw.webp",
    ],
    video:
      "https://i.namu.wiki/i/5wPNFHmtlS4KoqGizsFq_Xj9pv1Y5ZGM5t5_n-_WohLGVRPAhOtDiJASEDLKkUKgJpJ7yy1eBSSntC0fpAajhw.webp",
    profile: "일반 헌병단 (간부)",
    story:
      "스토헤스 구 헌병단 지부를 총괄한다. 관급품을 횡령하는 등 부패한 전형적인 모습을 보여준다.",
  },
  {
    id: 7,
    type: "regular",
    name: "로그",
    img: "https://i.namu.wiki/i/DpTLAA462DnMMxICZnG4bjRd3F-vGwiVhSVXsxmV-7SKqasLqYYIT5Jac1CIur06Suy9mQPHq3noedIeF--7oQjPweYTWInCaMiRk1x_72hwgpTEnREDEwDQLkXPnilY8D7BRUm0pJu_vhEXOBf3sg.webp",
    detailImages: [
      "https://i.namu.wiki/i/3WOtBaP_yE-V5CVP3D9sTEONWDeSyJnsXDO3JlhoPJFD2hkwEHvdw09teHtKX3mYvzTH2LLkYf5ns_QKirwtPQ.webp",
      "https://i.namu.wiki/i/DpTLAA462DnMMxICZnG4bjRd3F-vGwiVhSVXsxmV-7SKqasLqYYIT5Jac1CIur06Suy9mQPHq3noedIeF--7oQjPweYTWInCaMiRk1x_72hwgpTEnREDEwDQLkXPnilY8D7BRUm0pJu_vhEXOBf3sg.webp",
      "https://i.namu.wiki/i/eqOjIBEg3mzI12w7VJsvriInr33PQF9oI6vhm3ksEhUaettCBoKVrFck3aac8I5MGPJkndOfxN6QqtycxiqI4PNqILB-fN5N0kUztENLa2hyxG-CcMcW531IMGYM-ylCsaiSYV_Fo0vTateqnmGcWg.webp",
    ],
    video:
      "https://i.namu.wiki/i/skMKb6NjuO3Pjo8TgMD5hmSuqW8rwI452dp9d8mm3_u5814F_lddfxMlsG1qI1OOYdUoyjZAlVytFdD-IgFcxE7Ddl8rG63ulTYWHHxbkZLLCULUN6dmDAN3R0b5EePk8GBwYeLlHZB6yD7ctz-MZw.webp",
    profile: "일반 헌병단 (고위 간부)",
    story: "보수적이고 오만하며, 예거파와 강하게 대립하는 인물.",
  },
  {
    id: 8,
    type: "interior",
    name: "케니 아커만",
    img: "https://i.namu.wiki/i/rLPWHiVnVNLQnoMoPgGCitW3fQhMkxUveQ6zJ63MCnSey2tVYL4ULMDqBiWq1aq6DAOK3mYi_rSNLiNI0TZ5ZahkfNffkutNt2ZfuH31BOrX3Y0jMY1jf6lNTs-I23_WGtgmhZj7Rr30d-aX-52ucQ.webp",
    detailImages: [
      "https://i.namu.wiki/i/BdAhsw07FxVZJrsQDwTV5TnoWy9rCDC_Ct6NOwYGWRpy5IGCMTUz94-cx5Qda7apgkHjder32ABm2jiiTJUrgA.webp",
      "https://i.namu.wiki/i/rLPWHiVnVNLQnoMoPgGCitW3fQhMkxUveQ6zJ63MCnSey2tVYL4ULMDqBiWq1aq6DAOK3mYi_rSNLiNI0TZ5ZahkfNffkutNt2ZfuH31BOrX3Y0jMY1jf6lNTs-I23_WGtgmhZj7Rr30d-aX-52ucQ.webp",
      "https://i.namu.wiki/i/ldBQ29115QTxGWKCL8T-bmbEjus-ANvZS7aZnFg_S5vyU48XBNNCvbHlpTq0jWGaPGIyHTHU-5njLaqu-ZIokA.webp",
      "https://i.namu.wiki/i/3pPzYTwpWlgQN70P6ZahGGvmbUnrcNey76n9lqQscgMQMZZW6q_ml0NHKZAw2jbs3zCqF0Mg1LT5Sm5HvLmvQg.webp",
      "https://mblogthumb-phinf.pstatic.net/MjAxODA5MjVfMjkx/MDAxNTM3ODQ2NjcxOTgx.lYsjXNMQIKzcWbC6cX_g-uBuOz8xS4KuGsrRXGfOvrog.YRmkQEguLfQY3lLoyPPAvL2Ekwye_6FXPLZYwpL-2SMg.JPEG.kws3128pdm/41.jpg?type=w800",
    ],
    video: "https://media1.tenor.com/m/YTvUrqiNwVAAAAAC/kenny-ackerman-aot.gif",
    profile: "중앙 제1헌병단 (대장)",
    story:
      '대인 제압 부대 대장. "절단마 케니"라 불렸던 무법자 출신으로 압도적인 전투력을 자랑한다.',
  },
  {
    id: 9,
    type: "interior",
    name: "트라우테 카펜",
    img: "https://i.namu.wiki/i/6TsKqzrmuFiD9AMgCOHDKZV_7rPCf0W7idZyqAQoqnSYb-txCaF_bY0j6oW6gjrfFuPgP0iiD8ONUrBtdXvUdKtkvHJ3kjX5IazcgsGlowfqqL3i3cpZpDHiAthwuGUo_VIBd3-grGMMkDS-ttVEqQ.webp",
    detailImages: [
      "https://i.namu.wiki/i/6TsKqzrmuFiD9AMgCOHDKZV_7rPCf0W7idZyqAQoqnSYb-txCaF_bY0j6oW6gjrfFuPgP0iiD8ONUrBtdXvUdKtkvHJ3kjX5IazcgsGlowfqqL3i3cpZpDHiAthwuGUo_VIBd3-grGMMkDS-ttVEqQ.webp",
      "https://i.pinimg.com/736x/d4/7b/1f/d47b1fedbcb30a98c17bf8f463dac90f.jpg",
      "https://i.namu.wiki/i/TtcXduXJnxpmYzWr1UVYG4n-v9yE-okP6mQBX_0dcCniz-DbnpzhTYf_QoF5sHnHUFnDOqeC6qQfX7Iphd9fFw.webp",
    ],
    video:
      "https://i.namu.wiki/i/oXD5R53ffz8CtcIl_sTkt4GJNEaXcUSaTP7Ak4Vw7rzti20IURzYmMeLFhqubTpH5mFyzMrj7TGa1M_jVFA67A.gif",
    profile: "중앙 제1헌병단 (부대장)",
    story:
      "대인 제압 부대 부대장이자 케니의 심복. 뛰어난 입체기동 능력을 갖추고 있다.",
  },
  {
    id: 10,
    type: "interior",
    name: "제르 사네스",
    img: "https://i.namu.wiki/i/qN91OHgeN-NLQbhOaKVGIh6JRZW3jSrOiZzamIx3eJ9DJz7RnZUnTI7QSxOowoN46YTLouF3xsTDaMBz415r_iiqFX805nKQn9KLdP5YEEZjyI0EwBlslp1fhXfROjo9-kLqWg34I2j1ScBpKnwSrw.webp",
    detailImages: [
      "https://i.namu.wiki/i/s1itHWZrR94uqhKYcxq21ctjQOreMVPQTJrOXeDQoR_yLA9wc2ffhWmf58D72XYlfBPehIQV5LJ_r-X_2ewCqA.webp",
      "https://i.namu.wiki/i/qN91OHgeN-NLQbhOaKVGIh6JRZW3jSrOiZzamIx3eJ9DJz7RnZUnTI7QSxOowoN46YTLouF3xsTDaMBz415r_iiqFX805nKQn9KLdP5YEEZjyI0EwBlslp1fhXfROjo9-kLqWg34I2j1ScBpKnwSrw.webp",
    ],
    video:
      "https://i.namu.wiki/i/r71rPCV8R1dsv50KPsKW_7-gJ6y3k2EKTWSMb7AnaBWY5Crlu-W1jw2hRUbh1aU9GcO1Y-kUetXBwy61OQAGeg.webp",
    profile: "중앙 제1헌병단",
    story:
      "벽 안의 평화와 왕정을 지킨다는 맹목적인 신념 아래, 고문과 암살 등 더러운 일을 도맡아 해왔다.",
  },
  {
    id: 11,
    type: "interior",
    name: "랄프",
    img: "https://i.namu.wiki/i/00WrBKPnM2Rzt-_DurnMSLwrMlbgRmFPjOH-E_1WQAeVAGkl9tWJMQfcmksXHo5GfkaJa6Q43iKLpoXAQRcSw7pz7ERkciKc6pWeY_CYE15TeQ1Sdjcf63gNKvQLIL35z1bZXhv_ip9sy8jztpSHWg.webp",
    video:
      "https://i.namu.wiki/i/_wwQaHgODqslHhb7bGxX2bJ_AQh5tmp5_5bEouB3ELZExFl0DAomENm-TUTjUcsNzYjYEZuOcAsP8UTAWt0qVWoNPBv6srYjJoouwMJMQPg2N-MoZs28LkLiiNwKvcmHr44QBxoIcYi-e4iL-5Zj3Q.webp",
    profile: "중앙 제1헌병단",
    story:
      "사네스의 파트너로 심문을 돕는 인물. 사네스와 달리 비열하고 겁이 많은 성격이다.",
  },
];

// ==========================================
// 2. DOM 요소 매핑
// ==========================================
const listView = document.getElementById("list-view");
const detailView = document.getElementById("detail-view");
const pageHeader = document.getElementById("page-header");
const regularGrid = document.getElementById("regular-grid");
const interiorGrid = document.getElementById("interior-grid");
const sidebar = document.getElementById("character-sidebar");

const sliderMainImg = document.getElementById("slider-main-img");
const thumbnailTrack = document.getElementById("thumbnail-track");
const detailName = document.getElementById("detail-name");
const detailVideo = document.getElementById("detail-video");
const detailProfile = document.getElementById("detail-profile");
const detailStory = document.getElementById("detail-story");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// ==========================================
// 3. 메인 카드 목록 렌더링 (ViewManager 사용 + 조회수 표시)
// ==========================================
function renderList() {
  regularGrid.innerHTML = "";
  interiorGrid.innerHTML = "";

  // 💡 ViewManager로 순위표 가져오기
  let rankMap = ViewManager.getRankMap("militaryViews", characters);

  // 💡 [추가된 부분] 로컬 스토리지에서 헌병단(militaryViews) 조회수 장부를 가져옵니다.
  let views = JSON.parse(localStorage.getItem("militaryViews")) || {};

  characters.forEach((c) => {
    const isInterior = c.type === "interior" ? "interior-card" : "";

    // 💡 [추가된 부분] 현재 캐릭터의 조회수 숫자를 안전하게 뽑아냅니다.
    let data = views[c.id];
    let currentCount = typeof data === "number" ? data : data ? data.count : 0;

    let badgeHTML = "";

    // 💡 순위에 따라 뱃지 달기 (조회수 텍스트 추가!)
    if (rankMap[c.id] === 1) {
      badgeHTML = `<div style="position: absolute; top: 10px; right: 10px; background: #FFD700; color: #000; padding: 5px 10px; border-radius: 5px; font-weight: bold; font-size: 0.9rem; z-index: 10; box-shadow: 0 2px 5px rgba(0,0,0,0.5);">🥇 1위 (조회수: ${currentCount}회)</div>`;
    } else if (rankMap[c.id] === 2) {
      badgeHTML = `<div style="position: absolute; top: 10px; right: 10px; background: #C0C0C0; color: #000; padding: 5px 10px; border-radius: 5px; font-weight: bold; font-size: 0.9rem; z-index: 10; box-shadow: 0 2px 5px rgba(0,0,0,0.5);">🥈 2위 (조회수: ${currentCount}회)</div>`;
    } else if (rankMap[c.id] === 3) {
      badgeHTML = `<div style="position: absolute; top: 10px; right: 10px; background: #CD7F32; color: #fff; padding: 5px 10px; border-radius: 5px; font-weight: bold; font-size: 0.9rem; z-index: 10; box-shadow: 0 2px 5px rgba(0,0,0,0.5);">🥉 3위 (조회수: ${currentCount}회)</div>`;
    }

    const cardHTML = `
      <div class="character-card ${isInterior}" onclick="openDetail(${c.id})" style="position: relative;">
        ${badgeHTML}
        <div class="card-img"><img src="${c.img}" alt="${c.name}"></div>
        <div class="card-info"><h3>${c.name}</h3></div>
      </div>
    `;

    if (c.type === "regular") regularGrid.innerHTML += cardHTML;
    else interiorGrid.innerHTML += cardHTML;
  });

  // 애니메이션 효과
  setTimeout(() => {
    document.querySelectorAll(".character-card").forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 50);
    });
  }, 10);
}

// ==========================================
// 4. 타이핑 효과
// ==========================================
const typingElement = document.getElementById("typing-text");
const quote = "왕의 방패이자 백성의 감시자, 진실을 은폐하는 자들";
let charIdx = 0;
function typeEffect() {
  if (charIdx < quote.length) {
    typingElement.textContent += quote.charAt(charIdx);
    charIdx++;
    setTimeout(typeEffect, 60);
  }
}

// ==========================================
// 5. 상세 화면 열기 (카드 클릭 시)
// ==========================================
function openDetail(id) {
  const c = characters.find((x) => x.id === id);

  // 💡 ViewManager를 통한 조회수 증가 (단 1줄로 처리!)
  ViewManager.addView(
    "militaryViews",
    id,
    c.name,
    c.img,
    "../헌병/헌병단.html",
  );

  window.location.hash = "detail";
  listView.style.opacity = "0";

  setTimeout(() => {
    listView.style.display = "none";
    detailView.style.display = "block";

    setTimeout(() => {
      detailView.classList.add("active");
    }, 10);

    renderSidebar(id);
    renderDetailInfo(id);
  }, 300);
}

// ==========================================
// 6. 왼쪽 이름 사이드바 렌더링
// ==========================================
function renderSidebar(activeId) {
  sidebar.innerHTML = "";

  let navHTML = `<div class="sidebar-category">일반 헌병단</div>`;
  characters
    .filter((c) => c.type === "regular")
    .forEach((c) => {
      const activeClass = c.id === activeId ? "active" : "";
      navHTML += `<div class="item ${activeClass}" onclick="changeDetail(${c.id})">${c.name}</div>`;
    });

  navHTML += `<div class="sidebar-category">중앙 제1헌병단</div>`;
  characters
    .filter((c) => c.type === "interior")
    .forEach((c) => {
      const activeClass = c.id === activeId ? "active" : "";
      navHTML += `<div class="item interior ${activeClass}" onclick="changeDetail(${c.id})">${c.name}</div>`;
    });

  sidebar.innerHTML = navHTML;

  const items = sidebar.querySelectorAll(".item");
  items.forEach((item, i) => {
    setTimeout(() => {
      item.classList.add("show");
    }, i * 50);
  });
}

// ==========================================
// 7. 사이드바 클릭 시 화면 교체
// ==========================================
function changeDetail(id) {
  const c = characters.find((x) => x.id === id);

  // 💡 내부 메뉴 클릭도 완벽하게 쿨타임 감시!
  ViewManager.addView(
    "militaryViews",
    id,
    c.name,
    c.img,
    "../헌병/헌병단.html",
  );

  renderSidebar(id);
  renderDetailInfo(id);
}

// ==========================================
// 8. 상세 정보(슬라이드 포함) 렌더링
// ==========================================
function renderDetailInfo(id) {
  const c = characters.find((x) => x.id === id);

  detailName.textContent = c.name;
  detailName.style.color = c.type === "interior" ? "#ff6666" : "#4a6b53";
  detailProfile.textContent = c.profile;
  detailVideo.src = c.video;
  detailStory.textContent = c.story;

  const images =
    c.detailImages && c.detailImages.length > 0 ? c.detailImages : [c.img];
  let currentIndex = 0;

  if (images.length <= 1) {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
    nextBtn.style.display = "block";
  }

  function updateSlider(index) {
    sliderMainImg.style.opacity = 0;
    setTimeout(() => {
      sliderMainImg.src = images[index];
      sliderMainImg.style.opacity = 1;
    }, 150);

    document.querySelectorAll(".thumbnail-track img").forEach((t, i) => {
      if (i === index) t.classList.add("active");
      else t.classList.remove("active");
    });
  }

  prevBtn.onclick = () => {
    currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    updateSlider(currentIndex);
  };

  nextBtn.onclick = () => {
    currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    updateSlider(currentIndex);
  };

  sliderMainImg.src = images[0];
  thumbnailTrack.innerHTML = "";

  images.forEach((imgUrl, index) => {
    const thumb = document.createElement("img");
    thumb.src = imgUrl;

    if (index === 0) thumb.classList.add("active");

    thumb.onclick = () => {
      currentIndex = index;
      updateSlider(currentIndex);
    };

    thumbnailTrack.appendChild(thumb);
  });
}

// ==========================================
// 9. 목록으로 돌아가기 버튼 클릭 시
// ==========================================
function goBack() {
  history.back();
}

// ==========================================
// 10. 초기화 및 뒤로가기 이벤트 리스너
// ==========================================
window.addEventListener("load", () => {
  renderList();
  typeEffect();
});

window.addEventListener("hashchange", () => {
  if (window.location.hash !== "#detail") {
    renderList();
    detailView.classList.remove("active");

    setTimeout(() => {
      detailView.style.display = "none";
      detailVideo.src = "";
      listView.style.display = "block";

      setTimeout(() => {
        listView.style.opacity = "1";
      }, 10);
    }, 300);
  }
});
/* =========================================
   💡 [NEW] 부대 내 1위 실시간 뱃지 엔진
========================================= */
function updateLocalTopBadge() {
  // ⚠️ 파일에 맞게 이름 유지! (조사병단: scoutViews, 헌병단: militaryViews, 거인: titanViews)
  const storageKey = "militaryViews";
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
function goBack2() {
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
