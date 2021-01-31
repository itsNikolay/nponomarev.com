---
title: 'How to refactor if-else statements'
Excerpt: 'How to refactor if-else statements'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2021-01-31T20:17:58.562Z'
author:
  name: Nikolay Ponomarev
  picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
category: 'rails'
slug: 'how-to-refactor-if-else-statements'
---

Let's imagine we have some legacy code which in many projects looks
like this:

```ruby
def activate_user
  if user.confirmed?
    UserMail.new(user).send_activated_email
  else
    UserMail.new(user).send_need_confirmation_email
  end

  redirect_to user
end
```

How can we make it better?

In common you need to break up `if` and `else` on two methods like
this:

```ruby
def activate_user
  send_activated_email
  send_need_confirmation_email

  redirect_to user
end

private

def send_activated_email
  return unless user.confirmed?

  UserMail.new(user).send_activated_email
end

def send_need_confirmation_email
  return if user.confirmed?

  UserMail.new(user).send_need_confirmation_email
end
```

## When If statement goes too deep

```ruby
def activate_user
  if user.confirmed?
    if user.activate
      UserMail.new(user).send_activated_email

      if user.email.end_with?('yourcompany.com')
        user.make_admin
      end
    end
  else
    UserMail.new(user).send_need_confirmation_email
  end

  redirect_to user
end
```

Exactly the same approach! Just imagine this code like you removed all `if`
and `else` lines

```ruby
def activate_user
  send_activated_email
  make_user_admin
  send_need_confirmation_email

  redirect_to user
end

private

def send_activated_email
  return unless user.confirmed?

  UserMail.new(user).send_activated_email
end

def send_need_confirmation_email
  return if user.confirmed?

  UserMail.new(user).send_need_confirmation_email
end

def make_user_admin
  return unless user.confirmed? && user.activate? && user.email.end_with?('yourcompany.com')

  user.make_admin
end
```

## When If statement contains return and can not be extracted to function

To be continue ;)
