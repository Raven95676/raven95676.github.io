---
title: 正确利用杀软辅助工具
author: Raven95676
date: 2024-07-29
icon: fas fa-file
category:
  - 预先防毒
isOriginal: true
order: 6
---
> [!caution]
> 首先，如果你不太理解我在这里说的事情，那么你只能安装一个第三方杀毒软件（即非Windows Defender的杀毒软件），避免因杀毒软件内战，造成的杀毒效率下降甚至电脑系统无法启动。
>
> 如因胡乱操作导致电脑出现任何问题，本人概不负责，后果请自负。

## 详细说明

首先，你可以在安装了一个完整的杀毒软件之后能安装只有"不完整"的杀毒软件。而不完整分为三种情况

1. 该杀毒软件没有主防（绝对可以同时装）
2. 该杀毒软件明确写明兼容（大概率能够同时装）
3. 你手动强行兼容两款杀毒软件

对于情况一，满足的有各个厂家推出的扫描器（比如eset online scanner）、安装了第三方杀毒软件时的Windows Defender（自己禁用了自己的主防）以及被动模式的avast（用户手动禁用主防）。没有主防的意思就是这个杀毒软件如果你不叫他扫描/设置定时扫描他就没动静，不会拦截也不会干任何事情（简单定义）。

对于情况二，据我所知满足的有[冰盾idefender](https://trustsing.com/idefender/)、[Kaspersky® Anti-Ransomware Tool](https://www.kaspersky.com/anti-ransomware-tool)。

其官网写明了兼容。不过由于杀毒软件的特殊性，只能说是大概率兼容。而且情况二需要进行添加排除项的操作，如果不理解这个操作，请不要安装第二个杀毒软件。

其中冰盾是创信长荣出品的，是一款单纯的hips软件，对于一些主防不完善/主防策略不激进的杀毒软件就可以兼容。我并不建议小白使用，因为其需要对电脑系统充分的理解才能用于防病毒，否则最多就是一个防流氓软件的东西（但是电脑水平实在不行的话就只能当摆设了）。其威力以及兼容性取决于用户电脑水平，请自行评估自己能不能玩转。

Kaspersky® Anti-Ransomware Tool是由卡巴斯基实验室出品的，是ksn和卡巴主防的提炼。可以兼容几乎所有杀软（注意只是几乎），对于一些主防不完善/主防策略不激进的杀毒软件就可以兼容。具有回滚功能。只有英文版，但不影响使用。

主防的完善程度以及策略的激进程度需要自行判断。

如果你不能明确主防的完善程度与策略，请不要在情况二下安装第二个杀毒软件。

对于情况三，我不作介绍，因为我不推荐这么干——这么干是执意跟自己的电脑和脑子过不去。

## idefender官网说明

> 经常有人问，冰盾跟其他的HIPS软件有什么差异，为什么选择冰盾，而不是其他安全软件。
>
> 冰盾打破传统基于对象操作的防护模型（比如文件的增、删、改、读等操作防御），采用基于场景模式的创新规则模型（比如禁止进程启动、文档保护、隐私保护），同时设计了基于模板+参数的规则引擎，大大降低了防御规则的编辑难度，同时还提供规则市场，让规则的分享和获取变得触手可及。
>
> 在性能上，冰盾规则引擎采用双缓存模式，匹配的效率提升到了极致，在不错误设置规则的情况，对系统几乎没有任何性能消耗。长期运行也不会有任何内存增长或者性能累计消耗，不仅适应于个人电脑，同时也适用于云服务器。
>
> 冰盾完全采用微软推荐的标准内核API实现功能，兼容性好，可以跟其他的安全软件很好并存。

## Kaspersky® Anti-Ransomware Tool官网说明

> Kaspersky Anti-Ransomware Tool is compatible with all security software
>
> Kaspersky Anti-Ransomware Tool functionality is included in all Kaspersky paid endpoint solutions so it is not required to install it alongside (such installation will be prevented to avoid application overhead)
