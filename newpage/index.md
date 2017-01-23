---
permalink: /newpage/
layout: page
title: new page
published: true
---

Maybe the easiest way (for you) to **suggest a new page** is by [contacting us](/contact).

But if you want to give more details or actually do some work (along with maybe lots of learning), you could instead use [GitHub and make a Pull Request](https://help.github.com/articles/creating-new-files/).

Actually...

It's not even *that* complicated. You just have to:

- learn a little of [github markdown](https://guides.github.com/features/mastering-markdown/) (if you want to actually format your contribution), or;
- use samples, [such as the other pages in this site](https://github.com/cregox/cregox.github.io), or [this very one file you're in](https://github.com/cregox/cregox.github.io/blob/master/newpage/index.md)), and;

- [**go here**](https://github.com/cregox/cregox.github.io/new/master/[jesus]/index.md)

Even just **going there** and writing your suggestion in plain text is already simple-ish enough and much better than trying any other contact form.

Eventually we shall replace this page (or maybe the whole host) with something even simpler for contribution. Meanwhile...

Thanks for your willingness to help! :)

<script>
function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
document.querySelectorAll('a[href*="[jesus]"]').forEach(function(item){
  item.href = item.href.replace('[jesus]', getParameterByName('a'));
})
</script>
