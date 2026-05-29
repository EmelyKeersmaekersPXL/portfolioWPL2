<script setup>
import { ref } from 'vue'

const board = ref(Array(9).fill(null))
const gameState = ref('start')
const winner = ref(null)
const isPlayerTurn = ref(true)

const score = ref(0)
const highScore = ref(Number(localStorage.getItem('ttt_highscore')) || 0)

const difficulty = ref('easy')

const winPatterns = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
]

/* ---------------- WIN CHECK ---------------- */
function checkWinner(b) {
  for (const [a,b2,c] of winPatterns) {
    if (b[a] && b[a] === b[b2] && b[a] === b[c]) {
      return b[a]
    }
  }
  return null
}

function isDraw(b) {
  return b.every(cell => cell !== null) && !checkWinner(b)
}

/* ---------------- PLAYER ---------------- */
function playerMove(i) {
  if (gameState.value !== 'running') return
  if (!isPlayerTurn.value) return
  if (board.value[i]) return

  board.value[i] = 'X'
  isPlayerTurn.value = false

  if (checkWinner(board.value)) return endGame('X')
  if (isDraw(board.value)) return endGame('draw')

  setTimeout(aiMove, 250)
}

/* ---------------- AI ROUTER ---------------- */
function aiMove() {
  if (gameState.value !== 'running') return

  let move = null

  if (difficulty.value === 'easy') {
    move = randomMove()
  }

  if (difficulty.value === 'medium') {
    move = mediumAI()
  }

  if (difficulty.value === 'hard') {
    move = bestMoveMinimax()
  }

  if (move !== null) {
    board.value[move] = 'O'
  }

  if (checkWinner(board.value)) return endGame('O')
  if (isDraw(board.value)) return endGame('draw')

  isPlayerTurn.value = true
}

/* ---------------- EASY ---------------- */
function randomMove() {
  const empty = board.value
    .map((v,i) => v ? null : i)
    .filter(v => v !== null)

  return empty[Math.floor(Math.random() * empty.length)]
}

/* ---------------- MEDIUM ---------------- */
function mediumAI() {
  let move = findWinningMove('O')
  if (move !== null) return move

  move = findWinningMove('X')
  if (move !== null) return move

  return randomMove()
}

/* ---------------- HARD (MINIMAX) ---------------- */
function bestMoveMinimax() {
  let bestScore = -Infinity
  let move = null

  for (let i = 0; i < 9; i++) {
    if (board.value[i]) continue

    board.value[i] = 'O'
    const score = minimax(board.value, 0, false)
    board.value[i] = null

    if (score > bestScore) {
      bestScore = score
      move = i
    }
  }

  return move
}

/* ---------------- MINIMAX ---------------- */
function minimax(b, depth, isMax) {
  const result = checkWinner(b)

  if (result === 'O') return 10 - depth
  if (result === 'X') return depth - 10
  if (isDraw(b)) return 0

  if (isMax) {
    let best = -Infinity
    for (let i = 0; i < 9; i++) {
      if (b[i]) continue
      b[i] = 'O'
      best = Math.max(best, minimax(b, depth + 1, false))
      b[i] = null
    }
    return best
  } else {
    let best = Infinity
    for (let i = 0; i < 9; i++) {
      if (b[i]) continue
      b[i] = 'X'
      best = Math.min(best, minimax(b, depth + 1, true))
      b[i] = null
    }
    return best
  }
}

/* ---------------- HELPERS ---------------- */
function findWinningMove(player) {
  for (let i = 0; i < 9; i++) {
    if (board.value[i]) continue

    const test = [...board.value]
    test[i] = player

    if (checkWinner(test) === player) return i
  }
  return null
}

/* ---------------- GAME CONTROL ---------------- */
function startGame() {
  board.value = Array(9).fill(null)
  winner.value = null
  isPlayerTurn.value = true
  gameState.value = 'running'
}

function endGame(result) {
  winner.value = result
  gameState.value = 'end'

  if (result === 'X') {
    score.value++
  }

  if (score.value > highScore.value) {
    highScore.value = score.value
    localStorage.setItem('ttt_highscore', score.value)
  }
}
</script>

<template>
  <div class="game">

    <!-- SCORE -->
    <div class="score-center" v-if="gameState !== 'start'">
      Score: {{ score }} | High: {{ highScore }}
    </div>

    <!-- START -->
    <div v-if="gameState === 'start'" class="overlay">

      <h2>Tic Tac Toe</h2>

      <!-- DIFFICULTY -->
      <div class="difficulty">

        <button
          class="signal"
          :class="{ active: difficulty === 'easy' }"
          @click="difficulty = 'easy'"
        >
          <span class="bars">
            <span class="bar"></span>
          </span>
          <span class="label">Easy</span>
        </button>

        <button
          class="signal"
          :class="{ active: difficulty === 'medium' }"
          @click="difficulty = 'medium'"
        >
          <span class="bars">
            <span class="bar"></span>
            <span class="bar"></span>
          </span>
          <span class="label">Medium</span>
        </button>

        <button
          class="signal"
          :class="{ active: difficulty === 'hard' }"
          @click="difficulty = 'hard'"
        >
          <span class="bars">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </span>
          <span class="label">Hard</span>
        </button>

      </div>

      <button class="start-btn" @click="startGame">
        Start
      </button>
    </div>

    <!-- BOARD -->
    <div class="board">
      <div
        v-for="(cell, i) in board"
        :key="i"
        class="cell"
        @click="playerMove(i)"
      >
        {{ cell }}
      </div>
    </div>

    <!-- END -->
    <div v-if="gameState === 'end'" class="overlay">

      <h2 v-if="winner === 'X'">You Win</h2>
      <h2 v-else-if="winner === 'O'">You Lose</h2>
      <h2 v-else>Draw</h2>

      <button class="primary-btn" @click="startGame">
        Play Again
      </button>
    </div>

  </div>
</template>

<style scoped>
.game {
  width: 100%;
  height: 100%;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

/* BOARD */
.board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

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

  font-size: 28px;
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

/* START BUTTON */
.start-btn {
  margin-top: 15px;
  padding: 10px 18px;

  background: #c084fc;
  border: none;
  border-radius: 8px;

  cursor: pointer;
}

/* SIGNAL DIFFICULTY */
.difficulty {
  display: flex;
  gap: 12px;
  margin-top: 15px;
}

.signal {
  background: transparent;
  border: 1px solid #444;
  border-radius: 10px;

  width: 90px;
  height: 55px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 6px;

  cursor: pointer;
}

.bars {
  display: flex;
  gap: 3px;
  align-items: flex-end;
}

.bar {
  width: 6px;
  background: #555;
  border-radius: 2px;
}

.signal .bar:nth-child(1) { height: 10px; }
.signal .bar:nth-child(2) { height: 16px; }
.signal .bar:nth-child(3) { height: 22px; }

.label {
  font-size: 12px;
  opacity: 0.8;
}

.signal.active {
  border-color: #c084fc;
  background: rgba(192, 132, 252, 0.15);
}

.signal.active .bar {
  background: #c084fc;
}

.signal.active .label {
  color: #c084fc;
  opacity: 1;
}

/* FINAL BUTTON (PRETTY) */
.primary-btn {
  margin-top: 15px;
  padding: 10px 20px;

  background: linear-gradient(135deg, #c084fc, #a855f7);
  border: none;
  border-radius: 12px;

  color: white;
  font-weight: 600;

  cursor: pointer;

  box-shadow: 0 8px 20px rgba(192, 132, 252, 0.25);
  transition: 0.2s;
}

.primary-btn:hover {
  transform: translateY(-2px);
}
</style>
