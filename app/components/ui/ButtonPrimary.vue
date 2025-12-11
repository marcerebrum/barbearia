<template>
  <button
    :type="type"
    class="group relative inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary-600 text-primary-foreground rounded-lg font-medium transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-xl hover:shadow-primary/30 active:scale-95 active:shadow-lg"
    @click="$emit('click')"
  >
    <span class="relative z-10 flex items-center gap-2">
      <slot></slot>
      <!-- Animated arrow icon -->
      <svg
        class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </span>
    <!-- Shimmer effect on hover -->
    <span class="absolute inset-0 rounded-lg overflow-hidden">
      <span class="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
    </span>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  type?: 'button' | 'submit' | 'reset'
}>()

defineEmits<{
  (e: 'click'): void
}>()
</script>
