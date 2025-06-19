<template>
  <div>
    <div>
      <div class="m-auto mb-10">
        <h1 class="text-3xl">A selection of my projects</h1>
        <p>I develop tailor-made solutions for <strong>independents</strong>, brands, and creators. Each style is 100% adapted to their taste.</p>
      </div>

      <!-- Filters -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button 
          v-for="filter in filters" 
          :key="filter.id"
          @click="activeFilter = filter.id"
          :class="[
            'px-4 py-2 rounded-full border transition-all',
            activeFilter === filter.id 
              ? 'bg-white/95 border-background text-background' 
              : 'border-muted-foreground/20 hover:border-primary/50'
          ]"
        >
          {{ filter.label }}
        </button>
      </div>

      <!-- Projects Carousel -->
      <div class="relative mb-12">
        <div class="overflow-hidden">
          <div 
            class="flex transition-transform duration-300 ease-in-out"
            :style="{ transform: `translateX(-${currentIndex * slideWidth}%)` }"
          >
            <div 
              v-for="(project, index) in filteredProjects" 
              :key="project.id"
              class="w-full md:w-1/2 flex-shrink-0 px-3"
            >
              <div 
                class="card flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                @click="openModal(project.id)"
              >
                <div 
                  class="h-30 relative overflow-hidden flex items-center justify-center"
                  :class="`bg-gradient-to-br ${project.gradient}`"
                >
                  <img 
                    v-if="project.image" 
                    :src="project.image" 
                    :alt="project.title" 
                    class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div v-else class="text-center z-10">
                    <p class="text-white font-medium">{{ project.label }}</p>
                  </div>
                  <div class="absolute top-4 right-4">
                    <span 
                      class="px-3 py-1 rounded-full text-xs font-medium text-white backdrop-blur-sm"
                      :class="project.badgeColor"
                    >
                      {{ project.badgeText }}
                    </span>
                  </div>
                </div>

                <div class="flex flex-col flex-grow p-6">
                  <h3 class="text-xl font-semibold mb-3">{{ project.title }}</h3>
                  <p class="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {{ project.shortDescription }}
                  </p>
                  <div class="flex flex-wrap gap-2 mb-6">
                    <span 
                      v-for="tech in project.technologies" 
                      :key="tech" 
                      class="px-3 py-1 rounded-full text-xs bg-secondary text-secondary-foreground font-medium"
                    >
                      {{ tech }}
                    </span>
                  </div>
                  <button 
                    class="w-full self-end mt-auto py-3 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors font-medium"
                    @click.stop="openModal(project.id)"
                  >
                    View details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Arrows -->
        <button 
          v-if="showArrows"
          @click="prevSlide"
          class="absolute left-0 top-1/2 -translate-y-1/2 sm:-translate-x-12 -translate-x-1 bg-background/80 hover:bg-background sm:p-2 p-1 rounded-full shadow-md border border-muted-foreground/20 z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </button>
        <button 
          v-if="showArrows"
          @click="nextSlide"
          class="absolute right-0 top-1/2 -translate-y-1/2 sm:translate-x-12 translate-x-1 bg-background/80 hover:bg-background sm:p-2 p-1 rounded-full shadow-md border border-muted-foreground/20 z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>
      </div>

      <!-- CTA Section -->
      <div class="mt-20 relative overflow-hidden">
        <!-- Background Pattern -->
        <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-blue-500/5"></div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        
        <!-- Content -->
        <div class="relative border border-primary/20 rounded-3xl p-12 backdrop-blur-sm bg-background/50">
          <div class="max-w-3xl mx-auto text-center">
            <!-- Icon -->
            <div class="mb-6 flex justify-center">
              <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center border border-primary/30">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-primary">
                  <path d="M8 2v4"/>
                  <path d="M16 2v4"/>
                  <rect width="18" height="18" x="3" y="4" rx="2"/>
                  <path d="M3 10h18"/>
                  <path d="M8 14h.01"/>
                  <path d="M12 14h.01"/>
                  <path d="M16 14h.01"/>
                  <path d="M8 18h.01"/>
                  <path d="M12 18h.01"/>
                </svg>
              </div>
            </div>

            <!-- Title -->
            <h3 class="text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
              Ready to bring your project to life ?
            </h3>
            
            <!-- Description -->
            <p class="text-lg text-muted-foreground mb-8 leading-relaxed">
              Let’s work together to create a web solution that perfectly reflects your vision.
              <span class="text-foreground font-medium">Custom design</span>, 
              <span class="text-foreground font-medium">modern development</span> and 
              <span class="text-foreground font-medium">personalized support</span>.
            </p>

            <!-- Stats/Features -->
            <div class="grid md:grid-cols-3 gap-6 mb-10">
              <div class="text-center">
                <div class="text-2xl font-bold text-primary mb-1">100%</div>
                <div class="text-sm text-muted-foreground">Tailor-made</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-primary mb-1">24h</div>
                <div class="text-sm text-muted-foreground">First reply</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-primary mb-1">∞</div>
                <div class="text-sm text-muted-foreground">Included support</div>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                @click="$emit('scrollToBottom')" 
                class="group relative px-8 py-4 rounded-xl bg-white/90 text-black hover:text-white hover:bg-primary transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl flex items-center gap-3"
              >
                <span>Let's talk about your project</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Project Modal -->
