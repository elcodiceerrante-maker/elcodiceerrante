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

];
