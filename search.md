---
title: Search
position: 8
layout: default
---
<script src="https://cdn.jsdelivr.net/npm/instantsearch.js@2.2.1/dist/instantsearch.min.js"></script>
<style type="text/css">
#search-box{
  width: 100%;
  padding: .5rem;
  font-size: 1rem;
  position: relative;
  padding-left: 2rem;
  padding-right: 2rem;
}
.ais-search-box{
  position: relative;
}
#sbx-icon-search-13{
  height: 1rem;
  width: 1rem;
  position: relative;
  top: -1.8rem;
  left: .4rem;
}
.ais-search-box--reset{
  height: 1rem;
  width: 1rem;
  position: absolute;
  top: .8rem;
  right: .4rem;
}
.algolia__result-highlight{
  font-weight: bold;
}
h3.alg-title{
  color: #54aa4f;
}
h3.alg-title:hover{
  color: #43873f;
}
</style>
<input id="search-box" />
<div id="rev-box"></div>
<div id="hits"></div>
{% raw %}
<script type="text/javascript">
  const search = instantsearch({
  appId: 'R7MRY12BR6',
  apiKey: 'a773dcb4e565198a31f353490e3652d8',
  indexName: 'dai',
  autoselect: true,
  searchParameters: {
    attributesToSnippet: ["excerpt", "text:30"] 
  }
});

search.addWidget(
    instantsearch.widgets.searchBox({
      container: '#search-box',
      placeholder: 'Search',
      autoselect: true
    })
  );

search.addWidget(
  instantsearch.widgets.refinementList({
    container: '#rev-box',
    attributeName: 'layout',
    operator: 'or',
    limit: 10,
    templates: {
      header: 'Type',
      item: '<label><input type="checkbox" value="{{label}}"> {{ label }} <span>{{ count }}</span></label>'
    },
    transformData: function(item){
    if(item.label == "node"){
      item.label = "Page";
    }else{
    item.label = item.label;
    }
  return item;
  }
  })
);

search.addWidget(
    instantsearch.widgets.hits({
      container: '#hits',
      autoselect: true,
      templates: {
        empty: 'No results',
        item: '<a class="alg-link" href="{{_highlightResult.url.value}}"><h3 class="alg-title">{{{_highlightResult.title.value}}}</h3></a><span class="alg-text">{{{_snippetResult.text.value}}}</span><br><hr>'
      }
    })
  );

search.start();

</script>
{% endraw %}