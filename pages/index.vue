<template>
  <section ref="container" class="max-w-screen-md min-h-screen text-stone-800 dark:text-stone-200 mx-auto px-4 md:px-8">
    <!-- Loading overlay -->
    <div ref="loadingOverlay" class="loading-overlay fixed inset-0 z-50 flex items-center justify-center">
      <div class="loading-gradient"></div>
    </div>

    <!-- Hero section -->
    <div class="text-center py-12 md:py-24">
      <h1
        class="fraunces text-9xl sm:text-[11rem] md:text-[14rem] leading-[0.8] tracking-[-0.04em] text-balance font-black dark:text-white">
        Meet <span class="relative inline-block">Coach <span
            class="absolute -bottom-1 left-0 w-full h-[3px] bg-stone-700/30 dark:bg-stone-400/30"></span></span>
        Artie
      </h1>
      <div class="w-40 md:w-48 h-[8px] bg-stone-700 dark:bg-stone-300 mx-auto mt-10 md:mt-14 mb-6 md:mb-8">
      </div>
    </div>

    <!-- Introduction section -->
    <section class="container mx-auto feature-card w-full md:max-w-screen-sm relative">
      <div class="grid-bg absolute inset-0 opacity-5"></div>
      <div
        class="p-6 sm:p-8 md:p-10 rounded-xl bg-stone-50/70 dark:bg-stone-900/60 shadow-md backdrop-blur-md relative z-10 prose prose-stone dark:prose-invert">
        <h2
          class="fraunces text-6xl sm:text-7xl md:text-8xl mb-8 md:mb-10 font-black tracking-tight text-balance leading-[0.9] not-prose">
          {{
            heroSection.title }}</h2>
        <p
          class="not-prose text-base sm:text-lg md:text-xl leading-[1.9] sm:leading-[2.1] tracking-wide text-stone-700 dark:text-stone-300 mb-6 md:mb-8 max-w-prose font-light">
          {{ heroSection.content }}</p>
      </div>
    </section>

    <!-- Features heading -->
    <div class="container mx-auto w-full md:max-w-screen-sm text-center my-16 md:my-32">
      <h2
        class="fraunces text-7xl sm:text-9xl md:text-[12rem] font-black italic text-balance leading-[0.8] inline-block tracking-tight">
        Why Coach Artie?
      </h2>
      <div class="w-40 md:w-56 h-[8px] bg-stone-700 dark:bg-stone-300 mx-auto mt-8 md:mt-10">
      </div>
    </div>

    <!-- Feature sections -->
    <section v-for="(feature, index) in featureSections" :key="`feature-${index}`"
      class="container mx-auto feature-card w-full md:max-w-screen-sm relative"
      :class="{ 'feature-right': index % 2 !== 0 }">
      <!-- Feature emoji with randomized position within the section -->
      <div class="section-emoji absolute text-6xl sm:text-7xl md:text-8xl pointer-events-none hidden sm:block"
        :style="getSectionEmojiPosition(index)">
        {{ feature.icon }}
      </div>
      <div class="grid-bg absolute inset-0 opacity-5"></div>
      <div
        class="p-6 sm:p-8 md:p-10 rounded-xl bg-stone-50/70 dark:bg-stone-900/60 shadow-md backdrop-blur-md relative z-10 prose prose-stone dark:prose-invert prose-lg">
        <h2
          class="fraunces text-5xl sm:text-6xl md:text-[6rem] mb-8 md:mb-10 font-black tracking-[-0.01em] text-balance leading-[0.85] not-prose">
          {{
            feature.title }}</h2>
        <p
          class="text-base sm:text-lg md:text-xl leading-[1.9] sm:leading-[2.1] tracking-wide text-stone-700 dark:text-stone-300 max-w-prose feature-text font-light">
          {{ feature.content }}
        </p>
        <div
          class="feature-line w-full h-[2px] bg-stone-300 dark:bg-stone-700 mt-8 md:mt-12 origin-left transform transition-transform duration-700 scale-x-0">
        </div>
      </div>
    </section>

    <!-- Closing section -->
    <section class="container mx-auto feature-card w-full md:max-w-screen-sm relative">
      <div class="grid-bg absolute inset-0 opacity-5"></div>
      <div
        class="p-6 sm:p-8 md:p-10 rounded-xl bg-stone-50/70 dark:bg-stone-900/60 shadow-md backdrop-blur-md relative z-10 prose prose-stone dark:prose-invert prose-xl">
        <h2
          class="fraunces text-6xl sm:text-7xl md:text-8xl mb-8 md:mb-10 font-black tracking-tight text-balance leading-[0.9] not-prose">
          {{
            closingSection.title }}</h2>
        <p
          class="text-base sm:text-lg md:text-xl leading-[1.9] sm:leading-[2.1] tracking-wide text-stone-700 dark:text-stone-300 mb-6 md:mb-10 max-w-prose font-light">
          {{ closingSection.content }}</p>
        <button
          class="mono mt-6 md:mt-10 py-2 sm:py-3 px-6 sm:px-10 rounded-lg border-[1.5px] border-stone-800 dark:border-stone-200 bg-transparent text-stone-800 dark:text-stone-200 transition-all duration-300 uppercase text-xs sm:text-sm tracking-[0.15em] font-medium relative overflow-hidden spotlight-button">
          {{ closingSection.button }}
        </button>
      </div>
    </section>

    <!-- kicker section -->
    <div class="container mx-auto feature-card w-full md:max-w-screen-sm">
      <div
        class="p-6 sm:p-8 md:p-10 rounded-xl bg-stone-50/70 dark:bg-stone-900/60 shadow-md backdrop-blur-md relative">
        <p class="mono text-base sm:text-lg tracking-[0.05em] font-medium">Get in touch: <a
            href="mailto:ejfox@ejfox.com"
            class="text-stone-900 dark:text-stone-100 underline decoration-1 underline-offset-4 transition-colors">email</a>
        </p>
      </div>
    </div>

    <!-- Mobile 3D interaction toggle -->
    <div class="md:hidden fixed bottom-4 right-4 z-20">
      <button @click="toggleMobileInteraction"
        class="bg-stone-50/90 dark:bg-stone-900/90 shadow-md backdrop-blur-sm border border-stone-300 dark:border-stone-700 rounded-full p-3 text-stone-800 dark:text-stone-200 text-xs flex items-center justify-center">
        <span class="mono uppercase tracking-wider">{{ isMobileInteractionEnabled ? 'Stop' : 'Play' }} 3D</span>
      </button>
    </div>

    <div class="bg-3d-scene fixed top-0 left-0 touch-none w-screen h-screen -z-10">
      <TresCanvas window-size preset="realistic" alpha shadows>
        <TresPerspectiveCamera :look-at="focusObjPosition"
          :position="[cameraPosition.x, cameraPosition.y, cameraPosition.z]" />
        <TresDirectionalLight :position="[cameraPosition.x, cameraPosition.y, cameraPosition.z]"
          :look-at="focusObjPosition" cast-shadow :intensity="lightIntensity" />
        <Suspense>
          <IntroObject :rotation="[focusObjRotation.x, focusObjRotation.y, focusObjRotation.z]" cast-shadow :scale="2.5"
            :position="focusObjPosition" />
        </Suspense>
      </TresCanvas>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue'
