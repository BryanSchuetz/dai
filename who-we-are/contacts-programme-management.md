---
layout: node
title: United Kingdom Programme Managers
parent: who-we-are
permalink: /who-we-are/global-reach/united-kingdom/contacts/programme-managers/
---
Multicultural, multilingual, and multidisciplinary to the core—global in outlook and approach—DAI’s staff are steeped in the challenges of delivering development solutions in the field. They are committed to sharing our innovation and experience to inform international development practices worldwide.
{% assign contacts = site.contacts-programme-management | sort: 'sort-order' %}
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
  {% if forloop.first %}<hr>{% endif %}
{% endfor %}
