---
title: gallery
description: media and photo updates
date: 2020-10-25 14:00:00
permalink: gallery
redirect_from:
  - photos
  - media
layout: page
published: true
---

# {{ page.description }}

<section id="thumbnails">
  {% assign gallery = site.static_files | where: "image", true | reverse %}
  {% for image in gallery %}
  <article>
   <a name="{{ image.name }}" />
   <h4>[{{ image.basename | replace: "_", " " }}](/{{ image.basename }})</h4>
   <a class="thumbnail" href="/{{ site.gallery_dir }}/{{ image.name }}" data-position="{{ site.thumbnail_position }}"><img src="/{{ site.gallery_dir }}/{{ image.name }}" alt="{{ image.basename }}" /></a>
  </article>
  {% endfor %}
</section>

