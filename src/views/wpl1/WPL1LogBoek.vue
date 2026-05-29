<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
</script>

<template>
  <div class="page">

    <!-- MAIN CARD -->
    <div class="glass content">

      <!-- TOPBAR -->
      <div class="topbar">

        <h1>Logboek</h1>

        <button
          class="hamburger"
          @click="menuOpen = !menuOpen"
        >
          ☰
        </button>

      </div>

      <!-- DROPDOWN -->
      <transition name="fade">
        <div v-if="menuOpen" class="dropdown glass">


          <router-link to="/wpl1/logboek">
            Logboek
          </router-link>

          <router-link to="/wpl1/competenties">
            Competenties
          </router-link>

          <router-link to="/wpl1/aim">
            AIM Reflectie
          </router-link>

        </div>
      </transition>

      <!-- TABLE -->
      <div class="table-wrapper">

        <table class="logboek-table">

          <thead>
          <tr>
            <th>Week</th>
            <th>Periode</th>
            <th>Inhoud</th>
            <th>Evaluaties</th>
            <th>Opdrachten</th>
          </tr>
          </thead>

          <tbody>

          <tr>
            <td>1</td>
            <td>22/09 - 26/09</td>

            <td>
              <ul>
                <li>Introductie Werkplekleren</li>
                <li>Wat is programmeren</li>
                <li>Introductie POP, X-Factor & SDG's</li>
                <li>Introductie Scratch</li>
              </ul>
            </td>

            <td></td>
            <td></td>
          </tr>

          <tr>
            <td>2</td>
            <td>29/09 - 03/10</td>

            <td>
              <ul>
                <li>Oriënteringstraject</li>
                <li>Installatie Git & GitHub</li>
                <li>Introductie Git & GitHub</li>
              </ul>
            </td>

            <td>
              <ul>
                <li>LockDownBrowser</li>
              </ul>
            </td>

            <td></td>
          </tr>

          <tr>
            <td>3</td>
            <td>06/10 - 10/10</td>

            <td>
              <ul>
                <li>POP motivatie, kernkwadranten en reflecteren</li>
                <li>Labo: Git & GitHub</li>
              </ul>
            </td>

            <td></td>

            <td>
              <ul>
                <li>Scratch</li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>4</td>
            <td>13/10 - 17/10</td>

            <td>
              <ul>
                <li>POP planning & studieaanpak</li>
                <li>Labo: Git & GitHub</li>
              </ul>
            </td>

            <td>
              <ul>
                <li>Git & GitHub</li>
              </ul>
            </td>

            <td>
              <ul>
                <li>Reflecteren</li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>5</td>
            <td>20/10 - 24/10</td>

            <td>
              <ul>
                <li>Gastsprekers</li>
                <li>EPOS reflectie van oriënteringstraject</li>
              </ul>
            </td>

            <td>
              <ul>
                <li>Gastsprekers</li>
              </ul>
            </td>

            <td>
              <ul>
                <li>Planning</li>
              </ul>
            </td>
          </tr>

          <tr>
            <td colspan="5" class="holiday">
              Herfstvakantie
            </td>
          </tr>

          <tr>
            <td>6</td>
            <td>03/11 - 07/11</td>

            <td>
              <ul>
                <li>POP leren analyseren</li>
              </ul>
            </td>

            <td></td>
            <td></td>
          </tr>

          <tr>
            <td>7</td>
            <td>10/11 - 14/11</td>

            <td>
              <ul>
                <li>POP carrièrekompas</li>
                <li>Feedback evaluatie</li>
              </ul>
            </td>

            <td>
              <ul>
                <li>C# Console</li>
              </ul>
            </td>

            <td>
              <ul>
                <li>POP carrièrekompas</li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>8</td>
            <td>17/11 - 21/11</td>

            <td>
              <ul>
                <li>POP personal branding</li>
                <li>Introductie curriculum vitae</li>
                <li>Introductie Portfolio</li>
              </ul>
            </td>

            <td></td>

            <td>
              <ul>
                <li>Feedback evaluatie C# Console</li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>9</td>
            <td>24/11 - 28/11</td>

            <td>
              <ul>
                <li>Instroombevraging</li>
                <li>Feedback evaluatie</li>
              </ul>
            </td>

            <td>
              <ul>
                <li>HTML & CSS</li>
              </ul>
            </td>

            <td></td>
          </tr>

          <tr>
            <td>10</td>
            <td>01/12 - 05/12</td>

            <td>
              <ul>
                <li>Documenteren en debuggen in C#</li>
                <li>Labo: Debugging (C#)</li>
              </ul>
            </td>

            <td>
              <ul>
                <li>Debugging</li>
              </ul>
            </td>

            <td>
              <ul>
                <li>Feedback evaluatie debugging</li>
              </ul>
            </td>
          </tr>

          </tbody>

        </table>

      </div>

    </div>

  </div>
</template>

<style scoped>
.page {
  padding: 40px;
}

/* MAIN CARD */
.content {
  max-width: 1200px;
  margin: auto;
  padding: 40px;
}

/* TOPBAR */
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;
}

/* HAMBURGER */
.hamburger {
  width: 48px;
  height: 48px;

  border: none;
  border-radius: 12px;

  cursor: pointer;

  font-size: 24px;
  color: white;

  background: rgba(255,255,255,0.08);

  transition: 0.2s ease;
}

.hamburger:hover {
  transform: scale(1.05);
}

/* DROPDOWN */
.dropdown {
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 20px;
  margin-bottom: 30px;
}

.dropdown a {
  color: white;
  text-decoration: none;
  opacity: 0.75;
}

.dropdown a:hover,
.dropdown a.router-link-active {
  opacity: 1;
}

/* TABLE */
.table-wrapper {
  overflow-x: auto;
}

.logboek-table {
  width: 100%;
  border-collapse: collapse;
}

.logboek-table th,
.logboek-table td {
  padding: 16px;
  border: 1px solid rgba(255,255,255,0.12);
  vertical-align: top;
}

.logboek-table th {
  background: rgba(255,255,255,0.08);
}

.logboek-table ul {
  margin: 0;
  padding-left: 18px;
}

.holiday {
  text-align: center;
  font-weight: bold;
  background: rgba(255,255,255,0.05);
}

/* ANIMATION */
.fade-enter-active,
.fade-leave-active {
  transition: 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
