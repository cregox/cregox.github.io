---
title: nocode delusion
description: focusing on web development
image: /pages/coding.jpg
permalink: /nocode/
redirect_from:
  - /delusion/
  - /site building/
layout: draft
published: true
---

# {{ page.description }}

![coding]({{ page.image }})

first, i agree with basically everything said on [this nice piece of blog post](https://www.alexhudson.com/2020/01/13/the-no-code-delusion/).

#nocode is a little bubble.

today i just went on a quick quest to find a website builder, you know like wordpress, squarespace, wix, webflow, bubble, etc... and i could find none that would pass my simple #offlinefirst test:

- enter in the landing/home page.

- let it load fully. usually take a few seconds.

- turn on [airplane](/mobilefirst) mode or remove internet.

- reload. make sure it's not loading a browser cache (on chrome, it will show "offline" on its URL bar).

ok, to be fair, in fact almost no website survive this test. not even offlinefirst.org survived, lol.

but [gatsby js](https://www.gatsbyjs.org/) does. and hey, i'm just pointing out there at least one option that does something magically so right for how websites should behave... but you shouldn't stop here. if you rather to go for #nocode or [something else entirely](https://dev.to/bholmesdev/before-building-your-next-static-site-with-react-consider-this-2b60) (these also didn't pass the test), go for it. tweak it even, to make it #offlinefirst! please!! 😆

just keep in mind this is much more important than you may realise. and certainly a manifesto more about [backup](/backup) than code. 😏😘

ps: this site will be migrated to something like gatsbyjs soon to fully implement pwa. but today (july 2020) it also doesn't pass this test! 😁🤪
