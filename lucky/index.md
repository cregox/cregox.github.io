---
title: feeling random luck?
layout: page
published: true
---

## disclaimer

i started this because i thought it should be simple enough to be built (and would serve to prove a point).

it's just a number generator based on a blob from camera + microphone stream. how hard could it be?

sadly, like it happened in other previous projects, *privacy* (and, basically, *politcs*) got in the way:
in this case, i couldn't find an easy way to test it in a chromebook (my only developing machine today). i had to keep push it into github all the time, which makes developing it exponentially harder.

if not for this, i'd finish it eventually.

but on top of that i realized how useless it would be, in its current format.

even if i could somehow make it viral with something like [did thanos killed me](http://www.didthanoskill.me) people would most likely go crazy about its "privacy", regardless of how clean it would be.

so, randomness will have to wait.

at least until we, humans, get a few major shifts in priorities.

the point i wanted to prove?

there's no doubt in my mind that true randomness is way underappreciated and that, over a big enough dataset, it would certainly lead to much more creative outcomes in our society. such as smarter ai's.

time will tell.
(or, please, [let me know](/contact) if you can tell us!)


# obsolete and broken project below

---

lucky number, between 0 and [<max>infinity</max>](javascript:max()): 

# [<lucky>-1</lucky>](javascript:start())

[go to a new random page](https://www.google.com/doodles), provided by google and "magic"! or...

click on the number to get a new one.

<br><br>

seeing just a negative one? perhaps [we'll need permissions](javascript:start())...

what is [**true** random](//random.org)?

it's basically [the source of everything](/talk/t/true-randomness-app-why-it-could-help-winning-the-lottery-and-building-up-the-basiux/7845)!

computers can't generate those without help from the real world.

thus why we need [access to the camera and microphone](javascript:start()).

nothing will be recorded. remember, the source code is completely open.

why true random?

not only this offers better chances of getting winning lottery numbers...

a true random number culture can change the world! **TK**

feel free to tweak the **noise** sources settings:

<link rel="stylesheet" href="main.css">

<div class="select"><label for="audioSource">audio: </label><select id="audioSource"></select>
</div>

<div class="select"><label for="videoSource">video: </label><select id="videoSource"></select>
</div>

<script src="https://webrtc.github.io/adapter/adapter-latest.js"></script>
<script src="main.js" async></script>
<script src="lib-ga.js"></script>
