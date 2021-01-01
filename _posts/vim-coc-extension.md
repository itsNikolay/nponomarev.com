---
title: 'Vim Creating Coc Extension'
excerpt: 'Vim Creating Coc Extension'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2021-01-02T20:17:58.562Z'
author:
  name: Nikolay Ponomarev
  picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
category: 'vim'
slug: 'vim-creating-coc-extension'
---

1. Let's create `coc-jls` extension

```sh
yarn create coc-extension coc-jls
cd coc-jls
yarn
```

2. Then add extension to runtime

```sh
:set runtimepath^=$YOUR_DIRECTORY/coc-jls
```

3. Make sure extension works

```sh
:CocList demo_list
```
