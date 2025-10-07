<template>
  <button 
    :type="type"
    class="inline-flex items-center justify-center px-6 py-3 border border-white/20 hover:bg-white/5 text-white rounded-lg font-medium transition-colors"
    @click="$emit('click')"
  >
    <slot></slot>
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