<div 
  v-if="activeModal"
  class="fixed inset-0 z-50 overflow-y-auto bg-[#000517]/70 backdrop-blur-md flex items-center justify-center p-4"
  @click.self="closeModal"
>
  <div class="border border-muted-foreground/20 bg-accent/5 rounded-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto shadow-2xl border-2">
    <!-- Modal Header -->
    <div class="p-8 border-b border-muted-foreground/20 bg-gradient-to-r from-primary/5 to-purple-500/5">
      <div class="flex justify-between items-start">
        <div>
          <h3 class="text-3xl font-bold mb-3">{{ activeModalData.title }}</h3>
          <span 
            :class="[
              'inline-block px-4 py-2 rounded-full text-sm font-medium',
              activeModalData.status === 'Completed' 
                ? 'bg-green-500/20 text-green-600 border border-green-500/30' 
                : 'bg-yellow-500/20 text-yellow-600 border border-yellow-500/30'
            ]"
          >
            {{ activeModalData.status }}
          </span>
        </div>
        <button @click="closeModal" class="p-2 rounded-xl border border-transparent hover:border-muted-foreground/20 ">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Modal Content -->
    <div class="p-8 bg-[#000517]/0 backdrop-blur-md flex flex-col flex-1">
      
      <!-- Videos Section - Remplacement optimisé des GIFs -->
      <div v-if="activeModalData.videos && activeModalData.videos.length > 0" class="mb-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <!-- Mobile Videos (1-2) -->
          <div v-if="activeModalData.videos.length >= 2" class="space-y-4">
            <h4 class="text-lg font-semibold text-primary">Mobile</h4>
            <div class="grid grid-cols-2 gap-4">
              <div 
                v-for="(video, index) in activeModalData.videos.slice(0,2)" 
                :key="`mobile-vid-${index}`"
                class="rounded-lg overflow-hidden shadow-lg relative"
              >
                <video 
                  :src="video" 
                  :poster="`/video-posters/${activeModalData.id}-${index+1}.jpg`"
                  class="w-full h-auto"
                  autoplay
                  loop
                  muted
                  playsinline
                  preload="metadata"
                ></video>
              </div>
            </div>
          </div>
          
          <!-- Desktop Videos (3-4) -->
          <div v-if="activeModalData.videos.length >= 4" class="space-y-4">
            <h4 class="text-lg font-semibold text-primary">Desktop</h4>
            <div class="grid grid-cols-1 gap-4">
              <div 
                v-for="(video, index) in activeModalData.videos.slice(2,4)" 
                :key="`desktop-vid-${index}`"
                class="rounded-lg overflow-hidden shadow-lg relative group"
              >
                <video 
                  :src="video" 
                  :poster="`/video-posters/${activeModalData.id}-${index+3}.jpg`"
                  class="w-full h-auto"
                  autoplay
                  loop
                  muted
                  playsinline
                  preload="metadata"
                ></video>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="grid md:grid-cols-2 gap-8">
        <div class="space-y-6">
          <div>
            <h4 class="text-xl font-semibold mb-3 text-primary">Description</h4>
            <p class="text-muted-foreground leading-relaxed">{{ activeModalData.description }}</p>
          </div>
          
          <div>
            <h4 class="text-xl font-semibold mb-3 text-primary">Technologies</h4>
            <div class="flex flex-wrap gap-3">
              <span 
                v-for="tech in activeModalData.technologies" 
                :key="tech"
                class="px-4 py-2 rounded-full text-sm bg-secondary text-secondary-foreground font-medium border"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
        
        <div>
          <h4 class="text-xl font-semibold mb-3 text-primary">Benefits</h4>
          <ul class="space-y-3">
            <li v-for="benefit in activeModalData.benefits" :key="benefit" class="flex items-start gap-3 text-muted-foreground">
              <div class="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-primary">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
              </div>
              <span class="leading-relaxed">{{ benefit }}</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div v-if="activeModalData.links && activeModalData.links.length > 0" class="mt-8 pt-6 border-t border-muted-foreground/20">
        <h4 class="text-xl font-semibold mb-4 text-primary">Links</h4>
        <div class="space-y-2 flex flex-col">
          <a 
            v-for="link in activeModalData.links" 
            :key="link.label"
            :href="link.url" 
            target="_blank"
            class="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 group"
          >
            <span>{{ link.label }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="opacity-60 group-hover:opacity-100 transition-opacity">
              <path d="M7 17L17 7"></path>
              <path d="M7 7h10v10"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
    
    <!-- Modal Footer -->
    <div class="p-8 bg-[#000517]/0 backdrop-blur-md">
      <button 
        @click="closeModal"
        class="w-full py-3 rounded-lg border border-muted-foreground/20 bg-primary/10 hover:bg-primary/20 text-primary transition-colors font-medium"
      >
        Close
      </button>
    </div>
  </div>
</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Work',
  data() {
    return {
      activeFilter: 'all',
      currentIndex: 0,
      isMobile: false,
      filters: [
        { id: 'all', label: 'All' },
        { id: 'web', label: 'Web' },
        { id: 'mobile', label: 'Mobile' },
        { id: 'fullstack', label: 'Fullstack' }
      ],
      activeModal: null,
      projects: [
        {
          id: 'mana',
          title: 'Mana - Inner Force',
          status: 'Completed',
          category: ['mobile', 'fullstack'],
          image: '/images/mana.webp',
          videos: [
            '/videos/mana-1.mp4',
            '/videos/mana-2.mp4'
          ],
          shortDescription: 'Social network dedicated to street workout with video challenges, rankings, and mutual support.',
          description: 'Mana is an innovative cross-platform social app designed for the calisthenics community. Users can post videos of fitness challenges, participate in challenges by recording their performances, self-assess among members, and climb local or global rankings. A forum is integrated to promote mutual support, and a collaborative calendar allows users to organize or discover events nearby.',
          technologies: ['Vue.js', 'NativeScript', 'Firebase', 'Node.js', 'MongoDB', 'AWS'],
          benefits: [
            'Create and participate in fitness challenges via video',
            'Ranking based on user-to-user scoring',
            'Social features: forum and messaging',
            'Built-in calendar to plan and discover events',
            'Immersive mobile experience designed for athletes'
          ],
          links: [
            { label: 'App Store', url: 'https://apps.apple.com/fr/app/mana-inner-force/id6502390956' },
            { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=fr.fred.mana&hl=fr&pli=1' }
          ],
          badgeColor: 'bg-green-500/90',
          badgeText: 'Completed',
          gradient: 'from-slate-900 to-slate-700',
          icon: null,
          label: null
        },
        {
          id: 'vacalis',
          title: 'Vacalis - Radiology',
          status: 'In progress',
          category: ['web', 'mobile', 'fullstack'],
          videos: [
            '/videos/vacalis-1.mp4',
            '/videos/vacalis-2.mp4',
            '/videos/vacalis-3.mp4',
            '/videos/vacalis-4.mp4'
          ],
          image: '/images/vacalis.webp',
          shortDescription: 'Platform connecting healthcare professionals and radiology offices with geolocation.',
          description: 'Vacalis facilitates connections between healthcare professionals and radiology practices. This cross-platform app allows caregivers to find and apply for opportunities around them via an interactive map, while practices can easily post, manage, and track applications. An integrated messaging system helps streamline communication between both parties directly within the app.',
          technologies: ['Next.js', 'React Native', 'MongoDB', 'Node.js'],
          benefits: [
            'Search for offers and candidates via geolocation and interactive map',
            'Simplified application management for both caregivers and practices',
            'Integrated instant messaging to ease communication',
            'Real-time notifications to never miss an update',
            'Integrated document management for smooth tracking',
            'Clear, minimal interface designed mobile-first'
          ],
          links: [],
          badgeColor: 'bg-yellow-500/90',
          badgeText: 'In progress',
          gradient: 'from-blue-500 via-purple-500 to-indigo-600',
          icon: 'calendar',
          label: 'Radiology & Healthcare'
        },
        {
          id: 'vrombie',
          title: 'Vrombie Tattoo',
          status: 'In progress',
          category: ['web', 'fullstack'],
          image: '/images/vrombie.webp',
          shortDescription: 'High-end showcase website for a tattoo studio with a refined, minimalist style.',
          description: 'Vrombie is a luxury-oriented tattoo studio for which I designed a custom website. The goal was to reflect a minimalist and high-end aesthetic. Smooth navigation, elegant typography, and a clean interface help strengthen the brand image. A dedicated section showcases the artists and facilitates appointment booking.',
          technologies: ['Next.js', 'Tailwind'],
          benefits: [
            'Clean and elegant design aligned with a premium brand image',
            'Smooth navigation with subtle animations',
            'Dedicated artist pages with portfolios',
            'Simplified contact for clients',
            'Mobile-friendly and SEO optimized'
          ],
          links: [
            {
              label: 'Website (in progress)',
              url: 'https://la-vrombie.vercel.app/'
            }
          ],
          badgeColor: 'bg-yellow-500/90',
          badgeText: 'In progress',
          gradient: 'from-red-900 via-black to-red-800',
          icon: 'ink',
          label: 'Tattoo Studio'
        },
        {
          id: 'yorokobi',
          title: 'Yorokobi Tattoo',
          status: 'Completed',
          category: ['web'],
          image: '/images/yorokobi.webp',
          shortDescription: 'Custom website for a tattoo studio inspired by Japanese culture.',
          description: 'Yorokobi is a tattoo studio whose visual identity is inspired by Japanese culture. The site highlights this artistic direction. Visitors can explore the studio, discover the artists, and easily get in touch.',
          technologies: ['Next.js', 'TailwindCSS'],
          benefits: [
            'Smooth and intuitive user journey',
            'Gallery section and artist presentation',
            'Responsive design optimized for all devices',
            'Integrated quick contact tool'
          ],
          links: [
            {
              label: 'Website',
              url: 'https://www.yorokobi-tattoo.com/'
            }
          ],
          badgeColor: 'bg-green-500/90',
          badgeText: 'Completed',
          gradient: 'from-rose-900 via-yellow-800 to-amber-900',
          icon: null,
          label: 'Japanese Tattoo'
        }
      ]
    };
  },
  computed: {
    activeModalData(): any {
      return this.projects.find(p => p.id === this.activeModal) || {};
    },
    filteredProjects() {
      if (this.activeFilter === 'all') return this.projects;
      return this.projects.filter(p => p.category.includes(this.activeFilter));
    },
    slideWidth() {
      // Sur mobile (< md), chaque slide fait 100% de largeur
      // Sur desktop (>= md), chaque slide fait 50% de largeur
      return this.isMobile ? 100 : 50;
    },
    maxIndex() {
      /* if (this.isMobile) {
        // Sur mobile, on peut aller jusqu'au dernier projet (index = length - 1)
        return Math.max(0, this.filteredProjects.length - 1);
      } else {
        // Sur desktop, on affiche 2 projets à la fois
        return Math.max(0, Math.ceil(this.filteredProjects.length / 2) - 1);
      } */
     return this.isMobile ? 3 : 2
    },
    showArrows() {
      if (this.isMobile) {
        return this.filteredProjects.length > 1;
      } else {
        return this.filteredProjects.length > 2;
      }
    }
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth < 768; // md breakpoint
    },
    openModal(projectId: any) {
      this.activeModal = projectId;
      document.body.style.overflow = 'hidden';
    },
    closeModal() {
      this.activeModal = null;
      document.body.style.overflow = '';
    },
    nextSlide() {
      if (this.currentIndex < this.maxIndex) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.maxIndex;
      }
    }
  },
  watch: {
    activeFilter() {
      this.currentIndex = 0; // Reset index when filter changes
    }
  },
  mounted() {
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobile);
  }
});
</script>

<style scoped>
/* Line clamp utility */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>