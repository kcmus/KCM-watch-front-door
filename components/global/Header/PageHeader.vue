<template>
  <header id="kcmh" class="bg-white sticky-top p-0" :class="{ 'header-stuck': headerStuck }">
    <StickyAnchor ref="stickyAnchorRef" />


    <!-- first-row -->
    <div class="container px-0 row-1 d-none d-lg-block">
      <div class="row g-0">
        
        <!-- region -->
        <div class="col-2">
          <div class="dropdown-end">
            <a data-bs-toggle="dropdown" aria-expanded="false">
              <img
                class="region-map-icon"
                src="https://s3.amazonaws.com/libraries67.kcm.org/images/logos/region-icon-dark.svg"
                width="12"
                height="19"
              />

            </a>
            <button
              class="btn btn-sm no-hover no-active btn-outline-secondary dropdown-toggle kcmh-region-select rounded-1"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Select a Region
            </button>
            <div class="dropdown-menu">
              <a v-for="region in regions" :key="region.name" class="dropdown-item" :href="region.url">
                {{ region.name }}
              </a>
            </div>
          </div>
        </div>
       
        <!-- search-box -->
        <div id="kcm-header-search-box" class="col flex-grow-1 mt-1">
          <div id="deskSearchWrap">
            <form action="" autocomplete="off">
              <input id="search" name="search" type="text" placeholder="Site Search..." />
              <input id="search_submit" type="submit"/>
            </form>
          </div>
        </div>


        
        <div class="col-auto">
          <ul class="nav justify-content-end kcmh-nav-member">
            <li class="nav-item">
              <a class="nav-link" href="https://my.kcm.org/shoppingcart">
                <span class="position-relative">
                  <i class="bi bi-cart-fill" />
                  <span
                    v-if="cartItemCount > 0"
                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  >
                    {{ cartItemCount > 99 ? "99+" : cartItemCount }}
                    <span class="visually-hidden">items in cart</span>
                  </span>
                </span>
              </a>
            </li>
            <li class="nav-item"><a class="nav-link" href="https://my.kcm.org/home">Shop</a></li>
            <li class="nav-item">
              <a class="nav-link" :href="signInOrOutLink.href">
                {{ signInOrOutLink.body }}
              </a>
            </li>
          </ul>
        </div>
        
           
        <!-- <div class="col-auto">
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
        </div> -->

      </div>
    </div>
    <!-- first-row -->


    <!-- second-row -->
    <!-- <nav class="container-lg main-nav navbar navbar-expand-lg sticky-top"> -->
    <nav class="container main-nav navbar navbar-expand-lg sticky-top">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasMobile"
        aria-controls="offcanvasMobile"
        aria-expanded="false"
        aria-label="Open Nav"
      >
        <span class="navbar-toggler-icon" />
      </button>

      <a class="navbar-brand me-auto ms-3 ms-lg-0" href="https://www.kcm.org/">
        <!-- <img
          class=""
          src="https://libraries67.kcm.org/images/logos/kcm-header-logo.svg"
          width="306"
          height="57"
          alt="Kenneth Copeland Ministries"
        /> -->

        <img
          class=""
          src="https://www.kcm.org/themes/custom/bootstrap_kcm/images/logo.svg"
          width="306"
          height="57"
          alt="Kenneth Copeland Ministries"
        />
      </a>

      <!-- <a href="https://www.kcm.org/give" class="btn btn-sm btn-orange fw-bold d-lg-none">Give</a>
      <button
        type="button"
        class="btn-close"
        data-bs-toggle="collapse"
        data-bs-target="#kcm-header-main-nav"
        aria-label="Close"
      /> -->

      <!-- <a href="#" class="mobile-give">Give</a> -->
      <!-- <a href="#" class="btn btn-sm btn-primary me-2" style="background-color:#f54d09;border-color:#f54d09;"><b>Give</b></a> -->
      
      <button class="btn btn-sm btn-give d-lg-none">Give</button>
      <button type="button" class="btn-close" data-bs-toggle="collapse" data-bs-target="#kcm-header-main-nav" aria-label="Close"></button>
            

      <div class="container-fluid px-0">
        <div id="kcm-header-main-nav" class="collapse navbar-collapse justify-content-center">
          <ul class="navbar-nav mb-2 mb-lg-0 kcmh-nav-main">
            <li v-for="(item, index) in navItems" :key="index" :class="{ 'nav-item': true, dropdown: true }">
              <a
                v-if="item.dropdown"
                :class="{ 'nav-link': true, 'dropdown-toggle': item.dropdown }"
                :href="item.url"
                :target="item.target"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ item.title }}
              </a>
              <a
                v-else
                :class="{ 'nav-link': true, 'dropdown-toggle': false }"
                :href="item.url"
                :target="item.target"
                role="button"
              >
                {{ item.title }}
              </a>
              <ul v-if="item.dropdown" class="dropdown-menu">
                <li v-for="(subItem, subIndex) in item.subItems" :key="subIndex">
                  <a :href="subItem.url" class="dropdown-item" :target="subItem.target">{{ subItem.title }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <!-- <div class="main-nav-give d-none d-lg-block">
          <a href="https://www.kcm.org/give" class="btn btn-sm btn-orange fw-bold">Give</a>
        </div> -->
        <div class="main-nav-give d-none d-lg-block">
          <a href="https://www.kcm.org/give" class="btn btn-give">Give</a>
        </div>

      </div>
    </nav>
     <!-- second-row -->
  </header>
</template>

<script lang="ts" setup>
import type StickyAnchor from "~/components/global/StickyAnchor.vue";

withDefaults(
  defineProps<{
    cartItemCount?: number;
  }>(),
  {
    cartItemCount: 0,
  }
);

// Define regions data
const { data: regions } = useRegionUrls();

// Define navItems data
const { data: navItems } = useFetch("/api/menu-lookup/header-menu");


const ssoEmail = useSSOEmailCookie();
const signInOrOutLink = computed(() => {
  if (typeof ssoEmail.value === "string" && ssoEmail.value.length > 0) {
    return {
      body: "Sign Out",
      href: "https://www.kcm.org/user/logout",
    };
  } else {
    return {
      body: "Sign In",
      href: "https://sso.kcm.org/?destination=aHR0cHM6Ly93d3cua2NtLm9yZy91c2VyL2F1dGg/ZGVzdGluYXRpb249Lw%3D%3D",
    };
  }
});

const stickyAnchorRef = ref<InstanceType<typeof StickyAnchor> | null>(null);

const headerStuck = computed(() => stickyAnchorRef.value?.scrolledPast === true);

</script>

<style lang="scss" scoped>

header {
  --desk-search-height: 20px;

  -webkit-box-shadow: 0 4px 3px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 3px 0 rgba(0, 0, 0, 0.1);

  /*** ROW-1 HEIGHTS ***/
  &.header-stuck .row-1 {
    height: 0;
    -webkit-transition:
      height 250ms ease-in-out,
      opacity 250ms ease-in-out;
    transition:
      height 250ms ease-in-out,
      opacity 250ms ease-in-out;
    opacity: 0;
  }

  @media screen and (min-width: 992px) {
    .row-1 {
      height: 57px;
      -webkit-transition:
        height 250ms ease-in-out,
        opacity 250ms ease-in-out;
      transition:
        height 250ms ease-in-out,
        opacity 250ms ease-in-out;
      opacity: 1;
    }
  }

  .main-nav .btn-close {
    display: none;
  }

  &.nav-visible .main-nav .btn-close {
    font-size: 12px;
    position: relative;
    display: block;
    margin-top: -4px;
  }
}

/*** /ROW HEIGHTS ***/
.navbar-brand {
  padding-top: 8px;
  padding-bottom: 8px;

  @media screen and (max-width: 768px) {
    height: 40px;
    padding-top: 2px;
  }

  img {
    width: 171px;
    height: 32px;

    @media screen and (min-width: 992px) {
      width: 306px;
      height: 57px;
    }
  }
}

@media screen and (min-width: 992px) {
  #kcmh {
    padding: 0 20px;
  }
}

