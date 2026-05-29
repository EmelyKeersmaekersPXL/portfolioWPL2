<template>
  <div class="page glass">

    <h1>Portfolio</h1>

    <!-- NAME + PROFILE IMAGE ROW -->
    <div class="profile">

      <img
        class="avatar"
        src="/src/assets/profiel.jpg"
        alt="Profile picture"
      />

      <h2 class="name">Emely Keersmaekers 1PROc</h2>

    </div>

    <hr>

    <h3>About me</h3>

    <p>
      Ik ben een junior developer in training met een passie voor C#.
      Ook heb ik interesse in HTML/CSS en SQL, waarmee ik basiskennis heb opgebouwd.
      Ik ben leergierig en sta altijd open om nieuwe programmeertalen te leren.
      Ik werk graag aan het oplossen van problemen en het verbeteren van mijn programmeervaardigheden.
      Mijn doel is om te groeien tot een professionele developer.
    </p>

    <p>
      In dit portfolio vind je het logboek, de taken en evaluaties van Werkplekleren,
      mijn ontwikkeling en reflecties.
    </p>

    <hr>

    <h3>Waarom koos ik voor de opleiding programmeren?</h3>

    <p>
      Ik heb gekozen voor de opleiding programmeren omdat ik graag creatief bezig ben
      en het leuk vind om iets te bouwen vanuit niets.
      Programmeren geeft de mogelijkheid om ideeën om te bouwen in iets tastbaars,
      wat mij erg motiveert.
    </p>

    <p>
      Wanneer ik een stuk code maak dat werkt zoals bedoeld krijg ik een gevoel van voldoening en trots.
      Programmeren inspireert mij omdat er altijd nieuwe technologieën en mogelijkheden zijn om opnieuw
      te ontdekken en je blijft continu bijleren en jezelf uitdagen.
    </p>

    <hr>

    <h3>Waarom denk ik dat dit beroep bij mij past?</h3>

    <p>
      Ik denk dat het beroep goed bij mij past omdat ik graag bezig ben met logisch nadenken
      en het oplossen van ideeën.
      Ik ben creatief ingesteld en vind het leuk om ideeën tot leven te brengen.
      Ik ben leergierig en wil graag meer programmeertalen bijleren.
    </p>

  </div>
</template>

<style scoped>
.page {
  max-width: 900px;
  margin: auto;
  padding: 40px;
}

/* PROFILE ROW */
.profile {
  display: flex;
  align-items: center;
  justify-content: center; /* centered layout */
  gap: 20px;
  margin-bottom: 20px;
}

/* PROFILE IMAGE */
.avatar {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;

  border: 2px solid rgba(255,255,255,0.3);
  box-shadow: 0 10px 25px rgba(0,0,0,0.25);
}

/* NAME */
.name {
  margin: 0;
}
</style>
