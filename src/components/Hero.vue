<template>
    <div>
        <div class="flex items-center gap-3 w-fit">
          <div class="w-20 h-20 rounded-full overflow-hidden">
              <img class="object-cover w-full h-full" 
                  src="../assets/images/pfp.webp"
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt="Frederik Mougel" />
          </div>
          <h1 class="text-2xl font-bold">Frédérik Mougel</h1>
        </div>
        <h1 class="text-3xl mt-4 italic">Software Developer</h1>
        <p class="pt-3 text-pretty">
          I’m a fullstack developer based in 
          <span class="highlight">🇫🇷 France</span>,
          working as a solo entrepreneur. I take pleasure in managing all aspects of development, from frontend to backend, providing complete solutions for any 
          <span class="highlight"><Applications :size="12" class="inline mr-1" style="margin-left: 2px"/>application</span>.
          <span>
            <RouterLink to="/story" class="text-white/55 italic">
              Read my story.
            </RouterLink>
          </span>
        </p>
        <p @click="$emit('scrollToBottom')" class="mt-4 sm:mt-2 font-mono text-sm cursor-pointer">
          Contact me 
          <ArrowUpRight class="inline" :size="17"/>
        </p>
    </div>
</template>

<script lang="ts">
import Applications from '@/assets/icons/Applications.vue';
import LinkedIn from '@/assets/icons/LinkedIn.vue';
import { ArrowUpRight } from 'lucide-vue-next';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  components: { Applications, LinkedIn, ArrowUpRight},
  props: [],
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
