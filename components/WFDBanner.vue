<template>
  <div id="WFD-Banner">
    <h2 v-if="variant === 'tv-offer'">Free TV Offer</h2>
    <div class="banner" :data-variant="variant">
      <div class="image" v-if="variant === 'tv-offer'">
        <picture>
          <source
            media="(max-width: 799px)"
            :srcset="TVOffer.image.small.src"
          />
          <source
            media="(min-width: 800px)"
            :srcset="TVOffer.image.large.src"
          />
          <img :src="TVOffer.image.large.src" :alt="TVOffer.image.alt" />
        </picture>
      </div>

      <div class="content">
        <header class="header">
          <h3 class="title">
            {{ TVOffer.title }}
          </h3>

          <p class="secondary-text pt-2">{{ TVOffer.subtitle }}</p>
        </header>
        <div class="cta">
          <a class="button" :href="TVOffer.link">{{ buttonText }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  buttonText: string;
  variant?: string;
}>();
const { buttonText, variant } = props;

const { data: TVOffer } = useFetch("/api/TVOffer");
</script>

<style scoped>
#WFD-Banner {
  --primary-bg-gradient: linear-gradient(to bottom, #028cd3, #00a8ff);
  --secondary-bg-gradient: linear-gradient(to bottom, #f54d09, #b33005);
  container-type: inline-size;
  container-name: offer;
}

.banner {
  border-radius: 20px;
  color: #fff;
  padding-block: 20px;
  padding-inline: 24px;

  .content {
    padding-block: 1rem;
  }

  img {
    max-width: 100%;
  }

  .title {
    font-family: sans-serif;
    display: inline;
    font-weight: 700;
    font-size: 24px;
    text-align: center;
  }

  .secondry-text {
    display: block;
    font-weight: 500;
    font-size: 20px;
    color: red !important;
  }

  .button {
    background-color: #fff;
    color: #212529;
    display: inline-block;
    padding-inline: 1.25rem;
    padding-block: 0.875rem;
    border-radius: 50px;
    text-align: center;
  }

  .cta {
    justify-self: end;
    .button {
      font-size: 1rem;
      text-decoration: none;
      width: 100%;
    }
  }

  &[data-variant="primary"],
  &[data-variant="tv-offer"] {
    background: var(--primary-bg-gradient);
  }
  &[data-variant="secondary"],
  &[data-variant="giving"] {
    background: var(--secondary-bg-gradient);
  }
}

@container offer (min-width: 600px) {
  [data-variant="giving"] .content,
  [data-variant="tv-offer"] {
    display: grid;
    gap: 2.5rem;
  }

  [data-variant="giving"] .content,
  [data-variant="tv-offer"] {
    .cta {
      width: 260px;
    }
  }
  [data-variant="tv-offer"] {
    grid-template-columns: minmax(0, 260px) 1fr;
    grid-auto-flow: dense;
  }
}

@container offer (min-width: 880px) {
  [data-variant="giving"] > .content {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: center;
    .cta {
      margin-block-start: 0;
      align-self: center;
      justify-self: end;
      position: relative;
      &:before {
        content: "";
        height: 89px;
        background-color: orange;
        width: 1px;
        position: absolute;
        left: -50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
  [data-variant="tv-offer"] {
    grid-template-columns: repeat(autofit, minmax(0, 260px) 2fr);
    .content {
      display: grid;
      grid-template-columns: 1fr minmax(0, 1fr);
      gap: 1rem;

      .cta {
        align-self: end;
        justify-self: end;
      }
    }
  }
}
</style>
