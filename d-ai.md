---
title: Open AI prompt training
permalink: "/d-ai"
published: false
layout: default
---

{% assign sortedProjects = site.projects |  sort_by: 'date' %}

{% for project in sortedProjects %}
<p><strong>{{project.date}}:</strong> <a href="{{project.url}}">{{project.title}}</a></p>
{% endfor %}
