---
title: Leadership
permalink: "/who-we-are/leaders"
related: false
redirect_from:
- "/who-we-are/leadership"
layout: node
summary: Our Global Executive Team ensures that DAI’s passion for development is delivered with the discipline of a business. Embracing the rigors of the marketplace—competition and innovation—they set the standards for a company dedicated to delivering both development results and development value. The Global Executive Team is led by Jim Boomgard, who reports to DAI’s [Board.](/who-we-are/leadership/board.html)
---

<!-- Our Global Executive Team ensures that DAI’s passion for development is delivered with the discipline of a business. Embracing the rigors of the marketplace—competition and innovation—they set the standards for a company dedicated to delivering both development results and development value. The Global Executive Team is led by Jim Boomgard, who reports to DAI’s [Board.](/who-we-are/leadership/board.html)

<hr> -->
{% assign leaders = site.leaders | sort: 'sort-order' %}
{% for leader in leaders %}
  <div class="people-block">
    <img src="{{leader.image}}" alt="" class="people-photo">
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
