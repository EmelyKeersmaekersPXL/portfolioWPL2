<script setup>
import { ref, onUnmounted } from 'vue'

const gameState = ref('start')

const playerX = ref(300)
const score = ref(0)
const lives = ref(3)

const objects = ref([])

let loop = null
let keys = { left: false, right: false }

const W = 600
const H = 400

let playerVX = 0
let spawnCooldown = 0
let gameTime = 0
let maxObjects = 5

let justReset = false

function keyDown(e) {
  if (e.key === 'a' || e.key === 'ArrowLeft') keys.left = true
  if (e.key === 'd' || e.key === 'ArrowRight') keys.right = true
}

function keyUp(e) {
  if (e.key === 'a' || e.key === 'ArrowLeft') keys.left = false
  if (e.key === 'd' || e.key === 'ArrowRight') keys.right = false
}

function startGame() {
  resetAll()
  justReset = true

  gameState.value = 'running'

  window.addEventListener('keydown', keyDown)
  window.addEventListener('keyup', keyUp)

  loop = setInterval(update, 16)

  setTimeout(() => {
    justReset = false
  }, 60)
}

function resetAll() {
  clearInterval(loop)

  window.removeEventListener('keydown', keyDown)
  window.removeEventListener('keyup', keyUp)

  objects.value = []

  score.value = 0
  lives.value = 3

  playerX.value = W / 2

  playerVX = 0
  keys.left = false
  keys.right = false

  spawnCooldown = 0
  gameTime = 0
  maxObjects = 5
}

function spawn() {
  if (objects.value.length >= maxObjects) return

  const time = gameTime

  const allowBad = time >= 20

  let good = true

  if (allowBad) {
    const badChance = Math.min(0.18 + time * 0.005, 0.4)
    good = Math.random() > badChance
  }

  objects.value.push({
    x: Math.random() * (W - 40),
    y: H,
    w: 45,
    h: 18,
    good
  })
}


function update() {
  if (gameState.value !== 'running') return
  if (justReset) return

  gameTime += 0.016


  const accel = 0.7
  const friction = 0.86
  const maxSpeed = 7

  if (keys.left) playerVX -= accel
  if (keys.right) playerVX += accel

  playerVX *= friction
  playerVX = Math.max(-maxSpeed, Math.min(maxSpeed, playerVX))

  playerX.value += playerVX
  playerX.value = Math.max(0, Math.min(W - 40, playerX.value))


  spawnCooldown -= 16

  if (spawnCooldown <= 0) {
    spawn()

    const baseDelay = Math.max(1000 - gameTime * 15, 400)
    const randomness = Math.random() * 800

    spawnCooldown = baseDelay + randomness
  }

  for (let i = 0; i < objects.value.length; i++) {
    const o = objects.value[i]

    o.y -= 1.5 + Math.sqrt(gameTime) * 0.4

    const hitX =
      o.x < playerX.value + 40 &&
      o.x + o.w > playerX.value

    const hitY = o.y < 30 && o.y > 0

    if (hitX && hitY) {
      if (o.good) score.value++
      else lives.value--

      objects.value.splice(i, 1)
      i--
      continue
    }

    if (o.y < -30) {
      if (o.good) lives.value--
      objects.value.splice(i, 1)
      i--
    }
  }

  if (gameTime > 10) maxObjects = 6
  if (gameTime > 18) maxObjects = 7

  if (lives.value <= 0) endGame()
}

function endGame() {
  gameState.value = 'gameover'
  clearInterval(loop)

  window.removeEventListener('keydown', keyDown)
  window.removeEventListener('keyup', keyUp)
}

onUnmounted(() => {
  clearInterval(loop)
  window.removeEventListener('keydown', keyDown)
  window.removeEventListener('keyup', keyUp)
})
</script>

<template>
  <div class="game">

    <div class="hud">
      Score: {{ score }} | Lives: {{ lives }}
    </div>

    <div v-if="gameState === 'start'" class="overlay">
      <button class="btn" @click="startGame">Start Game</button>
    </div>

    <div class="world">

      <div class="player" :style="{ left: playerX + 'px' }"></div>

      <div
        v-for="(o, i) in objects"
        :key="i"
        class="obj"
        :class="{ bad: !o.good }"
        :style="{
          left: o.x + 'px',
          bottom: o.y + 'px',
          width: o.w + 'px',
          height: o.h + 'px'
        }"
      ></div>

    </div>

    <div v-if="gameState === 'gameover'" class="overlay">
      <button class="btn" @click="startGame">Retry</button>
    </div>

  </div>
</template>

<style scoped>
.game {
  width: 100%;
  height: 400px;
  position: relative;
  background: #0f0f0f;
  overflow: hidden;
}

.world {
  width: 600px;
  height: 400px;
  margin: auto;
  position: relative;
  border: 1px solid #333;
}

.hud {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-weight: bold;
  display: flex;
  gap: 20px;
  z-index: 10;
}

.player {
  position: absolute;
  bottom: 10px;
  width: 40px;
  height: 20px;
  background: #c084fc;
  border-radius: 3px;
}

.obj {
  position: absolute;
  background: #2a2a2a;
  border: 1px solid #555;
  border-radius: 3px;
}

.obj.bad {
  background: #3a1a1a;
  border-color: #ff4d4d;
}

.overlay {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,0.75);
  z-index: 999;
}

.btn {
  padding: 10px 16px;
  background: #c084fc;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>
