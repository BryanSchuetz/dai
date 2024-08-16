---
published: false
layout: default
---

# Projects
<table>
{{ site.projects | size }} projects
{% for project in site.projects %}
  <tr><td>{{ project.title }}</td><td><a href="https://www.dai.com{{ project.url }}">https://www.dai.com{{ project.url }}</a></td><td>{{project.start}}</td><td>{{project.client}}</td><td>{{project.country}}</td></tr>
{% endfor %}
</table>
