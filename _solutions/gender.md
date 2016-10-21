---
title: Gender
date: 2016-01-22 00:11:14.114000000 Z
permalink: "/our-work/solutions/economic-growth-solutions/gender"
solutions:
- Economic Growth
layout: solution
---

DAI integrates gender programming across all our services: design, research, monitoring and evaluation, assessments, and implementation, as well as through our staffing of projects. We draw not only on tool kits, research, and theory—valuable as those things are—but on 40 years of field experience of what works, what does not, and why. Innovative where appropriate and results-driven in every case, our holistic approach founded on culturally sensitive techniques creates real change for women and men.

Our work in Afghanistan and Pakistan demonstrates what is achievable in even the most fragile and constrained environments, where inequality and physical violence against women inhibit equal opportunity for development. DAI’s results demonstrate that with the right tools and support, women triumph over the most extreme forms of discrimination to lead change in their societies that benefits all. DAI’s approach engages men and boys, recognizing the key role they play in addressing gender discrimination and advancing well-being.

Our in-house technical experts contributing to DAI’s gender-integrated approach include nutritionists, political scientists, lawyers, anthropologists, evaluation experts, and advisors in microfinance, private sector development, agriculture, environment, trade, health, livelihoods, ICT, and security sector and justice reform. DAI’s Gender Working Group brings together our latest thinking and develops crosscutting solutions integrating all these sectors.  

<h2>Our Experts</h2>
<hr>
{% assign experts = site.experts | sort:"lastname" %}
{% for expert in experts %}
  {% for solution in expert.solutions %}
    {% if solution == 'Gender' %}
<div class="people-block grid-item {% for expertise in expert.solutions %} {{ expertise | downcase | slugify }} {% endfor %}{% for region in expert.regions %} {{ region | slugify}} {% endfor %}">
  <div class="expert-detailslist--metadata">
    <h3 class="expert-details--name">{{ expert.title }}</h3>
    <p class="expert-details--title">{{ expert.job-title }}</p>
    </div>
    <div class="expert-summary">
      {% if expert.summary %}<p>{{ expert.summary | markdownify | remove:'<p>' | remove:'</p>' }}</p>{% endif %}
    </div>
    <a href="{{ expert.url }}" class="primary-block--button expert-button">Read More <svg class="redirect" viewBox="0 0 36 70" preserveAspectRatio="xMinYMax meet"><use xlink:href="#redirect"></use></svg></a>
    <hr>
</div>
    {% break %}
    {% endif %}
  {% endfor %}
{% endfor %}
<h2>Our Projects</h2>
<hr>
{% assign current_year = site.time | date:"%Y" | times:1 %}
{% for project in site.projects %}
  {% for solution in project.solutions %}
    {% if solution == "Gender" %}
    {% if project.end > current_year %}
<div class="project-block grid-item {% for solution in project.solutions %} {{ solution | slugify }} {% endfor %}{% for region in project.regions %} {{ region | slugify}} {% endfor %} {% for client in project.client %} {{ client | slugify }} {% endfor %}{% if project.end < current_year %} closed {% else %} active{% endif %}">
    <h3>{{ project.title }}</h3>
    {% if project.summary %}<p>{{ project.summary | markdownify }}</p>{% endif %}
    <a href="{{ project.url }}" class="primary-block--button expert-button">Read More <svg class="redirect" viewBox="0 0 36 70" preserveAspectRatio="xMinYMax meet"><use xlink:href="#redirect"></use></svg></a>
    <hr>
  </div>
    {% endif %}
    {% endif %}
  {% endfor %}
{% endfor %}
