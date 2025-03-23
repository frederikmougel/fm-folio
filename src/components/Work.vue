<template>
  <div class="overflow-hidden">
    <div class="m-auto mb-8">
      <h1 class="text-3xl">My biggest project</h1>
      <p class="pt-1 text-pretty">
        I created this app with
        <span class="highlight"><Vue :size="13" class="inline mr-1" />Vue.js</span>
        and
        <span class="highlight"><Nativescript :size="13" class="inline mr-1" />NativeScript</span>,
        which now allows me to have the skills to help people with their projects.
      </p>
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
          <h3 class="mb-2 text-lg font-semibold">Mana - Inner Force</h3>
          <div @click="toggleExpanded('mana')" class="flex flex-col gap-4 text-sm text-muted-foreground hover:cursor-pointer">
            <p>
              Discover my app dedicated to calisthenics enthusiasts! Connect with friends and a global community to exchange information, support each other, and take on stimulating
              <span v-show="!isExpanded.mana">...</span>
              <span v-show="isExpanded.mana" class="transition-all duration-300">
                challenges.
              </span>
            </p>
            <p v-show="!isExpanded.mana" class="cursor-pointer text-blue-400 animate-pulse">Show More</p>
            <transition name="fade" mode="out-in">
              <div v-show="isExpanded.mana" class="transition-all duration-300 flex flex-col gap-4">
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
                <span @click="toggleExpanded('mana')" class="cursor-pointer text-blue-400 animate-pulse">Show Less</span>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>

    <div class="m-auto mb-8 mt-10">
      <h1 class="text-3xl">Other projects</h1>
      <p class="pt-1 text-pretty">
        Here are two major projects I have worked on as part of my OpenClassrooms degree :
      </p>
    </div>
    <div class="flex flex-col gap-y-5">
      <!-- Kasa project -->
      <div class="card p-6 col-span-2 sm:w-full">
        <h3 class="mb-2 text-lg font-semibold">Kasa</h3>
        <div @click="toggleExpanded('kasa')" class="flex flex-col gap-4 text-sm text-muted-foreground hover:cursor-pointer">
          <p>
            Kasa is a real estate rental web application developed with 
            <span class="highlight"><React :size="13" class="inline mr-1" />React</span>. 
            The project focused on front-end implementation, ensuring a seamless and
            <span v-show="!isExpanded.kasa">...</span>
            <span v-show="isExpanded.kasa" class="transition-all duration-300">
              interactive user experience. It includes smooth navigation using React Router, dynamic data handling, and an optimized UI based on professional wireframes.
            </span>
          </p>
          <p v-show="!isExpanded.kasa" class="cursor-pointer text-blue-400 animate-pulse">Show More</p>
          <transition name="fade" mode="out-in">
            <div v-show="isExpanded.kasa" class="transition-all duration-300 flex flex-col gap-4">
              <p>Key Features:</p>
              <p>
                Dynamic Routing: Implemented with React Router to navigate between property listings, details, and error pages.
              </p>
              <p>
                Component-based UI: Built reusable React components to ensure modular and scalable development.
              </p>
              <p>
                Responsive Design: Ensured a mobile-friendly experience based on provided UI wireframes.
              </p>
              <p>
                Error Handling: Managed error pages and fallback UI for a better user experience.
              </p>
              <p class="mt-4 text-balance">
                Get the open-source code
                <a @click.stop href="https://github.com/frederikmougel/projet5_OC" aria-label="Kasa" target="_blank" class="text-primary-foreground font-semibold italic">
                  here
                </a>
                .
              </p>
              <span @click="toggleExpanded('kasa')" class="cursor-pointer text-blue-400 animate-pulse">Show Less</span>
            </div>
          </transition>
        </div>
      </div>
      <!-- Book Rating API project -->
      <div class="card p-6 col-span-2 sm:w-full">
        <h3 class="mb-2 text-lg font-semibold">Book Rating API</h3>
        <div @click="toggleExpanded('bookRating')" class="flex flex-col gap-4 text-sm text-muted-foreground hover:cursor-pointer">
          <p>
            This project consists of developing the back-end of a book rating website using Node.js,
            <span class="highlight"><ExpressJS :size="13" class="inline mr-1" />ExpressJS</span>,
            and MongoDB. The focus is on setting
            <span v-show="!isExpanded.bookRating">...</span>
            <span v-show="isExpanded.bookRating" class="transition-all duration-300">
              up a secure API with CRUD operations, user authentication, and optimized image management.
            </span>
          </p>
          <p v-show="!isExpanded.bookRating" class="cursor-pointer text-blue-400 animate-pulse">Show More</p>
          <transition name="fade" mode="out-in">
            <div v-show="isExpanded.bookRating" class="transition-all duration-300 flex flex-col gap-4">
              <p>Key Features:</p>
              <p>
                Server Setup: Developed using Express.js, connected to a MongoDB database.
              </p>
              <p>
                CRUD Operations: Implemented secure Create, Read, Update, and Delete operations for books and ratings.
              </p>
              <p>
                User Authentication: Secure authentication system ensuring safe access to the application.
              </p>
              <p>
                Image Management: Supports image upload and optimization for book covers.
              </p>
              <p>
                Green Code Practices: Optimized performance to minimize the application's ecological footprint.
              </p>
              <p class="mt-4 text-balance">
                Get the open-source code
                <a @click.stop href="https://github.com/frederikmougel/projet6-backend" aria-label="Book Rating API" target="_blank" class="text-primary-foreground font-semibold italic">
                  here
                </a>.
              </p>
              <span @click="toggleExpanded('bookRating')" class="cursor-pointer text-blue-400 animate-pulse">Show Less</span>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Applications from '@/assets/icons/Applications.vue';
import ExpressJS from '@/assets/icons/ExpressJS.vue';
import MongoDB from '@/assets/icons/MongoDB.vue';
import Nativescript from '@/assets/icons/Nativescript.vue';
import React from '@/assets/icons/React.vue';
import Vue from '@/assets/icons/Vue.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  components: { Applications, Nativescript, Vue, React, ExpressJS },
  data() {
    return {
      isExpanded: {
        mana: false,
        kasa: false,
        bookRating: false
      }
    };
  },
  methods: {
    toggleExpanded(project: 'mana' | 'kasa' | 'bookRating') {
      this.isExpanded[project] = !this.isExpanded[project];
    }
  }
});
</script>

<style lang="css">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
