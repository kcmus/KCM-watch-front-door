<template>
  <button class="custom-button">
    {{ buttonText }}
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  buttonText: {
    type: String,
    required: true
  }
});

</script>

<style scoped>

.custom-button {
 
  border: 1px solid;
  border-color: #999;
  border-radius: 4.8px;
  gap: 8px;
  height: 48px;
  padding: 8px 16px 8px 16px;
  font-family: var(--heading-h5-font-family);
  font-size: 1.25rem;
  font-style: var(--heading-h5-font-style) !important;
  font-weight: 500;
  letter-spacing: var(--heading-h5-letter-spacing) !important;
  line-height: 24px;
  cursor: pointer;
  background-color: #ffffff00 !important;
  

}

.custom-button:hover {
 
  background-color: #f0f0f0;
  
}

@media (max-width: 768px){

   .custom-button{
      border: 1.8px solid;
   }

}

</style>
