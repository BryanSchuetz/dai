---
title: Open AI prompt training
permalink: "/d-ai"
published: false
layout: default
---
{% assign sortedProjects = site.projects |  sort_by: 'date' %}

{% for projects in sortedProjects %}

<p><strong>{project.date}</strong><a href="{project.permalink}">{project.title}</a></p>
{% endfor %}
