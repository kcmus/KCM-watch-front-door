<template>
  <div class="kcm-box" :data-background="backgroundColor">
    <header class="box-header" v-if="boxTitle" :data-alignment="titleAlignment">
      <h2>{{ boxTitle }}</h2>
    </header>
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  boxTitle?: string;
  titleAlignment?: "start" | "center" | "end" | "";
  backgroundColor?: string;
}
const props = defineProps<Props>();
</script>

<style lang="css" scoped>
.kcm-box {
  --primary-bg-gradient: linear-gradient(to bottom, #028cd3, #00a8ff);
  --secondary-bg-gradient: linear-gradient(to bottom, #f54d09, #b33005);
  container-type: inline-size;
  container-name: box;

  .box-header {
    display: grid;

    &[data-alignment="start"] {
      justify-items: start;
    }
    &[data-alignment="center"] {
      justify-items: center;
    }
    &[data-alignment="end"] {
      justify-items: end;
    }
  }
}
</style>
