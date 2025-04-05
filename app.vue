<template>
  <div class="tracking-wide min-h-screen">
    <NuxtPage />
  </div>
</template>
<script setup></script>
<style>
body {
  font-family: 'Inter', sans-serif;
  line-height: 2;
  letter-spacing: 0.01em;
}

.fraunces {
  font-family: 'Fraunces', serif;
}

.mono {
  font-family: 'IBM Plex Mono', monospace;
  letter-spacing: 0.025em;
}

/* Improved spacing defaults */
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 1.5em;
  margin-bottom: 0.75em;
  line-height: 1.2;
}

p {
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  line-height: 2;
}

/* Custom spacing for prose content */
.prose p {
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  line-height: 2.1;
}

.prose li {
  line-height: 2;
}

.prose code {
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 500;
}
</style>
