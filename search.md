---
title: Search
position: 8
layout: default
---

<script src="https://cdn.jsdelivr.net/npm/instantsearch.js@2.2.1/dist/instantsearch.min.js"></script>

<input id="search-box">

  <div id="rev-box">
    <div class="spinner">
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    </div>
  </div>

  <hr class="break">

  <div id="refine"></div>

  <div id="hits"></div>  

{% raw %}

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
  apiKey: 'a773dcb4e565198a31f353490e3652d8',
  indexName: 'dai',
  searchParameters: {
    attributesToSnippet: ["excerpt_text:30", "text:30", "url"],
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
      templates: {
        empty: 'No results',
        item: '<a class="alg-link" href="{{url}}"><h3 class="alg-title">{{{_highlightResult.title.value}}}</h3></a><span class="alg-text">{{{_snippetResult.excerpt_text.value}}}</span><br><hr>'
      }
    })
  );

search.addWidget(
  instantsearch.widgets.refinementList({
    container: '#refine',
    attributeName: 'solutions',
    operator: 'or',
    limit: 10,
    transformData: function(item){
    if(item.label == "Include Primary and/or Secondary Solutions" || item.label == "Agriculture and Food Security" || item.label == "Business Environment Reform" || item.label == "Clean Energy and Energy Efficiency" || item.label == "Climate Change Adaptation and Mitigation" || item.label == "Conflict and Vulnerability Analysis" || item.label == "Countering Extremism" || item.label == "The DAI Maker Lab" || item.label == "Decentralization and Local Government Management" || item.label == "Emerging Infectious Diseases" || item.label == "Financial Services" || item.label == "Gender" || item.label == "Health and Livelihoods" || item.label == "Health Governance" || item.label == "Innovation and Entrepreneurship" || item.label == "Institutional and Policy Reform" || item.label == "Land Tenure and Property Rights" || item.label == "Law and Justice" || item.label == "Legislative Strengthening" || item.label == "Local Content and Supply Chain Management" || item.label == "Market Insight and Development" || item.label == "Natural Resource Management" || item.label == "Nutrition and Food Security" || item.label == "Peace-Building and Political Transition" || item.label == "Peace-building and State-building" || item.label == "Public Administration, Civil Service Reform, and Human Resources Management" || item.label == "Public Financial Management" || item.label == "Public-Private Partnerships" || item.label == "Security and Justice Development" || item.label == "Security and Justice" || item.label == "Stability" || item.label == "Stabilization" || item.label == "Sustainable and Accountable Health Services" || item.label == "Sustainable Livelihoods" || item.label == "Trade" || item.label == "Transition and Stabilization Programming" || item.label == "Value Chain Development for Agribusiness and Other Sectors" || item.label == "Voice and Accountability" || item.label == "Water and Sanitation Services and Management"  || item.label == "gender" || item.label == "Social Strategy"){
        item.hide = "true";
      }else if(item.label == ""){
        item.hide = "true";
      }else if(item.label == ""){
        item.hide = "true";
      }else if(item.label == "Economic Growth"){
        item.icon = "econ-badge"
      }else if(item.label == "Governance"){
        item.icon = "gov-badge"
      }else if(item.label == "Environment and Energy"){
        item.icon = "env-badge"
      }else if(item.label == "Energy"){
        item.icon = "env-badge"
      }else if(item.label == "Health"){
        item.icon = "health-badge"
      }else if(item.label == "health"){
        item.icon = "health-badge"
      }else if(item.label == "Fragile States"){
        item.icon = "stability-badge"
      }else if(item.label == "Digital"){
        item.icon = "ict-badge"
      }else if(item.label == "Sustainable Business"){
        item.icon = "corp-badge"
      }
     return item;
     },
    templates: {
      header: 'Further Refine Results by Solution:',
      item: '{{^hide}}<span class="refine-button"><svg class="{{icon}} badge" viewBox="0 0 101 100" preserveAspectRatio="xMinYMaxmeet"><use xlink:href="#{{icon}}"></use></svg>{{ label }}</span>{{/hide}}'
    }
  })
);

search.start();

</script>

{% endraw %}