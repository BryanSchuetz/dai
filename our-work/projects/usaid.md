---
layout: node
title: Projects for the U.S. Agency for International Development
parent: our-work
---
DAI projects cover the full spectrum of development disciplines. We are building local capacity to fight disease in outbreak hot spots around the world. We have trained local armed forces in civil-military relations in Africa, and we are active in the education sector in Pakistan. Working arm in arm with local people and organizations, we have tackled land tenure issues in Rwanda, helped Haiti’s hillside farmers raise their incomes, improved natural resource management in the Philippines, mitigated conflict in Liberia, and fostered responsive local governments in Serbia. In all of our projects, we emphasize inclusion, participation, and sustainability.

![USAID Project Map](/assets/images/who-we-are/usaid-projects.jpg)
{% assign sorted = site.projects | sort:"title" %}
{% for project in sorted %}
  {% if project.client == 'U.S. Agency for International Development' %}
<h3><a href="{{ project.url }}">{{ project.title }}</a></h3>
<p>{{ project.summary }}</p>
  {% endif %}
{% endfor %}
