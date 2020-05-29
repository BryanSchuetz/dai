---
title: Projects Closed in 2019 by Country
published: false
summary: A list of all projects that closed in 2019, grouped by country
layout: default
---

{% assign these_projects = site.projects  %}

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
{%- assign sorted_projects = these_projects -%}
{% for project in sorted_projects %}
  {% if project.end > 2019 %}
<tr>
<td style="text-align:left;">{{project.country}}</td>
<td style="text-align:left;"><a href="{{project.url}}">{{project.title}}</a></td>
</tr>
  {%- endif -%}
{%- endfor -%}
</tbody>
</table>