---
title: 'Rails Enum Tutorial'
Excerpt: 'Rails Enum Tutorial'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2021-01-07T20:17:58.562Z'
author:
  name: Nikolay Ponomarev
  picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
category: 'rails'
slug: 'rails-enum-tutorial'
---

1. Generate migration by running command:

```sh
$ rails g migration AddStatusToUsers status
```

2. ./db/migrations/xxx_migration.rb

```ruby
def change
  add_column :users, :status, :string, null: false, default: 'unverified'
  add_index :users, :status
end
```

3. ./app/models/user.rb

```ruby
class Users < ApplicationRecord
  enum status: {
    claimed:    'claimed',
    unverified: 'unverified',
    verified:   'verified',
  }

  validates :status, inclusion: { in: statuses.keys }
end
```
