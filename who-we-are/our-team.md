---
layout: node
title: Our Team
parent: who-we-are
---

Multicultural, multilingual, and multidisciplinary to the core—global in outlook and approach—DAI’s technical leaders are steeped in the challenges of delivering development solutions in the field. They are committed to sharing our innovation and experience to inform international development practices worldwide.

<hr>

{% for expert in site.experts %}
  <div class="people-block">
    <img src="{{expert.photo}}" alt="" class="expert-details--photo">
    <div class="expert-details--metadata">
      <h3>{{ expert.title }}</h3>
      <p class="expert-details--title">{{ expert.job-title }}</p>
      <p>Expertise: <a href="/our-work/solutions/{{ expert.expertise[0] | downcase | replace: ' ', '-' }}">{{ expert.expertise[0] }}</a>{% if expert.expertise[1] %}, <a href="/our-work/solutions/{{ expert.expertise[1] | downcase | replace: ' ', '-' }}">{{ expert.expertise[1] }}</a>{% endif %}</p>
      <p>Regions: <a href="/our-work/regions/{{ expert.regions[0] | downcase | replace: ' ', '-' }}">{{ expert.regions[0] }}</a>{% if expert.regions[1] %}, <a href="/our-work/regions/{{ expert.regions[1] | downcase | replace: ' ', '-' }}">{{ expert.regions[1] }}</a>{% endif %}</p>
    </div>
    <div class="people-summary">
      <p>{{ expert.summary }}</p>
    </div>
    <a href="{{ expert.url }}" class="primary-block--button people-button">Read More <svg class="redirect" viewBox="0 0 36 70" preserveAspectRatio="xMinYMax meet"><use xlink:href="#redirect"></use></svg></a>
  </div>
  <hr>
{% endfor %}