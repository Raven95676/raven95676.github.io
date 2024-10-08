---
title: 关于反勒索病毒的两三事
author: Raven95676
date: 2024-07-29
icon: fas fa-file
category:
  - 预先防毒
tag:
  - 系统防护
  - 反勒索
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

在原有杀毒软件的情况下，可以使用安全辅助软件对系统进行布防。关于安全辅助软件，请参阅[正确利用杀毒软件辅助工具](https://raven95676.github.io/prevention/6_auxiliary_antivirus.html)。

### [360文档卫士](https://weishi.360.cn/wendangweishi.html)

> [!caution]
> 需要保证在勒索软件彻底清除完成的情况下才能进行还原，否则还原后的文件将继续被加密。
>
> 360文档卫士只防加密文件类勒索。

优点：在文档作出更改时自动备份文档，除非文档卫士本身遭到针对性攻击，不然备份文件基本上是安全的。

缺点：就像名字一样，默认情况下只保护100MB以下的文档（doc、docx、ppt、pptx、xls、xlsx、pdf），不保护图片、视频等，不保护txt。但是可以通过设置让其支持某个后缀名的文件。 

![恢复页面](https://pic.imgdb.cn/item/66b70b67d9c307b7e98ba6c6.png)

在被加密后自行恢复即可

### [Kaspersky Anti-Ransomware Tool](https://www.kaspersky.com/anti-ransomware-tool)（KART）

> [!note]
> 本软件只能Block（封锁）病毒，需要手动将被封锁的病毒删除。
>
> Windows LTSC版本、企业版请安装FOR BUSINESS。家庭版、专业版请安装FOR HOME.

优点：ksn（卡巴斯基安全云）和卡巴主防的提炼，在不安装卡巴斯基的情况下提供较为全面的保护，具有回滚能力。

缺点：回滚不是万能的。存在病毒造成了破坏但是杀毒软件没有识别到或者没有成功回滚的可能。

![样本在断网的情况下被主防杀](https://pic.imgdb.cn/item/66b70bc3d9c307b7e98c0866.png)

![回滚了被加密的两个文件](https://pic.imgdb.cn/item/66b70bfdd9c307b7e98c50bb.png)

附：**K**aspersky **A**nti-**R**ansomware **T**ool（KART）的使用指南

![全勾上然后一路Next](https://pic.imgdb.cn/item/66b70c18d9c307b7e98c6799.png)

![关掉引导提示](https://pic.imgdb.cn/item/66b70c26d9c307b7e98c7362.png)

![点击注册](https://pic.imgdb.cn/item/66b70c31d9c307b7e98c7d7a.png)

![全填上](https://pic.imgdb.cn/item/66b70c3ed9c307b7e98c89a7.png)

![圈起来的是邮箱收到的要输入的激活码](https://pic.imgdb.cn/item/66b70c46d9c307b7e98c9212.png)

![打开设置](https://pic.imgdb.cn/item/66b70c5bd9c307b7e98ca6a7.png)

![打开额外的防护](https://pic.imgdb.cn/item/66b70c63d9c307b7e98cad53.png)

![UnBlock是解除警报，Move to trust是移到信任](https://pic.imgdb.cn/item/66b70c6bd9c307b7e98cb40e.png)

### [瑞星之剑](https://www.rising.com.cn/j/)

> [!note]
> 本推荐条目来自于“岩浆膏来啦”
>
> 本软件只能禁止病毒运行，并改病毒后缀，需要手动将病毒删除。
>
> 瑞星之剑现在还在维护。

优点：通过诱饵文件以及行为分析等技术，可有效防御未知与已知勒索病毒的攻击，阻止用户正常文件被勒索病毒破坏。

缺点：没有回滚功能，存在文档被加密无法恢复的可能。

### 已知问题

Kaspersky® Anti-Ransomware Tool尤其是在打开额外的防护的情况下会导致sandboxie部分功能无法正常使用。

## 为什么要备份

> [!important]
> 对于公司电子账本等涉及公司管理条例的文件，请谨慎考虑备份行为是否违反公司规定，以避免数据泄露和法律风险。
>
> 在执行数据恢复前，务必确保勒索病毒本体已被彻底清除。

无论何时，保护数据安全的首要措施就是备份。勒索病毒的威胁越来越严重，其中一些加密的文件无法通过暴力破解，只能等待解密工具的出现。然而，对于那些不流行的勒索病毒，开发解密工具的可能性极低。更糟糕的是，有些勒索病毒使用完全随机的加密密钥，即使支付赎金也无法解密。

在这种情况下，最坏的结果是，文件可能永远无法恢复。因此，备份是防止数据丢失的最可靠手段。

爷爷/奶奶，你当年被加密的文件的解密工具出现啦（bushi

## 正确备份很重要

跳转链接：[正确备份很重要](https://raven95676.github.io/prevention/8_correct_backup_method.html)

制作 By shenapex

## 利用离机备份保护重要文件 <Badge text="推荐" type="tip" />

> [!caution]
> 如果使用固态硬盘作为移动硬盘，请定期通电（连接电脑），以确保数据不会丢失。对于长时间存储，推荐使用机械硬盘，并注意防震。

1. 购买一块移动硬盘，将重要文件拷贝进去。
2. 需要修改时，复制到主机修改完再覆盖回移动硬盘。

## 利用公有云保护重要文件

### OneDrive

~~360文档卫士Plus~~

从原理上说，这个比360文档卫士安全。

> [!warning]
> 在购买OneDrive前，请先测试本地的文件上传下载速度是否满意，并确保能够访问[OneDrive网页版](https://onedrive.live.com/)，因为数据恢复可能需要通过网页版操作。
>
> 暂未发现隐私泄露风险，尤其是其个人保管库功能。

OneDrive免费提供5G存储空间，免费5G，购买Microsoft 365之后会升级为1T（[数码荔枝](https://lizhi.shop/site/products/id/65)售价￥259/年，为了数据安全请勿购买拼车版）。

直接集成在Windows文件管理器中，可与Windows无缝衔接。

![OneDrive设置流程](https://pic.imgdb.cn/item/66b70c80d9c307b7e98cc9e6.png)

**个人保管库**：个人保管库（锁定状态下）中的文件不会受到勒索病毒的侵扰——可惜免费版只能往里放3个文件。

**数据恢复方法**：

（前提：onedrive还能运行。不能运行的话需要将系统恢复到能运行onedrive的状态）

![OneDrive恢复流程](https://pic.imgdb.cn/item/66b70c89d9c307b7e98cdd18.png)

1. 如果源文件被删除，可以通过网页版的“回收站”恢复。
2. 如果文件被覆盖，可以在文件历史版本中进行恢复。

### 百度网盘

> [!caution]
> 由于百度网盘存在文件和谐和隐私泄露的风险，请务必在上传前将文件压缩、加密，或者使用[VeraCrypt](https://www.veracrypt.fr/code/VeraCrypt/)进行保护。

百度网盘提供200G免费存储免费200G，购买售价263/年（连续包年）的网盘会员后可升级为5T。

**数据恢复方法：**

从网盘下载备份的文件。

### 阿里云OSS

> [!warning]
> 阿里云OSS中的文件会被审核，因此请务必将文件压缩、加密后上传，或使用VeraCrypt进行保护。
>
> 暂未发现隐私泄露风险。

阿里云OSS的存储成本为0.12元/GB/月，可以购买9元/年的40G储存包来节省开支。上传下载需要支付流量费用。由于配置相对于上面两个较为复杂且个人感觉没人用这个，暂不展开讲解。如有人需详细讲解可联系本人<Raven95676@proton.me>。有人需要的话本人就展开讲讲这个。

胜在存得少就便宜。并且还有ossbrowser这种图形化管理软件。

**数据恢复方法**：

通过ossbrowser下载备份的文件。

## 利用NAS设备保护重要文件

虽然本人目前正在使用该方案对电脑进行备份，但这个方法存在一些问题：

1. 使用NAS进行备份需要一定的硬件投入，包括NAS设备和硬盘的购买。

2. 对于安全意识较低的小白用户，可能会因配置不当而让NAS受到勒索病毒的威胁。这些病毒专门针对NAS设备，如果配置不当，可能导致数据丢失或被加密。

尽管NAS备份方案有效，但并不适合所有用户，所以这里不作详细展开。

## 歪·门·邪·道

~~需要保护的文件直接存手机里~~

~~但手机丢了就完蛋了~~
