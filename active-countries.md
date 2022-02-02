---
title: Active Countries
summary: A list of Countries with active projects
layout: default
published: false
---

<h1>Active Countries</h1>

<p>
  A list of active projects, and their country data.
</p>


{%- assign currentProjects =  site.projects | where_exp:"project","project.end > 2021"-%}

<table>
<colgroup>
<col style="text-align:left;"/>
<col style="text-align:left;"/>
</colgroup>

<thead>
<tr>
	<th style="text-align:left;">Country</th>
	<th style="text-align:left;">Project Name/Link</th>
</tr>
</thead>

<tbody>
{% for project in currentProjects %}
{%- for country in project.country -%}
<tr>
  <td style="text-align:left;">{{country}}</td>
  <td style="text-align:left;"><a href="https://www.dai.com{{project.url}}">{{project.title}}</a></td>
</tr>
{%- endfor -%}
{%- endfor -%}
</tbody>
</table>