---
layout: default
title: Open AI prompt training
permalink: /d-ai
---
{% assign sortedProjects = site.projects | sort_by: "end" %}
{% for project in sortedProjects %}
  <p>{{project.end}}</p>
{% endfor %}

{"prompt": "", "completion": ""}