---
permalink: /newpage/
layout: page
title: new page
published: true
---

Perhaps the easiest way (for you) to **suggest a new page** is by [contacting us](/contact).

But if you want to give more details or actually do some work (along with lots of learning), you could instead use [GitHub and make a Pull Request](https://help.github.com/articles/creating-new-files/).

Actually...

It's not even *that* complicated:

- learn a little of [github markdown](https://guides.github.com/features/mastering-markdown/) (if you want to actually format your contribution), or;
- see samples, [such as our other files](https://github.com/cregox/cregox.github.io) or [this own](https://github.com/cregox/cregox.github.io/blob/master/newpage/index.md) (click on the [raw] button, ignore the script), and;

- [**go here**](https://github.com/cregox/cregox.github.io/new/master/[jesus]) and name the file `index.md` (after login or create an account if you need to)

Even **going there** and writing your suggestion in plain text is already simple-ish enough and much better than trying any other contact form.

Somewhere in the future, we will replace this process with something even simpler for contribution.

Meanwhile, <br>
Thanks for your willingness to help! :)

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
