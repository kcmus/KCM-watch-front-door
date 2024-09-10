<template>
  <KCMBox :boxTitle="boxTitle" title-alignment="end">
    <div
      id="WFD-Banner"
      :data-background="backgroundColor"
      :data-type="banner.type"
    >
      <div class="sections">
        <div class="section-start" v-if="$slots.sectionStart">
          <slot name="sectionStart" />
        </div>

        <div class="content">
          <h3 class="title">{{ banner.title }}</h3>
          <p class="body pt-2">{{ banner.body }}</p>
        </div>

        <div class="cta" :class="tokens">
          <a class="button" :href="banner.link">{{ buttonText }}</a>
        </div>
      </div>
    </div>
  </KCMBox>
</template>

<script setup lang="ts">
interface Banner {
  title?: String;
  body?: String;
  link?: String;
  image?: Object;
  type?: String;
}

interface Props {
  boxTitle?: string;
  buttonText?: string;
  backgroundColor?: string;
  banner: Banner;
  tokens?: string[];
}

const props = defineProps<Props>();
</script>

<style scoped>
#WFD-Banner {
  --primary-bg-gradient: linear-gradient(to bottom, #028cd3, #00a8ff);
  --secondary-bg-gradient: linear-gradient(to bottom, #f54d09, #b33005);
  container-type: inline-size;
  container-name: banner;

  .sections {
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
      font-weight: 700;
      font-size: 24px;
      text-align: left;
    }

    .button {
      background-color: #fff;
      border-radius: 50px;
      color: #212529;
      display: inline-block;
      padding-block: 0.875rem;
      padding-inline: 1.25rem;
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
  }

  /** Box Variations */
  &[data-background="primary"] {
    .sections {
      background: var(--primary-bg-gradient);
    }
  }
  &[data-background="secondary"] {
    .sections {
      background: var(--secondary-bg-gradient);

      .content {
        font-size: 14px;
        .body {
          border-bottom: 1px solid #ff8c00;
          padding-bottom: 20px;
        }
      }

      .content,
      .cta {
        padding-inline: 1.75rem;
      }
    }
  }
}

@container banner (min-width: 600px) {
  .cta {
    justify-self: end;
    width: 260px;
  }
}

@container banner (min-width: 800px) {
  #WFD-Banner .sections {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 2.25rem;
  }

  #WFD-Banner {
    &[data-background="secondary"] {
      > .sections {
        background: var(--secondary-bg-gradient);
        .content {
          border-right: 1px solid #ff8c00;
          font-size: 14px;
          padding-block: 24px;
          .body {
            border-bottom: none;
            padding-inline-end: 2.5rem;
            padding-bottom: 0;
          }
        }

        .content,
        .cta {
          padding-inline: 36px;
        }
      }
    }
  }
}
</style>
