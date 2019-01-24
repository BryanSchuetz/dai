---
title: Resource Library
published: false
summary: A growing collection of print publications focused on Health.
layout: default
---

<!-- <h1 style="margin-bottom: 2.5rem;">Health Resrouce Library</h1>
{%- for resource in site.data.resources -%}
  <div class="resource" style="margin-bottom: 2rem;">
    <img src="https://assetify-dai.com/resource-library/thumbnail/{{ resource.docThumbnail }}" alt="" class="resource-thumb" style="width: 100px; float: left; margin-right: 2rem; clear: left;">
    <h2 class="resource-title"><a href="https://assetify-dai.com/resource-library/{{ resource.docFilename }}" class="resource-link">{{ resource.docTitle }}</a></h2>
    <p class="resource-tags" style="font-size: .8rem;">{{ resource.organization }}, {{ resource.docType }}</p>
    <p class="resource-summary">{{ resource.docSummary }}</p>
  </div>
  <hr>
{%- endfor -%} -->


<script src="https://cdn.jsdelivr.net/npm/instantsearch.js@2.2.1/dist/instantsearch.min.js"></script>

<input id="search-box">

<div id="rev-box">
  <div class="spinner">
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
  </div>
</div>

{%- raw -%}

script type="text/javascript">
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

var keywords = getUrlParameter('keywords');

  const search = instantsearch({
  appId: 'R7MRY12BR6',
  apiKey: '2eb09d538a98a073da44848ed195c79d',
  indexName: 'resource-library',
  searchParameters: {
    attributesToSnippet: ["docTitle", "docSummary", "organization", "solutions", "docType"],
     facetingAfterDistinct: true,
     query: keywords,
     snippetEllipsisText: '[&hellip;]'
  }
});

search.addWidget(
    instantsearch.widgets.searchBox({
      container: '#search-box',
      placeholder: 'Enter Search Terms',
      autofocus: 'true'
    })
  ); 

search.addWidget(
  instantsearch.widgets.menu({
    container: '#rev-box',
    attributeName: 'layout',
    operator: 'or',
    limit: 3,
    sortBy: ["count:desc","name:asc"],
    templates: {
      header: 'Filter Results by Document Type:',
      item: '<div class="menu-item"><span class="menu-item--label">{{ label }} ({{ count }} items)</h3></span>'
    }
  })
);

search.addWidget(
    instantsearch.widgets.infiniteHits({
      container: '#hits',
      templates: {
        empty: 'No results',
        item: '<a class="alg-link" href="{{url}}"><h3 class="alg-title">{{{_highlightResult.docTitle.value}}}</h3></a><span class="alg-text">{{#docSummary}}{{{_snippetResult.docSummary.value}}}{{/docSummary}}{{^doc_Summary}}{{{_snippetResult.summary.value}}}{{/docSummary}}</span><br><hr>'
      }
    })
  );

search.start();

</script>

{% endraw %}