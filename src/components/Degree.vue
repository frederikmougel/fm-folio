<template>
  <div>
      <div class="m-auto mb-10">
          <h1 class="text-3xl">My Degrees</h1>
          <p>Here are my educational qualifications:</p>
      </div>
      
      <div class="m-auto grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-3 overflow-auto">
        <div class="card p-6 sm:w-full">
          <h3 class="mt-1 mb-2 text-lg font-semibold">Scientific Baccalaureate (2020)</h3>
          <p class="text-sm text-muted-foreground">Computer Science specialization.</p>
          <p class="text-sm text-muted-foreground">Lycée Général Van Gogh, Aubergenville (78410).</p>
        </div>
        <div class="card p-6 sm:w-full">
          <h3 class="mt-1 mb-2 text-lg font-semibold">Level 5 Diploma (Bac+2) - Web Developer (2025)</h3>
          <p class="text-sm text-muted-foreground">Ongoing at <strong class="italic">OpenClassrooms</strong>.</p>
          <p class="text-sm text-muted-foreground">Learning JavaScript, React, Node.js, Express.js, project preparation, debug and optimization.</p>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
name: 'DegreesSection',
});
</script>

<style lang="css">
</style>
