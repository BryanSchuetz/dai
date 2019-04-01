---
title: Recent Projects 
summary: A list of active projects, sorted by end date in reverse chronological order
layout: default
published: flase
---
<h1>Recent Projects</h1>

<p>
  A list of active projects sorted by end date. Theoretically, more recently signed projects will be higher up on the list.
</p>


{%- assign currentProjects =  site.projects | where_exp:"project","project.end > 2018" | sort: "end" | reverse -%}

{%- for project in currentProjects -%}
  <h2><a href="{{project.url}}">{{project.title}}</a></h2>
  <p>{{project.summary}}</p>
  <hr>
{%- endfor -%}