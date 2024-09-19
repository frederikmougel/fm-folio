<template>
    <div>
        <div class="m-auto mb-10">
            <h1 class="text-3xl">How I can help you ?</h1>
            <p>I can create <b>perfect</b> experiences for your customer, making all the applications from scratch.</p>
        </div>
        
        <div class="m-auto grid grid-cols-1 sm:grid-cols-4 gap-y-3 sm:gap-3 overflow-auto">
            <div class="card p-6 col-span-3 sm:col-span-2 sm:w-full">
              <div class="flex flex-row gap-8 sm:gap-12 justify-center animate-pulse mt-1">
                <Angular :size="70" />
                <Vue :size="70" />
                <Nativescript :size="70" />
              </div>
              <div class="mt-4 mb-2 text-lg font-semibold">
                <div class="flex flex-row gap-4">
                  <h3>Angular <Angular :size="16" class="inline ml-1" :currentColor="true" /></h3>
                  <h3 class="font-light">|</h3>
                  <h3>Vue <Vue :size="16" class="inline ml-1" :currentColor="true" /></h3>
                </div>
                <h3>Nativescript <Nativescript :size="16" class="inline ml-1" :currentColor="true" /></h3>
              </div>
              <p class="text-sm text-muted-foreground">Using these frameworks, I create custom web and mobile applications to enhance your digital presence.</p>
            </div>
          
            <div class="card p-6 col-span-2 sm:w-full">
              <div class="animate-pulse z-0 overflow-hidden w-full h-20 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500"></div>
              <Tailwind :size="20" class="self-center mt-4" :currentColor="true" />
              <h3 class="mt-1 mb-2 text-lg font-semibold">TailwindCSS</h3>
              <p class="text-sm text-muted-foreground">Since I began coding, I've consistently used TailwindCSS and I think it's the best tool for CSS.</p>
            </div>
          
            <div class="card p-6 col-span-3 sm:col-span-1 sm:w-full">
              <Typescript :size="70" class="m-auto animate-pulse mt-3"/>
              <Typescript :size="20" class="self-center mt-6" :currentColor="true" />
              <h3 class="mt-2 text-lg font-semibold">TypeScript is my 2nd language</h3>
            </div>
            
            <div class="card p-6 col-span-1 sm:col-span-3 sm:w-full">
              <div class="flex flex-col sm:flex-row gap-x-10 gap-y-6 sm:gap-y-0 justify-center animate-pulse mt-1">
                <div class="flex flex-row gap-x-10 justify-center">
                  <Firebase :size="70" />
                  <MongoDB :size="70" />
                </div>
                <div class="flex flex-row gap-10 justify-center">
                  <SocketIO :size="70" />
                  <Deploy :size="75" />
                </div>
              </div>
              <ExpressJS :size="20" class="self-center mt-5" :currentColor="true" />
              <h3 class="mt-1 mb-2 text-lg font-semibold">Backend with Express.JS</h3>
              <p class="text-sm text-muted-foreground">My knowledge of backend technologies and tools allows me to create and deploy effective and customized solutions tailored to your needs.</p>
            </div>
          
          </div>
          
    </div>
</template>

<script lang="ts">
import Angular from '@/assets/icons/Angular.vue';
import Applications from '@/assets/icons/Applications.vue';
import Deploy from '@/assets/icons/Deploy.vue';
import ExpressJS from '@/assets/icons/ExpressJS.vue';
import Firebase from '@/assets/icons/Firebase.vue';
import Linkedin from '@/assets/icons/LinkedIn.vue';
import MongoDB from '@/assets/icons/MongoDB.vue';
import Nativescript from '@/assets/icons/Nativescript.vue';
import SocketIO from '@/assets/icons/SocketIO.vue';
import Tailwind from '@/assets/icons/Tailwind.vue';
import Typescript from '@/assets/icons/Typescript.vue';
import Vue from '@/assets/icons/Vue.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  components: { Applications, ExpressJS, Linkedin, Nativescript, Vue, Angular, Tailwind, Typescript, Deploy, SocketIO, MongoDB, Firebase },
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
