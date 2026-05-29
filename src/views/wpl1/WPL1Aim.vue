<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
</script>

<template>
  <div class="page">

    <div class="glass content">

      <!-- HEADER -->
      <div class="topbar">

        <h1>AIM Reflectie</h1>

        <button
          class="hamburger"
          @click="menuOpen = !menuOpen"
        >
          ☰
        </button>

      </div>

      <!-- MENU -->
      <div
        v-if="menuOpen"
        class="dropdown glass"
      >

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

      <!-- CONTENT -->

      <p>
        Tijdens de Werkplekleren lessen kreeg ik de kans om mijn kennis uit de opleiding
        te gebruiken ter voorbereiding op de werkvloer.
        Er waren verschillende gastsprekers die vertelden over hun beroep en ervaringen in IT.
        Ook hebben we meerdere evaluaties en opdrachten gemaakt om onze vaardigheden en competenties
        in kaart te brengen.
      </p>

      <hr>

      <p>
        Wat ik leuk vond in werkplekleren waren de sessies met de gastsprekers.
        Deze waren leerzaam omdat ze een beeld gaven van verschillende werkvelden.
        Het was interessant om te horen hoe ze hun baan hebben opgebouwd en welke vaardigheden
        in de praktijk belangrijk zijn.
        Ook vond ik bepaalde opdrachten zoals de Scratch opdracht heel leuk om te maken.
        Deze opdracht was leuk omdat we hier ook creatief mochten zijn.
      </p>

      <hr>

      <p>
        Een minder leuk element vond ik de POP- en zelfreflectie opdrachten.
        Dit is niet mijn sterkste punt.
        Ik vind het moeilijk om mijn kwaliteiten en ontwikkelpunten in woorden te brengen.
        Ook vond ik minder leuk dat we bij sommige opdrachten geen persoonlijke feedback hebben gekregen,
        dit zou veel geholpen hebben bij volgende opdrachten.
      </p>

      <hr>

      <p>
        Een belangrijk inzicht dat ik mee neem is dat een goede voorbereiding heel belangrijk is
        voordat je aan de slag gaat in de werkomgeving.
        Door de lessen, gastsprekers en opdrachten heb ik een beter beeld gekregen van wat er verwacht
        kan worden en welke vaardigheden belangrijk zijn.
        Ik heb ook meer inzicht gekregen in mijn kwaliteiten en aandachtspunten.
        Ook heb ik geleerd dat reflecteren helpt om stil te staan bij mijn leerproces.
      </p>

      <hr>

      <p>
        Een persoonlijk succes vind ik dat ik actief heb meegedaan aan de voorbereidende activiteiten
        zoals de POP- en zelfreflectie opdrachten, omdat deze niet mijn sterkste punt zijn
        en ik ze toch heb afgerond.
      </p>

      <hr>

      <h2>Wat neem ik mee</h2>

      <p>
        Een van mijn sterke punten is nauwkeurigheid.
        Ik werk zorgvuldig en let op details.
        Ik wil deze eigenschap in de volgende periode verder gebruiken
        door mijn taken gestructureerd aan te pakken.
      </p>

      <p>
        Een valkuil is dat ik soms te veel tijd besteed aan kleine details die niet belangrijk zijn,
        waardoor het lastig wordt om deadlines te behalen.
        Om dit aan te pakken wil ik beter plannen en prioriteiten stellen.
      </p>

      <p>
        In de komende periode wil ik leren hoe ik dit kan combineren met snelheid en samenwerking
        zodat ik efficiënter kan werken zonder kwaliteit te verliezen.
      </p>

      <!-- X FACTOR TABLE -->

      <div class="table-wrapper">

        <table class="xfactor-table">

          <thead>
          <tr>
            <th colspan="2">X-Factor</th>
          </tr>
          </thead>

          <tbody>

          <tr>
            <td>(Em)Passie</td>

            <td>
              Ik ben gemotiveerd om de taken goed uit te voeren
              en anderen te helpen waar nodig.
            </td>
          </tr>

          <tr>
            <td>Ondernemend & innovatief</td>

            <td>
              Ik heb geleerd om nieuwe manieren te proberen
              om problemen aan te pakken.
            </td>
          </tr>

          <tr>
            <td>(Internationaal) samenwerken</td>

            <td>
              Samenwerken in klasgroepjes tijdens de lessen
              en samen presentaties maken en presenteren.
            </td>
          </tr>

          <tr>
            <td>Multidisciplinariteit</td>

            <td>
              Tijdens de Scratch opdracht hebben we de programmeerlogica
              die we bij C# essentials leerden kunnen toepassen.
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

.content {
  max-width: 1000px;
  margin: auto;
  padding: 40px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 24px;
}

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

.dropdown a.router-link-active {
  opacity: 1;
}

p {
  line-height: 1.8;
  opacity: 0.92;
}

h2 {
  margin-top: 30px;
  margin-bottom: 16px;
}

hr {
  border: none;
  height: 1px;

  background: rgba(255,255,255,0.1);

  margin: 30px 0;
}

/* TABLE */
.table-wrapper {
  overflow-x: auto;
  margin-top: 30px;
}

.xfactor-table {
  width: 100%;
  border-collapse: collapse;
}

.xfactor-table th,
.xfactor-table td {
  padding: 16px;
  border: 1px solid rgba(255,255,255,0.12);
  text-align: left;
}

.xfactor-table th {
  background: rgba(255,255,255,0.08);
}
</style>
