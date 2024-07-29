---
title: 通过良好的上网习惯防病毒
author: Raven95676
date: 2024-07-29
icon: file
category:
  - 预先防毒
isOriginal: true
order: 4
---
俗话说人不作死就不会死。保持良好的上网习惯才是防病毒的最佳实践。

## 安全的系统设置

1. [显示文件的扩展名](https://jingyan.baidu.com/article/9158e0004c6cbea2541228da.html)
2. 在开放远程连接的电脑上，使用16位大小写混合数字的强密码保护系统。
3. 避免使用路由器的DMZ（Demilitarized Zone）功能将计算机开放到公网，尤其是具有动态以及静态公网ip的用户。必须开放端口时，推荐进行端口映射。
4. 如果条件允许，保证系统更新。
5. 尽量避免连接公共WiFi,尤其是没有密码的那种。

## 注意权限的授予

### UAC（用户帐户控制）

> 用户帐户控制 (UAC) 是一项 Windows 安全功能，旨在保护操作系统免受未经授权的更改。 当对系统的更改需要管理员级权限时，UAC 会通知用户，从而让用户有机会批准或拒绝更改。 UAC 通过限制恶意代码拥有的以管理员权限执行的访问权限来提高 Windows 设备的安全性。 UAC 使用户能够就可能影响设备稳定性和安全性的操作做出明智的决策。
>
> [微软-用户帐户控制概述](https://learn.microsoft.com/zh-cn/windows/security/application-security/application-control/user-account-control/)

首先，你得认识UAC长什么样子：

![Windows 11](https://ooo.0x0.ooo/2024/07/28/ORlqea.jpg){width="50%"}

![Windows 7](https://ooo.0x0.ooo/2024/07/28/ORl5ES.png){width="50%"}

![Windows 10](https://ooo.0x0.ooo/2024/07/28/ORlBIN.jpg){width="50%"}

当你看见UAC的时候，代表着这个软件要管理员权限了，请确定你绝对信任软件提供者，否则不要确认。在管理员权限下恶意软件或者恶意命令完全可以直接接管整个系统。

如果需要减少UAC弹窗数量可以不开到第四档，但请确保UAC开到了第三档。开启的具体方法见[Win10系统UAC功能打开操作步骤](https://zhuanlan.zhihu.com/p/562207241)

### 避免使用Administrator账户

> [!tip]
> 桌面上的应用消失不代表应用没了。只有那些“仅为此账户”安装的软件（安装的时候会很明白的告诉你）会随着账户的切换而无法维持原样。

如果你的用户名是Administrator，那就是Administrator账户。这个账户权限很高，可以不用确认就干很多事情，不建议使用。

那么如果现在的账户就是Administrator怎么办？

首先请确定是否存在非Administrator的管理员权限账户。如果是，请跳过第3-4步

如果不是，则第3-4步至关重要

1. 右键开始菜单，选择“计算机管理”
2. 窗口左侧打开->本地用户和组->双击 “用户”
3. 在窗口右侧空白区域右键->新用户
4. 如图，然后点创建

![新用户创建页面](https://ooo.0x0.ooo/2024/07/28/ORlxUX.jpg)

> [!note]
> 本节接受了firedoge的指正

如果是家庭版Windows,可以选择利用key转版本再激活之后继续操作，也可以选择执行命令来创建用户。

若要通过执行命令来创建用户，请按如下步骤操作：

首先，按Windows键+X键（或右键“开始”），点击终端管理员或者PowerShell（管理员）(具体显示哪个都没关系)

![打开管理员权限终端](https://ooo.0x0.ooo/2024/07/28/ORlzyt.jpg)

之后依次执行下面三个命令（这三行命令的作用分别是：添加用户、设置新用户的用户组为管理员、禁用administrator）：

```shell
net user 用户名 密码(不设密码可以不填) /add
net localgroup administrators 用户名 /add
net user administrator /active:no
```

![命令执行效果](https://ooo.0x0.ooo/2024/07/28/ORliaj.jpg)

之后注销账户，或重启电脑，登录新的账户即可。

### 拒绝在管理员权限的终端执行不认识的命令

不要执行不明白、不认识的命令。尤其是这行命令包含了irm（下载脚本）、iex（执行脚本）的时候。恶意命令足以损坏系统。

比如，买了steam激活码/CDK/软件授权，商家要求下载软件/打开powershell执行命令——其实正版的激活码不需要这些额外操作，当你执行了命令之后，steam就有可能被盗号。

### IOS拒绝在设置登陆他人Apple ID

谨记不要在系统设置里登陆他人的Apple ID。如果你分不清什么叫做系统设置，请不要登陆他人的Apple ID。如果系统设置里登陆了他人的Apple ID，那么那个Apple ID的所有者可以远程锁定手机。被锁定后只能拿着购买证明去官方售后清除数据来解锁。如果在App Store内登陆他人的Apple ID出现“升级安全性”的提示，一定要点否。

### 安卓谨慎授权应用

安装了软件之后，不要给类似于“设备管理器”“无障碍功能”“adb”之类的权限。如果是自动点击类应用必须给“无障碍功能”这个权限请确定你绝对信任软件提供者。

若手机root了，请谨记不要授予你不是绝对信任的软件root权限。如果恶意软件拿到了这个权限，手机甚至会变砖。

### Linux谨慎使用sudo

如果不清楚脚本/命令的作用，请不要轻易使用sudo。sudo会授予脚本或命令root权限，这个权限极高，甚至可以删除整个系统以及所有文件。

## 拒绝使用第三方打包系统

Ghost系统（镜像文件是.gho）、打包好的纯净版、精简版系统（不限制后缀名，可以是gho，win或esd等）甚至包括电脑城做的系统都属于第三方打包系统。此类系统内部封装了什么东西全靠作者良心。建议认准官方镜像。

### 官方镜像下载途径

可以去[next itellyou(需要登陆)](https://next.itellyou.cn/)、[itellyou](https://msdn.itellyou.cn/)、[微软官网Windows10](https://www.microsoft.com/zh-cn/software-download/windows10)、[微软官网Windows11](https://www.microsoft.com/zh-cn/software-download/windows11)下载官方镜像

### 如果实在想用精简版系统，怎么办？

> [!tip]
> 一些软件写明了不能在LTSC版本运行

你可以选择微软官方的LTSC版本。该版本为官方制作，不会掺杂第三方插件。

但是如果不是不得已必须要用我并不建议使用精简版，因为精简掉组件之后多多少少会出现一些奇怪的玄学问题。

顺带一提，LTSC版本系统并非一无是处。它只有安全更新，无功能更新，所以说不用担心哪次更新之后多了新功能。

可以去[next itellyou(需要登陆)](https://next.itellyou.cn/)下载LTSC版本Windows

### 我的windows是盗版，会影响xxxx吗？

只要激活了就相当于正版。会影响软件使用（包括杀毒软件）的，是不安全的激活工具、“精简”“优化”系统、网上的ghost系统等。

## 谨慎安装应用

> [!note]
> 可信下载站部分接受了Firedoge的补充

安卓系统尽可能不要安装来源不明的apk，任何病毒都不可能在不安装的情况下运行。

Windows系统谨慎使用闭源（未开放源代码）的小工具（谁知道里面有什么呢.png）。并且前往官网或者可信的下载站（如[果核剥壳](https://www.ghxi.com/)、[423down](https://www.423down.com/)）下载正版或者盗版软件。

> [!caution]
> 非可信下载站会有“安全下载”、“快速下载”等下载链接，下载后的文件的文件名大多数是“xxxx\@xxxx\@xxxx.exe”，这类软件会捆绑安装很多流氓软件。
>
> 参见[流氓高速下载器死灰复燃](https://tieba.baidu.com/p/7838578114)。
>
> 实测广告拦截插件[uBlock Origin](https://ublockorigin.com/)可以拦截部分下载站的诱导链接。

### 如何辨识官网

如果使用百度搜索引擎，官网会有“官方”标识。广告会有“广告”标识。

![百度搜索引擎的结果](https://ooo.0x0.ooo/2024/07/29/ORlYtC.png)

[uBlock Origin、uBlock Origin Lite完全模式](https://ublockorigin.com/)、[Adguard](https://adguard.com/zh_cn/welcome.html)可过滤掉很多虚假广告。

![过滤后的结果](https://ooo.0x0.ooo/2024/07/29/ORlf2L.png)

### wallpaper engine 如何防“赛博花柳”

取消勾选应用程序、网页可以避免一切来自wallpaper engine的病毒入侵

![wallpaper engine设置](https://ooo.0x0.ooo/2024/07/29/ORluQp.jpg)

### 如果安卓手机被锁机了怎么办

> [!note]
> 本节内容接受了肥皂水泡方便面、shenapex的补充

现在安卓手机大多数没有root。所以说很多锁机病毒中了之后不太可能修改锁屏密码，而且有一个通杀的方式——进入安全模式。

**华为手机进入安全模式的方法：** 在开机过程中同时长按音量上键和电源键，直至出现HUAWEI标志后松开进入安全模式选择界面。按音量键选择安全模式，电源键确定。

**OPPO手机如何进入安全模式：** 手机或者平板开机/重启后在OPPO Logo加载过程中，长按“音量减”键进入安全模式。

**vivo手机如何进入安全模式：** 你在手机关机状态同时按住“电源键”和“音量加键”约5秒钟，即可进入FASTBOOT模式，这时按音量键+-来上下移动来选择“进入RECOVERY”，点击“进入安全模式”，再点击弹窗确认即可。

**realme手机如何进入安全模式（不一定准确）：** 没找到具体文字描述，根据文档反推进入安全模式的方法为启动时长按音量上键。可以音量上键和音量下键都试试

**(来自吧友：肥皂水泡方便面)原生安卓：** 长按电源键，然后长按菜单里的重启按钮，然后选择确定进入安全模式。

**(来自吧友：shenapex)小米手机如何进入安全模式：** 开机时长按音量上键进入recovery，按音量键选择安全模式，电源键确定。

## 相信你的杀毒软件

我先列举一些情境：

1. 用户看见了杀毒软件的报警，认为是误报就没有理会，点击允许运行——boom！
2. 病毒成功骗过了杀毒软件的扫描，双击后用户看见了杀毒软件的报警，认为是误报就没有理会，点击允许运行——boom！
3. 病毒成功骗过了杀毒软件的扫描和主动防御——boom！
4. 病毒作者“贴心”地提示软件可能被误报，要求用户先关闭杀毒软件，用户真的关了杀毒软件——boom！
5. 用户给了脚本管理员权限，Windows defender被操纵添加了排除项——boom！（单Windows defender限定）

可见，很多时候杀毒软件没有拦下病毒是因为用户选择了放行。既然把杀毒软件作为电脑系统的“保镖”请了进来，那就尽量相信杀毒软件的判断。

的确有的注册机因为其特征类似病毒所以说会被报毒。

但是很多病毒作者也浑水摸鱼，关了杀毒软件就好像大半夜敞开了自家大门口，把请来的保镖轰了出去——自然是极度不安全的。

顺带一提，其实现在很多盗版软件根本不用关掉杀毒软件再安装/使用。

> [!note]
> **个人情绪：在竞技游戏里面开外挂中毒了活该**

### 如何区分病毒与误报

如果软件的来源绝对可信，而且未经修改破解时，可当作误报处理。

如果修改/破解过，可以去病毒吧等论坛发帖询问这个软件是不是病毒。

当然，也可以丢多引擎查杀分析网站或者云沙箱里面看看结果，比如[微步在线云沙箱](https://s.threatbook.com/)、[Virus Total](https://www.virustotal.com/gui/home/upload)、[Any Run](https://app.any.run/)、[360沙箱云](https://ata.360.net/)。分析出来恶意行为或者大多数引擎都报毒那极大概率就是病毒了。

> [!tip]
> 不用担心云沙箱公司拿到病毒后转手拿去做生意，助长不良产业链。这么说吧，云沙箱公司要是靠卖一般用户遇到的n手样本挣钱迟早得饿死……

### 我需要用报毒的软件怎么办

> [!caution]
> 沙盒与虚拟机并不能保证绝对隔离病毒。虚拟机的安全性远高于沙盒。
>
> 个人评价安全性（可能不准确）：虚拟机≈Windows Sandbox>sandboxie

1. 使用sandboxie付费版的“安全隔离沙盒”运行程序。
2. 若为性能需求不大软件，可以使用系统自带的Windows Sandbox功能（本质上是虚拟机，需要手动开启，参见[win10沙盒怎么打开](https://www.ghxi.com/jc202309266.html)）
3. 若为性能需求不大的游戏，且该游戏没有反虚拟机检测，可以使用vmware安装虚拟机进行使用。
4. 若性能需求很大，或该游戏具有反虚拟机检测，那么可以考虑hyper-v+嵌套虚拟化+显卡直通，参见[显卡虚拟化实现在虚拟机内玩原神](https://blog.pinkd.moe/other/2023/04/17/play-genshin-in-virtual-machine)。

> [!tip]
> 请务必明白你所执行的命令的含义
>
> 下面是“显卡虚拟化实现在虚拟机内玩原神”中的命令解释
>
> Get-VMGpuPartitionAdapter
>
> 字面意思
>
> $vm = "VMName"
>
> $gpu_path = "\\?\PCI#VEN_XXX"
>
> 把虚拟机的名字、显卡设置成变量
>
> Add-VMGpuPartitionAdapter -VMName $vm -InstancePath $gpu_path
>
> 给虚拟机加一个显卡控制器，允许虚拟机访问物理显卡，并且指定物理GPU设备的实例路径
>
> Set-VMGpuPartitionAdapter ……
>
> 配置显卡控制器的各项参数
>
> Set-VM -GuestControlledCacheTypes $true -VMName $vm
>
> 在 CPU 上启用写入组合
>
> Set-VM -LowMemoryMappedIoSpace 1GB -VMName $vm
>
> 配置 32 位内存映射 I/O (MMIO) 空间为1GB
>
> Set-VM -HighMemoryMappedIoSpace 8GB -VMName $vm
>
> 配置 32 位以上 MMIO 空间为8GB
