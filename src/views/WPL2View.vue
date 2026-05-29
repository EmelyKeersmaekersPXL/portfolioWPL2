<template>
  <div class="page glass">

    <h1>WPL2</h1>

    <h2>Beschrijving van de case</h2>

    <p>
      [Plaats hier je case beschrijving van 150-400 woorden]
    </p>

    <hr>

    <h2>Mijn aandeel</h2>

    <p>
      [Plaats hier jouw aandeel van 150-400 woorden]
    </p>

    <hr>

    <h2>Eindreflectie</h2>

    <p>
      Hieronder kan je later je PDF toevoegen.
    </p>

    <!-- PDF BUTTON -->
    <a
      href="/pdf/eindreflectie.pdf"
      target="_blank"
      class="pdf-button"
    >
      Bekijk Eindreflectie PDF
    </a>

  </div>
</template>

<style scoped>
.pdf-button {
  display: inline-block;

  margin-top: 20px;
  padding: 12px 20px;

  border-radius: 14px;

  text-decoration: none;
  color: white;

  background: rgba(255,255,255,0.1);

  border: 1px solid rgba(255,255,255,0.2);

  transition:
    transform 0.2s ease,
    background 0.2s ease;
}

.pdf-button:hover {
  transform: translateY(-2px);
  background: rgba(255,255,255,0.16);
}
</style>
