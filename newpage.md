---
title: suggest a new page
description: help to build the website!
image: building.jpg
permalink: /newpage/
redirect_from:
  - /build/
  - /suggest/
  - /new/
layout: page
published: true
menu: false
root: https://github.com/cregox/cregox.github.io
---

yes, you can help to build cregox and even learn some coding in the process!

there are basically 3 options:

- give [feedback or suggest something](/feedback) (even a new page, and give us [work](/work)) by [**contacting us**](/contact). beware that it might take more time to become alive.

- do some work yourself (along with lots of learning): use [**GitHub and make a Pull Request**](https://help.github.com/articles/creating-new-files/).

- create a new file (start in the line below)!

<details>
<summary markdown="span">learn markdown (optional)</summary>

- learn a little of [github markdown](https://guides.github.com/features/mastering-markdown/) (if you want to actually format your contribution), or;
- see samples, [such as our other files]({{ page.root }}?files=1) or [this own]({{ page.root }}/blob/master/newpage.md) (click on the [raw] button, ignore the script part), then...
</details>

# [**create a new file for "#jesus"**]({{ page.root }}/new/master/#jesus)
(you'll need to login or create an account)

that's all. write right there everything you think there should be on this page! :)

<details>
<summary markdown="span">however, it'd be really nice if you can also do the following (open here):</summary>

- name it `whatever.md` or _something_ (like #jesus.md) - just hit backspace on the space for name and add ".md";
- add this front matter to the top, replace the title for whatever you want, or just remove the whole line: 

```
---
title: whatever
layout: page
published: false
---
```

- (optional) advanced front matter (also what we use, mostly). yes, you can even upload an image, but we won't tell you here how (yet):

```
---
title: could be anything
description: this is good for opengraph
image: spaces allowed.jpg
permalink: /anything/
redirect_from:
  - /could/
  - /be/
layout: draft
published: true
---
```

- again, optional, but try styling it up with markdown!

```
it's very easy to make some words **bold** and other words *italic* with markdown. you can even [link to Google!](http://google.com)

sometimes you want numbered lists:

1. one
2. two
3. shrubs, i mean tree, or something

prefer bullet points?

* start a line with a star
* profit!

alternatively,

- dashes work just as well
- and if you have sub points, put two spaces before the dash or star:
  - like this
  - or that

# structured documents

it's useful to have different levels of headings to structure your documents. start lines with a `#` to create headings. multiple `##` in a row denote smaller heading sizes.

### this is a third-tier heading

you can use one `#` all the way up to `######` six for different heading sizes.

if you'd like to quote someone, use the > character before the line:

> ice cream. the finest solid-ish food made out of liquids ever devised... for ever.
> - who cares who said that?
```

</details>

even just **creating the file** and writing your suggestion in plain text is already simple enough (other than needing to login) and much better than trying any other contacting form! please try that first. :D

we do wish to, in the future, replace this process with something even simpler... but don't hold your sweat on it.

meanwhile, <br>
**thanks** for your willingness to help! :)


<script>
function getParameterByName (name, result, url) {
    result = result || ''
    url = url || window.location.href
    name = name.replace(/[\[\]]/g, "\\$&")
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url)
    if (!results || !results[2]) return result
    return decodeURIComponent(results[2].replace(/\+/g, " "))
}
jesus = getParameterByName('a', 'dummy-newpage')
document.querySelectorAll('a[href*="#jesus"]').forEach(function(item){
    item.href = item.href.replace('#jesus', jesus)
})
item = document.body
item.innerHTML = item.innerHTML.replace('#jesus', jesus)
</script>
