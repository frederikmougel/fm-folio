<script lang="ts">
import Badge from '@/components/Badge.vue';
import Contact from '@/components/Contact.vue';
import FooterVue from '@/components/FooterVue.vue';
import HeaderVue from '@/components/HeaderVue.vue';
import Hero from '@/components/Hero.vue';
import Skills from '@/components/Skills.vue';
import Work from '@/components/Work.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {Badge, Contact, HeaderVue, Hero, Skills, Work, FooterVue},
  data() {
    return {
    };
  },
  mounted(){
    window.scrollTo(0, 0)
  },
  methods: {
    scrollToBottom(){
      const ref: any = this.$refs.contact
      if(ref){
        ref.$el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
});
</script>

<template>
  <HeaderVue/>
  <main class="min-h-screen bg-background pt-10">
    <div class="m-auto pb-14" >
      <div class="max-w-3xl m-auto pt-7 px-10">
        <Hero @scroll-to-bottom="scrollToBottom"/> 

        <Badge :text="'work'"/>
        <Work />
        
        <Badge :text="'skills'"/>
        <Skills />

        <Badge :text="'contact'"/>
        <Contact ref="contact"/>

      </div>
    </div>
  </main>
  <FooterVue />
</template>

<style lang="css">
.highlight {
  padding: 4px;
  font-family: 'Roboto Mono', sans-serif;
  @apply bg-primary/20 border text-sm border-primary/15 px-1 rounded inline-flex items-center gap-1;
}
.card{
  @apply border border-muted-foreground/20 bg-accent/5 h-full rounded-2xl;
}
</style>
