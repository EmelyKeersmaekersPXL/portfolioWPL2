<template>
  <div class="app">

    <!-- BLOBS -->
    <div class="blob b1"></div>
    <div class="blob b2"></div>
    <div class="blob b3"></div>

    <!-- MAIN NAV -->
    <nav class="navbar glass">

      <router-link to="/">Home</router-link>

      <router-link to="/wpl1">WPL1</router-link>

      <router-link to="/wpl2">WPL2</router-link>

      <router-link to="/extras">Extras</router-link>

      <router-link to="/contact">Contact</router-link>

    </nav>

    <router-view />

  </div>
</template>

<style>
body {
  margin: 0;
  min-height: 100vh;

  font-family: Inter, system-ui, sans-serif;
  color: white;

  background:
    radial-gradient(circle at top left, #c7d2fe, transparent 40%),
    radial-gradient(circle at top right, #fbcfe8, transparent 40%),
    radial-gradient(circle at bottom, #bae6fd, transparent 40%),
    #0b1020;

  background-attachment: fixed;
}

* {
  box-sizing: border-box;
}

/* NAVBAR */
.navbar {
  position: sticky;
  top: 20px;

  z-index: 1000;

  margin: 20px auto;
  width: fit-content;

  display: flex;
  gap: 20px;

  padding: 12px 20px;
  border-radius: 999px;
}

.navbar a {
  color: white;
  text-decoration: none;
  opacity: 0.7;
  transition: 0.2s;
}

.navbar a:hover {
  opacity: 1;
}

.navbar a.router-link-active {
  opacity: 1;
}

/* GLASS */
.glass {
  background: rgba(255,255,255,0.08);

  border: 1px solid rgba(255,255,255,0.18);

  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);

  border-radius: 18px;

  box-shadow:
    0 8px 32px rgba(0,0,0,0.25),
    inset 0 1px 0 rgba(255,255,255,0.15);
}

/* PAGE */
.page {
  width: min(1100px, 92%);
  margin: 40px auto;
  padding: 40px;
}

/* BLOBS */
.blob {
  position: fixed;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.35;
  z-index: -1;
}

.b1 {
  background: #a78bfa;
  top: -100px;
  left: -100px;
}

.b2 {
  background: #60a5fa;
  right: -100px;
  top: 200px;
}

.b3 {
  background: #f9a8d4;
  bottom: -120px;
  left: 40%;
}
</style>
