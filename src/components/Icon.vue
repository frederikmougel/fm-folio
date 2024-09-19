<template>
    <div class="border-2 border-primary rounded-md p-1">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  props: [],
  data() {
    return {
    };
  },
  methods: {
  }
});
</script>
