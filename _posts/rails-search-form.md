---
title: 'Rails Search Form'
excerpt: 'Rails Search Form'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2020-12-22T20:17:58.562Z'
author:
  name: Nikolay Ponomarev
  picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
category: 'rails'
slug: 'rails-search-form'
---

1. ./app/views/posts/index.html.erb

```erb
<%= form_for '', method: :get do %>
  <p>
    <%= label_tag 'dateFrom', 'From' %>
    <%= date_field_tag 'from', params[:from], id: 'dateFrom' %>
  </p>

  <p>
    <%= label_tag 'dateTo', 'To' %>
    <%= date_field_tag 'to', params[:to], id: 'dateTo' %>
  </p>

  <%= submit_tag "Filter", class: 'btn btn-primary' %>
<% end %>

<table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Created At</th>
    </tr>
  </thead>
  <tbody>
    <% @posts.each do |posts| %>
      <tr>
        <td><%= posts.id %></td>
        <td><%= posts.name %></td>
        <td><%= posts.created_at %></td>
      </tr>
    <% end %>
  </tbody>
</table>
```

1. ./app/controllers/posts_controller.rb

```ruby
class PostsController < ApplicationController
  def index
    @post = Posts::Filter.new(params).call
  end
end
```

1. ./app/services/posts/filter.rb

```ruby
module Posts
  class Filter
    attr_reader :params, :scope

    def initialize(params)
      @params = params
    end

    def call
      @scope = FormApplication.all.includes(:company)

      filter_by_from
      filter_by_to

      scope
    end

    private

    def filter_by_from
      return if params[:from].blank?

      @scope = scope.where(Post.arel_table[:created_at].gt(params[:from]))
    end

    def filter_by_to
      return if params[:to].blank?

      @scope = scope.where(Post.arel_table[:created_at].lteq(params[:from]))
    end
  end
end
```
