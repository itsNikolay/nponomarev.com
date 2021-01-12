---
title: 'Rails Enum Tutorial'
Excerpt: 'Rails Enum Tutorial'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2021-01-07T20:17:58.562Z'
updatedAt: '2021-01-12T22:54:58.562Z'
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

- ❓ Why statuses are `strings` not `integers`?
- A:
  1. Raw sql queries seems more human readable.
  2. Code is also much human readable.
  3. You don't need to calculate next value
  4. You can easily add/remove/sort values
  5. No performance degrade if index was added


- ❓ Why statuses are `strings` not `symbols`
- A: Values must be `strings` not `symbols`! (🐛 `claimed: :claimed`
  does not work correctly)


## Enums Set Default Values

If we specified `default: 'unverified'` in migration above, __we don't
need to use__ `before_validation`. If you didn't then do

- ❓ Why not to use `before_validation` callback to set default value?
- A: Rails handles `deafult: value` well and thus code seems much clearer

## Enums Which statuses need to avoid

I'm not totally sure in it, but sometimes the following statuses
conflicts with existing ones, so try to avoid it

- changed
- initial
- parents
- kind
- type
