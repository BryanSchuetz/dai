---
title: Leadership
permalink: "/who-we-are/leaders"
related: false
redirect_from:
- "/who-we-are/leadership"
layout: node
summary: From our Board to our executives to our in-country directors, DAI’s leaders
  ensure that our passion for development is executed with the discipline of a business.
  They set the standards for a [global workforce](/who-we-are/the-team) dedicated
  to delivering both transformational results and optimal value.
hero: true
---

{%- assign leaders = site.data.leadership -%}
{%- if jekyll.environment == 'prod' -%}
{%- assign leaders = leaders | shuffle -%}
{%- endif -%}

<div class="bulma">
  <div class="container">
    <div class="columns">
      <div class="column">
{%- for leader in leaders limit:8-%}
{%- unless leader.published == false -%}
<a class="bulma-card" href="{{leader.url}}">
   <div class="card is-child">
    <div class="card-image">
      <figure class="image">
        <img src="{{leader.image}}" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <!-- <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
          </figure>
        </div> -->
        <div class="media-content">
          <p class="title is-4">{{leader.name}}</p>
          <p class="subtitle is-6">{{leader.title}}</p>
        </div>
      </div>
      <div class="content">
        <p>{{leader.summary}}</p>
      </div>
    </div>
  </div>
</a>
{%- endunless -%}
{%- endfor -%}
    </div>
<div class="column">
{%- for leader in leaders offset:8 limit:8 -%}
{%- unless leader.published == false -%}
<a class="bulma-card" href="{{leader.url}}">
<div class="card is-child">
<div class="card-image">
  <figure class="image">
    <img src="{{leader.image}}" alt="Placeholder image">
  </figure>
</div>
<div class="card-content">
  <div class="media">
    <!-- <div class="media-left">
      <figure class="image is-48x48">
        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
      </figure>
    </div> -->
    <div class="media-content">
      <p class="title is-4">{{leader.name}}</p>
      <p class="subtitle is-6">{{leader.title}}</p>
    </div>
  </div>
  <div class="content">
    <p>{{leader.summary}}</p>
  </div>
</div>
</div>
</a>
{%- endunless -%}
{%- endfor -%}
</div>
  <div class="column">
    {%- for leader in leaders offset:16 limit:10 -%}
    {%- unless leader.published == false -%}
  <a class="bulma-card" href="{{leader.url}}">
    <div class="card is-child">
      <div class="card-image">
        <figure class="image">
          <img src="{{leader.image}}" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <!-- <div class="media-left">
            <figure class="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
            </figure>
          </div> -->
          <div class="media-content">
            <p class="title is-4">{{leader.name}}</p>
            <p class="subtitle is-6">{{leader.title}}</p>
          </div>
        </div>
        <div class="content">
          <p>{{leader.summary}}</p>
        </div>
      </div>
    </div>
  </a>
    {%- endunless -%}
    {%- endfor -%}
  </div>
  </div>
</div>
<!-- {% assign leaders = site.leaders | sort: 'sort-order' %}
{% for leader in leaders %}
  <div class="people-block">
    <img src="{{leader.image}}" alt="" class="people-photo">
    <div class="people-details">
      <h3>{{ leader.title }}</h3>
      <p>{{ leader.job-title }}</p>
    </div>
    <div class="people-summary">
      <p>{{ leader.summary }}</p>
    </div>
    <a href="{{ leader.url }}" class="primary-block--button people-button">Read More <svg class="redirect" viewBox="0 0 36 70" preserveAspectRatio="xMinYMax meet"><use xlink:href="#redirect"></use></svg></a>
  </div>
  <hr>
{% endfor %} -->
