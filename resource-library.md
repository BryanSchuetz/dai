---
title: Resource Library
summary: A growing collection of print publications focused on Health.
layout: default
published: false
---
<h1 style="margin-bottom: 2.5rem;">Health Resrouce Library</h1>
{%- for resource in site.data.resources -%}
  <div class="resource" style="margin-bottom: 2rem;">
    <img src="https://assetify-dai.com/resource-library/thumbnail/{{ resource.docThumbnail }}" alt="" class="resource-thumb" style="width: 100px; float: left; margin-right: 2rem; clear: left;">
    <h2 class="resource-title"><a href="https://assetify-dai.com/resource-library/{{ resource.docFilename }}" class="resource-link">{{ resource.docTitle }}</a></h2>
    <p class="resource-tags" style="font-size: .8rem;">{{ resource.organization }}, {{ resource.docType }}</p>
    <p class="resource-summary">{{ resource.docSummary }}</p>
  </div>
  <hr>
{%- endfor -%}