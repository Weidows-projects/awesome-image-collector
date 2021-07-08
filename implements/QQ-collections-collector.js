/*
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2021-07-07 20:30:06
 * @LastEditors: Weidows
 * @LastEditTime: 2021-07-08 12:39:38
 * @FilePath: \awesome-image-collector\implements\QQ-collections-collector.js
 * @Description:
 * @!: *********************************************************************
 */

(function () {
  // 引入库函数
  const jsZip = document.createElement("script"),
    collector = document.createElement("script");
  jsZip.src = "https://cdn.bootcdn.net/ajax/libs/jszip/3.5.0/jszip.min.js";
  collector.src =
    "https://cdn.jsdelivr.net/gh/Weidows-projects/awesome-image-collector/dist/collector.min.js";
  document
    .getElementsByTagName("head")[0]
    .appendChild(jsZip)
    .appendChild(collector);

  collector.onload = function () {
    qqCollector();
  };
})();

// ======================== 筛选-下载 ========================
function qqCollector() {
  let imageElements = document.getElementsByTagName("img");

  // TODO 把用户头像去掉

  start(imageElements);
}
