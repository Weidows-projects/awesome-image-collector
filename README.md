<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2021-07-06 19:42:41
 * @LastEditors: Weidows
 * @LastEditTime: 2021-07-09 10:42:22
 * @FilePath: \awesome-image-collector\README.md
 * @Description:
 * @!: *********************************************************************
-->

<h1 align="center">

⭐️ Awesome-Image-Collector ⭐️

_拾图虫_

</h1>

# 功能

1. 自动搜集下载页面中指定图片集.

2. 下载原始地址图片数据,不会缩放转码,无 base64 中间态.

3. 可通过插件实现跨域资源获取.

4. 下载后自动后台打包为 Zip 文件,方便快捷.

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# 使用

- 1.入口文件为: [index.js](./index.js) ,TODO 处为函数入口.

- 2.需要完成筛选图片标签部分代码 (根据复杂度不同,代码量从 1~n 行不等)

  比如下面实现中的 SM.MS-collector,只需要这一行代码就可以完成筛选:

  ```
  imageElements = document.getElementsByClassName("fancybox")
  ```

- 3.至于筛选出标签集合之后怎么 start,如何灵活使用,可参考 [implements/SM.MS-collector.js](./implements/SM.MS-collector.js)

![分割线](https://cdn.jsdelivr.net/gh/Weidows/Images/img/divider.png)

# 实现

## [SM.MS-collector](./implements/SM.MS-collector.js)

> [文档地址](https://weidows.github.io/post/tools/SM-MS-downloader) | [备用文档地址](https://weidows.gitee.io/post/tools/SM-MS-downloader)

---

## [QQ-collections-collector](./implements/QQ-collections-collector.js)

- 适用于下载 QQ 收藏中的图片集.

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
