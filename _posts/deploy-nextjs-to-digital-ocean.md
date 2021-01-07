---
title: 'Deploy Nexjs Static Site to Free Digital Ocean Apps'
excerpt: 'Deploy Nexjs static App to free Digital Ocean App instance'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2020-12-29T20:17:58.562Z'
updated: '2021-01-05T20:17:58.562Z'
author:
  name: Nikolay Ponomarev
  picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
category: 'nextjs'
slug: 'deploy-nextjs-app-to-free-digital-ocean-apps'
---

```sh
APP_NAME=nextjs-blog

yarn global add create-next-app
yarn create next-app APP_NAME
cd APP_NAME
yarn dev
```

1. Visit <https://cloud.digitalocean.com/apps>
1. Click Create App
1. Choose your Github Repository
1. Select Any Region
1. Select Type: "Static Site"
1. Go `git push` your master branch
1. Visit your site

It's quite simple. But if you visit any page on your site, and
do refresh page.
You realize that site can't find this page anymore

## But other pages are not accessible on browser reload

The problem is Digital Ocean Apps hosts files
And if you check your deplyment log you will see a list of files
ending on `**.html` and if you type it in browser they really exist

To bypass it I did a hack with renaming files to get rid of `.html`
And it works well

Here's the script

1. Create `./rename.sh`

```sh
#!/bin/sh

for file in $(find ./out/ -name "*.html" ! -name "index.html"); do
  echo $file
  newname=`echo $file | sed 's/\.html$//g'`

  mv -v $file $newname
done
```

2. Make it executable

```sh
chmod +x ./rename.sh
```

3. Add `./rename.sh` to  `./package.json` to run on deploy

```javascript
{
  "scripts": {
    "build": "next build && next export && ./rename-html.sh"
  }
}
```

4. Commit, push, and redeploy
5. Visit any page. Refresh page. And it works!

## Adding Godaddy Domain To DigitalOcean Static App

Visit in Digital Ocean Apps

Digitalocean Apps -> YOUR APP -> Settings -> Domains -> Edit -> Add Domain -> YOUR_DOMAIN.com -> We manage your domain -> Save

Go Daddy -> YOUR DOMAIN -> DNS -> Server names -> Change -> Set my own DNS servers ->

- ns1.digitalocean.com
- ns2.digitalocean.com
- ns3.digitalocean.com

Save -> Wait some time (till 24 hours) to domain records will be renewed

That's all! I hope it helped to you :)
