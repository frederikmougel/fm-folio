<template>
    <div>
        <div class="m-auto mb-10">
            <h1 class="text-3xl">Contact me</h1>
            <p>Find me on my social networks or send me an email.</p>
            <div class="flex flex-col sm:flex-row sm:items-center gap-y-4 sm:gap-8 my-9 sm:my-8">
                <div class="flex gap-8">
                    <a href="https://www.linkedin.com/in/frederikmougel/" aria-label="LinkedIn" target="_blank" class="flex flex-col items-center gap-1 hover:scale-110 transition-transform" style="color:#2D64BC;filter:drop-shadow(0px 0px 10px rgba(250, 250, 250, 0.3))">
                        <Linkedin :size="24"/>
                        <span class="text-xs">LinkedIn</span>
                    </a>
                    <a href="https://github.com/frederikmougel" aria-label="GitHub" target="_blank" class="flex flex-col items-center gap-1 hover:scale-110 transition-transform" style="color:#ffffff;filter:drop-shadow(0px 0px 10px rgba(250, 250, 250, 0.3))">
                        <GitHub :size="24"/>
                        <span class="text-xs">GitHub</span>
                    </a>
                    <a href="https://www.instagram.com/mougelfrederik/" aria-label="Instagram" target="_blank" class="flex flex-col items-center gap-1 hover:scale-110 transition-transform" style="color:#ffffff;filter:drop-shadow(0px 0px 10px rgba(250, 250, 250, 0.3))">
                        <Instagram :size="24"/>
                        <span class="text-xs">Instagram</span>
                    </a>
                </div>
                <a class="underline sm:ml-4" href="mailto:frkmougel@gmail.com" aria-label="Email">frkmougel@gmail.com</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import GitHub from '@/assets/icons/GitHub.vue';
import Instagram from '@/assets/icons/Instagram.vue';
import Linkedin from '@/assets/icons/LinkedIn.vue';
import Vue from '@/assets/icons/Vue.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  props: [],
  components: { GitHub, Linkedin, Instagram},
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
