<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
</script>

<template>
  <div class="page">

    <div class="glass content">

      <!-- HEADER -->
      <div class="topbar">

        <h1>Competenties van een programmeur</h1>

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
      <section class="competency">

        <h2>Ontwerper</h2>

        <p>
          Tijdens verschillende opdrachten heb ik geleerd hoe belangrijk
          structuur en planning zijn bij het ontwerpen van een applicatie.
          Vooral bij HTML/CSS en Scratch moest ik eerst nadenken over de opbouw
          voordat ik begon te programmeren.
        </p>

        <h3>Mijn ervaring</h3>

        <p>
          Ik heb geleerd om logisch na te denken over layouts,
          gebruiksvriendelijkheid en structuur. Vooral positionering en design
          waren in het begin moeilijk, maar door te oefenen ging dit steeds
          beter.
        </p>

      </section>

      <hr>

      <section class="competency">

        <h2>Programmeur</h2>

        <p>
          Tijdens Werkplekleren heb ik gewerkt met Scratch, HTML/CSS,
          GitHub, C# Console en WPF. Hierdoor heb ik mijn programmeerkennis
          verder ontwikkeld.
        </p>

        <h3>Mijn ervaring</h3>

        <p>
          Ik heb geleerd hoe belangrijk duidelijke code en logisch nadenken
          zijn. Vooral methodes in C# en het structureren van code heb ik beter
          leren begrijpen.
        </p>

      </section>

      <hr>

      <section class="competency">

        <h2>Tester</h2>

        <p>
          Tijdens debugging-opdrachten leerde ik fouten opsporen en oplossen
          met de debugging tools van Visual Studio.
        </p>

        <h3>Mijn ervaring</h3>

        <p>
          Ik heb geleerd hoe ik efficiënter fouten kan vinden en oplossen.
          Debugging heeft mij geholpen om nauwkeuriger te werken en beter te
          begrijpen hoe code werkt.
        </p>

      </section>

      <hr>

      <section class="competency">

        <h2>Communicator / Teamspeler</h2>

        <p>
          Tijdens groepswerken en lessen heb ik geleerd om beter samen te
          werken en te communiceren met anderen.
        </p>

        <h3>Mijn ervaring</h3>

        <p>
          Ik vond samenwerken soms uitdagend, maar ik heb geleerd hoe belangrijk
          duidelijke communicatie is binnen een team.
        </p>

      </section>

      <hr>

      <section class="competency">

        <h2>Levenslang lerende IT-professional</h2>

        <p>
          Tijdens Werkplekleren heb ik geleerd dat technologie voortdurend
          verandert en dat je jezelf moet blijven ontwikkelen.
        </p>

        <h3>Mijn ervaring</h3>

        <p>
          Ik ben leergierig en sta open om nieuwe programmeertalen en technieken
          te leren. Tijdens de opdrachten heb ik gemerkt dat oefenen en fouten
          maken belangrijk zijn om beter te worden.
        </p>

      </section>

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

.competency {
  margin-bottom: 30px;
}

h2 {
  margin-bottom: 12px;
}

h3 {
  margin-top: 20px;
  margin-bottom: 10px;
}

p {
  line-height: 1.7;
  opacity: 0.92;
}

hr {
  border: none;
  height: 1px;
  background: rgba(255,255,255,0.1);

  margin: 30px 0;
}
</style>
