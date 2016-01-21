---
title: Solutions
layout: node
---

Forty years on the frontlines of global development confirm the interconnectedness of development challenges. Conflict mitigation touches on issues of effective civil society, legitimate governance, equitable use of natural resources, and poverty reduction. Poverty reduction in turn intersects with economic reform, global competitiveness, private sector engagement, and the prevalence of debilitating diseases. And so on. Our development specialists reach across technical disciplines to shape the integrated development solutions that promise transformational development results.

{% for solution in site.data.solutions %}
<div class="solution-block">
  <h2 class="solution-title">{{ solution.icon }} {{ solution.text }}</h2>
  <p>{{ solution.summary }}</p>
  <a href="{{ solution.path }}" class="primary-block--button">Continue Reading <svg class="redirect" viewBox="0 0 36 70" preserveAspectRatio="xMinYMax meet"><use xlink:href="#redirect"></use></svg></a>
</div>
<hr>
{% endfor %}
