---
title: 系统杀毒后异常的处理方式
author: Raven95676
date: 2024-07-29
icon: fas fa-file
category:
  - 后继措施
tag:
  - 处置措施
  - 应急恢复
isOriginal: true
order: 3
---
系统杀毒后出了些玄学小毛病，找不到原因，怎么办？

## 杀毒之后键盘鼠标无法使用

参见四海一叶秋：[卡巴斯基重启清除后鼠标键盘无法使用的2个解决方法](https://tieba.baidu.com/p/7828184528)

## 系统还能启动，但是有点玄学小毛病

> [!important]
> 系统必须是Windows7及以前的系统。若进入系统后无法进行下述操作，请尝试从pe中重置系统。
>
> 如不确定自己到底是哪个系统，请按win键+r键，在弹出的“运行”窗口中输入winver，然后回车即可查看当前Windows版本。（winver是用来查看Windows版本的工具，系统已内置）

### 重新安装该版本的Windows

本选项在理论上不丢程序、设置和文件。

> [!tip]
> 当前运行的操作系统必须是Windows 11。

![[109cf9fd89d86c0340e7710ee0f7f282_MD5.png]]

![[71bc0fbbb73210280a57f33513ed7d6f_MD5.jpg]]

### 重置此电脑

该方法一定会丢失程序和设置。

> [!caution]
> 如果已加密设备，则需要 BitLocker 密钥才能重置电脑。大多数笔记本电脑品牌都默认启用了BitLocker。

![[3f636a250ce45fcf22873a16ccc414db_MD5.jpg]]

![[578e76e6b080a14ef25a725c2cadb2d4_MD5.jpg]]

![[f8947131dc0459226262b97c377cd90a_MD5.jpg]]

若系统设置启动过于缓慢，可以尝试在终端运行：

```shell
systemreset -factoryreset
```

直接使用重置程序。

如果能使用云下载，请尽可能使用云下载。

![[a25cf2b3df983a90f3a81a5301d95f26_MD5.jpg]]

## 系统无法启动

可以用PE重置系统，方法参见[制作WindowsPE以备不时之需](https://raven95676.github.io/prevention/7_why_windows_pe.html)中有关于各个pe的介绍。

### 没有PE怎么办

1. ~~请移驾电脑店~~
2. 前往网吧开台机子制作PE并下载系统镜像。（嫌下载时间长可以且手机是安卓可以手机下载相关文件后就用电脑处理必须用电脑处理的部分）
3. 记得把需要下载的pe工具也放进去
4. pe可联网的，pe工具也直接在pe里面下载
