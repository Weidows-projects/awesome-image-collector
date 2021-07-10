/*
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2021-07-07 20:30:06
 * @LastEditors: Weidows
 * @LastEditTime: 2021-07-10 12:05:33
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
    "https://cdn.jsdelivr.net/gh/Weidows-projects/awesome-image-collector@master/dist/collector.min.js";
  document
    .getElementsByTagName("head")[0]
    .appendChild(jsZip)
    .appendChild(collector);

  setTimeout(function () {
    qqCollector();
  }, 500);
})();

// ======================== 筛选-下载 ========================
function qqCollector() {
  let imageElements = document.getElementsByTagName("img");

  // 去掉头像
  imageElements[0].parentNode.removeChild(imageElements[0]);

  for (let i = 0; i < imageElements.length; i++) {
    // 去掉404图片
    if (imageElements[i].src.includes("qq.com")) {
      imageElements[i].parentNode.removeChild(imageElements[i]);
      i--;
    }
    // 把接口添加后缀名
    if (!imageElements[i].src.includes(".png")) imageElements[i].src += ".png";
  }

  start(imageElements);
}
