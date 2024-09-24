---
title: Migrations API
permalink: "/api-table"
published: false
layout: default
---

{% assign news = site.news |  sort_by: 'date' %}

<table>
  <thead>
    <tr>
      <th>Date</th>
      <th>Title</th>
      <th>Post-Type</th>
      <th>Body-Text</th>
      <th>URL</th>
      <th>Tags</th>
      <th>Regions</th>
    </tr>
  </thead>
  <tbody>
  {% for story in news %}
    <tr>
      <td>{{ story.date | date: "%m/%d/%Y" }}</td>
      <td>{{story.title}}</td>
      <td></td>
      <td>{{story.content | escape}}</td>
      <td>{{story.url}}</td>
      <td>{% for solution in story.solutions %}{{solution}}{% unless forloop.last %}, {% endunless %}{% endfor %}</td>
      <td>{{story.regions}}</td>
    </tr>
  {% endfor %}
  </tbody>
</table>
