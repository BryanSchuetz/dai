---
layout: node
title: Our Team
parent: who-we-are
---

Multicultural, multilingual, and multidisciplinary to the core—global in outlook and approach—DAI’s technical leaders are steeped in the challenges of delivering development solutions in the field. They are committed to sharing our innovation and experience to inform international development practices worldwide.

<hr>
<div class="experts-filter">
  <h3>Team Filter</h3>
  <p>Looking for expertise in a particular technical area or geographical region? Use the filter tools below to limit your search of DAI staff.</p>
          <select id="cd-dropdown" class="cd-select">
            <option value="-1" selected>Choose A Solution</option>
            <option value="#" >Corporate Services</option>
            <option value="#" >Economic Growth</option>
            <option value="#" >Environment & Energy</option>
            <option value="#" >Governance</option>
            <option value="#" >Health</option>
            <option value="#" >ICT</option>
            <option value="#" >Stability</option>
          </select>
          <select id="cd-dropdown-1" class="cd-select">
            <option value="-1" selected>Choose A Geography</option>
            <option value="#" >Asia and the Pacific</option>
            <option value="#" >Eastern Europe</option>
            <option value="#" >Latin America</option>
            <option value="#" >Middle East</option>
            <option value="#" >Sub-Saharan Africa</option>
          </select>
  <hr>
</div>
{% for expert in site.experts %}
<div class="experts-rail">
  <div class="people-block">
    <img src="{{expert.photo}}" alt="" class="expert-details--photo">
    <div class="expert-details--metadata">
      <h3>{{ expert.title }}</h3>
      {% for expertise in expert.expertise %}
        <p class="expert-details--expertise">
          {% if expertise == 'Economic Growth' %} <a href="/our-work/solutions/economic-growth/"><svg class="hexer" viewBox="0 0 126 146" preserveAspectRatio="xMinYMax meet"><use xlink:href="#hexer"></use></svg> Economic Growth</a>{% endif %} {% if expertise == 'Governance' %} <a href="/our-work/solutions/governance/"><svg class="hexer-red" viewBox="0 0 126 146" preserveAspectRatio="xMinYMax meet"><use xlink:href="#hexer-red"></use></svg> Governance</a>{% endif %}</p>
      {% endfor %}
      {% for region in expert.regions %}
        <p class="expert-details--regions">
          {% if region == 'Sub-Saharan Africa' %} <a href="/our-work/regions/sub-saharan-africa/"><svg class="globe-blue" viewBox="0 0 72 72" preserveAspectRatio="xMinYMax meet"><use xlink:href="#globe-blue"></use></svg> Sub-Saharan Africa</a> </svg> {% endif %} {% if region == 'Eastern Europe and Central Asia' %} <a href="/our-work/regions/sub-saharan-africa/"><svg class="globe-purple" viewBox="0 0 72 72" preserveAspectRatio="xMinYMax meet"><use xlink:href="#globe-purple"></use></svg> Eastern Europe & Central Asia</a>{% endif %}
        </p>
      {% endfor %}
    </div>
    <div class="expert-summary">
      <p class="expert-details--title">{{ expert.job-title }}</p>
      <p>{{ expert.summary }}</p>
    </div>
    <a href="{{ expert.url }}" class="primary-block--button expert-button">Read More <svg class="redirect" viewBox="0 0 36 70" preserveAspectRatio="xMinYMax meet"><use xlink:href="#redirect"></use></svg></a>
  </div>
  <hr>
</div>
{% endfor %}