/*
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2021-02-16 01:24:50
 * @LastEditors: Weidows
 * @LastEditTime: 2021-07-07 16:27:09
 * @FilePath: \SM.MS-downloader\SM.MS-downloader.js
 * @Description:
 * @!: *********************************************************************
 */

// 添加样式
function addElement() {
  let jsZip = document.createElement("script");
  jsZip.src = "https://cdn.bootcdn.net/ajax/libs/jszip/3.5.0/jszip.min.js";
  document.getElementsByTagName("head")[0].appendChild(jsZip);

  // 下载图片按钮
  let downloadButton = document.createElement("button");
  downloadButton.type = "button";
  downloadButton.innerText = "下载本页面图片";
  downloadButton.style.width = "100%";
  downloadButton.addEventListener("click", function () {
    downloadImg();
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
this.addElement();

// button点击事件
async function downloadImg() {
  var zip = new JSZip();
  var aTagArray = document.getElementsByClassName("fancybox");

  for (const a of aTagArray) {
    let url = a.href.toString();
    let fileName = url.substring(url.lastIndexOf("/") + 1);

    let image = new Image();
    image.setAttribute("crossOrigin", "anonymous"); //需要放在图片赋值前，否则部分浏览器会报错
    image.src = url;
    let base64 = await getPromise(image);
    zip.file(fileName, base64, { base64: true });
  }

  // 生成zip文件并下载
  zip
    .generateAsync({
      type: "blob",
    })
    .then(function (content) {
      // 创建隐藏的可下载链接
      var eleLink = document.createElement("a");
      // 下载的文件名
      eleLink.download = "Compressed.zip";
      eleLink.style.display = "none";
      // 下载内容转变成blob地址
      eleLink.href = URL.createObjectURL(content);
      // 触发点击
      document.body.appendChild(eleLink);
      eleLink.click();
      // 然后移除
      document.body.removeChild(eleLink);
    });
}

// 获取图片base64内容对象
function getPromise(image) {
  return new Promise(function (resolve) {
    image.onload = function () {
      // 获取图片base64
      let canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;

      let ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0, image.width, image.height);
      let ext = image.src
        .substring(image.src.lastIndexOf(".") + 1)
        .toLowerCase();
      let base = canvas.toDataURL("image/" + ext);
      let subBase = base.substring(base.lastIndexOf(",") + 1);

      // 返回promise
      resolve(subBase);
    };
  });
}
