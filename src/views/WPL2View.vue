<template>
  <div class="page glass">

    <h1>WPL2</h1>

    <h2>Beschrijving van de case</h2>
    <p>
      Voor onze case hebben wij een website gemaakt voor een klein bedrijf genaamd <i>Pop and Clay</i>.<br>
      <i>Pop and Clay</i> verkoopt handgemaakte, unieke juwelen die gemaakt zijn uit duurzame materialen en daarnaast ook nikkelvrij zijn.<br><br>

      Hiervoor hebben wij een webshop ontwikkeld waar klanten producten kunnen bekijken en kiezen.<br>
      Klanten kunnen hun favoriete items opslaan in hun winkelwagen of in hun favorietenlijst, zodat ze deze later gemakkelijk kunnen terugvinden.<br>
      Dit maakt het shoppen op de website sneller en gebruiksvriendelijker.<br><br>

      Daarnaast kunnen klanten een eigen profiel aanmaken.<br>
      In dit profiel worden hun gegevens opgeslagen, zodat ze eenvoudiger en sneller een bestelling kunnen plaatsen zonder telkens opnieuw alles in te vullen.<br><br>

      Ook is er een administratieve kant van de website voorzien.<br>
      De admins kunnen alle belangrijke gegevens bekijken, zoals klantinformatie, productgegevens en algemene prestaties van de webshop.<br>
      Dit geeft hen een duidelijk overzicht van hoe de website wordt gebruikt en hoe de verkoop verloopt.<br><br>

      Verder kunnen admins producten toevoegen of verwijderen wanneer er nieuwe artikelen worden uitgebracht of wanneer bepaalde producten niet meer beschikbaar zijn.<br>
      Zo blijft de webshop altijd up-to-date.<br><br>

      De website bevat ook verschillende filters, waardoor klanten snel en eenvoudig kunnen zoeken naar producten die aan hun voorkeuren voldoen.<br>
      Dit zorgt ervoor dat alles binnen handbereik is en de gebruikerservaring zo efficiënt mogelijk verloopt.<br>
    </p>

    <hr>

    <h2>Mijn aandeel</h2>
    <p>
      Mijn aandeel in dit project lag voornamelijk bij de front-end ontwikkeling van de website.<br>
      Ik heb vooral gewerkt aan de functionele kant van de applicatie en ervoor gezorgd dat de verschillende pagina’s correct werken en goed met elkaar verbonden zijn.<br><br>

      Ik heb onder andere gewerkt aan de pagina’s waar je admins en users kan bekijken en filteren.<br>
      Op deze pagina’s kan je eenvoudig zoeken en onderscheid maken tussen verschillende gebruikers, wat het beheer van de website veel overzichtelijker maakt.<br><br>

      Daarnaast heb ik meegewerkt aan het systeem waarmee gebruikers verschillende rollen kunnen krijgen, zoals user, admin en superadmin.<br>
      Dit zorgt ervoor dat elke gebruiker de juiste rechten heeft binnen het platform en dat de toegangen correct worden beheerd.<br><br>

      Ook heb ik een pagina ontwikkeld waarop je kan zien hoeveel traffic er was in de week en wanneer gebruikers voor het laatst ingelogd hebben.<br>
      Dit geeft een duidelijk overzicht van het gebruik van de website en helpt om inzicht te krijgen in het gedrag van gebruikers.<br><br>

      De loginpagina en reset password functionaliteit heb ik ook mee ondersteund, maar dit waren kleinere onderdelen binnen het geheel van het project.<br><br>

      Naast de front-end heb ik ook een klein deel van de backend mee ondersteund, vooral door te helpen met het aanmaken van nieuwe API calls zodat de front-end correct kan communiceren met de database en de juiste informatie kan ophalen en versturen.<br><br>

      Door deze taken heb ik veel geleerd over het bouwen van een goed gestructureerde front-end en hoe deze samenwerkt met de backend in een groter teamproject.<br>
    </p>

    <hr>

    <h2>Eindreflectie</h2>

    <p>
      Hieronder kan je mijn eindreflectie PDF bekijken.
    </p>

    <button class="pdf-button" @click="showPdf = true">
      Bekijk Eindreflectie PDF
    </button>

    <div v-if="showPdf" class="pdf-overlay" @click.self="showPdf = false">

      <div class="pdf-container">

        <button class="close-btn" @click="showPdf = false">
          ✕
        </button>

        <iframe
          src="/pdf/eindreflectie.pdf"
          class="pdf-frame"
        />

      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showPdf = ref(false)
</script>

<style scoped>
.pdf-button {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 20px;
  border-radius: 14px;
  color: white;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  cursor: pointer;
  transition: 0.2s ease;
}

.pdf-button:hover {
  transform: translateY(-2px);
  background: rgba(255,255,255,0.16);
}

.pdf-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.pdf-container {
  width: 85%;
  height: 90%;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
}

.pdf-frame {
  width: 100%;
  height: 100%;
  border: none;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
  background: rgba(0,0,0,0.6);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 6px 10px;
  cursor: pointer;
}
</style>
