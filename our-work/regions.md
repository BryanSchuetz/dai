---
title: Regions
permalink: "/our-work/the-regions"
layout: node
redirect_from:
  - /our-work/regions
---

Having worked in more than 150 countries since 1970, we have extensive networks and deep roots in every region of the world.

{% for region in site.regions %}
<div class="solution-block">
  <h2>{{ region.title }}</h2>
  <p>{{ region.summary }}</p>
  <a href="{{ region.url }}" class="primary-block--button">Continue Reading <svg class="redirect" viewBox="0 0 36 70" preserveAspectRatio="xMinYMax meet"><use xlink:href="#redirect"></use></svg></a>
</div>
<hr>
{% endfor %}
