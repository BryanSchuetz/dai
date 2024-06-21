---
published: false
layout: default
---

# Active Projects
<table>
{% for project in site.projects %}
{% if project.end >= 2024 %}
  <tr><td>{{ project.title }}</td><td><a href="https://www.dai.com{{ project.url }}">https://www.dai.com{{ project.url }}</a></td></tr>
{% endif %}
{% endfor %}
</table>
