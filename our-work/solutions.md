---
title: Solutions
permalink: "/our-work/the-solutions"
redirect_from:
- "/our-work/solutions"
summary: |
  Fifty-five years on the frontlines of global development confirm the interconnectedness
  of development challenges. Our development specialists reach across technical disciplines to shape the integrated development solutions that promise transformational development results.
hero: true
layout: node
---

{% assign primary_solutions = site.solutions | where:"type","primary" | sort: "title" %}
{% for solution in primary_solutions %}
<div class="solution-block">
  <h2 class="solution-title">
  {% if solution.newIcon %}
    {% include {{solution.newIcon}} %}
  {% else %}
    {{ solution.icon }} 
  {% endif %}
   {{ solution.title }}</h2>
  <p>{{ solution.summary }}</p>
  <a href="{{ solution.url }}" class="primary-block--button">Continue Reading <svg class="redirect" viewBox="0 0 36 70" preserveAspectRatio="xMinYMax meet"><use xlink:href="#redirect"></use></svg></a>
</div>
<hr>
{% endfor %}
