<template>
  <div class="kcm-box">
    <div class="box-title">
      <h2>{{ boxTitle }}</h2>
    </div>
    <div class="inner">
      <div class="start" v-if="start">
        <!-- <pre>[START: OPTIONAL]</pre> -->
        <slot name="start" />
      </div>

      <div class="body">
        <h3 class="title">
          <!-- <pre>Title</pre> -->
          {{ sections.title }}
        </h3>

        <p class="pt-2">
          <!-- <pre>Body Content</pre> -->
          {{ sections.body }}
        </p>
      </div>

      <div class="end" v-if="end">
        <!-- <pre>Button</pre> -->
        <slot name="end" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Sections {
  title?: String;
  body?: String;
  link?: String;
  image?: Object;
}
interface Props {
  boxTitle?: string;
  buttonText: string;
  start?: boolean;
  end?: boolean;
  sections: Sections;
}
const props = defineProps<Props>();
</script>

<style lang="css" scoped>
.kcm-box {
  --primary-bg-gradient: linear-gradient(to bottom, #028cd3, #00a8ff);
  --secondary-bg-gradient: linear-gradient(to bottom, #f54d09, #b33005);

  container-type: inline-size;
  container-name: box;

  outline: 1px dashed orangered;

  &[data-variant="orange"],
  &[data-variant="blue"] {
    background: var(--primary-bg-gradient);
  }
  &[data-variant="secondary"],
  &[data-variant="giving"] {
    background: var(--secondary-bg-gradient);
  }

  .inner {
    outline: 1px dashed blue;
    border-radius: 20px;
    padding-block: 20px;
    padding-inline: 24px;
  }
}
</style>
