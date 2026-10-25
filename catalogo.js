/*
  CATÁLOGO DE AVENTURAS / ADVENTURE CATALOGUE — Códice Errante
  -------------------------------------------------------------
  Para publicar una aventura aprobada:
  1. Copia su PDF en la carpeta /aventuras/ de la web.
  2. Añade un bloque a la lista de abajo (usa el modelo).
  3. Vuelve a subir la carpeta a Netlify.

  Campos:
    id        identificador único sin espacios ni tildes (se usa en el enlace #id)
    titulo    título original de la aventura
    autor     nombre o seudónimo
    idioma    "es" (español) | "en" (inglés) | "bi" (bilingüe)
    resumen   un texto, o un objeto con los dos idiomas: { es: "…", en: "…" }
              Si solo das un texto, se muestra en su idioma con un aviso.
    nivel     [nivel inicial, nivel final]
    jugadores texto, p. ej. "4–5"
    sesiones  número aproximado de sesiones
    tono      "Épico" | "Trágico" | "Oscuro" | "Ligero" | "Misterio" | "Horror"
              (escríbelo siempre en español; la web lo traduce)
    region    zona de Azeroth donde transcurre (texto libre)
    etiquetas palabras clave para el buscador (puedes mezclar idiomas)
    licencia  "CC BY-NC-SA 4.0" | "CC BY-NC 4.0" | "CC0 1.0"
    estado    "publicada" | "preparacion"
    pdf       ruta al archivo, p. ej. "aventuras/mi-aventura.pdf" ("" si aún no existe)
    paginas   número de páginas del PDF
    srd       false si la aventura NO usa reglas del SRD 5.2 (por defecto se muestra el aviso del SRD y de Warcraft)
    fecha     "AAAA-MM-DD" de publicación

  Modelo para copiar (quita las barras // al pegarlo dentro de los corchetes):
  // {
  //   id: "mi-aventura",
  //   titulo: "Título de la aventura",
  //   autor: "Nombre o seudónimo",
  //   idioma: "es",
  //   resumen: { es: "Resumen en español.", en: "Summary in English." },
  //   nivel: [3, 5], jugadores: "4–5", sesiones: 3,
  //   tono: "Épico", region: "Bosque de Elwynn",
  //   etiquetas: ["asedio", "siege", "no muertos"],
  //   licencia: "CC BY-NC-SA 4.0", estado: "publicada",
  //   pdf: "aventuras/mi-aventura.pdf", paginas: 24, fecha: "2026-11-20"
  // },
*/
window.CATALOGO = [
  {
    id: "la-mina-del-capataz-ausente",
    titulo: "La mina del capataz ausente",
    autor: "Jorge Gómez Vaello",
    idioma: "es",
    resumen: {
      es: "Una velada de velas, kóbolds y cuentas que no cuadran. La Veta Cobriza, una pequeña mina al sur de Villadorada, lleva tres días parada: su capataz ha desaparecido y los mineros juran que se lo llevaron los kóbolds. Comedia de una sola sesión pensada para mesas de iniciación: cada escena enseña una regla y todas pueden resolverse luchando, ingeniando o hablando. Versión preliminar, con estadísticas provisionales hasta la salida del manual.",
      en: "An evening of candles, kobolds and accounts that don't add up. The Copper Vein, a small mine south of Goldshire, has been idle for three days: its foreman has vanished and the miners swear the kobolds took him. A one-session comedy designed for first-time groups: each scene teaches a rule, and every scene can be solved by fighting, scheming or talking. Preliminary version, with provisional statistics until the sourcebook is released.",
      de: "Ein Abend voller Kerzen, Kobolde und Abrechnungen, die nicht aufgehen. Die Kupferader, eine kleine Mine südlich von Goldhain, steht seit drei Tagen still: Ihr Vorarbeiter ist verschwunden, und die Bergleute schwören, die Kobolde hätten ihn geholt. Eine Komödie für eine Sitzung, gedacht für Einsteigergruppen: Jede Szene vermittelt eine Regel, und jede lässt sich durch Kampf, List oder Reden lösen. Vorläufige Fassung mit vorläufigen Werten bis zum Erscheinen des Quellenbuchs.",
      fr: "Une soirée de bougies, de kobolds et de comptes qui ne tombent pas juste. La Veine cuivrée, une petite mine au sud de Comté-de-l'Or, est à l'arrêt depuis trois jours : son contremaître a disparu et les mineurs jurent que les kobolds l'ont emporté. Une comédie en une séance pensée pour les tables d'initiation : chaque scène enseigne une règle, et toutes peuvent se résoudre par le combat, la ruse ou la parole. Version préliminaire, aux statistiques provisoires jusqu'à la sortie du livre."
    },
    nivel: [1, 2], jugadores: "3–5", sesiones: 1,
    tono: "Ligero", region: "Bosque de Elwynn",
    etiquetas: ["one-shot", "iniciación", "beginners", "kóbolds", "kobolds", "mina", "mine", "Villadorada", "Goldshire", "Hermandad Defias", "Defias", "comedia", "comedy"],
    licencia: "CC0 1.0", estado: "publicada",
    pdf: "aventuras/la-mina-del-capataz-ausente.pdf", paginas: 26, fecha: "2026-10-25"
  }
];
