---
title: Open AI prompt training
permalink: "/d-ai"
published: false
layout: default
---

{% assign sortedProjects = site.projects |  sort_by: 'date' %}
{% assign countries = "" | split: "" %}
| Country         | Title           |
|-----------------|----------------|
{% for project in sortedProjects %}
{% if project.end >= 2025 and project.client != "U.S. Agency for International Development" %}
{% assign countries = countries | push: project.country %}
| {{ project.country }} | {{ project.title }} |
{% endif %}
{% endfor %}
{% assign unique_countries = countries | uniq %}
Number of unique countries: {{ unique_countries | size }}
