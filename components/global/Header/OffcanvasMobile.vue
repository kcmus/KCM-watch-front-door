<template>
  <section id="offcanvasMobile" class="offcanvas offcanvas-start" tabindex="-1" aria-labelledby="offcanvasMobileLabel">
    <div class="offcanvas-header">
      <a class="mobileNavLogo" href="/">
        <img
          class=""
          src="https://libraries67.kcm.org/images/logos/kcm-header-logo.svg"
          width="171"
          height="32"
          alt="Kenneth Copeland Ministries"
        />
      </a>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
    </div>
    <div class="offcanvas-body">
      <!--
      ************************
      *** MOBILE ACCORDION ***
      ************************
    -->
      <div class="input-group mobile-search">
        <input type="text" class="form-control" aria-label="Search Site..." placeholder="Search Site..." />
        <span class="input-group-text"><i class="bi bi-search" /></span>
      </div>
      <div id="mobileAccordion" class="accordion kcmh-nav-main">
        <div v-for="(item, index) in accordionItems" :key="index" class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed px-0"
              type="button"
              :aria-expanded="item.open"
              :aria-controls="'ma-' + item.id"
              @click="item.open = !item.open"
            >
              {{ item.title }}
            </button>
          </h2>
          <div
            :id="'ma-' + item.id"
            class="accordion-collapse collapse"
            :class="{ show: item.open }"
            :aria-labelledby="'heading-' + item.id"
          >
            <div class="accordion-body">
              <ul class="">
                <li v-for="(link, linkIndex) in item.links" :key="linkIndex">
                  <a :href="link.url" class="mobile-item d-block text-dark" :target="link.target">{{ link.label }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-4" />
      <ul class="nav mb-0 pt-0 flex-column kcmh-nav-member">
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
        <li class="nav-item">
          <a class="nav-link" href="https://my.kcm.org/home">Shop</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :href="signInOrOutLink.href">
            {{ signInOrOutLink.body }}
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    cartItemCount?: number;
  }>(),
  {
    cartItemCount: 0,
  }
);

// Define navItems data
const { data: navItems } = useFetch("/api/menu-lookup/header-menu");

type AccordionItem = {
  readonly id: string;
  readonly title: string;
  open: boolean;
  readonly target?: string;
  readonly links?: readonly Readonly<{
    url: string;
    label: string;
    target?: string;
  }>[];
};

const accordionItems = useState<ReadonlyArray<AccordionItem>>("PageHeaderAccordionItems", () => []);

watchSyncEffect(() => {
  const toId = (title: string) => title.toLocaleLowerCase().replace(/[^a-zA-Z0-9-_]/g, "_");
  const before = accordionItems.value ?? [];
  accordionItems.value =
    navItems.value?.map((item) => ({
      id: toId(item.title),
      title: item.title,
      open: before.find((b) => b.id === toId(item.title))?.open ?? false,
      target: item.target,
      links:
        item.subItems?.map((sub) => ({
          url: sub.url,
          label: sub.title,
          target: sub.target,
        })) ?? [],
    })) ?? [];
});

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
</script>

<style lang="scss" scoped>
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

  @media screen and (max-width: 768px) {
    padding-top: 36px;
  }

  .dropdown-item {
    &.active,
    &:active {
      color: #fff;
      background: #234859;
    }
  }

  ul.menu {
    padding-left: 40px;
  }
}

.col-auto > ul > li:last-child > a {
  padding-right: 0;
}

#offcanvasMobile {
  background: #f8f9fa;
  -webkit-box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.1);

  > div.offcanvas-body > ul > li > a {
    padding: 12px 0;
  }
}

.form-control {
  font-size: 0.875rem;
  line-height: 1.5;
}

.accordion-item:first-of-type {
  border-radius: 0;
}

.accordion-button:not(.collapsed) {
  -webkit-box-shadow: none;
  box-shadow: none;
}

.accordion-item,
.accordion-button {
  text-decoration: none;
  border: none;
  background: none;
}

.accordion-button {
  color: var(--bs-dark);
  border-radius: 0;
}

button[aria-expanded="true"],
a[aria-expanded="true"] {
  font-weight: 700;
}

.accordion-body {
  --bs-body-font-size: 0.875rem;

  padding: 12px 0;

  > ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  a {
    line-height: 2;
    // display: block;
    text-decoration: none;
    // color: var(--bs-dark);

    &:hover {
      background: #e8e8e8;
    }

    &.active {
      color: #fff;
      background: #234859;
    }
  }
}
</style>
