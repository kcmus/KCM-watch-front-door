
<template>
         
        <div id="pixel-anchor"></div>
        <header class="bg-white sticky-top p-0" id="kcmh">       
            <!-- first-row -->
            <div class="container px-4 row-1">
                <div class="row g-0">
                  <div class="col-2">
                    <div class="dropdown-end">
                      <a data-bs-toggle="dropdown" aria-expanded="false"><img class="region-map-icon" src="https://s3.amazonaws.com/libraries67.kcm.org/images/logos/region-icon-dark.svg" width="12" height="19"></a>
                      <button class="btn btn-outline-secondary dropdown-toggle kcmh-region-select" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Select a Region
                      </button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="https://www.kcm.org/">United States</a>
                        <a class="dropdown-item" href="http://www.kcm.org.za">Africa</a>
                        <a class="dropdown-item" href="http://www.kcm.org.au">Australia/Pacific</a>
                        <a class="dropdown-item" href="http://www.kcmcanada.ca">Canada</a>
                        <a class="dropdown-item" href="http://www.kcm.org.uk">Europe</a>
                        <a class="dropdown-item" href="http://www.kcm.org.ua">Ukraine</a>
                        <a class="dropdown-item" href="http://es.kcm.org">Español</a>
                        <a class="dropdown-item" href="https://pt.kcm.org">Português</a>
                      </div>
                    </div>
                  </div>
                  <div class="col flex-grow-1" id="kcm-header-search-box">
                    <div id="deskSearchWrap">
                      <form action="" autocomplete="off">
                        <input id="search" name="search" type="text" placeholder="Site Search..."><input id="search_submit" type="submit">
                      </form>
                    </div>
                  </div>
                  <div class="col-auto">
                    <ul class="nav justify-content-end kcmh-nav-member">
                      <li class="nav-item"><a class="nav-link" href="#"><span class="position-relative"><i class="bi bi-cart-fill"></i><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                              99+
                              <span class="visually-hidden">items in cart</span>
                            </span></span></a></li>
                      <li class="nav-item"><a class="nav-link" href="#">Shop</a></li>
                      <li class="nav-item"><a class="nav-link" href="#">Sign In</a></li>
                      <li class="nav-item"><a class="nav-link" href="#">My Account</a></li>
                      <li class="nav-item"><a class="nav-link" href="#">Sign Out</a></li>
                    </ul>
                  </div>
                </div>
            </div>
            <!-- first-row -->

            <!-- second-row -->
            <nav class="container-lg main-nav navbar navbar-expand-lg sticky-top px-4">
                  <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMobile" aria-controls="offcanvasMobile" aria-expanded="false" aria-label="Open Nav"><span class="navbar-toggler-icon"></span></button>
                  <a class="navbar-brand me-auto ms-3 ms-lg-0" href="#"><img class="" src="https://libraries67.kcm.org/images/logos/kcm-header-logo.svg" width="306" height="57" alt="Kenneth Copeland Ministries"></a>
                  <!-- <a href="#" class="mobile-give">Give</a> -->
                  <!-- <a href="#" class="btn btn-sm btn-primary me-2" style="background-color:#f54d09;border-color:#f54d09;"><b>Give</b></a> -->
                  <button class="btn btn-sm btn-give d-lg-none">Give</button>
                  <button type="button" class="btn-close" data-bs-toggle="collapse" data-bs-target="#kcm-header-main-nav" aria-label="Close"></button>
                  <div class="container-fluid px-0">
                    <div class="collapse navbar-collapse justify-content-center" id="kcm-header-main-nav">
                      <ul class="navbar-nav mb-2 mb-lg-0 kcmh-nav-main">
                        <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Read
                          </a>
                          <ul class="dropdown-menu">
                            <li><a href="#" class="dropdown-item">Faith to Faith — Daily Devotionals</a></li>
                            <li><a href="#" class="dropdown-item active">Blog</a></li>
                            <li><a href="#" class="dropdown-item">Outreach</a></li>
                            <li><a href="#" class="dropdown-item">BVOV Magazine</a></li>
                            <li><a href="#" class="dropdown-item">Question of the Day</a></li>
                            <li><a href="#" class="dropdown-item">One-Year Bible</a></li>
                            <li><a href="#" class="dropdown-item">Prophecies</a></li>
                            <li><a href="#" class="dropdown-item">Testimonies</a></li>
                          </ul>
                        </li>
                        <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Watch
                          </a>
                          <ul class="dropdown-menu">
                            <li><a href="#" class="dropdown-item">VICTORY Channel Live</a></li>
                            <li><a href="#" class="dropdown-item">BVOV Daily Broadcast</a></li>
                            <li><a href="#" class="dropdown-item">Watch Events OnDemand</a></li>
                          </ul>
                        </li>
                        <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Events
                          </a>
                          <ul class="dropdown-menu">
                            <li><a href="#" class="dropdown-item">Event Listing</a></li>
                            <li><a href="#" class="dropdown-item">Why Attend?</a></li>
                            <li><a href="#" class="dropdown-item">What to Expect</a></li>
                            <li><a href="#" class="dropdown-item">Watch Events OnDemand</a></li>
                            <li><a href="#" class="dropdown-item">Volunteer Opportunities</a></li>
                          </ul>
                        </li>
                        <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Real Help
                          </a>
                          <ul class="dropdown-menu">
                            <li><a href="#" class="dropdown-item">Welcome to Real Help</a></li>
                            <li><a href="#" class="dropdown-item">Finances</a></li>
                            <li><a href="#" class="dropdown-item">Relationships</a></li>
                            <li><a href="#" class="dropdown-item">Healing</a></li>
                            <li><a href="#" class="dropdown-item">Prayer</a></li>
                            <li><a href="#" class="dropdown-item">Faith</a></li>
                            <li><a href="#" class="dropdown-item">Life & Work</a></li>
                            <li><a href="#" class="dropdown-item">Spiritual Growth</a></li>
                            <li><a href="#" class="dropdown-item">Salvation</a></li>
                          </ul>
                        </li>
                        <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            About Us
                          </a>
                          <ul class="dropdown-menu">
                            <li><a href="#" class="dropdown-item">Start Here</a></li>
                            <li><a href="#" class="dropdown-item">Elite CX Team</a></li>
                            <li><a href="#" class="dropdown-item">Find a Church</a></li>
                            <li><a href="#" class="dropdown-item">Find a Career</a></li>
                          </ul>
                        </li>
                        <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Partner
                          </a>
                          <ul class="dropdown-menu">
                            <li><a href="#" class="dropdown-item">Partnership</a></li>
                            <li><a href="#" class="dropdown-item">Believers’ Academy</a></li>
                            <li><a href="#" class="dropdown-item">Kenneth’s Partner Letter Archive</a></li>
                            <li><a href="#" class="dropdown-item">Bonus Library</a></li>
                            <li><a href="#" class="dropdown-item">Community</a></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div class="main-nav-give d-none d-lg-block"><a href="#" class="btn btn-give">Give</a></div>
                  </div>
            </nav>      
            <!-- second-row -->
        </header>


        <!-- OFFCANVAS MENU -->
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasMobile" aria-labelledby="offcanvasMobileLabel">
          <div class="offcanvas-header">
            <a class="mobileNavLogo" href="#"><img class="" src="https://libraries67.kcm.org/images/logos/kcm-header-logo.svg" width="171" height="32" alt="Kenneth Copeland Ministries"></a>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <!--
            ************************
            *** MOBILE ACCORDION ***
            ************************
          -->
            <div class="input-group mobile-search">
              <!-- <span class="input-group-text">$</span> -->
              <input type="text" class="form-control" aria-label="Search Site..." placeholder="Search Site...">
              <span class="input-group-text"><i class="bi bi-search"></i></span>
            </div>
            <div class="accordion kcmh-nav-main" id="mobileAccordion">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <a class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ma-read" aria-expanded="false" aria-controls="ma-read">
                    Read
                  </a>
                </h2>
                <div id="ma-read" class="accordion-collapse collapse" data-bs-parent="#mobileAccordion">
                  <div class="accordion-body">
                    <ul class="">
                      <li><a href="#" class="mobile-item">Faith to Faith — <span class="text-nowrap">Daily Devotionals</span></a></li>
                      <li><a href="#" class="mobile-item active">Blog</a></li>
                      <li><a href="#" class="mobile-item">Outreach</a></li>
                      <li><a href="#" class="mobile-item">BVOV Magazine</a></li>
                      <li><a href="#" class="mobile-item">Question of the Day</a></li>
                      <li><a href="#" class="mobile-item">One-Year Bible</a></li>
                      <li><a href="#" class="mobile-item">Prophecies</a></li>
                      <li><a href="#" class="mobile-item">Testimonies</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <a class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ma-watch" aria-expanded="false" aria-controls="ma-watch">
                    Watch
                  </a>
                </h2>
                <div id="ma-watch" class="accordion-collapse collapse" data-bs-parent="#mobileAccordion">
                  <div class="accordion-body">
                    <ul class="">
                      <li><a href="#" class="mobile-item">VICTORY Channel Live</a></li>
                      <li><a href="#" class="mobile-item">BVOV Daily Broadcast</a></li>
                      <li><a href="#" class="mobile-item">Watch Events OnDemand</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <a class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ma-events" aria-expanded="false" aria-controls="ma-events">
                    Events
                  </a>
                </h2>
                <div id="ma-events" class="accordion-collapse collapse" data-bs-parent="#mobileAccordion">
                  <div class="accordion-body">
                    <ul class="">
                      <li><a href="#" class="mobile-item">Event Listing</a></li>
                      <li><a href="#" class="mobile-item">Why Attend?</a></li>
                      <li><a href="#" class="mobile-item">What to Expect</a></li>
                      <li><a href="#" class="mobile-item">Watch Events OnDemand</a></li>
                      <li><a href="#" class="mobile-item">Volunteer Opportunities</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <a class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ma-help" aria-expanded="false" aria-controls="ma-help">
                    Real Help
                  </a>
                </h2>
                <div id="ma-help" class="accordion-collapse collapse" data-bs-parent="#mobileAccordion">
                  <div class="accordion-body">
                    <ul class="">
                      <li><a href="#" class="mobile-item">Welcome to Real Help</a></li>
                      <li><a href="#" class="mobile-item">Finances</a></li>
                      <li><a href="#" class="mobile-item">Relationships</a></li>
                      <li><a href="#" class="mobile-item">Healing</a></li>
                      <li><a href="#" class="mobile-item">Prayer</a></li>
                      <li><a href="#" class="mobile-item">Faith</a></li>
                      <li><a href="#" class="mobile-item">Life & Work</a></li>
                      <li><a href="#" class="mobile-item">Spiritual Growth</a></li>
                      <li><a href="#" class="mobile-item">Salvation</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <a class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ma-about" aria-expanded="false" aria-controls="ma-about">
                    About Us
                  </a>
                </h2>
                <div id="ma-about" class="accordion-collapse collapse" data-bs-parent="#mobileAccordion">
                  <div class="accordion-body">
                    <ul class="">
                      <li><a href="#" class="mobile-item">Start Here</a></li>
                      <li><a href="#" class="mobile-item">Elite CX Team</a></li>
                      <li><a href="#" class="mobile-item">Find a Church</a></li>
                      <li><a href="#" class="mobile-item">Find a Career</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <a class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ma-partner" aria-expanded="false" aria-controls="ma-partner">
                    Partner
                  </a>
                </h2>
                <div id="ma-partner" class="accordion-collapse collapse" data-bs-parent="#mobileAccordion">
                  <div class="accordion-body">
                    <ul class="">
                      <li><a href="#" class="mobile-item">Partnership</a></li>
                      <li><a href="#" class="mobile-item">Believers’ Academy</a></li>
                      <li><a href="#" class="mobile-item">Kenneth’s Partner Letter Archive</a></li>
                      <li><a href="#" class="mobile-item">Bonus Library</a></li>
                      <li><a href="#" class="mobile-item">Community</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr>
            <ul class="nav flex-column kcmh-nav-member">
              <li class="nav-item"><a class="nav-link" href="#"><span class="position-relative"><i class="bi bi-cart-fill"></i><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      99+
                      <span class="visually-hidden">items in cart</span>
                    </span></span></a></li>
              <li class="nav-item"><a class="nav-link" href="#">Shop</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Sign In</a></li>
              <li class="nav-item"><a class="nav-link" href="#">My Account</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Sign Out</a></li>
            </ul>
          </div>
        </div>
        <!-- /OFFCANVAS MENU -->
        

