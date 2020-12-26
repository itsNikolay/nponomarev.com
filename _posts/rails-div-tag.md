---
title: 'Rails Adding <div> Tag'
excerpt: 'How to add <div> tag in rails view'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2020-12-26T20:17:58.562Z'
author:
  name: Nikolay Ponomarev
  picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
category: 'rails'
slug: 'rails-div-tag'
---

As we used to have `input_tag`, `for_tag` and other `*_tag`s.
There could be a confusing thing when you start looking for `div_tag`.
You quickly realize there's no such

The problem is there can be too many tags in html that rails team
aren't able to add them all

Instead of `div_tag` there's universal `tag.div`
Simply to remember and use:

```ruby
<%= tag.div tag.p('Hello world!'), class: 'col-md-3' %>

# result:
<div class="col-md-3">
  Hello world
</div>
```

- [TagHelper Doc][1]

## tag with block

`tag` accepts block as well:

```ruby
<%= tag.p do %>
  Hello world
<% end %>

# result:
<div>
  Hello world
</div>
```

## <i\> tag for icons

Exactly the same way:

```ruby
<%= tag.i class: 'icon-cat' %>

# result:
<i class="icon-cat"></i>
```

[1]: http://api.rubyonrails.org/classes/ActionView/Helpers/TagHelper.html#method-i-tag
