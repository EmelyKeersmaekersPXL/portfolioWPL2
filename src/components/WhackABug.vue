<script setup>
import { ref, onUnmounted } from 'vue'

const score = ref(0)
const lives = ref(3)
const highScore = ref(Number(localStorage.getItem('bug_highscore')) || 0)

const gameState = ref('start')

const cells = ref(Array(9).fill('empty'))

let activeIndex = -1
let loop = null

// 🎯 IMPORTANT: controlled difficulty
let spawnDelay = 1200 // starts slow
const minDelay = 650   // never gets faster than this

function clearCells() {
  cells.value = Array(9).fill('empty')
}

function spawn() {
  clearCells()

  activeIndex = Math.floor(Math.random() * 9)

  // 🐛 80% bug, 💣 20% glitch bomb
  const isBomb = Math.random() < 0.2

  cells.value[activeIndex] = isBomb ? 'bomb' : 'bug'
}

function hit(index) {
  if (gameState.value !== 'running') return

  const type = cells.value[index]

  if (type === 'bug') {
    score.value++
  }

  if (type === 'bomb') {
    lives.value--
  }

  cells.value[index] = 'empty'

  if (lives.value <= 0) {
    gameOver()
  }
}

function startLoop() {
  clearInterval(loop)

  loop = setInterval(() => {
    spawn()

    // 🧠 slow controlled ramp (NOT exponential chaos)
    spawnDelay = Math.max(minDelay, spawnDelay - 10)

    startLoop() // restart interval with new speed
  }, spawnDelay)
}

function startGame() {
  score.value = 0
  lives.value = 3

  spawnDelay = 1200
  gameState.value = 'running'

  startLoop()
}

function gameOver() {
  gameState.value = 'gameover'

  if (score.value > highScore.value) {
    highScore.value = score.value
    localStorage.setItem('bug_highscore', score.value)
  }

  clearInterval(loop)
}

function resetGame() {
  gameState.value = 'start'
  clearCells()
  clearInterval(loop)
}

onUnmounted(() => {
  clearInterval(loop)
})
</script>

<template>
  <div class="game">

    <!-- TOP SCORE -->
    <div class="score-center" v-if="gameState !== 'start'">
      Score: {{ score }} | ❤️ {{ lives }}
    </div>

    <!-- START -->
    <div v-if="gameState === 'start'" class="overlay">
      <h2>Whack-a-Bug 🐛</h2>
      <button @click="startGame">Start</button>
    </div>

    <!-- GAME OVER -->
    <div v-if="gameState === 'gameover'" class="overlay">
      <h2>Game Over</h2>
      <p>Score: {{ score }}</p>
      <button @click="resetGame">Retry</button>
    </div>

    <!-- GRID -->
    <div class="grid">
      <div
        v-for="(cell, i) in cells"
        :key="i"
        class="cell"
        @click="hit(i)"
      >
        <span v-if="cell === 'bug'">🐛</span>
        <span v-if="cell === 'bomb'">💣</span>
      </div>
    </div>

  </div>
</template>

<style scoped>
.game {
  width: 100%;
  height: 100%;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* SCORE */
.score-center {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  font-weight: bold;
  z-index: 10;
}

/* GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  width: 60%;
  max-width: 320px;
}

/* CELL */
.cell {
  aspect-ratio: 1;
  background: #222;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 26px;
  cursor: pointer;
}

/* OVERLAY */
.overlay {
  position: absolute;
  inset: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: rgba(0,0,0,0.5);
}

/* BUTTON */
button {
  margin-top: 10px;
  padding: 10px 18px;

  background: #c084fc;
  border: none;
  border-radius: 8px;

  cursor: pointer;
}
</style>
