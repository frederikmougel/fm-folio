<script lang="ts">
import FooterVue from '@/components/FooterVue.vue';
import HeaderVue from '@/components/HeaderVue.vue';
import { ArrowLeft } from 'lucide-vue-next';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {ArrowLeft, HeaderVue, FooterVue},
  data() {
    return {
    };
  },
  mounted(){
    window.scrollTo(0, 0)
  },
  methods: {
  }
});
</script>

<template>
  <HeaderVue />
  <main class="min-h-screen bg-background pt-10 pb-32">
    <div class="m-auto" >
        <div class="max-w-3xl m-auto pt-7 px-10">
          <div class="w-fit">
            <RouterLink to="/">
              <div class="flex flex-row gap-2 text-muted-foreground/80 ">
                <ArrowLeft :size="16" class="self-center"/>
                back
              </div>
            </RouterLink>
            <h1 class="text-3xl mt-8 italic">About me</h1>
            <div class="mt-6 flex max-w-2xl flex-col gap-5 text-pretty">
              <p>
                I'm a <strong class="text-white">developer</strong> based in <strong class="text-white">Rouen, France</strong>. Since my early teens, I've been an <strong class="text-white">addict</strong> to <strong class="text-white">computers and technology</strong>. Whether it was <strong class="text-white">playing games</strong> or <strong class="text-white">troubleshooting tech issues</strong>, like fixing a PC that wouldn’t start or resolving a game launch issue, I found joy in <strong class="text-white">solving problems</strong>.
              </p>                           
              <p>
                After enrolling in university, I quickly realized that <strong class="text-white">traditional computer science education</strong> wasn't aligned with my goals. The broad scope and slow pace of the courses didn’t match my desire to dive deeper into <strong class="text-white">web and mobile app development</strong>.
              </p>
              <p>
                Early on, I started teaching myself in parallel with my classes, and about two years ago, I made a <strong class="text-white">bold decision</strong>: to leave my studies and <strong class="text-white">fully commit to learning on my own</strong>. It was a challenging choice, but I was <strong class="text-white">very confident in my ability to grow as a developer</strong>. Since then, I’ve focused on practical projects, and I finally completed one that holds significant meaning for me: a <strong class="text-white">cross-platform app for street workout</strong>, a sport I’m <strong class="text-white">deeply passionate about</strong>. This app not only brings practitioners together but also builds a sense of community through features that encourage communication and healthy competition.
              </p>
              <p>
                My strong passion for <strong class="text-white">my sport</strong> has instilled a mindset of <strong class="text-white">discipline</strong> and <strong class="text-white">perseverance</strong> that I naturally apply to development. This mindset seamlessly integrates into my work, enhancing my <strong class="text-white">motivation</strong> and drive. I’m excited to bring this approach to new projects, aiming to create solutions that foster <strong class="text-white">engagement</strong> and <strong class="text-white">growth</strong>.
              </p>
            </div>                      
          </div>            
        </div>
    </div>
  </main>
  <FooterVue />
</template>

<style lang="css">
</style>
