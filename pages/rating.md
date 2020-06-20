---
title: the rating scale
description: originally made for ranking movies
# image: /pages/scale.jpg
permalink: /rating/
redirect_from:
  - /ranking/
  - /movies/
  - /films/
  - /trs/
  - /tmrs/
layout: draft
published: true
---

# {{ page.description }}

![scaling!]({{ page.image }})

<small>reposted and adapted from [my 2016 post](/talk/t/rfc-cregoxs-international-movie-rating-scale/7815.html). TK films and their (broken) links</small>

> **films are all about storytelling.**

### **disclaimer** about The Rating Scale (TRS)

for the longest time, [my IMDB profile](//www.imdb.com/user/ur1256176/) said something like:

> some people think of movies like a form of art. i like to think of movies like a form of information, using arts, science and intelligence.

> i do like rating movies "randomly", as the scoring method suggest, giving it 10 stars if they're awesome (mostly production wise) and then removing 1 star for each issue i find. for instance in a non-extensive nor exact list:

> . no good ending (this can easily lead to remove more than 1 star, and an open ending is no good)

> . no tagline / message (ie too 'artistic' / meaningless)

> . big science / consulting errors (it's not ok to hit people in the head as a plot device!)

> . etc.

also for the longest time, i've wished to make a better [rating system](/talk/t/anything-advisor/7426.html) in general. maybe [the first manifestation](/talk/t/from-wildcard-through-computers-to-the-unknown/7636ba8f.html) of that wish happened around 2015. something like [slant.co](//slant.co) but even simpler...

anyway, after (re)watching [Strictly Sexual](https://www.facebook.com/StrictlySexualMovie) TK yesterday, finding it a 10, and having to re-scale it from 7, i've decided to finally do this!

funny enough, i've only watched it because it was the only option i had downloaded on my machine and i've miserably failed to popcorn [The Martian] since it leads to a weird oriental movie. the latest chain of events leading me to do such cool stuff (as this today or such as with [the Little Prince](/talk/t/when-is-10-not-enough-little-prince/7772.html)) are usually even more interesting than my movement in itself! 😁

boy, this should help writing [the novel](/talk/t/two-weeks-i-havent-updated-the-novel-any-ideas-or-feedback-anyone/7806.html)! 😆

# TMRS second version

M stands for movie, of course.

the first version had a score up to 24, made out of bad math, as it might've been able to be seen in the original post history (now it's probably lost to discourse lack of real backup, long story).

if this can be considered a [Request For Comments](//www.ietf.org/rfc.html), it's also my first one.

this is the core of cregox's TRS:

> give scores `-1`, `0` or `1` based on at least 5 criteria, then normalize it.

the idea is we suck at giving any kind of rating scores. even "5 stars" is too much (or too little). it quickly becomes way too subjective from that.

the solution is dead simple and very "scientific": do it in parts.

out of 534 titles i've rated, currently 69 of them were a 10 by my IMDB criteria (it were 68 when i've checked, so i've promoted South Park from the 9 ones). using TMRS, that number could be halved. truth is i've never compiled (and perhaps never will compile) the list to get to a real number. anyway...

for movies, those are the current criteria i want to use (and used for the few movies in [the list]):

TK

## Science
Skeptical science, that is. This is a stricter rule than what wikipedia abides to as, much more than published by accredited journals and duplicated it needs to be published online, replicated multiple times and approved by the skeptical community. This is by far the biggest criteria and it has a weight of 2!

- `-` a piece of crap in this criteria like [Prometheus] could easily get a score of 12, never more.

- `0` Strictly Sexual brings no big science topics to the table, I'd argue. I could easily be wrong.

- `1` [Interstellar], of course. Probably no better reference in this century, except maybe for [The Martian].

## Consistency
Don't fall down on its own weight. My favorite movie genre is Time Travelling and it offers great instances for this:

- `-` [Lake House] can't go over 10, by the 2 criterias in here, so far. That's what happens when you try making a time travel movie without thinking about the physics behind it. Easy lack of story consistency
.
- `0` [That's not Funny documentary] sometimes a movie don't offer any checks. But they always should. And yeah, of course any kind of film can be rated.

- `1` [Back to the Future] there are many flicks that could serve as instance but, you know, ripple waves on timespace is done as a masterpiece here. It's also the most cheerful of time travel theories.

## Ending
This is probably better elaborated with examples. (might be the first criteria to get changed soon)

- `-` I use to think open endings such as in [Inception] were always terrible. "It's not even an ending, it's just stopping to tell the story in the middle" I would say. Well, now I think a bad ending is simply one that's badly executed, such as in [Lost], [Heroes] or, to bring it to movies, [I am Legend] which was actually a good idea on script.

- `0` [Inside Out] is not among the top Pixar movies and, for one reason, it offers nothing in the ending. It's just an ending. Most Disney movies would work as an instance here.

- `1` this is when anyone would have missed the [spoiler] tag such as in [12 Monkeys], although [Matrix] also fits in.

## Plausible
Always bring the "fiction" part into the real world. The most desirable aspect of creating a universe (i.e. writing a story) is precisely that. How plausible would it be in our universe, philosophically speaking?

- `-` [Divergent] nope. Won't happen ever. Ever. And probably anyone can see that. [Idiocracy] also fits here, despite of what many may think.

- `0` I can't tell if [Lion King] is -1 or 1, so I'd just fit it on 0. Don't let viewers in doubt!

- `1` Going the completely unexpected route, I'd argue [Stranger than Fiction] is completely plausible. We do shape our universe. Even if you read lots of what I write, this may come to you as a surprise (I sure hope you'll even ask me for a movie review there :wink:). Of course, my point here is this is not a scientific scale because rating movies is subjective.

## Tagline
Probably "Punchline" would be more appropriate, but then the criteria acronym would fall apart! :stuck_out_tongue_winking_eye:

The point here is having a clear message across. That's what stories are for. Parables (damn that P).

- `-` [Kaboom] is a perfectly enjoyable weird movie nevertheless. I don't think the writers had any clear message, though. It was also a nice example of why I love google. Found the name I could not remember while searching for "horse button explode world" on the first hit (even while it was pretty lucky).

- `0` [Across the Universe] there's nothing wrong with beating a dead horse, is there? Well, to me that's less than ideal. We all know about loving everyone already. Don't we? Clearly we don't act as such. I still absolutely love Beatles (and Queen, and David Bowie's life, and Pato Fu, etc).

- `1` [Bedazzled] just freaking be yourself and live the moment! Most people still don't really get it.

## International
Storytelling, remember? The easier it is to tell it to anyone, the merrier. Maybe Universal would be a more meaningful single word here.

- `-` [Saw] is very culture specific and most people don't want to go that deep in the human pool. Great movies otherwise, from the little I saw. Very intelligent indeed.

- `0` [Perfume] is probably easy to tell it to anyone, isn't it? I don't know. Wished it was. :frowning:

- `1` [Chaplin]. Make it dialog free and it will probably fit here perfectly. I hate to admit [Tree of Life] gets a 1 here too.

## Caring
Okay, 6 criteria would have been enough for now, and maybe there's a better 6 letter choice (if you're reading and paying attention I hope you know what I mean here). I'm also tired of writing this topic already...
Most people don't care. But how can a story care? Well, the one telling the story should. Care for what? For people. Wooooot for subjectivity!! :smiley:

- `-` try to guess? . One of the worst IMDB flicks of all time.

- `0` can't really tell if [Brave] cares. To me it is by far the worst Pixar movie, although of course it's still good. And boy, did I hate [Cars] for some reason...

- `1` [Forrest Gump] I could not leave this one out of the instances. Nor [The Little Prince]. So touching comedies. Okay, let me also throw in [Little Miss Sunshine] then.

## Normalization
For movies, let's keep it simple. 16 points - that's 2 x (2 + 6).

Of course, using percentage is always encouraged as well. So, for instance, 15 makes 93.75%.

Enough said. 😊

# Phew
Writing this was a hours long yet fun exercise! 😏 Who'd guess it all started with sex?
