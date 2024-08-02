---
title: 关于反勒索的两三事
author: Raven95676
date: 2024-07-29
icon: fas fa-file
category:
  - 预先防毒
isOriginal: true
order: 5
---
首先需要明确，现在没有任何手段可以100%防御电脑端勒索病毒。手机只要不乱安装软件乱授权或者随便登别人的Apple ID都没有大问题。

下面是从几个方面来进行勒索病毒的防御。

## Windows Defender用户

使用Windows defender的用户可以打开wd的“防勒索保护”以获得更高的防勒索能力。方法请参照：[Win10怎么样使用Defender防止勒索病毒](https://jingyan.baidu.com/article/495ba841b715e538b20ede66.html)

## 安全辅助软件

> [!note]
> 使用的样本 SHA256为：7de7ce42cde20847749fa5bc4048cf5cacec8c2bf49169d7d262ea38630640ea

在原有杀毒软件的情况下，可以使用安全辅助软件对系统进行布防。关于安全辅助软件，请参阅[正确利用杀软辅助工具](https://raven95676.github.io/prevention/6_auxiliary_antivirus.html)。

### [360文档卫士](https://weishi.360.cn/wendangweishi.html)

> [!caution]
> 需要保证在勒索软件彻底清除完成的情况下才能进行还原，否则还原后的文件将继续被加密。

优点：在文档作出更改时自动备份文档，除非文档卫士本身遭到针对性攻击，不然备份文件基本上是安全的。

缺点：就像名字一样，默认情况下只保护100MB以下的文档（doc、docx、ppt、pptx、xls、xlsx、pdf），不保护图片、视频等，不保护txt。

![恢复页面](https://ooo.0x0.ooo/2024/08/02/OtMFVF.png)

在被加密后自行恢复即可

### [Kaspersky Anti-Ransomware Tool](https://www.kaspersky.com/anti-ransomware-tool)

> [!note]
> 本软件只能Block（封锁）病毒，需要手动将被封锁的病毒删除。

优点：ksn（卡巴斯基安全云）和卡巴主防的提炼，在不安装卡巴斯基的情况下提供较为全面的保护，具有回滚能力。

> [!caution]
> 缺点：回滚不是万能的。存在病毒造成了破坏但是杀毒软件没有识别到或者没有成功回滚的可能。
>
> 见到缺点能用这个提示框你应该明白这意味着什么（

![样本在断网的情况下被主防杀](https://ooo.0x0.ooo/2024/08/02/OtM1Qb.png)

![回滚了被加密的两个文件](https://ooo.0x0.ooo/2024/08/02/OtM73l.png)

附：**K**aspersky **A**nti-**R**ansomware **T**ool的使用指南

![全勾上然后一路Next](https://ooo.0x0.ooo/2024/08/02/OtMprC.png)

![关掉引导提示](https://ooo.0x0.ooo/2024/08/02/OtMmqN.png)

![点击注册](https://ooo.0x0.ooo/2024/08/02/OtMyVS.png)

![全填上](https://ooo.0x0.ooo/2024/08/02/OtMZbK.png)

![圈起来的是邮箱收到的要输入的激活码](https://ooo.0x0.ooo/2024/08/02/OtMvma.png)

![打开设置](https://ooo.0x0.ooo/2024/08/02/OtMeig.png)

![打开额外的防护](https://ooo.0x0.ooo/2024/08/02/OtMr4B.png)

![UnBlock是解除警报，Move to trust是移到信任](https://ooo.0x0.ooo/2024/08/02/OtMA2s.png)

## 备份

无论何时，保护数据安全备份都是第一王道。尤其是离机备份。。买一块移动硬盘，把重要文件拷贝到里面。需要修改的话就复制一份到主机改完了再覆盖到移动硬盘。

> [!caution]
> 移动硬盘若是固态硬盘则需要定期通电（不是用充电器通电，是连到电脑上通电）才能保证数据不会丢失。推荐购买机械硬盘以供长时间储存。（注意防震）

或者你可以选择将文件上传至公有云（注意隐私，以及公有云跑路问题）或者使用nas设备，在此不再赘述。
