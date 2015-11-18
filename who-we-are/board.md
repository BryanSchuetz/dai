---
title: Board
layout: node
parent: who-we-are
---

Our Board—comprising internal and external directors—ensures that DAI is serving the interests of its employee owners and fulfilling its mission to make a difference in the world.

<hr>
{% assign members = site.members | sort: 'sort-order' %}
{% for member in members %}
  <div class="people-block">
    <img src="{{member.thumbnail}}" alt="" class="people-photo">
    <div class="people-details">
      <h3>{{ member.title }}</h3>
    </div>
    <div class="people-summary">
      <p>{{ member.summary }}</p>
    </div>
    <a href="{{ member.url }}" class="primary-block--button people-button">Read More <svg class="redirect" viewBox="0 0 36 70" preserveAspectRatio="xMinYMax meet"><use xlink:href="#redirect"></use></svg></a>
  </div>
  <hr>
{% endfor %}
