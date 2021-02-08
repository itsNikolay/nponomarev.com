---
title: 'Rails SimpleForm render custom hint'
excerpt: 'Rails SimpleForm render custom hint'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2021-02-02T20:17:58.562Z'
author:
  name: Nikolay Ponomarev
  picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
category: 'rails'
slug: 'rails-simpleform-render-custom-hint'
---

When you need to render custom html hint you can pass html template
to it

./app/views/users/_form.html.erb

```ruby
<%= simple_form_for @user do |f| %>
  <%= f.input :name, hint: render('user_hint', user: f.object) %>
<% end %>
```

./app/views/users/_user_hint.html.erb

```ruby
<% if user.verified? %>
  User verified
<% else %>
  User is not verified
<% end %>
```

Taken from [issues/965][1]

[1]: https://github.com/heartcombo/simple_form/issues/965
