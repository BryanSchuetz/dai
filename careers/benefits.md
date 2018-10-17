---
title: Benefits
layout: default
permalink: "/careers/benefits"
careers: true
---
<section class="hero benefits">
    <div class="container">
        <div class="row">
            <div class="col-md-11">
                <h1 class="title line">
                    Caring for DAI Families 
                </h1>
                <p class="sub--title"> 
                    Shaping a more livable world begins at home. 
                </p>
            </div>
        </div>
    </div>

    <button id="advancedSearchBtn" class="btn btn-success btn-search">
        Advanced <br>Search <img class="icon" src="assets/build/img/icons/arrow-button.svg" alt="Arrow icon">
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
                            Start Your Search <img src="assets/build/img/icons/arrow-button.svg" alt="Arrow icon">
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

</section><section class="split-three">
    <div class="container with-quote">
        <div class="row">

                            <h1 class="title line"> Join DAI </h1>
                        
                            <div class="content">
                    <p>DAI supports employee health and wellness and cultivates workplaces in which everyone can grow professionally. We also encourage our employees to have fun and we do everything we can to make work a pleasure.</p>                </div>
                        
            
                <!-- Images -->
                <div class="image image--2" style="background: url('assets/build/img/split-three/bg-02.jpg') no-repeat center center / cover;"></div>

                <div class="image image--3" style="background: url('assets/build/img/split-three/bg-03.jpg') no-repeat center center / cover;"></div>

            
                            <div class="quote-section">
                    <div class="wrapper">
                        <div class="item item--1">
                            <div class="box">
                                <h1 class="quote">We need the best people we can find and we need them to stay – or come back. We need to ensure that our people are able to grow, are compensated fairly, receive the benefits that are important to them, and are able to achieve a healthy work-life balance.</h1>
                                <p class="by">Jim Boomgard – <br class="hidden-xs">President and Chief Executive Officer</p>
                            </div>
                        </div>
                    </div>
                </div>
                        
        </div>
    </div>
</section><section class="split-image">
    <div class="container">
        <div class="row">

            <div class="image" style="background: url('assets/build/img/split-image/bg-01.jpg') no-repeat center top / cover;"></div> 
            
            <div class="content">
                <div class="content--box">
                                            <h1 class="title"> Health and Well-being </h1>
                                                                
        <p>DAI provides medical, family, financial, and personal support programs to provide an individualized employee experience.</p>
        <ul>
            <li><p>Insurance coverage</p></li>
            <li><p>Financial insurance and investment opportunities</p></li>
            <li><p>Generous paid and unpaid time off programs</p></li>
            <li><p>Emergency evacuation coverage</p></li>
            <li><p>Confidential, free counseling services</p></li>
            <li><p>Wellness support through exercise expense subsidies and access to nearby exercise facilities</p></li>
        </ul>
        <p>At DAI, work-life balance matters. We offer employees generous paid and unpaid time off programs, as well as flexibility around work hours and location.</p>
                                        </div>
            </div>
            
        </div>
    </div>
</section><section class="content--full grey">
    <div class="container">
        <div class="row">
            <div class="col-md-8 content--container">
                <h1 class="title line">
                    Professional Development 
                </h1>
                <div class="copy">
                    <p>Recognizing that the key to DAI’s long-term success is the professional development and career growth of our people, we provide our employees with the tools they need to succeed and advance. We offer internal and external training/education programs as well as career development support through: collaboration and knowledge sharing; leadership development programs; mentorships and coaches; transfer opportunities; and real career ladders.</p> 
                </div>
            </div>
        </div>
    </div>
</section><section class="banner--video" style="background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('assets/build/img/videos/benefits.jpg') no-repeat center center / cover;">
    <video autoplay muted>
        <source src="https://s3.amazonaws.com/dai-assets/videos/banner/why-dai.mp4" type="video/mp4">
    </video>
</section><section class="quote-content ">
    <div class="container">
        <div class="row">
            <div class="col-md-5">
                <div class="content--title quote-mark quote-mark--5">
                                            <h1 class="quote"> There are strong mentors here and a huge suite of online learning modules. </h1>
                                                                <p class="by"> James, Director – <br class='hidden-xs'>DAI Europe PMU Support </p>
                                    </div>
            </div>
            <div class="col-md-7">
                                <div class="content--box ">
                                            
        <h2>Career Growth</h2>
        <ul>
            <li><p>Company-wide training</p></li>
            <li><p>Global leadership and management program</p></li>
            <li><p>Support for external job-related training, study programs, and professional memberships</p></li>
            <li><p>Formal and informal coaching</p></li>
            <li><p>Competitive, progressive and transfer career opportunities</p></li>
            <li><p>Entry-level rotational and internship programs</p></li>
        </ul>
                                                            </div>
            </div>
        </div>
    </div>
</section><section class="work-and-fun">
    <div class="container">

        <div class="row">
            <div class="content">
                <div class="content--title">
                    <h1 class="title line">Work and Fun</h1>
                </div>
                <div class="content--box">
                    <p>DAI is proud of our reputation for being a great place to work. We work hard, but we also have fun participating in events and activities that bring us together as colleagues and friends.</p>
                    <p>DAI offers employee-focused formal and informal events and “extras” to make our work environments more flexible, accessible, and fun. Employees of all career levels, from entry-level through senior leadership, enjoy:</p>
                    <div class="lists">
                        <div class="list list--1">
                            <ul>
                                <li>
                                    <p>Global Award Programs</p>
                                </li>
                                <li>
                                    <p>Fundraising Events</p>
                                </li>
                                <li>
                                    <p>Golf Tournaments</p>
                                </li>
                                <li>
                                    <p>Family Picnics</p>
                                </li>
                                <li>
                                    <p>Global Staff Conferences</p>
                                </li>
                            </ul>
                        </div>
                        <div class="list list--2">
                            <ul>
                                <li>
                                    <p>Holiday Parties</p>
                                </li>
                                <li>
                                    <p>5K Fun Runs</p>
                                </li>
                                <li>
                                    <p>Cricket and Softball teams</p>
                                </li>
                                <li>
                                    <p>Ice Cream Fridays</p>
                                </li>
                                <li>
                                    <p>Flexible Work Schedules</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="image"></div>
        </div>

        <div class="row quote-container">
            <div class="col-md-6">
                <div class="quote--image"></div>
            </div>
            <div class="col-md-6">
                <div class="quote--title">
                    <h1 class="quote">DAI recognizes family demands and challenges and it finds ways to accommodate personal needs.</h1>
                    <p class="by">Miguel, Director – <br class="hidden-xs">Project Delivery Team, Global</p>
                </div>
            </div>
        </div>

    </div>
</section><