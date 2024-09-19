<template>
  <div>
    <h2 class="capitalize mt-24 mb-2 text-xs border border-muted-foreground/30 w-fit py-1 px-3 rounded">
        {{text}}
    </h2>
  </div>
</template>

<script lang="ts">
import Applications from '@/assets/icons/Applications.vue';
import Linkedin from '@/assets/icons/LinkedIn.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  components: { Applications, Linkedin},
  props: ["text"],
  data() {
    return {
    };
  },
  methods: {
  }
});
</script>

<style lang="css">
</style>
