---
title: United States
permalink: "/who-we-are/global-reach/united-states/"
layout: node
---

From its earliest days as a start-up in 1970, DAI has maintained a presence in or near Washington, D.C. The three founders’ office was a tiny establishment in Georgetown. Today, our office in Bethesda, Maryland, just outside Washington, is home to some 350 employees.

Our CEO and most of our Executive Leadership Team are based in Bethesda, which offers close proximity to many of our U.S. and international clients, as well as partner organizations, think tanks, and other focal points for the international development community.

Washington, with its exceptional global transportation infrastructure, is also the operating base for many of our leading technical experts and support staff critical to the success of our projects worldwide—from compliance and contracts specialists to finance, information technology, human resources, and project management professionals.

Washington is also one of the key venues for engaging on issues of importance to our industry and the development community at large, through associations such as the Council of International Development Companies and the Society for International Development, whose D.C. chapter is one of the world’s most active.
A local as well as a global organization, DAI is a proud member of the Montgomery County Chambers of Commerce.

## Office Contacts

Multicultural, multilingual, and multidisciplinary to the core—global in outlook and approach—DAI’s staff are steeped in the challenges of delivering development solutions in the field. They are committed to sharing our innovation and experience to inform international development practices worldwide.

### Management & Business Development:

{% assign contacts = site.contacts | where: 'group', 'Business Management' | sort: 'sort-order' %}
{% for contact in contacts limit:2 %}
<div class="contact">
  <p><strong>{{ contact.title }}</strong><br>{{ contact.job-title }} | <a href="mailto:{{ contact.email }}">{{ contact.email }}</a></p>
  <div class="contact-image">
    <img src="{{ contact.image }}" alt="{{ contact.title }}" />
  </div>
  <div class="contact-summary">
    <p>{{ contact.summary }}</p>
  </div>
</div>
  {% unless forloop.last %}<hr>{% endunless %}
{% endfor %}
<a href="/who-we-are/global-reach/united-states/contacts/management-business/" class="primary-block--button contacts-button">More Management Team Contacts <svg class="redirect" viewBox="0 0 36 70" preserveAspectRatio="xMinYMax meet"><use xlink:href="#redirect"></use></svg></a>
