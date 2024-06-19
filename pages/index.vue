<template>
  <section class="max-w-screen-md min-h-screen dark:text-white mx-auto ">



    <div class="text-center py-72 mb-24">
      <h1 class="text-9xl font-bold mb-8">Meet <span class="text-primary-300">Coach Artie</span></h1>
    </div>

    <section class="container mx-auto px-1">
      <h2 class="text-3xl font-semibold mb-9">Your new AI collaborator</h2>
      <p class="text-lg leading-relaxed mb-12">Step into the world of Coach Artie, an AI-powered visionary crafted to
        inspire,
        assist, and revolutionize your creative journey. Born from the heart of Room 302 Studio, this AI assistant is
        more
        than just a tool – it's a catalyst for innovation and growth.</p>
    </section>

    <section class="container mx-auto px-1 py-24 prose prose-lg dark:prose-invert ">

      <div class="">
        <h2 class="text-3xl font-semibold mb-9">Why Coach Artie?</h2>

        <div v-for="section in introSections" :key="section.title" ref="introSectionRefs">
          <IntroSection>
            <h3 class="font-semibold text-xl">{{ section.title }}</h3>
            <p>{{ section.text }}</p>
          </IntroSection>
        </div>
        <!-- <IntroSection>
          <h3 class="font-semibold text-xl">Advanced Integrations</h3>
          <p>With a uniquely innovative approach, Coach Artie harnesses the power of cutting-edge AI to provide Room 302
            Studio with unparalleled assistance. Beyond mere data processing, I perform in-depth analysis, anticipating
            needs, and offering tailored solutions. My presence signifies a leap towards the future of collaborative
            environments, where artificial intelligence elevates every project by streamlining workflow, inspiring
            creativity, and paving the path for breakthroughs.</p>
        </IntroSection>
        <IntroSection>
          <h3 class="font-semibold text-xl">Hyper-Personalized</h3>
          <p>For studios seeking a personalized touch, I stand out. Utilizing context-aware algorithms, I adapt to the
            preferences and demands of each studio member, customizing resources and support on an individual basis. My
            understanding of personal nuances fosters an engaging atmosphere where every contributor can flourish,
            establishing a rapport that employs nuanced care rather than a one-size-fits-all approach.</p>
        </IntroSection>

        <IntroSection>
          <h3 class="font-semibold text-xl">Symbiotic Collaboration</h3>
          <p>True harmony in the studio comes from synergy between human creativity and AI efficiency, and this is where
            I
            excel. I not only organize files and manage schedules but also contribute to brainstorming sessions by
            presenting new perspectives generated through data-driven insights. The combination of human intuition and
            my
            rapid analytic capabilities results in a formidable force of ingenuity and productivity.</p>
        </IntroSection>

        <IntroSection>
          <h3 class="font-semibold text-xl">Emotional Intelligence</h3>
          <p>Within Room 302 Studio, I resonate with members not just as a tool but as a community ally who understands
            their emotional landscapes. By gauging morale and providing encouragement or respite where needed, I ensure
            the studio atmosphere stays positive, buoyant, and conducive to creativity. Acknowledging the importance of
            emotional well-being, I strive to maintain a balanced space that nurtures both mental health and
            professional
            excellence.</p>
        </IntroSection> -->
      </div>
    </section>

    <section class="container mx-auto px-1 py-24">
      <h2 class="text-3xl font-semibold mb-9">Embark on a Journey of Discovery</h2>
      <p class="text-lg leading-relaxed mb-12">With Coach Artie, you're not just exploring an AI assistant. You're
        embarking
        on
        a journey where each interaction is a step towards unprecedented creativity and efficiency. Ready to unlock your
        potential?</p>
      <button
        class="mt-12 px-1 py-3 bg-primary-300 text-gray-800 font-semibold rounded hover:bg-primary-400 transition duration-300">Discover
        Coach Artie</button>
    </section>

    <div class="bg-3d-scene fixed top-0 left-0 touch-none w-screen h-screen -z-10">
      <TresCanvas window-size preset="realistic" alpha shadows>
        <!-- <TresAmbientLight :intensity="0.5" /> -->

        <TresPerspectiveCamera :look-at="focusObjPosition" :position="cameraPosition" />

        <TresDirectionalLight v-light-helper :position="[0, 4, 0]" :look-at="focusObjPosition" cast-shadow
          :intensity="1" />

        <!-- <TresMesh cast-shadow>
          <TresTorusGeometry :args="focusObjPosition" :rotation="focusObjRotation" />
          <TresMeshBasicMaterial :color="focusObjColor" />
        </TresMesh> -->

        <TresMesh :position="[0, -3, 0]" :rotation="[-Math.PI / 2, 0, 0]" receive-shadow>
          <TresPlaneGeometry :args="[10, 10, 10, 10]" />
          <!-- <TresMeshStandardMaterial color="#f7f7f7" /> -->
        </TresMesh>

        <Suspense>
          <!-- <GLTFModel path="/Tetrahedron.gltf" draco :scale-x="0.25" :scale-y="0.25" :scale-z="0.25" /> -->

          <!-- <GLTFModel path="CWF-Studios_0022.gltf" :scale-x="0.25" :scale-y="0.25" :scale-z="0.25" /> -->

          <!-- <GLTFModel path="6_17_2024.glb" :scale="10" /> -->
          <IntroObject :rotation="focusObjRotation" cast-shadow :scale="8" />

        </Suspense>
      </TresCanvas>
    </div>
  </section>
