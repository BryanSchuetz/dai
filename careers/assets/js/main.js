/* -----------------------------------
Mobile Navbar Dropdown
------------------------------------ */
$('#mMenu').click(function() {
    $(this).toggleClass('is-active');
    $('#mDropdown').slideToggle();
});

$(document).mouseup(function(e) { // remove 'active' dropdown if mouse clicking outside of navbar or dropdown
	if ( !$("#mDropdown").is(e.target) && $("#mDropdown").has(e.target).length === 0 && !$("section.navbar--main").is(e.target) && $("section.navbar--main").has(e.target).length === 0 ) { 
        if ( $('#mMenu').hasClass('is-active') ) {
            $('#mMenu').toggleClass('is-active');
            $("#mDropdown").slideToggle();
        }
	}
});


/* -----------------------------------
Timeline
------------------------------------ */
var $timeline       = $(".timeline-info--container");
var $timelineInfo   = $(".timeline-info--copy");

function updateBg($index) {
    return "url('assets/build/img/timeline/slide-" + $index + ".jpg')";
}

function updateIndicatorLength($index) {
    var dotIndex = $index + 1;
    var dotOffset = $timelineDates.find("li:nth-child(" + dotIndex + ")").offset().left;
    var indicatorOffset = $(".timeline-indicator").offset().left; 
    
    if($index >= 3) {
        var indicatorWidth = dotOffset - indicatorOffset + 30;
        $indicatorLine.css("transform-origin", "left center");
    } else {
        var indicatorWidth = indicatorOffset - dotOffset - 30;
        $indicatorLine.css("transform-origin", "right center");
    }
    
    $indicatorLine.css("transform", "scaleX(" + indicatorWidth + ")");
}

if($timeline.length)  {
    var $bgImageContainer   = $(".timeline--img");
    var $timelineSlide      = $(".timeline--slide");
    var $timelineDates      = $(".timeline--dates");
    var $indicatorLine      = $(".timeline-indicator--line");

    $timeline.slick({
        dots: true,
        dotsClass: "timeline--dots",
        fade: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 5000,
        appendDots: ".timeline--dates",
        appendArrows: ".timeline-arrows",
        prevArrow: "<button type='button' class='timeline-arrows--left'><span class='sr-only'>Left</span><i class='fa fa-chevron-left'></i></button>",
        nextArrow: "<button type='button' class='timeline-arrows--right'><span class='sr-only'>Right</span><i class='fa fa-chevron-right'></i></button>"
    });

    updateIndicatorLength(0);

    $timelineInfo.each(function(index){
        var $decade = $(this).data("decade");
        var $index = index + 1;

        $timelineDates.find("li:nth-child(" + $index + ")").append("<span>" + $decade + "</span>");
    });

    $timeline.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $timelineSlide.addClass("slide-change");
        updateIndicatorLength(nextSlide);
    });
    $timeline.on('afterChange', function(event, slick, currentSlide){
        $bgImageContainer.css("background-image", updateBg(currentSlide));
        $timelineSlide.removeClass("slide-change");
    });
}


/* -----------------------------------
Navbar Careers Dropdown (Desktop)
------------------------------------ */
function openCareerAreasDropdown() {
    $("#careers-dropdown").addClass('active');
}

function closeCareerAreasDropdown() {
    $("#careers-dropdown").removeClass('active');
}

$(document).mouseup(function(e) { // remove 'active' dropdown if mouse clicking outside of navbar or dropdown
	if ( !$("#careers-dropdown").is(e.target) && $("#careers-dropdown").has(e.target).length === 0 && !$("section.navbar--main").is(e.target) && $("section.navbar--main").has(e.target).length === 0  ) { 
        $("#careers-dropdown").removeClass('active');
	}
});


/* -----------------------------------
Navbar Careers Dropdown (Mobile)
------------------------------------ */
function openMCorporateDropdown(e) {
    $("#mCorporateDropdown").slideToggle();
    $('.dropdown-button').toggleClass('active');
}



/* -----------------------------------
Form & Advanced Search Button
------------------------------------ */
var formController = new ScrollMagic.Controller({globalSceneOptions: {offset: 500}});
new ScrollMagic.Scene({triggerElement: "section.hero--home"}) // build scene
	.setClassToggle("#careerSearchForm", "scroll") // add class toggle
	// .addIndicators() // add indicators (requires plugin)
    .addTo(formController);


var buttonController = new ScrollMagic.Controller({globalSceneOptions: {offset: 800}});
new ScrollMagic.Scene({triggerElement: "body"}) // build scene
	.setClassToggle("#advancedSearchBtn", "scroll") // add class toggle
	// .addIndicators() // add indicators (requires plugin)
    .addTo(buttonController);


$('#advancedSearchBtn').click(function() {
    $('#careerSearchForm').addClass('active'); // show Form
    $(this).removeClass('scroll'); // hide Button
});

// close button
$('#close-form').click(function() {
    $('#careerSearchForm').removeClass('active'); // remove/hide form
    $('#advancedSearchBtn').addClass('scroll'); // show button
});

$(document).mouseup(function(e) { 
	if ( !$("#careerSearchForm").is(e.target) && $("#careerSearchForm").has(e.target).length === 0 ) { // if 'click' outside of Form container element
        $("#careerSearchForm").removeClass('active'); // remove active Form
        if ( $("#careerSearchForm").hasClass('scroll') ) { // if Form is scrolling
            $('#advancedSearchBtn').addClass('scroll'); // show button
        }
	}
});

(function ($) {
    $(document).ready(function(){
        $(function () { 
            $(window).scroll(function () {
                if ( $("#careerSearchForm").hasClass('active') ) {
                    $('#advancedSearchBtn').removeClass('scroll'); // remove class if Form is still on user's screen
                }
            });
        });
    });
}(jQuery));