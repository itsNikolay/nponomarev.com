---
title: 'Rails when need to create New Controller'
excerpt: 'Rails when need to create New Controller'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2021-01-25T20:17:58.562Z'
author:
  name: Nikolay Ponomarev
  picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
category: 'rails'
slug: 'rails-when-need-to-create-new-controller'
---

## When new active_record model added and we need to interact with it

Example: when `app/models/order.rb` model added then need to add
`app/contorllers/order_controller.rb`

It's classic one

## When different kind of user will interact with that model

Example: Any kind of admin controller `app/controllers/admin/orders_controller.rb`

## When needed different permissions to interact with action

Example: `/companies/search` (`CompaniesController#search`) is public
endpoint, but `/companies` (`CompaniesController#index`) is available
only for authenticated users

Then it would be better to extract `CompaniesController#search` to
`CompaniesSearchController#index` and make route to it `get
'/companies/search', to: 'companies_search_controller#index'`

## When needed different format of responses (API endpoints)

Example: HTML pages can be hosted on `/orders` page, but its data can
be fetched from `/api/orders.json`

Then you just need to add `Api::OrdersController#index` controller
