---
title: 'Rails ActiveStorage add watermark to image'
excerpt: 'Rails using mini magic facility we simply add watermark to
image variant with transparent background'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2021-04-27T20:17:58.562Z'
author:
  name: Nikolay Ponomarev
  picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
category: 'rails'
slug: 'rails-activestorage-add-watermark-to-image'
---

## Draw transparent watermark image with mini magic

```ruby
WATERMARK_PATH = Rails.root.join('app/javascript/images/watermark.png')

variant = product.attachment.variant(
  resize_to_fit: [380, nil],
  gravity: 'center',
  draw: "image Over 0,0 0,0 \"#{WATERMARK_PATH}\""
)

url_for(variant) # to get url
image_tag(variant) # to get <img> tag
```

And then copy `watermark.png` image to `app/javascript/images/watermark.png`

You will get the following result:

![Image with watermark](/assets/photo-with-watermark.jpeg)
