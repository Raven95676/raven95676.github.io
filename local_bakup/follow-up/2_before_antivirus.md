---
title: 杀毒软件无法启动怎么办
author: Raven95676
date: 2024-07-29
icon: file
category:
  - 后继措施
isOriginal: true
order: 2
---
如果系统感染了恶性病毒，杀毒软件无法启动，可以使用下面的手段恢复。

## 需要提前准备的部分

为了防止电脑系统被病毒搞坏了之后束手无策，可以提前准备应急杀毒工具与Windows pe

关于Windows pe，在第七篇文章有详细介绍。

应急杀毒工具我推荐的有：

- [360系统急救箱](https://weishi.360.cn/jijiuxiang/)
- [Kaspersky Virus Removal Tool](https://www.kaspersky.com/downloads/free-virus-removal-tool)

> [!important]
> Kaspersky Virus Removal Tool会自带一个日期的病毒库与查毒引擎，请定期下载最新版的Kaspersky Virus Removal Tool以供备用。
>
> Kaspersky Virus Removal Tool似乎无法在PE内运行（有待验证）
>
> 360系统急救箱使用时 ==**必须联网**== ，少了联网病毒库的急救箱就好像一个人失去了左膀右臂。（岩浆膏来啦的补充）

我不推荐的有：

- ESET Online Scanner：遇到厉害点的病毒就完蛋
- Norton Power Eraser：新时代Hash校验器，并且无法应付特别厉害的病毒

关于360系统急救箱，还可以提前下载[Windows PE版本](https://weishi.360.cn/jijiuxiang/guide.html)以供使用。

如果你的pe是32位，就下载32位，如果你的pe是64位，就下载64位

存到PE盘任意一个地方，启动PE后解压即可

由于360官网的急救盘已经查无此页，故不推荐

> [!important]
> 实机运行krd发现其对于现代无线网卡的支持度不高。本人主机内置的Intel ax211实测无法识别。如需联网最稳妥的办法还是有线连接。

不过卡巴斯基有一个叫做[Kaspersky Rescue Disk](https://www.kaspersky.com.cn/downloads/thank-you/free-rescue-disk)的急救盘，详细体验请前往[反向种草！卡巴斯基急救盘（KRD）试用体验报告！](https://post.smzdm.com/p/a5dxn0g8/)查看

### 我没提前准备好怎么办

1. ~~请移驾电脑店~~
2. 去网吧开台机子整
3. 有可联网pe的，直接在pe里面下载

## 在系统内使用

直接用即可

## 在Windows PE中使用

以EasyU为例。微PE工具箱同理（[自定义壁纸](https://www.pixiv.net/artworks/112139971)请忽略）

![360_jijiuxiang_pe_easyu.gif](2_before_antivirus.assets/7D7dadEE0duK1IcRZkzr5FexA.gif)

## 一切手段全部失效时

这种情况可以通过pe重置系统。首先，你需要把系统镜像下载下来，放到u盘里面

### EasyU

![system_reset_easyu.gif](2_before_antivirus.assets/Dcf92CBC77NY2bl4FwIDRVHEs.gif)

你的镜像将在左侧“恢复镜像”栏显示

### 微PE工具箱

请参照：[安装器方法安装原版Windows](https://www.wepe.com.cn/ubook/installtool.html)
