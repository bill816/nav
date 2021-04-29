import { IConfig } from './src/types'

const c: IConfig = {
  // [必填], 请填写您的仓库地址
  gitRepoUrl: 'https://github.com/bill816/nav',

  // 部署分支
  branch: 'main',

  // 路由是否Hash模式, 如果是部署在github pages 务必设为 true
  hashMode: true,

  // 是否显示右上角的 Github 图标
  showGithub: false,

  // 您的网站地址，有利于SEO
  homeUrl: 'https://nav.androidlsj.top',

  // 网站标题
  title: '老司机导航 - 网站导航',

  // 网站描述
  description: '老司机导航 - 网站导航',

  // 网站关键字
  keywords: '导航,ANDROID,安卓,工具,学习资源,安全,PYTHON',

  // 默认主题: Light | Sim | Side | App | Shortcut
  theme: 'Side',

  // 网站底部内容, 版权信息、备案号, 可以是 HTML
  footerContent: `
    <div style="font-weight: bold;">共收录\${total}个网站</div>
    <div>Copyright © 2021 androidlsj.top, All Rights Reserved</div>
  `,

  // 百度统计地址
  // https://tongji.baidu.com/web/welcome/login
  baiduStatisticsUrl: "https://hm.baidu.com/hm.js?96c3ad26367e6e6ce72e90998c34f257",

  // CNZZ 统计地址
  // https://www.cnzz.com/o_index.php
  cnzzStatisticsUrl: '',

  // Sim 主题配置
  simThemeConfig: {
    // 海报图
    posterImageUrls: [
      'https://raw.sevencdn.com/xjh22222228/nav/image/sim-wallpaper.jpg'
    ],
    description: '这里收录多达 <b>${total}</b> 个优质网站， 助您工作、学习和生活'
  }
}

export default c
