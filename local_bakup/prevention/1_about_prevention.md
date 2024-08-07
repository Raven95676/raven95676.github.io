---
title: 关于预先防毒不得不知的部分
author: Raven95676
date: 2024-07-29
icon: fas fa-file
category:
  - 预先防毒
tag:
  - 系统防护
  - 手机安全
isOriginal: true
order: 1
---
## 为什么预先防毒很重要

假设有一枚导弹即将击中一座城市，是提前拦截导弹更省事，还是在击中了城市之后再修复更省事？

虽然拦截导弹会费很多事情，甚至有可能做无用功拦截不了。但是导弹击中城市之后重建废墟中的城市显然更加费力，尤其是这座城市很大的时候。城市越大，导弹击中之后重建就越费力。

计算机预先防毒就是拦截导弹。当病毒成功入侵电脑的时候，该丢的数据已经丢了，该丢的账户密码也都丢了，病毒一通破坏造成的系统异常也发生了。除非这台电脑安装的软件极少，还原起来容易，而且没有登陆过任何账户，否则还原乃至重置被破坏的系统到可工作状态将消耗极大的精力。

## 我为什么需要杀毒软件

> [!note]
> 本节场景模拟使用样本SHA-256：466edd12b44d227bc7e2bd82d17ce3c7b60b3d486d7f2bf70c0fb79846139e2d
>
> 本节内容**不是**卡巴斯基软件宣传。

先来看一个情景（没有歧视游戏玩家的意思）

某天，某人收到了一封主题为“Re：待处理发票”的邮件。ta没有安装任何杀毒软件，为了清净甚至利用工具删除了Windows Defender。出于好奇心，ta下载并打开了附件中的“PDF”

![[bf7a72c4b2563381504613a4dd7073f4_MD5.png]]

没有反应。某人顿时对这个“PDF”失去了兴趣。电脑中的一切都是那么的风平浪静，这个人认为ta的电脑没有任何问题。

某天在开机后某人立刻打开了任务管理器，虽然占用不大，但是一个没有名字的进程吸引了ta的注意力。

![[7290267fe65096130a9ffeb12f165511_MD5.png]]

这个进程不一会就消失了，电脑也没有什么别的问题。“不影响我打游戏”，ta想。

——直到有一天ta账号被盗了

ta下载了卡巴斯基免费版。甚至还没开始全盘扫描，卡巴斯基免费版就开始报毒了。

![[e41bd96cc32355a05c5fbac767d20465_MD5.png]]

ta发现ta的电脑里面居然有这么多病毒。

![[0996210a408a7f70a5ef82c90a0172a5_MD5.png]]

原来当时的“PDF”不是PDF,而是一条指令，用于执行远程命令。

![[3f04daa8ab5a268683b4a0e56623e5bd_MD5.png]]

卡巴斯基免费版可以直接防御。

![[ee3ce6ae3bfafc4260d3e99a7cc205cc_MD5.png]]

