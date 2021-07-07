/*
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2021-07-07 20:34:58
 * @LastEditors: Weidows
 * @LastEditTime: 2021-07-07 21:03:41
 * @FilePath: \awesome-image-collector\index.js
 * @Description:
 * @!: *********************************************************************
 */

(function () {
  // 引入库函数
  let jsZip = document.createElement("script"),
    collector = document.createElement("script");
  jsZip.src = "https://cdn.bootcdn.net/ajax/libs/jszip/3.5.0/jszip.min.js";
  collector.src = "https://cdn.jsdelivr.net/gh/";

  document.getElementsByTagName("head")[0].appendChild(jsZip);

  document.onload = function () {
    // 入口函数
    start(function () {
      let imageElements;
      // TODO 获取图像的 <a> 组

      imageElements = document.getElementsByClassName("fancybox");

      return imageElements;
    });
  };
})();
