---
layout: node
title: Leadership
parent: who-we-are
---

Our Executive Leadership Team ensures that DAI’s passion for development is delivered with the discipline of a business. Embracing the rigors of the marketplace—competition and innovation—they set the standards for a company dedicated to delivering both development results and development value. The Executive Leadership Team reports to DAI’s [Board of Directors](#).

<hr>

<!-- #FIXING:0 fix whitespace around thumbnail so it doesn't look so blank -->

{% for leader in site.leaders %}
  <div class="people-block">
    <img src="{{leader.thumbnail}}" alt="" class="people-photo">
    <div class="people-details">
      <h3>{{ leader.title }}</h3>
      <p>{{ leader.job-title }}</p>
    </div>
    <div class="people-summary">
      <p>{{ leader.summary }}</p>
    </div>
    <a href="{{ leader.url }}" class="primary-block--button people-button">Read More <svg class="redirect" viewBox="0 0 36 70" preserveAspectRatio="xMinYMax meet"><use xlink:href="#redirect"></use></svg></a>
  </div>
  <hr>
{% endfor %}
