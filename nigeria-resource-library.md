---
title: Nigeria Resource Library
summary: A growing collection of resources and publications from our offices in Nigeria.
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

# Nigeria Resource Library

By freely sharing what we learn, we have built a reputation as thought leaders who translate ideas into action and action into results. You can search through our collection of standalone resources below.

<script src="https://cdn.jsdelivr.net/npm/instantsearch.js@2.2.1/dist/instantsearch.min.js"></script>

<input id="search-box">
<hr class="break">
<div id="hits">
  <div class="spinner">
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
  </div>
</div>
<div id="rev-box">
</div>

<div id="refine"></div>  

{%- raw -%}

<script type="text/javascript">
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

var keywords = getUrlParameter('keywords');

  const search = instantsearch({
  appId: 'R7MRY12BR6',
  apiKey: '487bd4857da6a87b5d9e7a86271fd451',
  indexName: 'Nigeria Resource Library',
  searchParameters: {
    attributesToSnippet: ["docSummary:60", "docTitle"],
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
    instantsearch.widgets.infiniteHits({
      container: '#hits',
    //   transformData: function(item){
    // if(item.source){}
    //  return item;
    //  },
      templates: {
        empty: 'No results',
        item: '<a class="alg-link" href="https://dai-assets.s3.amazonaws.com/nigeria-resource-library/{{docFilename}}"><h3 class="alg-title">{{{docTitle}}}</h3></a><p style="font-size: .8rem; margin-bottom: .1rem;">{{#year}}{{year}} | {{/year}}<strong>{{organization}}</strong></p><img class="docThumbnail" style="width: 15%; margin-top: .5rem; margin-bottom: 0px; float: left; margin-right: 1rem; margin-bottom: .5rem;" src="https://dai-assets.s3.amazonaws.com/nigeria-resource-library/thumbnails/placeholder.jpg"/><span class="alg-text">{{#docSummary}}{{{_snippetResult.docSummary.value}}}{{/docSummary}}{{^docSummary}}{{{_snippetResult.summary.value}}}{{/docSummary}}</span><br><hr style="clear: left;">'
          }
        })
      );
search.addWidget(
  instantsearch.widgets.menu({
    container: '#rev-box',
    attributeName: 'docType',
    operator: 'or',
    limit: 3,
    sortBy: ["name:asc"],
    templates: {
      header: 'Filter Results by Document Type:',
      item: '<div class="menu-item"><span class="menu-item--label">{{ label }} </h3></span>'
    }
  })
);

// search.addWidget(
//   instantsearch.widgets.refinementList({
//                 container: '#refine',
//               attributeName: 'docType',
//               operator: 'or',
//               limit: 10,
//               sortBy: ["name:asc"],
//     templates: {
//                 header: 'Further Refine Results by Document Type:',
//       item: '{{^ hide}}<span class="refine-button">{{ label }}</span>{{/ hide}}'
//             }
//           })
//         );
        
        search.start();
        
</script>

{% endraw %}