import { useWindowScroll, useIntersectionObserver, useWindowSize, useElementSize } from '@vueuse/core'
import { TresCanvas } from '@tresjs/core'
import { vLightHelper } from '@tresjs/core'
import { createTimeline, createAnimatable, eases, utils } from '../anime.esm.js'

const loadingOverlay = ref(null)

const introText = 'Meet Coach Artie'.split('')
const introTextRefs = ref([])

const focusObjPosition = ref([1, 0.5, 16, 32])
const focusObjRotation = ref({ x: 0, y: -2, z: 0 })
const focusObjColor = ref('#FFA500')

const lightIntensity = ref(0.01)

const cameraPosition = ref({ x: 0.2, y: 10, z: 18 })

const cameraKeyframes = {
  start: { x: 0.2, y: 10, z: 18 },
  end: { x: 0.4, y: 20, z: -32 }
}

const lightIntensityKeyframes = {
  start: 0.01,
  end: 0.05
}

const heroSection = {
  title: "Our studio buddy",
  content: "Say hello to Coach Artie, the quirky AI character hanging around Room 302 Studio. Part cheerleader, part studio mascot, and full-time digital buddy. Artie's not some boring utility—they're the lovable personality that vibes with your creative flow and occasionally raids the digital snack cabinet. Think of them as the cool studio mate who's always down to jam on ideas."
}

