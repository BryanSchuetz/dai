---
layout: node
title: Our Team
parent: who-we-are
---

Multicultural, multilingual, and multidisciplinary to the core—global in outlook and approach—DAI’s technical leaders are steeped in the challenges of delivering development solutions in the field. They are committed to sharing our innovation and experience to inform international development practices worldwide.

<hr> 

{% for expert in site.experts %}
<div class="experts-rail">
  <div class="people-block">
    <img src="{{expert.photo}}" alt="" class="expert-details--photo">
    <div class="expert-details--metadata">
      <h3>{{ expert.title }}</h3>
      <p class="expert-details--title">{{ expert.job-title }}</p>
      <p>{% for expertise in expert.expertise %} {% if expertise == 'Economic Growth' %} <a href="/our-work/solutions/economic-growth/"><svg class="hexer" viewBox="0 0 126 146" preserveAspectRatio="xMinYMax meet"><use xlink:href="#hexer"></use></svg></a>{% endif %} {% if expertise == 'Governance' %} <a href="/our-work/solutions/governance/"><svg class="hexer-red" viewBox="0 0 126 146" preserveAspectRatio="xMinYMax meet"><use xlink:href="#hexer-red"></use></svg></a>{% endif %}{% endfor %} {% for region in expert.regions %} {% if region == 'Sub-Saharan Africa' %} <a href="/our-work/regions/sub-saharan-africa/"><svg class="globe-blue" viewBox="0 0 72 72" preserveAspectRatio="xMinYMax meet"><use xlink:href="#globe-blue"></use></svg></a> </svg> {% endif %} {% if region == 'Eastern Europe and Central Asia' %} <a href="/our-work/regions/sub-saharan-africa/"><svg class="globe-purple" viewBox="0 0 72 72" preserveAspectRatio="xMinYMax meet"><use xlink:href="#globe-purple"></use></svg></a> </svg> {% endif %} {% endfor %}</p>
    </div>
    <div class="expert-summary">
      <p>{{ expert.summary }}</p>
    </div>
    <a href="{{ expert.url }}" class="primary-block--button expert-button">Read More <svg class="redirect" viewBox="0 0 36 70" preserveAspectRatio="xMinYMax meet"><use xlink:href="#redirect"></use></svg></a>
  </div>
  <hr>
</div>
{% endfor %}