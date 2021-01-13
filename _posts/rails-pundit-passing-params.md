---
title: 'Rails Pundit passing Params to policy class'
Excerpt: 'Rails pundit passing params to policy class'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2021-01-13T20:17:58.562Z'
author:
  name: Nikolay Ponomarev
  picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
category: 'rails'
slug: 'rails-pundit-passing-params-to-policy-class'
---

Passing params to gem Pundit is quite tricky. You need to create
separate instance for `params` to make `authorize` method work

Let's say you have a video hosting with secret videos which is
available for user by `token` in `query`

Like: `https://myvideos.example/video/1?token=G9SDFG5S`

To use pundit authorization feature you need to create:

- ./app/controllers/videos_controller.rb

Controller initializes `AccessTokenContext` instance and passes it to
`autorize`

```ruby
class VideosController < ApplicationController
  def show
    authorize access_token_context
  end

  private

  def access_token_context
    @access_token_context ||=
      AccessTokenContext.new(current_user, video, params[:token])
  end

  def video
    @video ||= Video.find(params[:id])
  end
end
```

- ./app/models/access_token_context.rb

Context handles authorization token logic. Can be much complex then in
my example

```ruby
class AccessTokenContext
  def initialize(current_user, video, token = '')
    @current_user = current_user
    @video = video
    @token = token
  end

  def valid_token?
    @valid_token ||= @token.present? && @video.access_token == @token
  end
end
```

- ./app/policies/access_token_context_policy.rb

Policy handles call from controller `show` action

```ruby
class AccessTokenContextPolicy < ApplicationPolicy
  def initialize(current_user, access_token_context)
    @current_user = current_user
    @access_token_context = access_token_context
  end

  def show?
    @access_token_context.valid_token?
  end
end
```

This approach based on OOP principles. And can be quite confusing from
at glance. I hope it helped you.