const featureSections = [
  {
    title: "Advanced Integrations",
    content: "Coach Artie connects your apps faster than your aunt connects her conspiracy theories on Facebook. It predicts your needs with the accuracy of a psychic who actually paid attention during cold reading class. We'd call it magic, but our lawyers said that's a lawsuit waiting to happen.",
    icon: "🔌"
  },
  {
    title: "Hyper-Personalized",
    content: "Coach Artie learns your preferences like that one friend who remembers you hate cilantro but forgets your birthday. Each experience is uniquely tailored—kind of like your Instagram ads, but without the creepy eavesdropping. Purely coincidental when it buys you therapy gift cards.",
    icon: "👤"
  },
  {
    title: "Symbiotic Collaboration",
    content: "Coach Artie joins your creative process with the enthusiasm of a golden retriever and the precision of a caffeinated surgeon. It's evolved beyond just finishing your sentences—now it finishes your projects while you're busy explaining why you missed the deadline.",
    icon: "🤝"
  },
  {
    title: "Emotional Intelligence",
    content: "Coach Artie reads the room better than that coworker who somehow always disappears before the printer jams. Its emotional perception is so advanced that it started a side hustle as a couples therapist. Relationship status: 'It's complicated' with your productivity goals.",
    icon: "❤️"
  }
]

const closingSection = {
  title: "Embark on a Journey of Discovery",
  content: "With Coach Artie, you're not just exploring an AI assistant. You're embarking on a journey where each interaction is a step towards unprecedented creativity and efficiency. Ready to unlock your potential?",
  button: "Discover Coach Artie"
}

const introSectionRefs = ref([])

let focusObjAnimatable
let lightIntensityAnimatable
let cameraAnimatable

// Set up touch event handling for mobile devices
const touchStartX = ref(0)
const touchStartY = ref(0)
const isMobileInteractionEnabled = ref(false)

function handleTouchStart(e) {
  touchStartX.value = e.touches[0].clientX
  touchStartY.value = e.touches[0].clientY
}

function handleTouchMove(e) {
  if (!isMobileInteractionEnabled.value) return

  const touchX = e.touches[0].clientX
  const touchY = e.touches[0].clientY

  const deltaX = touchX - touchStartX.value
  const deltaY = touchY - touchStartY.value

  // Update 3D object rotation based on touch movement
  focusObjAnimatable.y(focusObjRotation.value.y + deltaX * 0.01)

  // Update touch start position
  touchStartX.value = touchX
  touchStartY.value = touchY
}

function toggleMobileInteraction() {
  isMobileInteractionEnabled.value = !isMobileInteractionEnabled.value
}

onMounted(async () => {
  await nextTick()
  setupAnimatables()
  setupIntersectionObservers()

  // Add touch event listeners for mobile
  if (window) {
    window.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchmove', handleTouchMove)
  }

  setTimeout(() => {
    if (loadingOverlay.value) {
      loadingOverlay.value.classList.add('fade-out')

      setTimeout(() => {
        loadingOverlay.value.style.display = 'none'
      }, 3000)
    }
  }, 500)
})

function setupAnimatables() {
  focusObjAnimatable = createAnimatable(focusObjRotation.value, {
    y: { duration: 1000, easing: eases.linear },
  })

  lightIntensityAnimatable = createAnimatable(lightIntensity, {
    value: { duration: 1000, easing: eases.linear },
  })

  cameraAnimatable = createAnimatable(cameraPosition.value, {
    x: { duration: 1000, easing: eases.linear },
    y: { duration: 1000, easing: eases.linear },
    z: { duration: 1000, easing: eases.linear },
  })
}

function setupIntersectionObservers() {
  introSectionRefs.value.forEach((el, index) => {
    const target = ref(el)
    useIntersectionObserver(target, ([{ isIntersecting }]) => {
      if (isIntersecting) onSectionFocus(index, target)
    })
  })
}

function onSectionFocus(index, target) {
  console.log('Section', index, 'is focused')
}

const container = ref(null)
const { height } = useElementSize(container)
const { y } = useWindowScroll()
const { width } = useWindowSize()

