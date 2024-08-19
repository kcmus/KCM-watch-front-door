<template>
  <div :class="getClassNames(props)">
    <slot />
  </div>
</template>

<script lang="ts" setup>
type Gutters = 0 | 1 | 2 | 3 | 4 | 5;
export type RowProps = {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "auto";
  g?: Gutters | `${Gutters}`;
  gx?: Gutters | `${Gutters}`;
  gy?: Gutters | `${Gutters}`;
};

const props = withDefaults(defineProps<RowProps>(), {
  cols: undefined,
  g: undefined,
  gx: undefined,
  gy: undefined,
});


function getClassNames({ cols, g, gx, gy }: RowProps) {
  
  const getGutterClass = (className: string, value: string | number | undefined | null) => {
    return typeof value === "string" || typeof value === "number" ? ` ${className}-${value}` : "";
  };

  const gutterClass = `${getGutterClass("g", g)}${getGutterClass("gx", gx)}${getGutterClass("gy", gy)}`;

  if (typeof cols === "number" || typeof cols === "string") {
    return `row rows-cols-${cols}${gutterClass}`;
  } else {
    return gutterClass.length > 0 ? `row${gutterClass}` : "row";
  }
}
</script>

<style>

</style>
