---
title: Energy and Resources Group
layout: node
related: false
redirect_from:
  - /erg

promos:
- title: "**Project**: _Niger Delta Electricity Sector Assesment and Investment Strategy_"
  link: http://dai.com/sites/default/files/erg/chevron.pdf
- title: "**Project**: _Local Content Demand and Supply Study for Liquefied Natural_
    Gas"
  link: http://dai.com/sites/default/files/erg/wb.pdf
- title: "**Project**: _Corporate Social investment Program for Entrepreneurs in Ghana_"
  link: 'http://dai.com/sites/default/files/erg/kosmos.pdf '
- title: "**Analysis**: _Unlocking Content_"
  link: http://dai-global-developments.com/articles/unlocking-local-content-harnessing-the-power-of-data-driven-decision-making/
- title: "**Video**: _Kosmos Innovation Center_"
  link: https://www.youtube.com/watch?v=A3-VyczktO8
---

DAI’s Energy and Resources Group expertly navigates the intersection of development and business, enabling companies and communities to prosper together. Drawing on our 46 years of experience in emerging markets, we help companies enter new markets quickly, expand existing operations, and reduce investment and operational risks by engaging productively with local vendors and communities.

![Mine](/uploads/full-mine.jpg)

## Services

The Energy and Resources Group works with companies in the oil, gas, mining, and renewable energy sectors to provide solutions to business needs, including:

* Local Content and Supply Chain Management. We use our suite of analytical tools and data sets to optimize local supply chains and maximize local content capture.
* Corporate Social Investment. We design and manage impactful initiatives that promote community development and improve human capital to achieve our clients’ sustainability goals.
* Government and Community Engagement. We secure our clients’ social license to operate by assessing above-ground risk and establishing trusted partnerships with key stakeholders to mitigate those risks.

<aside>
<h2>Our Unique Approach</h2>
<p>DAI uses empirical evidence and technical analysis to empower our clients to spend smarter. We are a full-service provider with the flexibility to offer:</p>
<ul>
  <li>Surge and long-term capacity to supplement in-house teams</li>
  <li>Strategy design and market entry analysis</li>
  <li>Program design, inception, and implementation</li>
  <li>Performance monitoring, evaluation, and reporting</li>
</ul>
</aside>

## Featured Experts

Global in outlook and approach, ERG’s staff are steeped in the challenges of delivering business solutions in the developing world.

{% assign contacts = site.contacts | where: 'group', 'erg' | sort: 'sort-order' %}
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
<a href="/who-we-are/our-team/{{ contact.title | slugify }}" class="primary-block--button expert-button">Read More <svg class="redirect" viewBox="0 0 36 70" preserveAspectRatio="xMinYMax meet"><use xlink:href="#redirect"></use></svg></a>
  {% unless forloop.last %}<hr>{% endunless %}
{% endfor %}
