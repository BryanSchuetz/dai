---
layout: default
published: false
---

{% comment %} # Recent Projects  
<table>
{% for project in site.projects %}
{% if project.end == 2023 %}
  <tr><td>{{ project.title }}</td><td>{{ project.client }}</td></tr>
{% endif %}
{% endfor %}
</table> {% endcomment %}
