---
title: United Kingdom
permalink: "/who-we-are/global-reach/the-united-kingdom"
layout: node
---

Our U.K.-based team delivers results for bilateral and multilateral donors, governments and private sector clients worldwide, often in difficult environments racked by insecurity and conflict. We work hand in hand with our counterparts in government and the private sector to identify where international best practices can be usefully applied and best tailored to the local context.

Our projects include: equipping struggling banks in the former Soviet bloc to better serve small businesses and the nascent private sector; implementing land tenure reform in Rwanda, Ethiopia and Mozambique; managing economic advocacy in Zambia; helping entrepreneurs in Palestine to create jobs and penetrate markets; transforming education in Pakistan; designing climate change adaptation strategy in Nepal; land use planning in Guyana and making law enforcement institutions in the Democratic Republic of the Congo more accountable. Our work is underpinned by decades of experience and proven methodologies in areas as diverse as public sector reform, trade and economic development, finance and microfinance, support to the land sector, food security and safety nets, climate change adaptation, crisis mitigation and recovery and Making Markets Work for the Poor.

DAI employs superior technical and managerial practitioners and consultants worldwide. Our project management systems have demonstrated their effectiveness in the world's largest development projects, so we can manage complex risks and mobilise a wide range of resources quickly, reliably, and cost-effectively. As the European platform for DAI we integrate a broad range of development and transition consulting expertise.

For more than 50 years, the true measure of our success has been the success of others and the continued benefit resulting from our work long after project completion. We design and implement every project with this result as our goal.

## Office Contacts

Multicultural, multilingual, and multidisciplinary to the core—global in outlook and approach—DAI’s staff are steeped in the challenges of delivering development solutions in the field. They are committed to sharing our innovation and experience to inform international development practices worldwide.

### Management Team:

{% assign contacts = site.contacts | where: 'group', 'Management' | sort: 'sort-order' %}
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
<a href="/who-we-are/global-reach/united-kingdom/contacts/management-team" class="primary-block--button contacts-button">More Management Team Contacts <svg class="redirect" viewBox="0 0 36 70" preserveAspectRatio="xMinYMax meet"><use xlink:href="#redirect"></use></svg></a>

### Portfolio Coordinators:

{% assign contacts = site.contacts | where: 'group', 'Portfolio Coordinators' | sort: 'sort-order' %}
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
<a href="/who-we-are/global-reach/united-kingdom/contacts/portfolio-coordinators" class="primary-block--button contacts-button">More Portfolio Coordinators <svg class="redirect" viewBox="0 0 36 70" preserveAspectRatio="xMinYMax meet"><use xlink:href="#redirect"></use></svg></a>
