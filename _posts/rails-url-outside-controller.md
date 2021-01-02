---
title: 'Rails Using Urls Outside of Controllers and Views'
Excerpt: 'Rails Using Url Outside of Controllers and Views'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2021-01-03T20:17:58.562Z'
author:
  name: Nikolay Ponomarev
  picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
category: 'rails'
slug: 'rails-using-urls-outside-controllers-and-views'
---

Sometimes you want to access routes outside controllers or views.
For example in services:

```ruby
module UserService
  def text
    "Users are there: #{users_url}" # raises error
  end
end
```

Urls can be accessed through `url_helpers` object

```ruby
Rails.application.routes.url_helpers.users_url
```

## Use Routes in Class

Just `include` url_helpers

```ruby
class UserService
  include Rails.application.routes.url_helpers

  def text
    "Users are there: #{users_url}"
  end
end

UserService.new.text #=> "Users are there: http://example.com/users"
```

## ArgumentError Missing host exception

Sometimes it raises missing `:host` error

> ArgumentError (Missing host to link to! Please provide the :host
> parameter, set default_url_options[:host], or set :only_path to
> true)

Just add `:host` manually

```ruby
# it can be moved to ./config/development.rb file
Rails.application.routes.default_url_options = { host: 'example.com' }

Rails.application.routes.url_helpers.users_url
#=> 'http://example.com/users'
```

Or pass `:host` as argument directly

```ruby
Rails.application.routes.url_helpers.users_url(host: 'example.com')
```

## Use Routes in Module

Just `extend` module with url_helpers

```ruby
module UserService
  extend Rails.application.routes.url_helpers

  def text
    "Users are there: #{users_url}"
  end
end

UserService.text #=> "Users are there: http://example.com/users"
```

I hope it helped you to have deal with routes
