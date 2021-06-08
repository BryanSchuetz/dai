---
title: DAI and the European Union
permalink: "/who-we-are/global-reach/european-union-office/projects"
summary: The European Union (EU) is the world’s largest development donor. DAI, with
  its long-term presence on the European continent and the recent acquisition of Human
  Dynamics, is a key partner in the implementation of the EU global strategy for international
  development and cooperation.
hero: true
regions: Eastern Europe and Central Asia
related: true
country-page: true
layout: node
---

<div class="block-project">
  <h1>Articles</h1>
  <hr>
  {% for article in site.data.eu-pubs %}
  <div class="project-blocke">
      <h3>{{ article.title }}</h3>
      {% if article.summary %}<p>{{ article.summary | truncate: 350 | markdownifyc }}</p>{% endif %}
      <a href="{{ article.link }}" target="blank" class="primary-block--button expert-button">Read More <svg class="redirect" viewBox="0 0 36 70" preserveAspectRatio="xMinYMax meet"><use xlink:href="#redirect"></use></svg></a>
      <hr>
    </div>
  {% endfor %}
</div>
<div class="block-people">
  <h1>News</h1>
  <hr>
  {% assign european-news = site.news | where:'clients','European Union' | sort:'date' | reverse  %}
  {% for article in european-news %}
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