/*
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2021-07-07 15:47:18
 * @LastEditors: Weidows
 * @LastEditTime: 2021-07-09 10:05:23
 * @FilePath: \awesome-image-collector\src\collector.js
 * @Description:
 * @!: *********************************************************************
 */

// 入口函数 The entry function
async function start(imageElements) {
  console.log("开始准备数据 (Start to prepare the data).");
  var zip = new JSZip();
  let fileNameCount = 0,
    lastFileName = "";

  for (const imageElement of imageElements) {
    let url =
      imageElement.src == undefined ? imageElement.href : imageElement.src;
    if (url == undefined) continue;
    let fileName = url.substring(
      url.lastIndexOf("/") + 1,
      url.lastIndexOf(".")
    );
    let extName = url.substring(url.lastIndexOf(".") + 1);

    // 防止文件重名
    if (lastFileName == fileName) {
      fileName = fileNameCount;
    }
    fileNameCount++;
    lastFileName = fileName;

    let blob = await getBlob(url, extName);
    zip.file(fileName + "." + extName, blob, { base64: false });
    console.log("Successfully fetch the image.");
  }
  download(zip);
}

function getBlob(url, type) {
  return new Promise((ret, res) => {
    let img = new Image();
    img.crossOrigin = "anonymous"; //需要放在图片赋值前，否则部分浏览器会报错
    img.src = url;
    img.onload = function () {
      let _canvas = document.createElement("canvas");
      _canvas.width = this.width;
      _canvas.height = this.height;
      _canvas.getContext("2d").drawImage(this, 0, 0, this.width, this.height);
      //转格式
      _canvas.toBlob(
        function (blob) {
          ret(blob);
        },
        `image/${type}`,
        0.92 // 压缩质量 The compression quality
      );
    };
  });
}

// 生成zip文件并下载 Generate the zip file and download
function download(zip) {
  zip
    .generateAsync({
      type: "blob",
    })
    .then(function (content) {
      console.log("开始下载 (Start the download).");
      // 创建隐藏的可下载链接
      var eleLink = document.createElement("a");
      // 下载的文件名
      eleLink.download = new Date().getTime() + ".zip";
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
