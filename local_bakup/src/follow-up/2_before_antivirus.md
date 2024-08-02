---
title: 杀毒软件无法启动怎么办
author: Raven95676
date: 2024-07-29
icon: fas fa-file
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

### 我没准备怎么办/没有PE怎么办

1. ~~请移驾电脑店~~
2. 去网吧开台机子做pe下系统镜像（嫌下载时间长可以且手机是安卓可以手机下载相关文件后就用电脑处理必须用电脑处理的部分）
3. 把需要下载的pe工具也放进去
4. pe可联网的，pe工具也直接在pe里面下载

## 在系统内使用

直接用即可

## 在Windows PE中使用

### 方法A <Badge text="推荐" type="tip" />

> [!note]
> 该方法来自“四海一叶秋”

安装FirPE到本地硬盘，然后重启选择进入PE，由于PE能联网，就打开浏览器下载安装360杀毒（“岩浆膏来啦”在这里是改成用360系统急救箱PE版）或火绒，然后全盘查杀。

### 方法B

可以将360系统急救箱PE版放到Windows PE中使用。

以EasyU<Badge text="具有流氓行为，不推荐使用" type="danger" />为例。其他PE同理（[自定义壁纸](https://www.pixiv.net/artworks/112139971)请忽略）

![[851e38be5142a0af69c2c6e30233d0c0_MD5.gif]]

### 方法C

> [!important]
> 从求助者的实际使用情况来看，不能正常启动的情况太多了。
>
> 情报来自“岩浆膏来啦”

使用[Kaspersky Rescue Disk](https://www.kaspersky.com.cn/downloads/thank-you/free-rescue-disk)

## 一切手段全部失效时

可以用PE重置系统，方法参见[制作WindowsPE以备不时之需](https://raven95676.github.io/prevention/7_why_windows_pe.html)中有关于各个pe的介绍。

### 没有PE怎么办

1. ~~请移驾电脑店~~
2. 去网吧开台机子做pe下系统镜像（嫌下载时间长可以且手机是安卓可以手机下载相关文件后就用电脑处理必须用电脑处理的部分）
3. 把需要下载的pe工具也放进去
4. pe可联网的，pe工具也直接在pe里面下载
