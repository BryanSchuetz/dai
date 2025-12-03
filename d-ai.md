---
title: Open AI prompt training
permalink: "/d-ai"
published: false
layout: default
---

{% assign sortedProjects = site.projects |  sort_by: 'date' %}
{% assign countries = "" | split: "" %}
{%raw%}
| Country         | Title           |
|-----------------|----------------|
{%endraw%}
{% for project in sortedProjects %}
{% if project.end >= 2025 and project.client != "U.S. Agency for International Development" %}
{% assign countries = countries | push: project.country %}
{%raw%}| {{ project.country }} | {{ project.title }} |{%endraw%}
{% endif %}
{% endfor %}
{% assign unique_countries = countries | uniq %}
Number of unique countries: {{ unique_countries | size }}
