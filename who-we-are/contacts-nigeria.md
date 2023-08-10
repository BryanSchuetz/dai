---
title: DAI in Nigeria
permalink: "/who-we-are/global-reach/nigeria/contacts/management-business"
summary: Nigeria is Africa’s most populous nation and largest economy, a country of
  almost unimaginable promise. But like many emerging nations it faces the development
  challenges that come with industrialization and growth. Our extensive in-country
  team works with public and private sector clients to realize Nigeria's extraordinary
  potential.
hero: true
layout: node
---

# Our Team

Multicultural, multilingual, and multidisciplinary to the core—global in outlook and approach—DAI’s staff are steeped in the challenges of delivering development solutions in the field. They are committed to sharing our innovation and experience to inform international development practices worldwide. 

<!--more-->



<div class="contact">
  <h2>Joe Abah</h2><p>Nigeria Country Director</p>
  <div class="contact-image">
    <img src="https://www.dai.com/uploads/Dr.-Joe-Abah.jpg" alt="Joe Abah" />
  </div>
  <div class="contact-summary">
    <p>
      Originally trained as a barrister in Nigeria, Joe Abah gained extensive experience in the <a href="http://dai-global-developments.com/articles/in-nigeria-governance-champions-can-transform-resource-wealth-into-development-results/">governance sector</a>, working on public sector reform programs for the U.K. Prime Minister’s Office. He has spent more than 10 years managing governance programs in Nigeria for the U.K. Department for International Development, including on the DAI-led State Partnership for <a href="https://www.dai.com/our-work/projects/nigeria-state-partnership-accountability-responsiveness-and-capability-sparc">Accountability Responsiveness and Capability</a> project.</p>

    <ul>
    <li>Ph.D., Maastricht University, The Netherlands</li>
    <li>M.A., business law, London Guildhall University, United Kingdom</li>
    <li>Bachelor of Laws, University of Calabar, Nigeria</li>
    </ul>
  </div>
</div>
<hr>
<div class="contact">
  <h2>Judith Ogedegbe</h2><p>Nigeria Executive Director</p>
  <div class="contact-image">
    <img src="/uploads/Judith%20Ogedegbe.jpg" alt="Judith Ogedegbe" />
  </div>
  <div class="contact-summary">
    <p>
      Judith Ogedegbe serves as Executive Director for DAI in Nigeria, responsible for all of DAI’s operations in Nigeria. She started her career with Shell Petroleum Development Company. Having completed her master's degree in human resource management and development, with extensive executive education from the Harvard Business School and London Business School of Finance, she has developed an executive-focused client relationship management style, serving multiple clients and organisations.</p>

    <ul><li>M.A., human resource management and development, University of Manchester</li></ul>
  </div>
</div>
<hr>
{% assign contacts = site.contacts | where: 'group', 'Nigeria' | sort: 'title' %}
{% for contact in contacts %}
<div class="contact">
  <h2>{{ contact.title }}</h2><p>{{ contact.job-title }}</p>
  <div class="contact-image">
    <img src="{{ contact.image }}" alt="{{ contact.title }}" />
  </div>
  <div class="contact-summary">
    <p>{{ contact.summary | markdownify | remove:"<p>" | remove:"</p>"}}</p>
  </div>
</div>
  {% unless forloop.last %} <hr> {% endunless %}
{% endfor %}
