# Códice Errante: cómo publicar y mantener la web

## 1. Publicación

La web está en GitHub y conectada a Netlify. Cada cambio guardado en la rama `main` se publica solo. Ya no hace falta arrastrar carpetas.

El dominio propio y el certificado HTTPS se gestionan en Netlify, en **Domain management**.

## 2. Datos legales

El aviso legal y la política de privacidad ya incluyen el titular (Jorge Gómez Vaello, Madrid) y el correo de contacto (elcodiceerrante@gmail.com). Si alguno cambia, búscalo en `index.html` y sustitúyelo.

## 3. Revisar un envío

Cada envío aparece en **Forms → envio-aventura**, con los datos y el PDF adjunto. Antes de aprobarlo, comprueba:

- Que el PDF no copia texto, tablas, perfiles de criaturas, mapas ni ilustraciones oficiales.
- Que no incluye logotipos de Wizards of the Coast ni de Blizzard.
- Que cumple las normas de la comunidad.
- Que las cinco declaraciones están marcadas (el formulario no deja enviar sin ellas).

## 4. Publicar una aventura aprobada

1. Descarga el PDF desde Netlify y cópialo en la carpeta `aventuras/` con un nombre sin espacios ni tildes, por ejemplo `bajo-la-tormenta.pdf`.
2. Abre `catalogo.js` y añade un bloque con sus datos (al principio del archivo hay un modelo para copiar). En `pdf` escribe `aventuras/bajo-la-tormenta.pdf` y en `estado` escribe `publicada`.
3. Guarda los cambios en GitHub (**Commit changes**). Netlify publica la nueva versión sola en un par de minutos.

Cada ficha se puede enlazar directamente: `https://tu-web.netlify.app/#id-de-la-aventura`.

### Idiomas

- En cada aventura, indica `idioma: "es"`, `"en"` o `"bi"` (bilingüe).
- Si tienes el resumen en los dos idiomas, escríbelo así: `resumen: { es: "…", en: "…" }`. Si solo hay uno, la ficha lo muestra con el aviso «Resumen disponible solo en inglés/español».
- El formulario recoge el campo `idioma-contacto`, que indica en qué idioma estaba navegando el autor: úsalo para contestarle en su idioma.
- Para enlazar la web en un idioma concreto, añade `?lang=es` o `?lang=en` a la dirección.
- Los textos de la interfaz están en `index.html`, cada uno con su pareja: `<span lang="es">…</span><span lang="en">…</span>`. Si cambias uno, cambia también el otro.

## 5. Retirar una aventura

Borra su bloque de `catalogo.js` y su PDF de `aventuras/`, y guarda los cambios en GitHub. Borra también el envío en **Forms** si el autor pide la supresión de sus datos.

## 6. Protección de datos: obligaciones al gestionar envíos

Estas pautas son las que promete la política de privacidad de la web. Cumplirlas es responsabilidad del titular.

- **Créditos.** Antes de publicar, mira en el envío la casilla `consentimiento-creditos`. Si no está marcada, en `catalogo.js` escribe `autor: "Autor anónimo"` y no pongas el nombre en ningún sitio de la web.
- **Envíos rechazados o pendientes.** Borra el envío en Netlify (Forms → envio-aventura → Delete submission) y el hilo de correo con el autor en Gmail **antes de tres meses** desde que le comuniques el resultado.
- **Envíos publicados.** Conserva el correo mientras la aventura esté publicada. Cuando la retires, borra también el envío y el correo.
- **Retirada del consentimiento.** Si un autor lo retira, quita su nombre de los créditos (pon «Autor anónimo») y, si lo pide, retira la aventura. Borra sus datos en Netlify y Gmail.
- **Menores.** Si por el contenido o el trato sospechas que el autor tiene menos de 14 años, pide por correo la autorización de sus padres o tutores antes de publicar.
- **Servicios externos.** La web no carga nada de terceros: las tipografías están en la carpeta `fonts`. No actives Netlify Analytics ni incrustes vídeos, mapas o contadores sin actualizar antes la política de cookies.
