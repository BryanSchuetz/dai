---
title: DAI in Nigeria
permalink: "/who-we-are/global-reach/nigeria/contacts/management-business"
layout: node
summary: Nigeria is Africa’s most populous nation and largest economy, a country of
  almost unimaginable promise. But like many emerging nations it faces the development
  challenges that come with industrialization and growth. With offices in Lagos and
  Abuja, our extensive in-country team works with public and private sector clients
  to realize Nigeria's extrordinary potential.
hero: true
---

# Our Team

Multicultural, multilingual, and multidisciplinary to the core—global in outlook and approach—DAI’s staff are steeped in the challenges of delivering development solutions in the field. They are committed to sharing our innovation and experience to inform international development practices worldwide. 

<!--more-->

{% assign contacts = site.contacts | where: 'group', 'Nigeria' | sort: 'title' %}
{% for contact in contacts %}
<div class="contact">
  <h2>{{ contact.title }}</h2><p>{{ contact.job-title }} | <a href="mailto:{{ contact.email }}">{{ contact.email }}</a></p>
  <div class="contact-image">
    <img src="{{ contact.image }}" alt="{{ contact.title }}" />
  </div>
  <div class="contact-summary">
    <p>{{ contact.summary | markdownify | remove:"<p>" | remove:"</p>"}}</p>
  </div>
</div>
  {% unless forloop.last %} <hr> {% endunless %}
{% endfor %}
