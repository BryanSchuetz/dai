---
title: Search
position: 8
layout: default
---
<script src="https://cdn.jsdelivr.net/npm/instantsearch.js@2.2.1/dist/instantsearch.min.js"></script>

<input id="search-box" />
<div id="rev-box"></div>
<br>
<hr class="break">
<div id="hits">
  <h2>Projects</h2>
  <div id="hits"></div>  
</div>

{% raw %}

<script type="text/javascript">
  const search = instantsearch({
  appId: 'R7MRY12BR6',
  apiKey: 'a773dcb4e565198a31f353490e3652d8',
  indexName: 'dai',
  searchParameters: {
    attributesToSnippet: ["excerpt", "text:30", "url"] 
  }
});

search.addWidget(
    instantsearch.widgets.searchBox({
      container: '#search-box',
      placeholder: 'Search',
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
      header: 'Result Type:',
      item: '<div class="menu-item"><span class="menu-item--label">{{ label }} ({{ count }} items)</h3></span>'
    },
    transformData: function(item){
    if(item.value == "node"){
      item.label = "News";
    }else{
    item.value == item.label;
    }
  return item;
  }
  })
);

search.addWidget(
    instantsearch.widgets.infiniteHits({
      container: '#hits',
      hitsPerPage: 5000,
      transformData: {
        item: function(hit) {
          if(hit.layout == 'project'){
          hit.show = true;
        }
          return hit;
        }
      },
      templates: {
        empty: 'No results',
        item: '<a class="alg-link" href="{{_sbuooetResult.url.value}}"><h3 class="alg-title">{{{_highlightResult.title.value}}}</h3></a><span class="alg-text">{{{_snippetResult.text.value}}}</span><br><hr>'
      }
    })
  );

search.start();

</script>
{% endraw %}