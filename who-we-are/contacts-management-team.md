---
title: Global Offices
permalink: "/who-we-are/global-reach/united-kingdom/contacts/management"
layout: node
redirect_from:
- "/who-we-are/global-reach/dai-europe/contacts/management-team"
summary: 'Since 1970, we have worked in more than 150 countries, from stable societies
  and high-growtheconomies to challenging environments racked by political or military
  conflict. At any one time we are likely to have active projects in 90 or more countries.
  This worldwide portfolio is supported from corporate offices in Belgium, the United
  Kingdom, and the United States.

'
hero: true
---

# United Kingdom Management Team

Multicultural, multilingual, and multidisciplinary to the core—global in outlook and approach—DAI’s staff are steeped in the challenges of delivering development solutions in the field. They are committed to sharing our innovation and experience to inform international development practices worldwide.

<!--more-->

{% assign contacts = site.contacts | where: 'group', 'Management' | sort: 'sort-order' %}
{% for contact in contacts %}
<div class="contact">
  <h2>{{ contact.title }}</h2><p>{{ contact.job-title }} | <a href="mailto:{{ contact.email }}">{{ contact.email }}</a></p>
  <div class="contact-image">
    <img src="{{ contact.image }}" alt="{{ contact.title }}" />
  </div>
  <div class="contact-summary">
    <p>{{ contact.summary }}</p>
  </div>
</div>
  {% unless forloop.last %} <hr> {% endunless %}
{% endfor %}