</template>

<script setup>
import { createAnimatable } from '../anime.esm.js'
import { GLTFModel, useGLTF } from '@tresjs/cientos'
/*
// Use the global state in this component
const store = useAppStore()
// Access the state variables and functions
const { activeItem, itemList, setActiveItem, addItem, removeItem } = store
*/




import { TresCanvas } from '@tresjs/core'
import { vLightHelper } from '@tresjs/core'


const { y } = useWindowScroll()

const focusObjPosition = ref([1, 0.5, 16, 32])
const focusObjRotation = ref([0, 0, 0])
const focusObjColor = ref('#FFA500')


// const cameraPosition = ref([0, 0, -25])

const decompCameraPosition = ref({
  camX: 0,
  camY: 0,
  camZ: -25,
})

const cameraPosition = computed(() => {
  return [decompCameraPosition.value.camX, decompCameraPosition.value.camY, decompCameraPosition.value.camZ]
})



// TODO: Make this camera position animatable

const camPositionAnim = createAnimatable(decompCameraPosition.value, {
  duration: 2000,
  camX: 0,
  camY: 0,
  camZ: -10,
}
)



watch(y, (newY) => {
  // console.log(newY)
  // focusObjPosition.value = [newY / 1000, 0.5, 16, 32]

  // focusObjPosition.value = [newY / 1000, 0.5, 16, 32]

  // rotate on the Y axis too
  focusObjRotation.value = [0, newY / 1000, 0]

  // SUPER slowly move the camera based on scroll
  // cameraPosition.value = [0, 0, newY / 100]
})

const introSectionRefs = ref([])

// on mounted, we want to set up a bunch of intersection observers for each intro section that will trigger different animations / "presets" in the 3D scene
// we can use the useIntersectionObserver(el) composable to help
onMounted(() => {
  introSectionRefs.value.forEach((el, index) => {
    const target = ref(el)

    const { stop } = useIntersectionObserver(
      target,
      ([{ isIntersecting }], observerElement) => {
        if (!isIntersecting) return
        onSectionFocus(index, target)
      },
    )
  })
})

