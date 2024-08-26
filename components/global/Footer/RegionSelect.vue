<template>
  <div class="dropdown dropdown-region">
    <i class="icon-location text-secondary align-middle me-1 align-self-center mb-0" />
    <button
      class="btn btn-sm btn-outline-light dropdown-toggle"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {{ selectedRegion?.name || "Select A Region" }}
    </button>
    <div class="dropdown-menu" data-bs-theme="light">
      <a
        v-for="region in regions"
        :key="region.name"
        :class="{ 'dropdown-item': true, 'active': region.id === selectedRegionId }"
        :href="region.url"
      >
        {{ region.name }}
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  selectedRegionId?: string;
}>();

// Define countries data
const { data: regions } = useRegionUrls();
const selectedRegion = computed(() => regions.value?.find((r) => r.id === props.selectedRegionId));
</script>

<style scoped></style>
