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
.facet-item{
  text-transform: capitalize;
}
#rev-box{
  margin-bottom: 2rem;
}
.menu-item{
  cursor: pointer;
}
.menu-item--label{
  text-transform: capitalize;
}
.ais-menu--item__active{
  color: #54aa4f;
}
.ais-menu--item{
  float: left;
  margin-right: 1rem;
  border: 1px solid black;
  width: 30%;
  padding: .5rem;
}
.ais-menu--list{
clear: right;
}
.break{
  margin-bottom: 1rem;
}
</style>
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
    attributesToSnippet: ["excerpt", "text:30"] 
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
        item: '<a class="alg-link" href="{{_highlightResult.url.value}}"><h3 class="alg-title">{{{_highlightResult.title.value}}}</h3></a><span class="alg-text">{{{_snippetResult.text.value}}}</span><br><hr>'
      }
    })
  );

search.start();

</script>
{% endraw %}