// 조회수.js (통합 조회수 및 랭킹 관리 모듈)
const ViewManager = {
  COOLDOWN: 10000, // 10초 광클 방지

  // 1. 조회수 추가 로직
  addView: function (storageKey, id, name, imgUrl, pageUrl) {
    let views = JSON.parse(localStorage.getItem(storageKey)) || {};
    let currentData = views[id];
    let currentCount =
      typeof currentData === "number"
        ? currentData
        : currentData
          ? currentData.count
          : 0;
    let lastTime =
      typeof currentData === "number"
        ? 0
        : currentData
          ? currentData.timestamp
          : 0;

    let now = Date.now();

    if (now - lastTime > this.COOLDOWN) {
      views[id] = {
        count: currentCount + 1,
        timestamp: now,
        name: name,
        img: imgUrl,
        url: pageUrl,
      };
      localStorage.setItem(storageKey, JSON.stringify(views));
      console.log(
        `👁️ [개발자 모드] '${name}' 조회수 인정! -> 총 ${views[id].count}회`,
      );
      return true;
    } else {
      const remain = Math.ceil((this.COOLDOWN - (now - lastTime)) / 1000);
      console.warn(
        `⏳ [어뷰징 방지] '${name}' 광클 감지! ${remain}초 후에 갱신 가능.`,
      );
      return false;
    }
  },

  // 2. 단일 페이지 내의 캐릭터 1,2,3위 랭킹맵
  getRankMap: function (storageKey, charactersArray) {
    let views = JSON.parse(localStorage.getItem(storageKey)) || {};
    let rankedChars = charactersArray
      .map((c) => {
        let data = views[c.id];
        let count = typeof data === "number" ? data : data ? data.count : 0;
        let time = typeof data === "number" ? 0 : data ? data.timestamp : 0;
        return { id: c.id, count: count, time: time };
      })
      .filter((c) => c.count > 0)
      .sort((a, b) => {
        if (b.count === a.count) return b.time - a.time;
        return b.count - a.count;
      });

    let rankMap = {};
    rankedChars.forEach((item, index) => {
      if (index === 0) rankMap[item.id] = 1;
      else if (index === 1) rankMap[item.id] = 2;
      else if (index === 2) rankMap[item.id] = 3;
    });
    return rankMap;
  },

  // 3. ✨ [NEW] 특정 부대(병과)의 "총합 조회수" 계산기
  getTroopTotalViews: function (storageKey) {
    let views = JSON.parse(localStorage.getItem(storageKey)) || {};
    let total = 0;
    for (let id in views) {
      let data = views[id];
      let count = typeof data === "number" ? data : data ? data.count : 0;
      total += count; // 해당 부대의 모든 캐릭터 조회수를 전부 더합니다!
    }
    return total;
  },

  // 4. ✨ [NEW] 특정 부대 내에서 가장 높은 1위 캐릭터만 추출
  getTroopTop1: function (storageKey) {
    let views = JSON.parse(localStorage.getItem(storageKey)) || {};
    let arr = [];
    for (let id in views) {
      let data = views[id];
      if (data && data.count > 0 && data.name) {
        arr.push(data);
      }
    }
    if (arr.length === 0) return null;
    arr.sort((a, b) => {
      if (b.count === a.count) return b.timestamp - a.timestamp;
      return b.count - a.count;
    });
    return arr[0];
  },

  // 5. 전체 세계관 실시간 통합 1위 캐릭터 추출 (메인 우측 하단용)
  getGlobalTop1: function (storageKeysArray) {
    let allChars = [];
    storageKeysArray.forEach((key) => {
      let views = JSON.parse(localStorage.getItem(key)) || {};
      for (let id in views) {
        let data = views[id];
        if (data && data.count > 0 && data.name) {
          allChars.push(data);
        }
      }
    });

    if (allChars.length === 0) return null;

    allChars.sort((a, b) => {
      if (b.count === a.count) return b.timestamp - a.timestamp;
      return b.count - a.count;
    });
    return allChars[0];
  },
};
