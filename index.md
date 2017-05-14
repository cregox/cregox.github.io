---
permalink: /
layout: default
title: home
published: true
---

how can I help you today? it's probably better to search for your **topic**:

<script>
function updateQueryString(key, value, url) {
    if (!url) url = window.location.href;
    var re = new RegExp("([?&])" + key + "=.*?(&|#|$)(.*)", "gi"),
        hash;

    if (re.test(url)) {
        if (typeof value !== 'undefined' && value !== null)
            return url.replace(re, '$1' + key + "=" + value + '$2$3');
        else {
            hash = url.split('#');
            url = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');
            if (typeof hash[1] !== 'undefined' && hash[1] !== null)
                url += '#' + hash[1];
            return url;
        }
    }
    else {
        if (typeof value !== 'undefined' && value !== null) {
            var separator = url.indexOf('?') !== -1 ? '&' : '?';
            hash = url.split('#');
            url = hash[0] + separator + key + '=' + value;
            if (typeof hash[1] !== 'undefined' && hash[1] !== null)
                url += '#' + hash[1];
            return url;
        }
        else
            return url;
    }
}
  //document.location = updateQueryString('gsc.q', '[random]');
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
<gcse:search defaultToRefinement="main" autoSearchOnLoad="false"></gcse:search>

or do it similarly but [straight on google](https://www.google.com/?q=site:cregox.com+[random]).

or, or perhaps you want to check our [basiux](http://basiux.org) project (super A.i.)? "watch" some [fas tv](/tv)?

![sky walk on Auckland](skywalkcauerecorte.jpg)
*it's a me!*

wondering what's up with my writing style, [locaws](https://medium.cregox.com/lower-case-writing-style-905e1d700f41)?

<script>
    document.querySelectorAll('a[href*="[random]"]').forEach(function(item){
        item.href = item.href.replace('[random]', sample([
            'random', 'basiux', 'fuck', 'reason of life', 'trs', 'rfc',
            'imrs', 'password', 'faq', 'brain', 'philosophy', 'help',
            'data', 'backup', 'science', 'skeptic', 'spam', 'magic'
        ]));
    })
    function sample (items) {
        return items[Math.floor(Math.random() * items.length)];
    }
</script>