</template>


<script setup>


import { onMounted, ref } from 'vue';


/****** CONSTANTS ******/

let searchBox, searchInput, headerBox, headerRow1, myCollapsible, mainNavContents;

const mediaQuery = ref(null);


/****** FUNCTIONS ******/

function handleTabletChange(e) {
  if (e.matches) {
    console.log('Media Query Matched!');
  } else {
    console.log('<= 768 - Adding nav-visible and toggling .navbar-toggler');
    myCollapsible.addEventListener('show.bs.collapse', event => {
      mainNavContents.classList.add("nav-visible");
      document.querySelector(".navbar-toggler").style.display = 'none';
    });
    myCollapsible.addEventListener('hide.bs.collapse', event => {
      mainNavContents.classList.remove("nav-visible");
      document.querySelector(".navbar-toggler").style.display = 'block';
    });
  }
}

function stickyWatcher() {
  if (
    "IntersectionObserver" in window &&
    "IntersectionObserverEntry" in window &&
    "intersectionRatio" in window.IntersectionObserverEntry.prototype
  ) {
    let observer = new IntersectionObserver(entries => {
      if (entries[0].boundingClientRect.y < 0) {
        headerBox.classList.add("header-stuck");
        // headerRow1.style.display = "none";
      } else {
        headerBox.classList.remove("header-stuck");
        // headerRow1.style.display = "block";
      }
    });
    observer.observe(document.querySelector("#pixel-anchor"));
  }
}

