---
title: home
description: do worry, plus be happy... and do it!
date: 2020-09-29 19:57:00
image: cregox avatar.jpg
layout: default
published: true
ask: https://duckduckgo.com/?q=%random+"cregox"+site:cregox.net&kp=-2&k1=-1&kj=g2&kam=osm
---

hello!

search below for anything related to cregox that might entice you. such as "damme", "[[ahoxus](/ahoxus)]" or "[[random](/random)]", for instance.

<form name="searchForm" class="search" method="get" action="https://duckduckgo.com" onsubmit="return duckFix();">
<input type="hidden" name="kam" value="osm">
<input type="hidden" name="kp" value="-2">
<input type="hidden" name="k1" value="-1">
<input type="hidden" name="kj" value="g2">
<input type="text" name="q" placeholder="duck search" value='"cregox" site:cregox.net'>
<input type="hidden" name="hq" value="">
<input type="submit" value="🔎">
</form>

still [can't find](/duck) something in specific? got nothing in mind? try going straight to [the duck 🦆 with a random string]({{ page.ask }}).

or perhaps just lay back and "watch" some [fas tv](/tv).

<small> missing cookies? [really](/reality)?! sorry, [[we don't track](/tracking)]! 😁😘 </small>

<small> _[(disclaimer about the lower case writing style)](/locaws)_ </small>

<script> (function() {
    window.onhashchange = updateAll;
    window.onpopstate = updateAll;
    var term = sample([
        'random', 'basiux', 'fuck', 'reason of life', 'trs', 'rfc',
        'imrs', 'password', 'faq', 'brain', 'philosophy', 'help',
        'data', 'backup', 'science', 'skeptic', 'spam', 'magic',
        'ahoxus', 'religion', 'nynphormartisct', 'crazy', 'art',
        'wanderful', 'video', 'film', 'rating', 'scale'
    ]);
    var linksUpdated = [];
    var urlParams = new URLSearchParams(window.location.search);
// no idea why this doesn't work! but it's worth it to leave it here for reference, i suppose
//    var urlParams = window.location.searchParams;

    function updateAll () {
        updateLinks();
        vq.value = urlParams.get("q");
    }

    // use a hidden form to send the query
    document.searchForm.q.setAttribute("name", "vq");
    document.searchForm.hq.setAttribute("name", "q");
    var q = document.searchForm.q;
    var vq = document.searchForm.vq;

    // because html onsubmit didn't work
    document.searchForm.onsubmit = function duckFix () {
        q.value = vq.value;
        if (q.value.length == 0) {
            q.value = term;
        }
        var ask = new URL('{{ page.ask }}');
        q.value += ask.searchParams.get("q").replace("%random", "");
    }

    updateAll();
    function updateLinks () {
        var hashTerm = getHashQueryStringValue('q');
        if (hashTerm) term = hashTerm;
        linksUpdated.forEach(function(original){
            original.item.href = original.href.replace('%random', term);
        })
        document.querySelectorAll('a[href*="%random"]').forEach(function(item){
            linksUpdated.push({item: item, href: item.href, term: term});
            item.href = item.href.replace('%random', term);
        })
    }
    function sample (items) {
        return items[Math.floor(Math.random() * items.length)];
    }
    function getHashQueryStringValue (key) {  
      return decodeURIComponent(window.location.hash.replace(new RegExp("^(?:.*[&\\#]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
    }
})(); </script>
