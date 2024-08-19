<template>
  <footer id="kcmf" class="container-fluid" data-bs-theme="dark">
    <div class="container">

      <BsRow g="0" class="row-1">
        <!-- logo block -->
        <BsCol col="12" lg="4" class="text-center">
          <div class="mission-wrap">
            <a href="https://www.kcm.org/">
              <img src="~/assets/kcm-footer-logo.svg" width="273" height="124" />
            </a>    
            <p class="mission">
              Kenneth Copeland Ministries' mission is to minister the Word of Faith, by teaching believers who they are
              in Christ Jesus; taking them from the milk of the Word to the meat, and from religion to reality.
            </p>
          </div>
        </BsCol>
         <!-- logo block -->
        
        <!-- region dropdown mobile block -->
        <div class="text-center d-md-none">
          <FooterRegionSelect :selected-region-id="selectedRegionId" class="dropdown-region d-inline-flex mb-5" />
        </div>


        <!-- nav columns -->
        <BsCol v-for="mainMenu in navItems" :key="mainMenu.title" col="6" lg="2">
          <h2>{{ mainMenu.title }}</h2>
          <ul>
            <li v-for="sub in mainMenu.links" :key="sub.text">
              <!-- <a
                v-if="sub.text === 'Give'"
                :href="sub.href"
                :target="sub.target"
                class="btn btn-sm btn-orange fw-bold d-lg-none d-inline-block btn-give"
                >{{ sub.text }}</a
              > -->
              <a
                v-if="sub.text === 'Give'"
                :href="sub.href"
                :target="sub.target"
                class="btn btn-sm btn-orange fw-bold d-lg d-inline-block btn-give"
                >{{ sub.text }}</a
              >
              <a v-else :href="sub.href" :target="sub.target">{{ sub.text }}</a>
            </li>
          </ul>
        </BsCol>
        <!-- nav columns -->

      </BsRow>



      <!-- row -->
      <BsHrRow class="d-none d-md-block" />


      <BsRow class="row-2 g-md-4">
        <BsCol col="12" lg="4" class="order-md-1">
          <h2>Join the Conversation</h2>
          <ul class="social-list list-inline">
            <li v-for="link in socialLinks" :key="link.href" class="list-inline-item">
              <a class="footer-link d-block" :href="link.href" :title="link.alt" target="_blank">
                <i :class="link.iconClass" />
              </a>
            </li>
          </ul>
        </BsCol>
        <BsCol col="12" lg="4" class="order-md-0">
          <div class="float-lg-start">
            <h2>A word of faith <span class="text-nowrap">every day</span></h2>
            <a class="btn btn-outline-light" :href="`${footerConfig.subscribeUrl}?source=${sourceParam ?? ''}`">
              Subscribe for <span class="text-nowrap">Daily Devotionals</span>
            </a>
          </div>
        </BsCol>
        <BsCol col lg="4" class="order-md-2 d-none d-md-block">
          <div class="d-inline-block float-lg-end">
            <h2>Select A Region</h2>
            <FooterRegionSelect :selected-region-id="selectedRegionId" class="dropdown-region d-inline-flex mb-5" />
          </div>
        </BsCol>
      </BsRow>

      <BsRow>
        <BsCol class="text-center legal-nav">
          <ul class="list-inline">
            <li class="list-inline-item d-block d-md-inline">
              <a href="https://www.kcm.org/about-us-0">About Kenneth Copeland Ministries</a>
            </li>
            <li class="list-inline-item"><a href="https://www.kcm.org/privacy-policy">Privacy Policy</a></li>
            <li class="list-inline-item"><a href="https://www.kcm.org/content/terms-use">Terms of Use</a></li>
          </ul>
        </BsCol>
      </BsRow>

      <BsRow class="page-bottom">
        <BsCol class="text-center">
          <p class="disclaim">
            <a class="footer-link" href="https://www.kcm.org/copyright">
              &copy; 1997 - <span>{{ new Date().getFullYear() }}</span>
            </a>
            <a
              class="footer-link"
              :href="`https://www.emic.org/?webSyncID=${webSyncID ?? ''}&sessionGUID=${sessionGUID ?? ''}`"
            >
              Eagle Mountain International Church Inc.
            </a>
            <a class="footer-link" href="https://www.kcm.org/"> Aka Kenneth Copeland Ministries. </a>
            <span class="text-nowrap"> All Rights Reserved. </span>
          </p>
          <p>FINISH STRONG is a registered trademark owned by Finish Strong, LLC</p>
        </BsCol>
      </BsRow>

    </div>
  </footer>
</template>

<script lang="ts" setup>
defineProps<{
  webSyncID?: string;
  sessionGUID?: string;
  sourceParam?: string; // ?source=GW1FTFKFS?
  selectedRegionId?: "us" | "za" | "au" | "ca" | "uk" | "ua" | "es" | "pt";
}>();

const { footer: footerConfig } = useAppConfig();

const { data: navItems } = useFetch("/api/menu-lookup/footer-menu");

interface SocialLink {
  href: string;
  alt: string;
  src?: string;
  iconClass?: string;
}

