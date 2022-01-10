---
title: DAI in Pakistan
permalink: "/who-we-are/global-reach/pakistan/projects"
summary: Home to almost a quarter of a billion people at the crossroads of Central
  Asia, the Asian Subcontinent, and the Gulf, Pakistan is both a rapidly growing economy
  and a perennial geopolitical hotspot, given its borders with Afghanistan, China,
  India, and Iran. DAI brings to Pakistan its global perspective, resources, and expertise,
  and a locally led team of world-class professionals based in Islamabad.
hero: true
regions: 
layout: solution
---

<div class="block-project">
  <h1>Projects</h1>
  <hr>
  {% assign pakistan-projects = site.projects | where:'country','Pakistan' | sort:'end' | reverse%}
  {% assign current_year = site.time | date:"%Y" | times:1 %}
  {% for project in pakistan-projects %}
  <div class="project-block">
    <h3>{{ project.title }}</h3>
    {% if project.summary %}<p>{{ project.summary | markdownify }}</p>{% endif %}
    <a href="{{ project.url }}" target="blank" class="primary-block--button expert-button">Read More <svg class="redirect" viewBox="0 0 36 70" preserveAspectRatio="xMinYMax meet"><use xlink:href="#redirect"></use></svg></a>
    <hr>
  </div>
  {% endfor %}
</div>
<div class="block-people">
  <h1>News</h1>
  <hr>
  {% assign pakistan-news = site.news | where:'country','Pakistan' | sort:'date' | reverse  %}
  {% for article in pakistan-news %}
  {%- if jekyll.environment == 'prod' -%}
    <div class="project-block">
      <h3>{{ article.title }}</h3>
      {% if article.summary %}<p>{{ article.summary | markdownify }}</p>{% endif %}
      <a href="{{ article.url }}" target="blank" class="primary-block--button expert-button">Read More <svg class="redirect" viewBox="0 0 36 70" preserveAspectRatio="xMinYMax meet"><use xlink:href="#redirect"></use></svg></a>
      <hr>
    </div>
  {%- else -%}
    <div class="project-block">
      <h3>{{ article.title }}</h3>
      {% if article.summary %}<p>{{ article.summary | markdownify }}</p>{% endif %}
      <a href="{{ article.url }}" target="blank" class="primary-block--button expert-button">Read More <svg class="redirect" viewBox="0 0 36 70" preserveAspectRatio="xMinYMax meet"><use xlink:href="#redirect"></use></svg></a>
      <hr>
    </div>
  {%- endif -%}
  {% endfor %}
</div>