@media (min-width: 992px) {
  #kcmh > nav {
    height: 105px;
  }
}

@media (max-width: 992px) {
  header {
    padding-top: 8px;
    padding-bottom: 8px;
  }
}

.kcmh-nav-member a {
  font-size: 14px;
  font-weight: 700;
  color: #2c5a6f;

  &:hover,
  &:focus {
    color: #0372a5;
  }
}

.kcmh-nav-main {
  .nav-link {
    font-size: 14px;
    font-weight: 400;
    color: var(--bs-dark);

    &:hover,
    &:active {
      color: #7a7c7f;
    }
  }

  .dropdown-menu {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: var(--bs-dark);

    &.show {
      background: none;
      -webkit-box-shadow: none;
      box-shadow: none;
      padding: 0;
    }
  }
}

@media screen and (min-width: 768px) {
  .kcmh-nav-main .dropdown-menu.show {
    background: #f8f9fa;
    -webkit-box-shadow: var(--bs-dropdown-box-shadow);
    box-shadow: var(--bs-dropdown-box-shadow);
  }
}

#kcmh {
  .col-auto > ul > li:last-child > a {
    padding-right: 0;
  }

  .dropdown-end {
    z-index: 1030;
  }

  .dropdown-end,
  ul.nav.kcmh-nav-member {
    padding-top: 24px;
  }

  .dropdown-menu.show {
    z-index: 1030;

    &:before,
    &:after {
      position: absolute;
      z-index: 2;
      top: -12px;
      left: 18px;
      display: block;
      overflow: hidden;
      width: 0;
      height: 0;
      content: " ";
      border: solid 6px transparent;
      border-bottom-color: #f8f9fa;
    }

    &:after {
      position: absolute;
      z-index: 1002;
    }

    &:before {
      z-index: 1001;
      top: -16px;
      left: 16px;
      border: solid 8px transparent;
      border-bottom-color: #dee2e6;
    }
  }
}

