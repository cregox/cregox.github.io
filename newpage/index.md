---
layout: page
title: new page
published: true
---

probably the easiest way (for *you*) to **suggest a new page** is by [contacting us](/contact). but that might take a while...

if you want to give more details or actually do some work (along with learning), you could instead use [GitHub and make a Pull Request](https://help.github.com/articles/creating-new-files/).

actually...

it's even **simpler** than *that*!

you can skip straight to the last step/item, on the big link below, to create a new file:

# learn markdown (optional)
- learn a little of [github markdown](https://guides.github.com/features/mastering-markdown/) (if you want to actually format your contribution), or;
- see samples, [such as our other files](https://github.com/cregox/cregox.github.io) or [this own](https://github.com/cregox/cregox.github.io/blob/master/newpage/index.md) (click on the [raw] button, ignore the script part), then...

# [**create a new file**](https://github.com/cregox/cregox.github.io/new/master/[jesus])
(you'll need to login or create an account)

that's all. write right there everything you think there should be on this page! :)

<details>
<summary markdown="span">however, it'd be really nice if you can also do the following (open here):</summary>

- name it `index.md`;
- add this front matter to the top, replace the title for whatever you want, or remove it: 

```
---
layout: page
title: whatever you like
published: false
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

even just **creating the file** and writing your suggestion in plain text is already simple enough (other than needing to login) and much better than trying any other contact form! please try that first. :D

perhaps *somewhere* in the future we will replace this process with something even simpler...

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
document.querySelectorAll('a[href*="[jesus]"]').forEach(function (item) {
    item.href = item.href.replace('[jesus]', getParameterByName('a', 'dummy-newpage'))
})
</script>
