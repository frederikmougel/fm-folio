<template>
    <header class="sticky top-0 z-10">
      <div class="h-20 flex justify-center items-center bg-background-500/80 backdrop-blur-md pr-10">
        <nav class="flex gap-4 w-full max-w-3xl justify-end text-center text-sm font-medium text-muted-foreground/80">
          <RouterLink to="/" class="w-10" :class="{ 'text-muted-foreground': $route.path === '/' }">
            home
          </RouterLink>
          <RouterLink to="/story" class="w-10" :class="{ 'text-muted-foreground': $route.path === '/story'}">
            story
          </RouterLink>
        </nav>
      </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  components: { },
  props: [],
  data() {
    return {
    };
  },
  methods: {
  }
});
</script>
