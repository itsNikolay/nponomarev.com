---
title: 'Minitest Mocking Http Request with Stubs'
Excerpt: 'Minitest Mocking Http Request with Stubs'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2021-01-04T20:17:58.562Z'
author:
  name: Nikolay Ponomarev
  picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
category: 'rails'
slug: 'minitest-mocking-http-request-with-stubs'
---

There are typical tasks to test http requests in any application.
And there's not cute interface in Minitest like Rspec is

Here I show you how to test http requests with Minitest

Example: Let's say you need to test any http wrapper like:

- `Net::HTTP::Get.new`
- `HTTParty.get`
- `Slack::Notifier.new`
- and similar http requests classes

Let's grab `Slack::Notifier.new` for our experiment

- To test http request we need to combine `Minitest::Mock.new` and `.stub`:

```ruby
test 'slack posts "Hello to Slack" message' do
  slack_mock = Minitest::Mock.new
  slack_mock.expect(:post, true, [{ text: "Hello to Slack" }])

  Slack::Notifier.stub(:new, slack_mock) do
    Slack::Notifier.new('url').post(text: "Hello to Slack")
  end

  slack_mock.verify
end
```

- Now run the tests `rails test tests/path_to_test.rb`.

And it successfully passes!

The similar code can be used for other http wrappers

## Add Wrapper Around Http Calls

To *reuse* mocks in any part of tests and to have *nice interface* we
can wrap it `Helper`

- `./tests/support/slack_helper.rb`

```ruby
# frozen_string_literal: true

module SlackHelper
  def verify_slack_notification
    slack_mock = Minitest::Mock.new

    Slack::Notifier.stub(:new, slack_mock) do
      yield slack_mock
    end

    slack_mock.verify
  end
end
```

- `./tests/controllers/chat_controller_test.rb`

```ruby
test 'sends message to slack' do
  verify_slack_notification do |slack_mock|
    slack_mock.expect(:post, true, [{ text: "Hello Everybody" }])

    patch messages_path, params: { message: "Hello Everybody" },
  end
end
```

- run it `rails test ./tests/controllers/chat_controller_test.rb`

and it should successfully pass
