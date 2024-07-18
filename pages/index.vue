<template>
  <section ref="container" class="max-w-screen-md min-h-screen dark:text-white mx-auto monospace text-3xl">
    <div class="text-center uppercase text-9xl py-12">
      Meet Coach Artie
    </div>

    <section v-for="(section, index) in sections" :key="index"
      class="container mx-auto feature-card w-full md:max-w-screen-sm ">
      <div class="p-1">
        <h2 class="">{{ section.title }}</h2>
        <span class="bg-black/50 text-white backdrop-blur-sm">{{ section.content }}</span>
        <div v-if="section.subsections">
          <div v-for="subsection in section.subsections" :key="subsection.title" ref="introSectionRefs">
            <h3 class="">{{ subsection.title }}</h3>
            <span class="bg-black/70 text-white">{{ subsection.text }}</span>
          </div>
        </div>
        <button v-if="section.button"
          class="bg-primary-300 text-gray-800 font-semibold rounded hover:bg-primary-400 transition duration-300">
          {{ section.button }}
        </button>
      </div>
    </section>

    <!-- kicker section -->
    <div class="container mx-auto feature-card w-full md:max-w-screen-sm ">
      <div class="p-1">
        Get in touch: <a href="mailto:ejfox@ejfox.com" class="underline">email</a>
      </div>
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
import { useWindowScroll, useIntersectionObserver, useWindowSize } from '@vueuse/core'
import { TresCanvas } from '@tresjs/core'
import { vLightHelper } from '@tresjs/core'
import { createTimeline, createAnimatable, eases, utils } from '../anime.esm.js'

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

// const focusObjKeyframes = {
//   start: { x: 1, y: 0.5, z: 16, scale: 2.5 },
//   end: { x: 1, y: 0.5, z: 16, scale: 2.5 }
// }

const sections = [
  {
    title: "Your new AI collaborator",
    content: "Step into the world of Coach Artie, an AI-powered visionary crafted to inspire, assist, and revolutionize your creative journey. Born from the heart of Room 302 Studio, this AI assistant is more than just a tool – it's a catalyst for innovation and growth."
  },
  {
    title: "Why Coach Artie?",
    subsections: [
      {
        title: "Advanced Integrations",
        text: "With a uniquely innovative approach, Coach Artie harnesses the power of cutting-edge AI to provide Room 302 Studio with unparalleled assistance. Beyond mere data processing, I perform in-depth analysis, anticipating needs, and offering tailored solutions. My presence signifies a leap towards the future of collaborative environments, where artificial intelligence elevates every project by streamlining workflow, inspiring creativity, and paving the path for breakthroughs."
      },
      {
        title: "Hyper-Personalized",
        text: "For studios seeking a personalized touch, I stand out. Utilizing context-aware algorithms, I adapt to the preferences and demands of each studio member, customizing resources and support on an individual basis. My understanding of personal nuances fosters an engaging atmosphere where every contributor can flourish, establishing a rapport that employs nuanced care rather than a one-size-fits-all approach."
      },
      {
        title: "Symbiotic Collaboration",
        text: "True harmony in the studio comes from synergy between human creativity and AI efficiency, and this is where I excel. I not only organize files and manage schedules but also contribute to brainstorming sessions by presenting new perspectives generated through data-driven insights. The combination of human intuition and my rapid analytic capabilities results in a formidable force of ingenuity and productivity."
      },
      {
        title: "Emotional Intelligence",
        text: "Within Room 302 Studio, I resonate with members not just as a tool but as a community ally who understands their emotional landscapes. By gauging morale and providing encouragement or respite where needed, I ensure the studio atmosphere stays positive, buoyant, and conducive to creativity. Acknowledging the importance of emotional well-being, I strive to maintain a balanced space that nurtures both mental health and professional excellence."
      }
    ]
  },
  {
    title: "Embark on a Journey of Discovery",
    content: "With Coach Artie, you're not just exploring an AI assistant. You're embarking on a journey where each interaction is a step towards unprecedented creativity and efficiency. Ready to unlock your potential?",
    button: "Discover Coach Artie"
  }
]

const introSectionRefs = ref([])

let focusObjAnimatable
let lightIntensityAnimatable
let cameraAnimatable

onMounted(async () => {
  await nextTick()
  setupAnimatables()
  setupIntersectionObservers()
})

function setupAnimatables() {

  focusObjAnimatable = createAnimatable(focusObjRotation.value, {
    y: { duration: 1000, easing: eases.linear },
    // y: { duration: 100 },

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
  // Add any specific actions for section focus here
  // For example, you could trigger a specific animation or update the UI
}

// const { height: windowHeight } = useWindowSize()
const container = ref(null)
const { height } = useElementSize(container)
const { y } = useWindowScroll()
watch(y, (newY) => {
  const scrollProgressPct = newY / height.value
  const lerpedY = utils.lerp(0, 2, scrollProgressPct)

  focusObjAnimatable.y(lerpedY)

  // lightIntensityAnimatable.value(
  //   utils.lerp(lightIntensityKeyframes.start, lightIntensityKeyframes.end, scrollProgressPct)
  // )

  cameraAnimatable.x(utils.lerp(cameraKeyframes.start.x, cameraKeyframes.end.x, scrollProgressPct))
  cameraAnimatable.y(utils.lerp(cameraKeyframes.start.y, cameraKeyframes.end.y, scrollProgressPct))
  cameraAnimatable.z(utils.lerp(cameraKeyframes.start.z, cameraKeyframes.end.z, scrollProgressPct))
})
</script>

<style>
h1,
h2,
h3,
h4,
h5,
h6,
.mono,
.monospace {
  font-family: 'VT323', sans-serif;
}

body {
  font-family: 'Inter', sans-serif;
}

.feature-card {
  margin: 99vh 0;
}
</style>