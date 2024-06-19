<script setup lang="ts">
import { useAnimations, useGLTF } from '@tresjs/cientos'

const { scene: model, nodes, animations, materials } = await useGLTF('6_17_2024.glb', { draco: true })

// const { actions } = useAnimations(animations, model)

// const currentAction = ref(actions.Greeting)

// currentAction.value.play()

</script>

<template>
  <primitive :object="model" />
</template>