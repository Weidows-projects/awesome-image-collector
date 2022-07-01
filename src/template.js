(async () => {
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

  await Promise.all([
    new Promise((resolve) => (jsZip.onload = () => window.JSZip && resolve())),
    new Promise(
      (resolve) => (collector.onload = () => window.start && resolve())
    ),
  ]);

  // TODO getImageElements - <a> / <img>
  let imageElements;
  // 需要做的就是筛选出imageElements标签集合, 并传给start()
  start(imageElements);
})();
