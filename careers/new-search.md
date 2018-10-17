---
title: Search
layout: default
permalink: "/careers/new-search"
careers: true
---
<section class="hero--search">
  <div class="container">
    <div class="row">
      <div class="col-md-10">
        <h1 class="title">Search</h1>
      </div>
    </div>
  </div>
</section>
<section class="search-results" id="app">
<div class="container">
<div class="row">
<div class="col-sm-4 col-sm-push-8 col--form" style="z-index: 09;">
<div class="search-form">
  <h2 class="form--title">Filter Jobs by</h2>
  <form action="search.html" method="GET">
    <div class="form-group">
      <label for="keywords" class="sr-only">Keywords</label>
      <input type="text" name="keywords" id="keywords" :value="searchKeyword" placeholder="Keywords"> <!-- v-model="searchKeyword" -->
    </div>
    <div class="form-group">
      <label for="location" class="sr-only">Location</label>
      <select :id="getLocations" id="location" name="location" :value="searchLocation">
      <!-- v-model="searchLocation" -->
      <option value="" selected>Select a Location</option>
      <option v-for="location in locations" :value="location">{%raw%}{{ location }}{%endraw%}</option>
      </select>
      </div>
    <div class="form-group">
      <label for="searchFunctionalArea" class="sr-only">Job Type</label>
      <select :title="getFunctionalAreas" id="searchFunctionalArea" name="functional_area" :value="searchFunctionalArea">
      <!-- v-model="searchFunctionalArea" -->
      <option value="" selected>Select a Functional Area</option>
      <option v-for="area in functionalAreas" :value="area">{%raw%}{{ area }}{%endraw%} </option>
      </select>
    </div>
    <div class="form-group">
      <button type="submit" class="btn btn-success btn-block">
      Start Your Search <img src="assets/build/img/icons/arrow-button.svg" alt="Arrow icon">
      </button>
      </div>
      </form>
    </div>
  </div>
  <div class="col-sm-8 col-sm-pull-4 col--results">
    <div class="jobs" v-if="filteredByAll && filteredByAll.length > 0">
      <div class="job job--1" v-for="(result, index) in filteredByAll">
        <h2 class="job--title">
        <a :href="applyLink + result.jobCode" target="_blank">{%raw%}{{ result.jobTitle }}{%endraw%}</a></h2>
        <h3 class="job--sub" v-if="result.reqFunctionalArea"> {% raw %}{{ result.reqFunctionalArea.join(', ') }}{% endraw %}</h3>
        <a :href="applyLink + result.jobCode" class="btn btn-primary" target="_blank"> Apply Now <img src="assets/build/img/icons/arrow-button.svg" alt="Arrow icon"></a>
      </div>
    <!-- /.job -->
    </div>
    <div v-else>
      <div class="job job--1">
        <h2 class="job--title"> No jobs found </h2>
      </div>
    </div>
  </div>
<div class="col-md-12">
<nav aria-label="Page navigation" v-if="!searchKeyword && !searchLocation && !searchFunctionalArea">
<ul class="pagination"><li v-if="pagination.page !== 1"><a href="javascript:void(0);" aria-label="Previous" @click="goToPage(pagination.page - 1)"><span aria-hidden="true">&laquo;</span></a></li><li v-for="index in pagination.totalPages" @click="goToPage(index)" :title="index" :class="{'active': pagination.page == index }"><a href="javascript:void(0);"> {{ index }} </a></li>
<li v-if="pagination.page < pagination.totalPages">
<a href="javascript:void(0);" aria-label="Next" @click="goToPage(pagination.page + 1)"><span aria-hidden="true">&raquo;</span></a></li>
</ul>
</nav>
</div>
</div>
</div>
</section>