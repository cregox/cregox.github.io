---
title: home
description: do worry, plus be happy... and do it!
image: cregox avatar.jpg
layout: default
published: true
---

warm greetings, human.

this is cregox.

here you can search for anything related to me that might entice you, such as "damme", "[ahoxus](/ahoxus)" or "random". try it:

<iframe
src="https://duckduckgo.com/search.html?width=256&site=cregox.net,ahoxus.org&prefill=search with the duck"
style="overflow:hidden;margin:0;padding:0;width:314px;height:40px;"
frameborder="0">
</iframe>

out of ideas to search for? [duck with a random one](https://duckduckgo.com/?q=site:cregox.net+[random]).

or perhaps just lay back and "watch" some [fas tv](/tv).

<small> missing cookies? [really](/reality)?! sorry, [we don't track](/tracking)! 😁😘 </small>

<small> _[(disclaimer about the lower case writing style)](/locaws)_ </small>

<script> (function() {
    window.onhashchange = updateQueryLinks;
    window.onpopstate = updateQueryLinks;
    var term = sample([
        'random', 'basiux', 'fuck', 'reason of life', 'trs', 'rfc',
        'imrs', 'password', 'faq', 'brain', 'philosophy', 'help',
        'data', 'backup', 'science', 'skeptic', 'spam', 'magic',
        'ahoxus', 'religion', 'nynphormartisct', 'crazy', 'art',
        'wanderful', 'video', 'film', 'rating', 'scale'
    ]);
    var linksUpdated = [];
    updateQueryLinks();
    function updateQueryLinks () {
        // var gcseTerm = getHashQueryStringValue('gsc.q');
        // if (gcseTerm) term = gcseTerm;
        linksUpdated.forEach(function(original){
            original.item.href = original.href.replace('[random]', term);
        })
        document.querySelectorAll('a[href*="[random]"]').forEach(function(item){
            linksUpdated.push({item: item, href: item.href, term: term});
            item.href = item.href.replace('[random]', term);
        })
    }
    function sample (items) {
        return items[Math.floor(Math.random() * items.length)];
    }
    function getHashQueryStringValue (key) {  
      return decodeURIComponent(window.location.hash.replace(new RegExp("^(?:.*[&\\#]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
    }
})(); </script>
