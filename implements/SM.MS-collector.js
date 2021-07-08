/*
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2021-07-07 20:30:59
 * @LastEditors: Weidows
 * @LastEditTime: 2021-07-08 12:07:52
 * @FilePath: \awesome-image-collector\implements\SM.MS-collector.js
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
    smmsCollector();
  };
})();

// ======================== 添加样式 ========================
function smmsCollector() {
  // 下载图片按钮 (不主动下载,按按钮时才下载)
  let downloadButton = document.createElement("button");
  downloadButton.type = "button";
  downloadButton.innerText = "下载本页面图片";
  downloadButton.style.width = "100%";
  downloadButton.addEventListener("click", function () {
    // 调用入口函数
    start(document.getElementsByClassName("fancybox"));
  });

  // 全选CheckBox按钮
  let deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.innerHTML = "全选CheckBox按钮";
  deleteButton.style.width = "100%";
  deleteButton.addEventListener("click", function () {
    let checkBoxes = document.getElementsByClassName("filedelete");
    for (const checkbox of checkBoxes) {
      checkbox.checked = !checkbox.checked;
    }
  });

  // 创建标签
  let downloadLi = document.createElement("li");
  let deleteLi = document.createElement("li");
  downloadLi.id = "downloader";
  deleteLi.id = "deleter";
  downloadLi.appendChild(downloadButton);
  deleteLi.appendChild(deleteButton);

  // 追加标签
  if (document.getElementById("downloader") == null) {
    document
      .getElementsByClassName("sidebar-menu tree")[0]
      .appendChild(downloadLi);
    document
      .getElementsByClassName("sidebar-menu tree")[0]
      .appendChild(deleteLi);
  }
}
