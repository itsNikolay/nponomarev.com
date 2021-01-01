---
title: 'Rails Adding Filter Records Form'
Excerpt: 'Rails Filter Records Form'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2020-12-22T20:17:58.562Z'
author:
  name: Nikolay Ponomarev
  picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
category: 'rails'
slug: 'rails-filter-form'
---

As project start growing, amount of records grow all together.
So to find needed record is becoming quite hard.
And here comes search form to help us.

The idea of search form is pretty simple: to provide an user fields to
type data and then filter records with SQL.

Lets say we have a blog with posts. And we need to find all posts for
the last month:

1. ./app/views/users/index.html.erb

```erb
<%= form_for '', method: :get do %>
  <%= label_tag 'name', 'First Name' %>
  <%= input_tag 'name', params[:name], id: 'name' %>

  <%= submit_tag "Filter", class: 'btn btn-primary' %>
<% end %>
```

2. ./app/controllers/users_controller.rb

```ruby
class UsersController < ApplicationController
  def index
    @users = User.all
    @users = User.where(name: params[:name]) if params[:name].present?
    @users
  end
end
```

Submit click will send data to `users#index` endpoint which will
render selected records matched that `params[:name]` value
