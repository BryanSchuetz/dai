---
title: United Kingdom Portfolio Coordinators
permalink: "/who-we-are/global-reach/united-kingdom/contacts/portfolio-coordinators/"
layout: node
parent: who-we-are
---

Multicultural, multilingual, and multidisciplinary to the core—global in outlook and approach—DAI’s staff are steeped in the challenges of delivering development solutions in the field. They are committed to sharing our innovation and experience to inform international development practices worldwide.
{% assign contacts = site.contacts | where: 'group', 'Portfolio Coordinators' | sort: 'sort-order' %}
{% for contact in contacts %}
<div class="contact">
  <p><strong>{{ contact.title }}</strong><br>{{ contact.job-title }} | <a href="mailto:{{ contact.email }}">{{ contact.email }}</a></p>
  <div class="contact-image">
    <img src="{{ contact.photo }}" alt="{{ contact.title }}" />
  </div>
  <div class="contact-summary">
    <p>{{ contact.summary }}</p>
  </div>
</div>
  {% unless forloop.last %} <hr> {% endunless %}
{% endfor %}
