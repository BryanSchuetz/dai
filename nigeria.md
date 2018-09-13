---
title: DAI in Nigeria
layout: node
summary: Nigeria is Africa’s most populous nation and largest economy, a country of almost unimaginable promise, but like many emerging nations they face the development challenges that come with industrialization and growth. As development professionals, we see in Nigeria a fertile opportunity to make an enormous difference in people’s lives.
permalink: "/our-work/the-regions/sub-saharan-africa/nigeria"
hero: true
regions: Sub-Saharan Africa
published: false
---

<aside><p><a href="/uploads/nigeria-timeline.pdf" class="float-left"><img src="/uploads/nigeria-timeline-thumb-two.jpg" alt="DAI in Nigeria Timeline"></a>DAI has a history of work in Nigeria going back to the 1970s, and is currently implementing half a dozen major projects for clients including the U.K. Department for International Development, the U.S. Agency for International Development, and the Chevron-funded Partnership Initiatives for the Niger Delta. The projects are <a href="/our-work/projects/nigeria-water-sanitation-and-hygiene-coordination-project-wcp">coordinating water, sanitation, and hygiene initiatives</a>; empowering women to serve as <a href="/our-work/projects/nigeria-women-for-health-w4h">nurses and midwives in Northern Nigeria</a>; promoting more <a href="/our-work/projects/nigeria-state-partnership-accountability-responsiveness-and-capability-sparc">accountable, responsive, and capable state and federal governments</a>; and boosting incomes through <a href="/our-work/projects/nigeria-market-development-programme-made">investment and market systems in the Niger Delta</a>.</p></aside>

# Women for Health in Nigeria

Northern Nigeria suffers from critical health sector human resource challenges. Up to 90 percent of women deliver their babies without a skilled birth attendant present in northern Nigeria, compared to 35 percent of women in the southern region of the country. And in Jigawa state, there are only five nurses per 100,000 people, compared to Enugu state in the Southeast with 59 per 100,000 people. 

<script id="infogram_0_90f68290-7bc4-43d7-a3d8-702791e146a5" title="Distribution of Healthcare Workers in Nigeria" src="https://e.infogram.com/js/dist/embed.js?Rsd" type="text/javascript"></script>

We're helping the U.K. Department for International Development tackle this problem by empowering women as service providers in five states in northern Nigeria.

<a href="/our-work/projects/nigeria-women-for-health-w4h" target="blank" class="primary-block--button expert-button">Read More <svg class="redirect" viewBox="0 0 36 70" preserveAspectRatio="xMinYMax meet"><use xlink:href="#redirect"></use></svg></a>

<br>
<br>

# Accountable, Responsive, and Capable Government

Inefficient resource management, corruption, and a lack of accountability have undermined Nigeria's ability to translate economic progress into inclusive growth and improved public services for more Nigerians. Advancements in public administration, public financial management, and enhanced policy are crucial in helping the Nigerian government provide better services to its citizens and reduce high levels of poverty.

<script id="infogram_0_a72fe19a-ad10-4eaa-ae8f-636b35a5903f" title="Nigerian Poverty Rate" src="https://e.infogram.com/js/dist/embed.js?tge" type="text/javascript"></script>

To promote progress in these key areas, we're helping the Nigerian government to more effectively manage resources and provide more responsive and accountable services to its citizens.

<a href="/our-work/projects/nigeria-state-partnership-accountability-responsiveness-and-capability-sparc" target="blank" class="primary-block--button expert-button">Read More <svg class="redirect" viewBox="0 0 36 70" preserveAspectRatio="xMinYMax meet"><use xlink:href="#redirect"></use></svg></a>

<br>
<br>

# Market Systems and Modern Slavery: Reducing poverty and human trafficking in Nigeria

Despite having the largest economy in Africa, around half of Nigeria’s population still lives in extreme poverty. A few hundred miles east of the new skyscrapers and shopping malls of Nigeria’s commercial capital of Lagos, the Niger Delta—made up of nine oil-producing states and home to more than 31 million people—defines the country’s stark contrast in living conditions. Even though it is a major oil-producing region, much of the Delta’s population lives in remote villages and survives on subsistence farming. Exacerbating this poverty is a lack of modern agricultural equipment and supplies that farmers need to improve crop yields, as well as limited access to markets in which to sell their harvests.

[![Made Activities Infographic](/uploads/made-thumbnail-nigeria.jpg)](https://www.dai.com/uploads/Achievements%20of%20MADE%201-a44a95.jpg)

The [Market Development in the Niger Delta Project (MADE)](/our-work/projects/nigeria-market-development-programme-made) is promoting inclusive, pro-poor growth for farmers and entrepreneurs. This market systems development approach will help address the root causes of outward migration that have led thousands to fall victim to human traffickers in Libya and Europe. By connecting vulnerable populations with desirable and well-paying jobs at home, MADE aims to reduce the number of Nigerians who attempt to migrate work abroad only to end up trapped in modern slavery.

<a href="http://dai-global-developments.com/articles/using-market-driven-strategies-to-reduce-poverty-and-human-trafficking-in-nigeria/?source=daidotcom" target="blank" class="primary-block--button expert-button">Read More <svg class="redirect" viewBox="0 0 36 70" preserveAspectRatio="xMinYMax meet"><use xlink:href="#redirect"></use></svg></a>

<br>

<div class="block-project">
  <h1>Projects</h1>
  <hr>
  {% assign nigeria-projects = site.projects | where:'country','Nigeria' | sort:'end' | reverse%}
  {% for project in nigeria-projects limit:9 %}
  <div class="project-block">
      <h3>{{ project.title }}</h3>
      {% if project.summary %}<p>{{ project.summary | markdownify }}</p>{% endif %}
      <a href="{{ project.url }}" target="blank" class="primary-block--button expert-button">Read More <svg class="redirect" viewBox="0 0 36 70" preserveAspectRatio="xMinYMax meet"><use xlink:href="#redirect"></use></svg></a>
      <hr>
    </div>
  {% endfor %}
</div>
<div class="block-people">
  <h1>News</h1>
  <hr>
  {% assign nigeria-news = site.news | where:'country','Nigeria' | sort:'date' | reverse  %}
  {% for article in nigeria-news %}
    <div class="project-block">
      <h3>{{ article.title }}</h3>
      {% if article.summary %}<p>{{ article.summary | markdownify }}</p>{% endif %}
      <a href="{{ article.url }}" target="blank" class="primary-block--button expert-button">Read More <svg class="redirect" viewBox="0 0 36 70" preserveAspectRatio="xMinYMax meet"><use xlink:href="#redirect"></use></svg></a>
      <hr>
    </div>
  {% endfor %}
</div>