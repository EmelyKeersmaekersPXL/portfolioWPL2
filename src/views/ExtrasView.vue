<script setup>
import { ref } from 'vue'

import JumpGame from '../components/JumpGame.vue'
import WhackABug from '../components/WhackABug.vue'
import TicTacToe from '../components/TicTacToe.vue'
import CatchGame from '../components/CatchCodeGame.vue'

const activeGame = ref(null)

function openGame(game) {
  activeGame.value = game
}

function closeGame() {
  activeGame.value = null
}
</script>

<template>
  <div class="page">

    <div class="hero glass">
      <h1>Extras</h1>

      <p>
        A small collection of interactive mini games and experiments made while learning Vue and JavaScript.
      </p>
    </div>

    <div class="stage">

      <!-- MENU -->
      <div v-if="!activeGame" class="grid menu-enter">

        <div class="cell glass" @click="openGame('jump')">
          Jump Game
        </div>

        <div class="cell glass" @click="openGame('bug')">
          Whack a Bug
        </div>

        <div class="cell glass" @click="openGame('ttt')">
          Tic Tac Toe
        </div>

        <div class="cell glass" @click="openGame('catch')">
          Catch Game
        </div>

      </div>

      <!-- GAME -->
      <div v-else class="game-stage glass game-enter">

        <button class="back" @click="closeGame">
          ← Back
        </button>

        <div class="game-wrapper game-content-enter">

          <JumpGame v-if="activeGame === 'jump'" />
          <WhackABug v-if="activeGame === 'bug'" />
          <TicTacToe v-if="activeGame === 'ttt'" />
          <CatchGame v-if="activeGame === 'catch'" />

        </div>

      </div>

    </div>

  </div>
</template>

<style scoped>
.page {
  padding: 40px;
}

.hero {
  max-width: 900px;
  margin: 0 auto 40px auto;
  padding: 30px;
}

.hero h1 {
  margin-top: 0;
}

/* STAGE */
.stage {
  width: 100%;
  min-height: 75vh;

  display: flex;
  justify-content: center;
  align-items: center;
}

/* GRID */
.grid {
  display: grid;

  grid-template-columns: repeat(2, 240px);
  grid-template-rows: repeat(2, 160px);

  gap: 20px;
}

/* CELLS */
.cell {
  width: 240px;
  height: 160px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 24px;

  cursor: pointer;

  transition:
    transform 0.25s ease,
    opacity 0.25s ease;
}

.cell:hover {
  transform: scale(1.04);
}

/* GAME MODE */
.game-stage {
  width: 100%;
  height: 80vh;

  position: relative;

  overflow: hidden;

  border-radius: 24px;
}

/* GAME WRAPPER */
.game-wrapper {
  width: 100%;
  height: 100%;
}

/* FORCE GAME TO FIT */
.game-wrapper > * {
  width: 100%;
  height: 100%;
}

/* BACK BUTTON */
.back {
  position: absolute;
  top: 16px;
  left: 16px;

  z-index: 9999;

  border: none;

  padding: 8px 14px;

  border-radius: 12px;

  cursor: pointer;
}

/* ANIMATIONS */
.menu-enter {
  animation: menuFade 0.25s ease;
}

.game-enter {
  animation: gameFade 0.3s ease;
}

.game-content-enter {
  animation: contentFade 0.35s ease;
}

@keyframes menuFade {
  from {
    opacity: 0;
    transform: scale(0.98);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes gameFade {
  from {
    opacity: 0;
    transform: scale(0.98);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes contentFade {
  from {
    opacity: 0;
    transform: scale(1.01);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
