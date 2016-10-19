---
title: United Kingdom Management Team
permalink: "/who-we-are/global-reach/united-kingdom/contacts/management"
layout: node
---

Multicultural, multilingual, and multidisciplinary to the core—global in outlook and approach—DAI’s staff are steeped in the challenges of delivering development solutions in the field. They are committed to sharing our innovation and experience to inform international development practices worldwide.
{% assign contacts = site.contacts | where: 'group', 'Management' | sort: 'sort-order' %}
{% for contact in contacts %}
<div class="contact">
  <p><strong>{{ contact.title }}</strong><br>{{ contact.job-title }} | <a href="mailto:{{ contact.email }}">{{ contact.email }}</a></p>
  <div class="contact-image">
    <img src="{{ contact.image }}" alt="{{ contact.title }}" />
  </div>
  <div class="contact-summary">
    <p>{{ contact.summary }}</p>
  </div>
</div>
  {% unless forloop.last %} <hr> {% endunless %}
{% endfor %}