// Watch for width to avoid triggering unnecessary logic
function widthWatcher() {
  const winWidth = window.innerWidth;
  console.log(winWidth);
  if (winWidth < 768) {
   
  } else {
    stickyWatcher();
  }
}



/****** LIFECYCLE ******/
onMounted(() => {
  // Initialize DOM references
  searchBox = document.getElementById('kcm-header-search-box');
  searchInput = document.getElementById('kcm-header-search');
  headerBox = document.getElementById('kcmh');
  headerRow1 = document.querySelector(".row-1");
  myCollapsible = document.getElementById('kcm-header-main-nav');
  mainNavContents = document.getElementById('kcmh');

  // Initialize media query
  if (typeof window !== 'undefined') {
    mediaQuery.value = window.matchMedia('(min-width: 768px)');
    mediaQuery.value.addListener(handleTabletChange);
    handleTabletChange(mediaQuery.value);
  }

  // Call width watcher on mounted
  widthWatcher();
});


/****** EVENT LISTENERS ******/

if (typeof window !== 'undefined') {
  // RESIZE HANDLING
  window.addEventListener('resize', function() {
    widthWatcher();
    stickyWatcher();
  });
}


</script>



<style scoped>


header {
  width: 100vw;
  position: fixed; 
  top: 0; 
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  z-index: 1000;
  box-shadow: 0 4px 3px 0 rgba(0, 0, 0, 0.1);
  background-color: white; 
}






</style>
