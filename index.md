---
permalink: /
layout: default
title: home
published: true
---

how can I help you today? it's probably better to search for your **topic**:

<script>
  (function() {
    var cx = '010647840594061099018:ofzvp-qmvj4';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();
</script>
<gcse:search defaultToRefinement="main"></gcse:search>

or do it similarly but [straight on google](https://www.google.com/?q=site:cregox.com+[random]).

or, or perhaps you want to check our [basiux](http://basiux.org) project (super A.i.)? "watch" some [fas tv](/tv)?

![sky walk on Auckland](skywalkcauerecorte.jpg)
*it's a me!*

wondering what's up with my writing style, [locaws](https://medium.cregox.com/lower-case-writing-style-905e1d700f41)?

<script>
    var term = sample([
        'random', 'basiux', 'fuck', 'reason of life', 'trs', 'rfc',
        'imrs', 'password', 'faq', 'brain', 'philosophy', 'help',
        'data', 'backup', 'science', 'skeptic', 'spam', 'magic'
    ]);
    var gcseTerm = getHashQueryStringValue('gsc.q');
    if (gcseTerm) term = gcseTerm;
    document.querySelectorAll('a[href*="[random]"]').forEach(function(item){
        item.href = item.href.replace('[random]', term);
    })
    function sample (items) {
        return items[Math.floor(Math.random() * items.length)];
    }
    function getHashQueryStringValue (key) {  
      return decodeURIComponent(window.location.hash.replace(new RegExp("^(?:.*[&\\#]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
    }  
</script>
