<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const playerY = ref(0)
const obstacleX = ref(800)

const score = ref(0)
const highScore = ref(Number(localStorage.getItem('jump_highscore')) || 0)

const gameState = ref('start')

let velocity = 0
let gravity = -0.7
let isJumping = false

let gameLoop

let obstacleSpeed = 2
let speedIncreaseRate = 0.01

let spacePressed = false

function startGame() {
  gameState.value = 'running'
  score.value = 0
  obstacleX.value = window.innerWidth
  obstacleSpeed = 2
}

function resetGame() {
  playerY.value = 0
  velocity = 0
  isJumping = false
  obstacleX.value = window.innerWidth

  score.value = 0
  obstacleSpeed = 2

  gameState.value = 'start'
}

function gameOverFn() {
  gameState.value = 'gameover'

  if (score.value > highScore.value) {
    highScore.value = score.value
    localStorage.setItem('jump_highscore', score.value)
  }
}

function jump() {
  if (gameState.value !== 'running') return
  if (isJumping) return

  isJumping = true
  velocity = 14
}

function updateGame() {
  if (gameState.value !== 'running') return

  velocity += gravity
  playerY.value += velocity

  if (playerY.value <= 0) {
    playerY.value = 0
    velocity = 0
    isJumping = false
  }

  const worldWidth =
    document.querySelector('.world')?.clientWidth || window.innerWidth

  obstacleX.value -= obstacleSpeed

  if (obstacleX.value < -80) {
    obstacleX.value = worldWidth + Math.random() * 300
    score.value++
  }

  obstacleSpeed += speedIncreaseRate

  const hit =
    obstacleX.value < 120 &&
    obstacleX.value > 40 &&
    playerY.value < 60

  if (hit) {
    gameOverFn()
  }
}

/* INPUT FIX */
function handleKey(e) {
  if (e.code !== 'Space') return

  if (e.type === 'keydown') {
    if (spacePressed) return
    spacePressed = true
  }

  if (e.type === 'keyup') {
    spacePressed = false
    return
  }

  if (gameState.value === 'start') {
    startGame()
    return
  }

  if (gameState.value === 'running') {
    jump()
    return
  }

  if (gameState.value === 'gameover') {
    resetGame()
  }
}

onMounted(() => {
  obstacleX.value = window.innerWidth

  document.addEventListener('keydown', handleKey)
  document.addEventListener('keyup', handleKey)

  gameLoop = setInterval(updateGame, 20)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKey)
  document.removeEventListener('keyup', handleKey)
  clearInterval(gameLoop)
})
</script>

<template>
  <div class="game">

    <!-- SCORE CENTER (FIXED) -->
    <div class="score-center" v-if="gameState !== 'start'">
      Score: {{ score }}
    </div>

    <!-- HIGH SCORE -->
    <div class="top-right">
      High: {{ highScore }}
    </div>

    <!-- START -->
    <div v-if="gameState === 'start'" class="center-overlay">
      Press SPACE to Start
    </div>

    <!-- GAME OVER -->
    <div v-if="gameState === 'gameover'" class="center-overlay">
      <h2>Game Over</h2>
      <p>Final Score: {{ score }}</p>
      <button @click="resetGame">Retry</button>
    </div>

    <!-- WORLD -->
    <div class="world">

      <div class="player" :style="{ bottom: playerY + 'px' }"></div>

      <div class="obstacle" :style="{ left: obstacleX + 'px' }"></div>

      <div class="ground"></div>

    </div>
  </div>
</template>

<style scoped>
.game {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.world {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

/* PLAYER */
.player {
  position: absolute;
  left: 60px;
  bottom: 0;

  width: 50px;
  height: 50px;

  background: #c084fc;
  border-radius: 10px;

  z-index: 5;
}

/* OBSTACLE */
.obstacle {
  position: absolute;
  bottom: 0;

  width: 30px;
  height: 60px;

  background: white;

  z-index: 4;
}

/* GROUND */
.ground {
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 4px;

  background: white;
}

/* SCORE CENTER FIX */
.score-center {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);

  z-index: 9999;

  font-weight: bold;
  color: white;

  pointer-events: none;
  text-shadow: 0 2px 8px rgba(0,0,0,0.6);
}

/* HIGH SCORE */
.top-right {
  position: absolute;
  top: 10px;
  right: 10px;

  z-index: 9999;

  color: white;
  pointer-events: none;
  text-shadow: 0 2px 8px rgba(0,0,0,0.6);
}

/* OVERLAY */
.center-overlay {
  position: absolute;
  inset: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 20;
  background: rgba(0,0,0,0.4);
}

/* BUTTON */
button {
  margin-top: 10px;
  padding: 10px 20px;

  background: #c084fc;
  border: none;
  border-radius: 8px;

  cursor: pointer;
}
</style>