> **Trojan/MSIL.DCRat**
>
> Trojan/MSIL.DCRat可以通过钓鱼邮件、恶意链接、网络下载等途径传播，常常利用社交工程手段欺骗用户点击恶意链接或下载恶意附件。
>
> 一旦潜入系统，Trojan/MSIL.DCRat会尝试隐藏自己的文件、进程和注册表项，以避免被发现和清除。
>
> 该病毒具有远程控制的功能，攻击者可通过远程命令和控制面板操控被感染的计算机，进行各种恶意活动。
>
> Trojan/MSIL.DCRat可以窃取用户的敏感信息，如账号密码、银行卡信息等，并将这些信息发送给攻击者。
>
> 该病毒可能通过下载和安装其他恶意软件，进一步危害受感染系统的安全和稳定性。
>
> Trojan/MSIL.DCRat会修改系统设置和权限，以维持其存在，并阻止杀软和安全工具的正常运行。
>
> From [计算机病毒百科](https://www.virusview.net/malware/Trojan/MSIL/DCRat)

没有杀毒软件保护电脑，等到黑客利用各位的电脑攻击别的服务器/黑客盗取了各位的账户，出现了后果就晚了。

## 为什么杀毒软件不能100%拦截所有的病毒

任何程序都有疏漏，杀毒软件也不例外。如果一个技术高超的病毒作者下定决心要突破这些杀毒软件的防御，那么杀毒软件的防护就像纸一样薄。

不过一般来说就算能把杀毒软件的扫描和主防绕过去也会很快被云安全响应捕获，导致病毒被云查杀。但是云安全响应是需要捕获——>分析——>下发的时间的，而且捕获速度还取决于官方的处理速度以及杀毒软件的用户基数。重重影响之下，杀毒软件的云安全响应只能做到保护大多数人——而各位有可能就是那少部分人。

而且，杀毒软件需要在系统资源和性能之间取得平衡。过于严苛的检测可能导致系统性能下降，因此杀毒软件必须在检测精度和系统性能之间进行权衡。假设存在一个能拦截所有病毒的杀毒软件，但安装这个杀毒软件的代价是各位上万的电脑卡成狗——我相信各位不会安装的。

综上，杀毒软件不存在100%拦截所有的病毒的可能。

## 为什么不能同时安装多个完整的杀毒软件

因为杀毒软件之间除非经过特殊设计，官网以极为显眼的标语写明兼容大多数杀毒软件，否则默认互不兼容。

多个杀毒软件同时安装就好像各位在一个屋子里面雇了很多互不认识的保镖（多个杀毒软件之间不兼容），哪个保镖都带着武器（杀毒功能）谁看谁都可疑，在杀病毒之前会打内战互相拖累。

即使是写明了兼容，也有可能做不到绝对兼容，需要用户进行配置以防止互相拖累打内战。更何况每个人的电脑里面安装的软件乃至电脑的硬件各不相同，系统环境错综复杂，即便是擅长配置杀毒软件的人也有可能阴沟里翻船。所以说就不要安装多个杀毒软件了，即便网上有人说xxx可以和xxx一起安装。

## 为什么电脑病毒不会传播给手机（反之亦然）

我们先来讲个笑话。实际上，各位的手机和电脑很可能已经被大量的Chromium浏览器占领了——因为原生软件跨平台成本太高了。想要跨平台要么针对每个平台单独开发，要么使用跨平台框架或技术。

而病毒由于需要挖掘系统漏洞、绕过防病毒软件，用统一的“转译器”的方式只能提供有限的跨平台能力——但这不可能是手机跨越到电脑，也不是电脑跨越到手机。没有“转译器”，病毒就得自适应各个平台内核不同、硬件架构不同、系统权限管理机制不同，甚至利用漏洞的方式都不同，想传播过去还得给分析情况伺机而动——而这是不可能的。

至于高级持续性威胁（APT）等复杂攻击可能具备针对多个平台的能力，但是 ==**我只能说，只要各位不是在涉密单位工作的人，就没人乐意这么攻击各位。毕竟攻击的成本过高，入不敷出。**==

退一万步讲，病毒作者与其花大把的精力用在病毒怎么跨平台上，不如专心制造一个平台的病毒，多感染几台同平台设备。跨平台软件本身就很难，跨平台病毒更是难上加难。

## 为什么手机轻易不会感染病毒

参见[为某些宣传后遗症的患者手机病毒木马提供一下参考](https://tieba.baidu.com/p/8874309973)

## 为什么手机不需要安装第三方杀毒软件？

先不提手机轻易不会感染病毒。由于现在手机大多数没有root（即获取最高权限），第三方杀毒软件也不可能像在电脑上那样获得极高的权限。没有权限又谈何拦截？一般来说，手机厂商自带的杀毒软件（手机管家）都被授予了最高权限，系统漏洞手机厂家也会提供修复，只用手机自带的杀毒软件并注意授权就已经可以了。
