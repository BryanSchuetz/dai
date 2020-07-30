---
title: DAI and the European Union
permalink: "/who-we-are/global-reach/european-union-office/contacts"
layout: node
summary: The European Union (EU) is the world’s largest development donor. DAI, with
  its long-term presence on the European continent and the recent acquisition of Human
  Dynamics, is a key partner in the implementation of the EU global strategy for international
  development and cooperation.
hero: true
---

# Our Team

Multicultural, multilingual, and multidisciplinary to the core—global in outlook and approach—DAI’s staff are steeped in the challenges of delivering development solutions in the field. They are committed to sharing our innovation and experience to inform international development practices worldwide.

{% assign contacts = site.contacts | where: 'group', 'Europe' | sort: 'sort-order' %}
{% for contact in contacts %}
<div class="contact">
  <h2>{{ contact.title }}</h2><p>{{ contact.job-title }}</p>
  <div class="contact-image">
    <img src="{{ contact.image }}" alt="{{ contact.title }}" />
  </div>
  <div class="contact-summary">
    <p>{{ contact.summary | markdownify | remove_first:"<p>" | remove_first: "</p>"}}</p>
  </div>
</div>
  {% unless forloop.last %} <hr> {% endunless %}
{% endfor %}