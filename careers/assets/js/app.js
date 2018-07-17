'use strict';

var vm = new Vue({
    el: '#app',
    data: {
        searchKeyword: '',
        searchLocation: '',
        searchFunctionalArea: '',
        applyLink: 'https://chm.tbe.taleo.net/chm04/ats/careers/requisition.jsp?org=DAINC&cws=1&rid=',
        results: [],
        locations: [],
        functionalAreas: [],
        pagination: {
            page: 1,
            totalPages: 0,
            from: 0,
            to: 20,
            perPage: 20
        }
    },
    methods: {
        goToPage: function goToPage(page) {
            this.pagination.page = page;
            this.pagination.from = page * this.pagination.perPage - this.pagination.perPage;
            this.pagination.to = this.pagination.from + this.pagination.perPage;
            // console.log(page);
        }
    },
    computed: {
        filteredByAll: function filteredByAll() {
            if (this.searchLocation || this.searchFunctionalArea) {
                var res = getByFunctionalArea(getByLocation(getByKeyword(this.results, this.searchKeyword.toLowerCase()), this.searchLocation), this.searchFunctionalArea);
            } else {
                var res = getByFunctionalArea(getByLocation(getByKeyword(this.results, this.searchKeyword.toLowerCase()), this.searchLocation), this.searchFunctionalArea).slice(this.pagination.from, this.pagination.to);
            }
            // console.log("Jobs: " + res.length);
            return res;
        },
        filteredByKeyword: function filteredByKeyword() {
            return getByKeyword(this.results, this.searchKeyword);
        },
        filteredByLocation: function filteredByLocation() {
            return getByLocation(this.results, this.searchLocation);
        },
        filteredByFunctionalArea: function filteredByFunctionalArea() {
            return getByFunctionalArea(this.results, this.searchFunctionalArea);
        },
        getLocations: function getLocations() {
            var string = '';
            var area = '';
            var unique = [];
            $.each(this.results, function (index, value) {
                if (value.candidateSearchLocation.length > 0) {
                    // console.log(index + " -> " + value.reqFunctionalArea);
                    area = value.candidateSearchLocation + ",";
                    string += area;
                }
            });
            array = string.split(',');
            $.each(array, function (index, value) {
                if (checkValue(value, unique) == 'Not exist' && value !== "") {
                    unique.push(value);
                    // console.log('pushed');
                }
            });
            this.locations = unique.sort();
        },
        getFunctionalAreas: function getFunctionalAreas() {
            var string = '';
            var area = '';
            var unique = [];
            $.each(this.results, function (index, value) {
                if (value.reqFunctionalArea.length > 0) {
                    // console.log(index + " -> " + value.reqFunctionalArea);
                    area = value.reqFunctionalArea + ",";
                    string += area;
                }
            });
            array = string.split(',');
            $.each(array, function (index, value) {
                if (checkValue(value, unique) == 'Not exist' && value !== "") {
                    unique.push(value);
                    // console.log('pushed');
                }
            });
            this.functionalAreas = unique.sort();
        }
    },
    created: function created() {
        var client = algoliasearch('R7MRY12BR6', 'd134ac8345ae2ef6748df0bae1e1050d');
        var index = client.initIndex('taleo');
        // only query string
        index.search({ query: '', hitsPerPage: 1000 }, function searchDone(err, content) {
            if (err) throw err;
            // console.log(content.hits);
            vm.results = content.hits;
            vm.pagination.totalPages = Math.ceil(content.hits.length / vm.pagination.to);
        });

        // Get parameter values if they exist
        var urlParams = new URLSearchParams(window.location.search);
        // console.log(urlParams.get('keywords')); // "manager"

        if (urlParams.get('keywords')) {
            this.searchKeyword = urlParams.get('keywords');
        } else {
            // add 'else' since v-model was removed
            this.searchKeyword = document.getElementById('keywords').value;
        }

        if (urlParams.get('location')) {
            this.searchLocation = urlParams.get('location');
        } else {
            // add 'else' since v-model was removed
            this.searchLocation = document.getElementById('location').value;
        }

        if (urlParams.get('functional_area')) {
            this.searchFunctionalArea = urlParams.get('functional_area');
        } else {
            // add 'else' since v-model was removed
            this.searchFunctionalArea = document.getElementById('searchFunctionalArea').value;
        }
    },
    mounted: function mounted() {
        if (this.searchLocation || this.searchFunctionalArea) {
            var res = getByFunctionalArea(getByLocation(getByKeyword(this.results, this.searchKeyword.toLowerCase()), this.searchLocation), this.searchFunctionalArea);
            this.results = res;
        } else {
            var res = getByFunctionalArea(getByLocation(getByKeyword(this.results, this.searchKeyword.toLowerCase()), this.searchLocation), this.searchFunctionalArea).slice(this.pagination.from, this.pagination.to);
            this.results = res;
        }
    }
});

function getByKeyword(results, keyword) {
    var search = keyword.trim();
    if (!search.length) return results;
    return results.filter(function (item) {
        return item.jobTitle.toLowerCase().indexOf(search) > -1;
    });
}

function getByLocation(results, location) {
    if (!location) return results;
    return results.filter(function (item) {
        return item.candidateSearchLocation.includes(location);
    });
}

function getByFunctionalArea(results, area) {
    if (!area) return results;
    return results.filter(function (item) {
        return item.reqFunctionalArea.includes(area);
    });
}

function checkValue(value, arr) {
    var status = 'Not exist';
    for (var i = 0; i < arr.length; i++) {
        var name = arr[i];
        if (name == value) {
            status = 'Exist';
            break;
        }
    }
    return status;
}