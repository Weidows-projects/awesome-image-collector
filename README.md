<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2021-07-06 19:42:41
 * @LastEditors: Weidows
 * @LastEditTime: 2021-07-10 00:16:05
 * @FilePath: \awesome-image-collector\README.md
 * @Description:
 * @!: *********************************************************************
-->

<h1 align="center">

⭐️ Awesome-Image-Collector ⭐️

_拾图虫_

</h1>

# 功能

1. 自动搜集下载页面中指定图片集, `手累度`: O(n) -> O(1)

2. 下载原始地址图片数据,不会缩放转码,无 base64 中间态.

3. 可通过插件实现跨域资源获取.

4. 下载后自动后台打包为 Zip 文件,方便快捷.

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# 使用

- 1.入口文件为: [index.js](./index.js) ,TODO 处为函数入口.

  <details>

    <summary> -> 查看代码 View the code <- </summary>

  ```js
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
      // wait for resources load
      // TODO getImageElements - <a>/<img>
      // 需要做的就是筛选出imageElements标签集合, 并传给start()
      let imageElements;

      start(imageElements);
    }, 500);
  })();
  ```

  ***

  </details>

- 2.需要完成筛选图片标签部分代码 (根据复杂度不同,代码量从 1~n 行不等)

  比如下面实现中的 SM.MS-collector,只需要这一行代码就可以完成筛选:

  ```
  imageElements = document.getElementsByClassName("fancybox")
  ```

  至于筛选出标签集合之后怎么 start,如何灵活使用,可参考 [implements/SM.MS-collector.js](./implements/SM.MS-collector.js)

- 3.补充完成这部分代码之后,复制粘贴到目标网页的 console,然后回车运行即可.

---

- 4.如果遇到下面报错,是因为源站后台没有开启 CORS (反爬),需要 `安装浏览器插件`

  ```
  Access to image at 'xxx' from origin 'xxx' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
  ```

  > [CORS Unblock](https://microsoftedge.microsoft.com/addons/detail/cors-unblock/hkjklmhkbkdhlgnnfbbcihcajofmjgbh?hl=zh-CN)

  > [Allow CORS: Access-Control-Allow-Origin](https://microsoftedge.microsoft.com/addons/detail/allow-cors-accesscontro/bhjepjpgngghppolkjdhckmnfphffdag?hl=zh-CN)

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# 实现

## [SM.MS-collector](./implements/SM.MS-collector.js)

> [文档地址](https://weidows.github.io/post/tools/SM-MS-downloader) | [备用文档地址](https://weidows.gitee.io/post/tools/SM-MS-downloader)

---

## [QQ-collections-collector](./implements/QQ-collections-collector.js)

- <details>

    <summary> -> 适用于下载 QQ 收藏中的图片集 (需要安装浏览器插件) <- </summary>

  <img src="https://i.loli.net/2021/07/10/eLkP1iV5YXGm6Zy.png" alt="20210710001553" />

  ***

  </details>

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# 历史版本

<details>

- [v1.0.0](./version/v1.0.0/)

  下载的图片内置数据为 base64,过大,还需要额外压缩

</details>

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# 参考

> [JsZip](https://stuk.github.io/jszip/)

> [renzhezhilu/webp2jpg-online](https://github.com/renzhezhilu/webp2jpg-online/blob/917e1e527a8811f710b2a670d7771468908e4ca1/version/v1.0.0/js/index.js)
