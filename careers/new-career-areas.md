---
title: Career Areas
layout: default
permalink: "/careers/new-career-areas"
careers: true
---
  <section class="hero career-areas">
  <div class="container">
    <div class="row">
      <div class="col-md-11">
        <h1 class="title line">
            Whatever your role at DAI, your <br class="hidden-xs">work will make a difference. 
        </h1>
        <p class="sub--title"> 
            We invite you to explore our job opportunities.   
        </p>
      </div>
    </div>
  </div>

<button id="advancedSearchBtn" class="btn btn-success btn-search">
    Advanced <br>Search <img class="icon" src="/careers/assets/build/img/icons/arrow-button.svg" alt="Arrow icon">
</button> 

<div class="visible-lg visible-md">
<div class="form" id="careerSearchForm">
<div class="container-fluid">
<div class="row">
<div class="col-md-12" id="app">
<form action="search.html" method="GET">
<div class="form-group">
    <label for="keywords">Keywords</label>
    <input type="text" name="keywords" id="keywords" v-model="searchKeyword" placeholder="Keywords" class="form-control">
</div>
<div class="form-group">
    <label for="location">Location</label>
    <select v-model="searchLocation" :title="getLocations" id="location" name="location" class="form-control">
        <option value="" selected>Select a Location</option>
        <option v-for="location in locations" :value="location"> {{ location }} </option>
    </select>
</div>
<div class="form-group">
    <label for="searchFunctionalArea">Functional Area</label>
    <select v-model="searchFunctionalArea" :title="getFunctionalAreas" id="searchFunctionalArea" name="functional_area" class="form-control">
        <option value="" selected>Select a Functional Area</option>
        <option v-for="area in functionalAreas" :value="area"> {{ area }} </option>
    </select>
</div> 
<div class="form-group">
    <button type="submit" class="btn btn-success btn-block">
        Start Your Search <img src="/careers/assets/build/img/icons/arrow-button.svg" alt="Arrow icon">
    </button>
</div>
</form>
</div>
</div>
</div>
<button id="close-form" class="close">
<div class="sr-only">Close</div>
&times;
</button>
</div>    </div>

</section><section class="career-area">
<div class="container">

<div class="row">
<div class="content">
<div class="content--title">
<h1 class="title line"> Technical / Consulting </h1>
</div>
<div class="content--box">
<p> Our technical teams reach across disciplines to shape integrated solutions to the most challenging issues in global development. We seek corporate office-based technical experts to serve as thought leaders, enhancing DAI’s leadership in the technical sectors in which we work, as well as technical advisors to design, support, and implement activities in both long-term and short-term assignments on projects in the field. </p>
<a href="search.html?functional_area=Technical" class="btn btn-primary">
    View Opportunities For <br class="visible-xs">This Position Area
    <img class="icon" src="/careers/assets/build/img/icons/arrow-button.svg" alt="Arrow icon">
</a>
</div>
</div>
<div class="image technical"></div>
</div>

</div>
</section>

<div class="image-banner career-area technical"></div><section class="career-area">
<div class="container">

<div class="row">
<div class="content">
<div class="content--title">
<h1 class="title line"> Project </h1>
</div>
<div class="content--box">
<p> Our projects span the full spectrum of development disciplines, including crisis mitigation and stability, governance and public sector management, agriculture and agribusiness, private sector development and financial services, economics and trade, women’s economic empowerment, public health, water and natural resources management, and energy and climate change. </p>
<a href="search.html?functional_area=Project+Management" class="btn btn-primary">
    View Opportunities For <br class="visible-xs">This Position Area
    <img class="icon" src="/careers/assets/build/img/icons/arrow-button.svg" alt="Arrow icon">
</a>
</div>
</div>
<div class="image project"></div>
</div>

</div>
</section>

<div class="image-banner career-area project"></div><section class="career-area">
<div class="container">

<div class="row">
<div class="content">
<div class="content--title">
<h1 class="title line"> Proposal </h1>
</div>
<div class="content--box">
<p> DAI develops technically complex, compliant, and highly competitive proposals in response to client requests. As part of the proposal development process, we recruit talented individuals for future long- and short-term assignments. </p>
<a href="search.html?functional_area=Proposal" class="btn btn-primary">
    View Opportunities For <br class="visible-xs">This Position Area
    <img class="icon" src="/careers/assets/build/img/icons/arrow-button.svg" alt="Arrow icon">
</a>
</div>
</div>
<div class="image proposal"></div>
</div>

</div>
</section>

<div class="image-banner career-area proposal"></div><section class="career-area">
<div class="container">

<div class="row">
<div class="content">
<div class="content--title">
<h1 class="title line"> Corporate </h1>
</div>
<div class="content--box">
<p> In our offices in the United States and in Europe, our corporate staff in finance, IT, communications, legal, human resources, administration, and security positions work closely and collaboratively with our technical, project, and field staff in support of DAI’s global efforts to shape a more livable world. </p>
<a href="search.html?functional_area=Corporate+Services" class="btn btn-primary">
    View Opportunities For <br class="visible-xs">This Position Area
    <img class="icon" src="/careers/assets/build/img/icons/arrow-button.svg" alt="Arrow icon">
</a>
</div>
</div>
<div class="image corporate"></div>
</div>

</div>
</section>