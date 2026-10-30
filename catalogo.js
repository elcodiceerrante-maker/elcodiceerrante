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
    titulos   (opcional) título en otros idiomas, p. ej. { en: "English title" }
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
    pdf       ruta al archivo, p. ej. "aventuras/mi-aventura.pdf" ("" si aún no existe),
              o una ruta por idioma si hay varias versiones: { es: "aventuras/….pdf", en: "aventuras/….pdf" }
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
    id: "el-yunque-del-primer-nombre",
    titulo: "El Yunque del Primer Nombre",
    titulos: { en: "The Anvil of the First Name" },
    autor: "Jorge Gómez Vaello",
    idioma: "bi",
    resumen: {
      es: "Una campaña sobre el origen de un pueblo y quién tiene derecho a contarlo. Poco después del Cataclismo, los temblores abren en Khaz Modan criptas selladas durante milenios, y en ellas descansan las piezas de un antiguo artefacto titánico. Desde las orillas de Loch Modan hasta las ruinas de Uldaman, las entrañas de Forjaz y Grim Batol, un grupo de la Alianza debe adelantarse al Martillo Crepuscular. Exploración, intriga y horror cósmico contenido para 4–5 personajes, de nivel 1 a 10, en unas 16–20 sesiones. Versión preliminar, con estadísticas provisionales hasta la salida del manual.",
      en: "A campaign about the origin of a people and who has the right to tell it. Shortly after the Cataclysm, tremors split open crypts in Khaz Modan that have been sealed for millennia, and inside lie the pieces of an ancient titan artefact. From the shores of Loch Modan to the ruins of Uldaman, the depths of Ironforge and Grim Batol, an Alliance party must stay ahead of the Twilight's Hammer. Exploration, intrigue and restrained cosmic horror for 4–5 characters, levels 1 to 10, over some 16–20 sessions. Preliminary version, with provisional statistics until the sourcebook is released.",
      de: "Eine Kampagne über den Ursprung eines Volkes und darüber, wer ihn erzählen darf. Kurz nach dem Kataklysmus reißen Beben in Khaz Modan seit Jahrtausenden versiegelte Grüfte auf, und darin ruhen die Teile eines uralten Titanenartefakts. Von den Ufern des Loch Modan über die Ruinen von Uldaman und die Tiefen von Eisenschmiede bis nach Grim Batol muss eine Gruppe der Allianz dem Schattenhammer zuvorkommen. Erkundung, Intrigen und dezenter kosmischer Horror für 4–5 Charaktere der Stufen 1 bis 10, in etwa 16–20 Sitzungen. Vorläufige Fassung mit vorläufigen Werten bis zum Erscheinen des Quellenbuchs.",
      fr: "Une campagne sur l'origine d'un peuple et sur qui a le droit de la raconter. Peu après le Cataclysme, des secousses ouvrent à Khaz Modan des cryptes scellées depuis des millénaires, où reposent les fragments d'un ancien artefact titanesque. Des rives du Loch Modan aux ruines d'Uldaman, des entrailles de Forgefer jusqu'à Grim Batol, un groupe de l'Alliance doit devancer le Marteau du crépuscule. Exploration, intrigue et horreur cosmique contenue pour 4 à 5 personnages, du niveau 1 au niveau 10, en 16 à 20 séances environ. Version préliminaire, aux statistiques provisoires jusqu'à la sortie du livre.",
      it: "Una campagna sull’origine di un popolo e su chi ha il diritto di raccontarla. Poco dopo il Cataclisma, i terremoti aprono a Khaz Modan cripte sigillate da millenni, dove riposano i frammenti di un antico artefatto dei titani. Dalle rive del Loch Modan alle rovine di Uldaman, dalle viscere di Forgiardente fino a Grim Batol, un gruppo dell’Alleanza deve anticipare il Martello del Crepuscolo. Esplorazione, intrighi e orrore cosmico misurato per 4–5 personaggi, dal livello 1 al 10, in circa 16–20 sessioni. Versione preliminare, con statistiche provvisorie fino all’uscita del manuale."
    },
    nivel: [1, 10], jugadores: "4–5", sesiones: 16,
    tono: "Épico", region: "Khaz Modan",
    etiquetas: ["campaña", "campaign", "enanos", "dwarves", "Uldaman", "Grim Batol"],
    licencia: "CC0 1.0", estado: "publicada",
    pdf: { es: "aventuras/el-yunque-del-primer-nombre.pdf", en: "aventuras/the-anvil-of-the-first-name.pdf" }, paginas: 35, fecha: "2026-10-30"
  },
  {
    id: "la-mina-del-capataz-ausente",
    titulo: "La mina del capataz ausente",
    titulos: { en: "The Mine of the Absent Foreman" },
    autor: "Jorge Gómez Vaello",
    idioma: "bi",
    resumen: {
      es: "Una velada de velas, kóbolds y cuentas que no cuadran. La Veta Cobriza, una pequeña mina al sur de Villadorada, lleva tres días parada: su capataz ha desaparecido y los mineros juran que se lo llevaron los kóbolds. Comedia de una sola sesión pensada para mesas de iniciación: cada escena enseña una regla y todas pueden resolverse luchando, ingeniando o hablando. Versión preliminar, con estadísticas provisionales hasta la salida del manual.",
      en: "An evening of candles, kobolds and accounts that don't add up. The Copperseam, a small mine south of Goldshire, has been idle for three days: its foreman has vanished and the miners swear the kobolds took him. A one-session comedy designed for first-time groups: each scene teaches a rule, and every scene can be solved by fighting, scheming or talking. Preliminary version, with provisional statistics until the sourcebook is released.",
      de: "Ein Abend voller Kerzen, Kobolde und Abrechnungen, die nicht aufgehen. Die Kupferader, eine kleine Mine südlich von Goldhain, steht seit drei Tagen still: Ihr Vorarbeiter ist verschwunden, und die Bergleute schwören, die Kobolde hätten ihn geholt. Eine Komödie für eine Sitzung, gedacht für Einsteigergruppen: Jede Szene vermittelt eine Regel, und jede lässt sich durch Kampf, List oder Reden lösen. Vorläufige Fassung mit vorläufigen Werten bis zum Erscheinen des Quellenbuchs.",
      fr: "Une soirée de bougies, de kobolds et de comptes qui ne tombent pas juste. La Veine cuivrée, une petite mine au sud de Comté-de-l'Or, est à l'arrêt depuis trois jours : son contremaître a disparu et les mineurs jurent que les kobolds l'ont emporté. Une comédie en une séance pensée pour les tables d'initiation : chaque scène enseigne une règle, et toutes peuvent se résoudre par le combat, la ruse ou la parole. Version préliminaire, aux statistiques provisoires jusqu'à la sortie du livre.",
      it: "Una serata di candele, coboldi e conti che non tornano. La Vena di Rame, una piccola miniera a sud di Borgodoro, è ferma da tre giorni: il caposquadra è scomparso e i minatori giurano che l’hanno preso i coboldi. Una commedia in una sola sessione pensata per i tavoli di principianti: ogni scena insegna una regola e tutte si possono risolvere combattendo, ingegnandosi o parlando. Versione preliminare, con statistiche provvisorie fino all’uscita del manuale."
    },
    nivel: [1, 2], jugadores: "3–5", sesiones: 1,
    tono: "Ligero", region: "Bosque de Elwynn",
    etiquetas: ["one-shot", "iniciación", "beginners", "Hermandad Defias"],
    licencia: "CC0 1.0", estado: "publicada",
    pdf: { es: "aventuras/la-mina-del-capataz-ausente.pdf", en: "aventuras/the-mine-of-the-absent-foreman.pdf" }, paginas: 26, fecha: "2026-10-25"
  }
];