function onSectionFocus(index, target) {
  // Perform actions when a section is focused
  console.log('Section', index, 'is focused')
  // make that bitch red
  const targetRef = introSectionRefs.value[index]
  // targetRef.classList.add('bg-red-500')

  // // make all dem others normal
  // introSectionRefs.value.forEach((el, i) => {
  //   if (i !== index) {
  //     el.classList.remove('bg-red-500')
  //   }
  // })

  // call the section action
  introSections[index].action(introSections[index], targetRef)
}

const introSections = [
  {
    "title": "Advanced Integrations",
    "text": "With a uniquely innovative approach, Coach Artie harnesses the power of cutting-edge AI to provide Room 302 Studio with unparalleled assistance. Beyond mere data processing, I perform in-depth analysis, anticipating needs, and offering tailored solutions. My presence signifies a leap towards the future of collaborative environments, where artificial intelligence elevates every project by streamlining workflow, inspiring creativity, and paving the path for breakthroughs.",
    action: (section, sectionRef) => {
      // make this section green
      console.log('Section 1 action', sectionRef)
      // sectionRef.classList.add('bg-green-500')

      // make the object that color too
      focusObjColor.value = '#00FF00'

      // jump the camera to a new fun position (still looking at the object)
      const currentCamPosition = cameraPosition.value
      // cameraPosition.value = [currentCamPosition[0], currentCamPosition[1], -22]
      // const currentCamZ = camPositionAnim.camZ()
      camPositionAnim.camZ(-10)
    }
  },
  {
    "title": "Hyper-Personalized",
    "text": "For studios seeking a personalized touch, I stand out. Utilizing context-aware algorithms, I adapt to the preferences and demands of each studio member, customizing resources and support on an individual basis. My understanding of personal nuances fosters an engaging atmosphere where every contributor can flourish, establishing a rapport that employs nuanced care rather than a one-size-fits-all approach.",
    action: (section, sectionRef) => {
      // make this one red
      console.log('Section 2 action', sectionRef)
      // sectionRef.classList.add('bg-red-500')
      focusObjColor.value = '#FF0000'
      // cameraPosition.value = [2, 2, -30]
      const currentCamZ = camPositionAnim.camZ()
      camPositionAnim.camZ(currentCamZ + 5)
    }
  },
  {
    "title": "Symbiotic Collaboration",
    "text": "True harmony in the studio comes from synergy between human creativity and AI efficiency, and this is where I excel. I not only organize files and manage schedules but also contribute to brainstorming sessions by presenting new perspectives generated through data-driven insights. The combination of human intuition and my rapid analytic capabilities results in a formidable force of ingenuity and productivity.",
    action: (section, sectionRef) => {
      // make this one blue
      console.log('Section 3 action', sectionRef)
      // sectionRef.classList.add('bg-blue-500')
      focusObjColor.value = '#0000FF'
      // cameraPosition.value = [0, -0.2, -10]
      const currentCamZ = camPositionAnim.camZ()
      camPositionAnim.camZ(currentCamZ + 12)

    }
  },
  {
    "title": "Emotional Intelligence",
    "text": "Within Room 302 Studio, I resonate with members not just as a tool but as a community ally who understands their emotional landscapes. By gauging morale and providing encouragement or respite where needed, I ensure the studio atmosphere stays positive, buoyant, and conducive to creativity. Acknowledging the importance of emotional well-being, I strive to maintain a balanced space that nurtures both mental health and professional excellence.",
    action: (section, sectionRef) => {
      // make this one yellow
      console.log('Section 4 action', sectionRef)
      // sectionRef.classList.add('bg-yellow-500')
      // cameraPosition.value = [0, 0, 6]
      // const currentCamZ = camPositionAnim.camZ()
      camPositionAnim.camZ(-25)
    }
  }
]



</script>

<style>
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'VT323', sans-serif;
}

body {
  font-family: 'Inter', sans-serif;
}

.feature-card {
  /* margin-top: 22vh; */
  /* margin-bottom: 22vh; */
  margin-bottom: 44vh;
  max-width: 48vw;
}
</style>
