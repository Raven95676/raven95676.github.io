# 关于项目

> [!important]
> 所有由Raven95676创建的条目均为个人经验，会尽可能保证其准确性。

## 历程

这个项目起源于我在2024年4月4日22:20发布的第一个帖子。当时，我只是想分享一些关于计算机的知识，帮助广大吧友。随着我的持续更新以及吧友的提问和指正，截止至网站发布，该贴已有399条回复。途中还有意外上了贴吧热门的小插曲。

然而，随着帖子的更新，一些问题也逐渐显现出来：

- **不易检索：** 想查看某条问题只能翻全文。
- **不易补充：** 若需做出更改必须再开一楼或者楼中楼。
- **易被删除：** 虽然通过申诉找回了部分被贴吧系统抽掉的楼，但仍有部分楼未能恢复。

因此，我决定将原计划重构为新帖子的内容整合成一个网站。

首先，网站方便检索。不仅有完善的目录，还有搜索功能。

其次，网站方便修改。由于网站将托管于GitHub，无论是我自己修改还是他人指正内容或添加新条目，都可以通过提交PR（Pull Request）或者成为协作者来进行。

好处多多，所以本网站应运而生。

如果你对本网站内容进行了有价值的修改或新增了有价值的条目，你的名字将出现在贡献者名录中。

贴吧内的帖子将继续作为草稿及收集帖子更新。最新的整理版本请参见本网站。

2024年7月28日补充：腾讯文档版本我也会尽可能维护。

若你希望成为协作者，请私信申请，或发送申请至<Raven95676@proton.me>。请附上你的GitHub账户，我会向你发出邀请。

虽然主要内容集中在Windows相关，但也涉及其他平台。所以，大家可以找到其他平台的相关知识。若某天其他平台的条目多了，本网站可能会改名。

## 贡献须知

请确认项目在编辑后能够正常运行且显示正常。请善用以下命令：

```shell
pnpm docs:dev
```

如有不明白的操作，请参阅[主题官方教程](https://theme-hope.vuejs.press/zh/get-started/)。

为避免出现奇怪的问题以及满足SEO需求，请尽可能保证文件名为：序号_英文文件名。

每篇文档一般情况下的frontmatter如下：

```markdown
---
title: 中文标题
author: 作者名字
date: 撰写日期
icon: file
category:
  - 分类
isOriginal: 是否原创，是true，否false
order: 序号
---
```

本文档的主要文件储存在src目录下。新增文件无需编辑目录，目录会自动生成。

```shell
src
├── contributors.md（贡献者名录）
├── follow-up（后继措施板块）
│   ├── …….md
│   └── README.md（后继措施板块主页）
├── links.md（友情链接）
├── prevention（预先防毒板块）
│   ├── …….md
│   └── README.md（预先防毒板块主页）
├── README.md（网站主页）
└── useful_tips（实用技巧板块）
    ├── …….md
    └── README.md（实用技巧板块主页）
```

## 鸣谢

本网站的内容准确性及丰富度离不开广大吧友的指正与贡献。以下是在贴吧时期的贡献名录（排名不分先后）：

- G5125872
- 岩浆膏来啦
- shenapex
- Firedoge
- 雨·点
- dx/dy
- 幸运的红烧熊掌
- 肥皂水泡方便面
- YoF

若你不希望你的名字出现在这里，请私信本人或发邮件至<Raven95676@proton.me>向我反馈。

注：需要头像展示、简介的话可以联系本人。

欢迎并感谢广大吧友继续提供指正与贡献。