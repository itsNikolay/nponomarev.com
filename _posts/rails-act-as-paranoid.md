---
title: 'NameError: undefined local variable or method `acts_as_paranoid' for #<Class'
excerpt: 'How to fix acts_as_paranoid gem in Rails Engine'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2021-12-26T20:17:58.562Z'
author:
  name: Nikolay Ponomarev
  picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
category: 'rails'
slug: 'rails-acts-as-paranoid-name-error'
---

To make `acts_as_paranoid` to work with **Rails Engine**.
You need to require the gem implicitly in your model class

```ruby
require 'acts_as_paranoid' # ✅ add this line to fix the exception

class Paranoid < ApplicationRecord
  acts_as_paranoid
end
```
