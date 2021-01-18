---
title: 'Rails How to Group records by Fields'
excerpt: 'Rails How to Group records by Fields'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2021-01-18T20:17:58.562Z'
author:
  name: Nikolay Ponomarev
  picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
category: 'rails'
slug: 'rails-how-to-group-records-by-fields'
---

For the statistic purposes
[.group](https://api.rubyonrails.org/classes/ActiveRecord/QueryMethods.html#method-i-group)
method can be extrily useful.
It groups records by specified field or functions and can apply
following aggregate functions:

- [count](https://api.rubyonrails.org/classes/ActiveRecord/Calculations.html#method-i-count)
- [sum](https://api.rubyonrails.org/classes/ActiveRecord/Calculations.html#method-i-sum)
- [average](https://api.rubyonrails.org/classes/ActiveRecord/Calculations.html#method-i-average)
- [minimum](https://api.rubyonrails.org/classes/ActiveRecord/Calculations.html#method-i-minimum)
- [maximum](https://api.rubyonrails.org/classes/ActiveRecord/Calculations.html#method-i-maximum)
- [ids](https://api.rubyonrails.org/classes/ActiveRecord/Calculations.html#method-i-ids)

## Group by Count

- Count users by their statuses:

```ruby
User
  .group(:status)
  .count

# => { 'approved' => 7, 'verified' => 12, 'banned' => 1 }
```

## Group by Date

It can group by date/month/day

- Get amount of sellings per day:

```ruby
CompletedOrder
  .group("date(created_at)")
  .pluck("date(created_at) as ordered_at, sum(price) as total_price")
```

## Group by Multiply Fields

Get amount of completed orders per users:

```ruby
User
  .left_joins(:completed_orders)
  .group('users.id')
  .having('COUNT(completed_orders.id) > 0')
  .pluck('users.id', 'COUNT(completed_orders.id)')
```
