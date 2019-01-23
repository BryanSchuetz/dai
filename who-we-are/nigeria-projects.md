---
title: DAI in Nigeria
permalink: "/who-we-are/global-reach/nigeria/projects"
published: false
summary: Nigeria is Africa’s most populous nation and largest economy, a country of
  almost unimaginable promise. But like many emerging nations it faces the development
  challenges that come with industrialization and growth. With offices in Lagos and
  Abuja, our extensive in-country team works with public and private sector clients
  to realize Nigeria's extrordinary potential.
hero: true
regions: Sub-Saharan Africa
related: true
country-page: true
layout: node
---

<div class="block-project">
  <h1>Projects</h1>
  <hr>
  {% assign nigeria-projects = site.projects | where:'country','Nigeria' | sort:'end' | reverse%}
  {% for project in nigeria-projects %}
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
  {% assign nigeria-news = site.news | where:'country','Nigeria' | sort:'date' | reverse  %}
  {% for article in nigeria-news %}
    <div class="project-block">
      <h3>{{ article.title }}</h3>
      {% if article.summary %}<p>{{ article.summary | markdownify }}</p>{% endif %}
      <a href="{{ article.url }}" target="blank" class="primary-block--button expert-button">Read More <svg class="redirect" viewBox="0 0 36 70" preserveAspectRatio="xMinYMax meet"><use xlink:href="#redirect"></use></svg></a>
      <hr>
    </div>
  {% endfor %}
</div>
{% include help-desk.html %}