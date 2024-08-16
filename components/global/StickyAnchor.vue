<template>
  <div
    v-if="noTeleport"
    ref="elementRef"
    class="position-absolute start-0"
    width="1px"
    height="1px"
    :top="typeof top === 'number' ? `${top}px` : top"
  />
  <Teleport v-else to="body">
    <div
      ref="elementRef"
      class="position-absolute start-0"
      width="1px"
      height="1px"
      :top="typeof top === 'number' ? `${top}px` : top"
    />
  </Teleport>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    top?: string | number;
    noTeleport?: boolean;
  }>(),
  {
    top: 10,
    noTeleport: false,
  }
);

const elementRef = ref<HTMLDivElement | null>(null);

const scrolledPast = useIntersectionObservedValue(
  elementRef,
  (entries) => {
    if (typeof entries?.length !== "number" || entries.length === 0) {
      return false;
    }

    return entries[0].boundingClientRect.y < 0;
  },
  false
);

defineExpose({
  elementRef,
  scrolledPast,
});
</script>
