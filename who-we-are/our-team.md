---
layout: node
title: Our Team
parent: who-we-are
---

Multicultural, multilingual, and multidisciplinary to the core—global in outlook and approach—DAI’s technical leaders are steeped in the challenges of delivering development solutions in the field. They are committed to sharing our innovation and experience to inform international development practices worldwide.

<hr>

{% for expert in site.experts %}
  <div class="people-block">
    <img src="{{expert.thumbnail}}" alt="" class="people-photo">
    <div class="people-details">
      <h3>{{ expert.title }}</h3>
      <p>{{ expert.job-title }}</p>
    </div>
    <div class="people-summary">
      <p>{{ expert.summary }}</p>
    </div>
    <a href="{{ expert.url }}" class="primary-block--button people-button">Read More <svg class="redirect" viewBox="0 0 36 70" preserveAspectRatio="xMinYMax meet"><use xlink:href="#redirect"></use></svg></a>
  </div>
  <hr>
{% endfor %}