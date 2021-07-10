/*
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2021-07-10 09:10:00
 * @LastEditors: Weidows
 * @LastEditTime: 2021-07-10 09:11:37
 * @FilePath: \awesome-image-collector\implements\violent-collector.js
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
    start(document.getElementsByTagName("img"));
  }, 500);
})();
