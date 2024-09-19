<template>
    <div class="overflow-hidden">
        <div class="m-auto mb-8">
            <h1 class="text-3xl">My biggest project</h1>
            <p>I created this app, which now allows me to have the skills to help people with their projects.</p>
        </div>
        <div>
          <div class="flex flex-col gap-y-5">
            <div class="grid grid-cols-2 sm:grid-rows-1 sm:grid-cols-5 gap-5 w-full">
              <div class="col-span-2 sm:col-span-3 self-end rounded-2xl border border-muted-foreground/20 bg-accent/5 h-fit overflow-hidden">
                <img alt="Mana" loading="lazy" importance="high" width="auto" height="auto" src="../assets/images/splash.webp">
              </div>
              <video aria-label="Preview1" autoplay loop muted playsinline width="auto" height="auto" class="col-span-1 rounded-2xl border border-muted-foreground/20 bg-accent/5 sm:h-full w-full">
                <source src="../assets/videos/1.mov" type="video/mp4">
                <img src="../assets/gifs/1.gif" alt="Preview1">
              </video>    
              <video aria-label="Preview2" autoplay loop muted playsinline width="auto" height="auto" class="col-span-1 rounded-2xl border border-muted-foreground/20 bg-accent/5 sm:h-full w-full">
                <source src="../assets/videos/2.mov" type="video/mp4">
                <img src="../assets/gifs/2.gif" alt="Preview2">
              </video>            
            </div>
            <div class="card p-6 col-span-2 sm:w-full">
              <!-- <div class="animate-pulse z-0 overflow-hidden w-full h-20 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500"></div> -->
              <h3 class="mb-2 text-lg font-semibold">Mana - Inner Force</h3>
              <div @click="toggleExpanded" class="flex flex-col gap-4 text-sm text-muted-foreground hover:cursor-pointer">
                <p>
                  Discover my app dedicated to calisthenics enthusiasts! Connect with friends and a global community to exchange information, support each other, and take on stimulating
                  <span v-show="!isExpanded">...</span>
                  <span v-show="isExpanded" class="transition-all duration-300">
                    challenges.
                  </span>
                </p>
                <p v-show="!isExpanded" class="cursor-pointer text-blue-400 animate-pulse">Show More</p>
                <transition name="fade" mode="out-in">
                  <div v-show="isExpanded" class="transition-all duration-300 flex flex-col gap-4">
                    <p>Key Features:</p>
                    <p>
                      Challenges: Create and participate in time-limited calisthenics challenges, challenge your friends and the community by posting videos, regardless of your level. Rate
                      the performances of other participants and earn scores based on evaluations for each challenge.
                    </p>
                    <p>
                      Leaderboards: Reach the top of national and worldwide leaderboards. Accumulate scores through challenge creation, participation, and evaluations from other users to
                      climb the ranks and become the best.
                    </p>
                    <p>
                      Forum: Engage in open discussions on a variety of topics related to sports and calisthenics. Share tips, tricks, and encouragement with a passionate community.
                    </p>
                    <p>
                      Events: Discover and organize calisthenics events such as gatherings and competitions. Check event details including locations and timings, and join fellow
                      enthusiasts.
                    </p>
                    <p class="mt-4 text-balance">
                      Discover my application now on 
                      <a @click.stop href="https://play.google.com/store/apps/details?id=fr.fred.mana&hl=fr&pli=1" aria-label="Google Play" target="_blank" class="text-primary-foreground font-semibold italic">
                        Google Play
                      </a> 
                      and the
                      <a @click.stop href="https://apps.apple.com/fr/app/mana-inner-force/id6502390956" aria-label="App Store" target="_blank" class="text-primary-foreground font-semibold italic">
                        App Store
                      </a>
                      .
                    </p>
                    <span class="cursor-pointer text-blue-400 animate-pulse">Show Less</span>
                  </div>
                </transition>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  props: [],
  data() {
    return {
      isExpanded: false
    };
  },
  methods: {
    toggleExpanded(){
      this.isExpanded = !this.isExpanded
    }
  }
});
</script>
<style lang="css">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  transition: opacity 0s;
  opacity: 0;
}
</style>
