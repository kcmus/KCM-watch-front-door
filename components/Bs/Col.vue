<template>
  <div :class="getColClasses(props)">
    <slot />
  </div>
</template>

<script lang="ts" setup>
type ColVal<V extends string | number = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "auto"> = V | `${V}`;

type BreakpointName = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export type ColProps = { auto?: true } & {
  [K in BreakpointName | "col"]?: ColVal | boolean;
};

const props = withDefaults(defineProps<ColProps>(), {
  col: undefined,
  xs: undefined,
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
  xxl: undefined,
  auto: undefined,
});

function getColClasses(props: ColProps) {
  
  function isValidColumn(col: unknown): col is ColVal {
    if (col === "auto") {
      return true;
    }

    const count = typeof col === "string" && Number.isFinite(parseInt(col)) ? parseInt(col) : col;
    return typeof count === "number" && count >= 1 && count <= 12;
  }

  function getClassName(breakpoint: string, prop: ColVal | boolean | undefined | null): string | undefined {
    if (prop === true) {
      return breakpoint; // Equal width column at this breakpoint
    } else if (isValidColumn(prop)) {
      return `${breakpoint}-${prop}`; // Explicit width column at this breakpoint, or auto.
    } else {
      return undefined;
    }
  }

  const propKeys: readonly ("col" | BreakpointName)[] = ["col", "xs", "sm", "md", "lg", "xl", "xxl"];
  const classNames = propKeys
    .map((key) => {
      const breakpoint = key !== "col" ? `col-${key}` : key;
      return getClassName(breakpoint, props[key]);
    })
    .filter((className) => typeof className === "string");

  if (classNames.length === 0) {
    return props.auto ? "col-auto" : "col";
  }

  return classNames;
}
</script>
