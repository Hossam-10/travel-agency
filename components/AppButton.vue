<template>
  <Button
    :class="[
      'capitalize py-2 text-white rounded ',
      classContent,
      disabled ? `${disabledClass} cursor-not-allowed` : '',
    ]"
    :type="type"
    :disabled="disabled || loading"
    :loading="loading"
  >
    <slot />
  </Button>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";

defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  disabledClass: {
    type: String,
    default: "bg-primary-200",
  },
  type: {
    type: String as PropType<"button" | "submit" | "reset">,
    default: "button",
  },
  classContent: {
    type: String,
    default: "px-4",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>
