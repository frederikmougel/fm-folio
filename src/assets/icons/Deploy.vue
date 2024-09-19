<template>
    <div class="text-center">
        <svg :width="size" :height="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <polygon points="50 15, 100 100, 0 100"/>
        </svg>
        <span>Deploy</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  props: ["size"],
  data() {
    return {
    };
  },
  methods: {
  }
});
</script>
