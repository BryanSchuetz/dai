---
title: Regions
layout: node

---

Having worked in more than 150 countries since 1970, we have extensive networks and deep roots in every region of the world.

{% for region in site.data.regions %}
<div class="solution-block">
  <h2>{{ region.text }}</h2>
  <p>{{ region.summary }}</p>
  <a href="{{ region.path }}" class="primary-block--button">Continue Reading <svg class="redirect" viewBox="0 0 36 70" preserveAspectRatio="xMinYMax meet"><use xlink:href="#redirect"></use></svg></a>
</div>
<hr>
{% endfor %}