const socialLinks = ref<SocialLink[]>([
  {
    href: "https://www.facebook.com/CopelandNetwork",
    alt: "Facebook",
    iconClass: "icon-facebook3 text-white fs-4",
  },
  {
    href: "https://x.com/CopelandNetwork",
    alt: "X",
    iconClass: "icon-twitter2 text-white fs-4",
  },
  {
    href: "https://www.instagram.com/copelandnetwork/",
    alt: "Instagram",
    iconClass: "icon-instagram_circle_color text-white fs-4",
  },
  {
    href: "https://www.youtube.com/user/CopelandMinistries",
    alt: "YouTube",
    iconClass: "icon-youtube_circle_color text-white fs-4",
  },
  {
    href: "https://www.pinterest.com/copelandnetwork/",
    alt: "Pinterest",
    iconClass: "icon-pinterest2 text-white fs-4",
  },
  {
    href: "https://www.linkedin.com/company/kenneth-copeland-ministries/",
    alt: "LinkedIn",
    iconClass: "icon-linkedin2 text-white fs-4",
  },
]);
</script>

<style lang="scss" scoped>

footer {
  --bs-body-font-size: 0.875rem;

  background: var(--bs-body-bg);
  color: var(--bs-body-color);
  font-size: var(--bs-body-font-size);
}

h2,
.h2 {
  text-transform: uppercase;
  font-size: 1rem;
}

@media (min-width: 768px) and (max-width: 992px) {
  .row.row-2 > div.col-12.col-md-4.order-md-0 > div {
    & > h2,
    .h2 {
      letter-spacing: -1px;
    }
  }

  .btn-outline-light {
    line-height: 1;
  }

  .social-list.list-inline > li:not(:last-child) {
    margin-right: 5px;
  }






}

.row-1,
.disclaim {
  --bs-link-color: var(--bs-body-color);
  --bs-link-color-rgb: var(--bs-body-color-rgb);
}

ul {
  padding-left: 0;
}

li {
  list-style: none;
}

a, a:hover {
  text-decoration: none;
}

hr {
  margin: 60px auto;
}

.row-2 {
  ul {
    margin-bottom: 0;
  }
}

.row-1 {
  h2, .h2 {
    color: var(--bs-primary-dark);
    font-weight: 700;
    margin-bottom: 18px;
    padding-top: 24px;

    @media (min-width: 992px) {
      padding-top: 54px;
    }

    ul {
      margin-bottom: 0;
    }
  }

  .btn-give {
    margin-top: 12px;
  }

  @media (max-width: 767px) {
    .fnav-mrow-2 {
      margin-top: 38px;
    }
  }

  a:not(.btn-give) {
    --mobile-spacing: 4px;
    display: block;
    font-size: 14px;
    line-height: 1.3;
    padding-top: var(--mobile-spacing);
    margin-bottom: var(--mobile-spacing);
  }

  img:not(.region-map-icon) {
    margin-top: 28px;
  }

  & > .text-center.d-md-none {
    margin-top: 20px;
  }
}

.row-2 {
  text-align: center;

  h2,
  .h2 {
    font-weight: 300;
  }

  .btn-outline-light {
    letter-spacing: -0.5px;
  }
}

@media (max-width: 768px) {
  .row-2 > div {
    margin-top: 38px;
  }
}

.mission-wrap {
  @media (min-width: 768px) {
    padding-right: 40px;
  }

  @media (min-width: 992px) {
    padding-right: 60px;
  }

  @media (min-width: 1100px) {
    padding-right: 80px;
  }

  @media (min-width: 1200px) {
    padding-right: 100px;
  }

  img {
    width: 100%;
    max-width: 273px;
  }
}

.mission {
  margin-bottom: 0;
  line-height: 1.7;
  padding: 24px 0 0;

  @media (min-width: 992px) {
    padding: 40px 0 0;
  }
}

@media (min-width: 992px) {
  .btn-give {
    margin-top: 28px;
  }
}

.icon {
  width: 24px;
  height: 24px;
}

.legal-nav {
  padding-top: 38px;

  @media (min-width: 992px) {
    padding-top: 100px;
  }

  @media (max-width: 768px) {
    ul li:nth-child(1)::after {
      display: none;
    }
  }

  ul {
    margin-bottom: 0;
  }

  a {
    font-size: 0.875rem;
    line-height: 1.6;

    @media (min-width: 992px) {
      font-size: 0.75rem;
    }
  }

  .list-inline-item:not(:last-child) {
    margin: 0;
  }

  .list-inline {
    li:after {
      margin: 0 10px;
    }

    li:not(:last-child):after {
      content: "|";
    }
  }
}

.social-list {
  a {
    display: block;
  }

  &.list-inline > li:not(:last-child) {
    margin-right: 5px;
  }

  @media (min-width: 992px) {
    &.list-inline > li:not(:last-child) {
      margin-right: 15px;
    }
  }
}

.dropdown-region {
  a {
    --bs-dropdown-link-color: #6c757d;
  }

  .btn {
    font-size: 0.875rem;
    font-weight: 400;
    padding: 4px 12px;
    border-radius: 3px;
    &:hover, &.show {
      color: #6c757d;
      background-color: #fff;
    }
  }
}

.page-bottom {
  padding-bottom: 40px;

  @media (max-width: 992px) {
    padding-top: 24px;
  }

  p {
    font-size: 12px;
    line-height: 1.6;
    margin-bottom: 0;
  }
}

.region-map-icon {
  margin-top: 0;
  margin-right: 8px;

  @media (max-width: 768px) {
    margin-bottom: 44px;
  }
}
</style>