/******************/
@media screen and (max-width: 768px) {
  .kcmh-nav-main {
    padding-top: 36px;
  }
}

.kcmh-nav-main .dropdown-item {
  &.active,
  &:active {
    color: #fff;
    background: #234859;
  }
}

.kcmh-region-select.btn {
  --bs-btn-padding-y: 1px;
  --bs-btn-padding-x: 0.25rem;
}

/******************/
/*** MOBILE NAV ***/
/******************/
.navbar-toggler {
  margin-right: 8px;

  @media (max-width: 768px) {
    padding: 0;
    margin-left: 8px;
  }
}
/*******************/
/*** /MOBILE NAV ***/
/*******************/

/*** DESKTOP STYLES FOR HEADER ***/
.region-map-icon {
  width: 12px;
  height: 19px;

  @media (min-width: 992px) {
    margin-right: 8px;
  }

  @media (min-width: 1200px) {
    margin-right: 12px;
  }
}

#kcm-header-search-box {
  &.hide {
    width: 0;
    text-align: right;

    input {
      border: 0;
      -webkit-box-shadow: none;
      box-shadow: none;
    }
  }

  > form > label > i {
    display: inline-block;
    font-size: 14px;
    margin-top: 7px;
    margin-right: 8px;
  }
}

// #kcmh > div > div > div.col-auto > ul > li:nth-child(1) > a > span > span {
//   background-color: var(--bs-orange) !important;
// }



#kcmh > div > div > div.col-auto > ul > li:nth-child(1) > a > span > span,
#offcanvasMobile > div.offcanvas-body > ul > li:nth-child(1) > a > span > span {
  background-color: var(--kcm-orange) !important;
}

@media (min-width: 992px) {
  .navbar-expand-lg .navbar-nav .nav-link {
    padding: 8px 12px;
  }

  .dropdown-toggle {
    &::after {
      -webkit-transition: all 200ms ease-in-out;
      transition: all 200ms ease-in-out;
    }

    &.show::after {
      -webkit-transform: rotate(-180deg);
      transform: rotate(-180deg);
    }
  }
}

#kcm-header-main-nav > ul > li > ul > li,
header .row-1 .dropdown-menu a {
  &:first-child,
  &:last-child {
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
    overflow: hidden;
  }
}

/*****************************/
#deskSearchWrap {
  position: relative;
  display: inline-block;
  float: right;
  height: var(--desk-search-height);
  padding: 0;
  margin-top: 30px;

  input[type="text"] {
    font-size: 14px;
    position: absolute;
    z-index: 3;
    top: 0;
    right: 0;
    display: inline-block;
    width: 0px;
    height: var(--desk-search-height);
    padding: 3px;
    padding-right: 20px;
    padding-left: 0;
    cursor: pointer;
    -webkit-transition: width 0.4s cubic-bezier(0, 0.795, 0, 1);
    transition: width 0.4s cubic-bezier(0, 0.795, 0, 1);
    color: #6c757d;
    border: none;
    outline: none;
    background: none;

    &::-webkit-input-placeholder,
    &::-moz-placeholder,
    &:-ms-input-placeholder,
    &::-ms-input-placeholder,
    &::placeholder {
      -webkit-transition: opacity 0.4s ease-in-out;
      transition: opacity 0.4s ease-in-out;
      opacity: 0;
    }

    &:focus {
      z-index: 1;
      width: 100%;
      padding-left: 16px;
      cursor: text;
      border-bottom: 1px solid #bbb;

      &:hover {
        border-bottom: 1px solid #bbb;
      }

      @media (min-width: 992px) {
        width: 350px;
      }

      @media (min-width: 1100px) {
        width: 475px;
      }

      @media (min-width: 1200px) {
        width: 550px;
      }

      @media (min-width: 1400px) {
        width: 650px;
      }

      &::-webkit-input-placeholder,
      &::-moz-placeholder,
      &:-ms-input-placeholder,
      &::-ms-input-placeholder,
      &::placeholder {
        opacity: 1;
      }
    }
  }

  input[type="submit"] {
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    display: inline-block;
    float: right;
    width: 20px;
    height: var(--desk-search-height);
    cursor: pointer;
    -webkit-transition: opacity 0.4s ease;
    transition: opacity 0.4s ease;
    text-indent: -10000px;
    color: #2c5a6f;
    border: none;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="%232c5a6f" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/></svg>')
      center center no-repeat;
    background-size: 14px 14px;

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
