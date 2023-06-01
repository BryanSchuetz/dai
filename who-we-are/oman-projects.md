---
title: DAI in Oman
permalink: "/who-we-are/global-reach/oman/projects"
published: false
summary: 'DAI’s office in Oman was established in November 2018 as a point of entry
  to expand its services in the Gulf region. Since inception it has focused on the
  objectives of Oman Vision 2040, particularly on promoting a competitive economy
  that is productive and diversified, driven by an innovative private sector, and
  achieving sustainable development for the country.

'
hero: true
regions: Middle East and North Africa
related: true
country-page: true
layout: solution
---

<div class="block-project">
  <h1>Projects</h1>
  <hr>
  {% assign oman-projects = site.projects | where:'country','Oman' | sort:'end' | reverse%}
  {% for project in oman-projects %}
  {%- unless project.end < current_year -%}
  <div class="project-block">
      <h3>{{ project.title }}</h3>
      {% if project.summary %}<p>{{ project.summary | markdownify }}</p>{% endif %}
      <a href="{{ project.url }}" target="blank" class="primary-block--button expert-button">Read More <svg class="redirect" viewBox="0 0 36 70" preserveAspectRatio="xMinYMax meet"><use xlink:href="#redirect"></use></svg></a>
      <hr>
    </div>
  {%- endunless -%}
  {% endfor %}
</div>
<div class="block-people">
  <h1>News</h1>
  <hr>
  {% assign oman-news = site.news | where:'country','Oman' | sort:'date' | reverse  %}
  {% for article in oman-news %}
  {%- if jekyll.environment == 'prod' -%}
    {%- if article.date > site.date -%}
    <div class="project-block">
      <h3>{{ article.title }}</h3>
      {% if article.summary %}<p>{{ article.summary | markdownify }}</p>{% endif %}
      <a href="{{ article.url }}" target="blank" class="primary-block--button expert-button">Read More <svg class="redirect" viewBox="0 0 36 70" preserveAspectRatio="xMinYMax meet"><use xlink:href="#redirect"></use></svg></a>
      <hr>
    </div>
    {%- endif -%}
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