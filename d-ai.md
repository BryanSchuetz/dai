---
title: Open AI prompt training
permalink: "/d-ai"
layout: default
---

{% assign sortedProjects = site.projects | sort_by: "end" %}
{% for project in sortedProjects %}
  <p>{{project.end}}</p>
{% endfor %}

{"prompt": "", "completion": ""}