watch(y, (newY) => {
  const scrollProgressPct = newY / height.value
  const lerpedY = utils.lerp(0, 2, scrollProgressPct)

  focusObjAnimatable.y(lerpedY)

  // Reduce animation intensity on mobile for better performance
  const isMobile = width.value < 768
  const mobileFactor = isMobile ? 0.7 : 1

  cameraAnimatable.x(utils.lerp(cameraKeyframes.start.x, cameraKeyframes.end.x * mobileFactor, scrollProgressPct))
  cameraAnimatable.y(utils.lerp(cameraKeyframes.start.y, cameraKeyframes.end.y * mobileFactor, scrollProgressPct))
  cameraAnimatable.z(utils.lerp(cameraKeyframes.start.z, cameraKeyframes.end.z * mobileFactor, scrollProgressPct))
})

// Function to generate random positions for section emojis
function getSectionEmojiPosition(index) {
  // Seed positions with the index to keep them consistent between renders
  const seedRandom = (min, max, seed) => {
    const x = Math.sin(seed) * 10000;
    const rand = x - Math.floor(x);
    return Math.floor(rand * (max - min) + min);
  }

  // Position based on section index
  let position;

  switch (index % 4) {
    case 0: // Top right
      position = {
        top: '-15%',
        right: '10%',
        left: 'auto'
      };
      break;
    case 1: // Bottom left
      position = {
        top: '70%',
        left: '-15%',
        right: 'auto'
      };
      break;
    case 2: // Bottom right
      position = {
        top: '80%',
        right: '-5%',
        left: 'auto'
      };
      break;
    case 3: // Top left
      position = {
        top: '5%',
        left: '-10%',
        right: 'auto'
      };
      break;
  }

  // Random rotation and scale for visual interest
  const rotate = `rotate(${seedRandom(-10, 10, index * 4.3)}deg)`;
  const scale = seedRandom(90, 110, index * 5.4) / 100;

  return {
    ...position,
    transform: `${rotate} scale(${scale})`,
    opacity: 0.8,
    animationDelay: `${seedRandom(0, 1500, index * 7.6)}ms`,
    animationDuration: `${seedRandom(4000, 6000, index * 8.7)}ms`
  };
}
</script>

<style>
.fraunces {
  font-family: 'Fraunces', serif;
  font-feature-settings: "liga", "calt";
}

h1.fraunces,
h2.fraunces {
  transform-origin: left center;
}

.mono {
  font-family: 'IBM Plex Mono', monospace;
  font-feature-settings: "ss01", "ss02", "calt", "liga";
}

body {
  font-family: 'Inter', sans-serif;
  font-feature-settings: "cv01", "cv02", "cv03", "ss01";
  background-color: #f8f8f8;
  color: #262626;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

.dark body {
  background-color: #1a1a1a;
  color: #f8f8f8;
}

.feature-card {
  margin: 60vh 0;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

@media (min-width: 768px) {
  .feature-card {
    margin: 120vh 0;
  }
}

.feature-right .feature-icon {
  left: auto;
  right: -24px;
}

.feature-text {
  position: relative;
  text-wrap: pretty;
}

.grid-bg {
  background-image:
    linear-gradient(to right, rgba(120, 120, 120, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(120, 120, 120, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
}

.text-balance {
  text-wrap: balance;
}

.loading-overlay {
  background-color: #000;
  opacity: 1;
  transition: opacity 2.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.loading-gradient {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(30, 30, 30, 0.5) 0%, rgba(0, 0, 0, 1) 70%);
  opacity: 0.8;
  transform: scale(0.8);
  animation: pulse 2s infinite alternate;
}

.fade-out {
  opacity: 0;
  pointer-events: none;
}

@keyframes pulse {
  0% {
    transform: scale(0.8);
    opacity: 0.8;
  }

  100% {
    transform: scale(1);
    opacity: 0.4;
  }
}

@media (prefers-color-scheme: dark) {
  .grid-bg {
    background-image:
      linear-gradient(to right, rgba(150, 150, 150, 0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(150, 150, 150, 0.05) 1px, transparent 1px);
  }
}

/* Reduce 3D intensity on mobile for better performance */
@media (max-width: 767px) {
  .bg-3d-scene {
    opacity: 0.7;
  }
}

/* Floating emoji animations */
@keyframes float {
  0% {
    transform: translateY(0) rotate(0) scale(1);
  }

  33% {
    transform: translateY(-10px) rotate(3deg) scale(1.05);
  }

  66% {
    transform: translateY(5px) rotate(-3deg) scale(0.95);
  }

  100% {
    transform: translateY(0) rotate(0) scale(1);
  }
}

.section-emoji {
  animation: float 5s infinite ease-in-out both;
  filter: blur(0px);
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 20;
}
</style>