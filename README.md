# Códice Errante · The Wandering Codex

Archivo comunitario en cuatro idiomas (español, inglés, alemán y francés) de aventuras gratuitas de rol para D&D 2024 ambientadas en Azeroth.
A community archive in Spanish, English, German and French, of free D&D 2024 adventures set in Azeroth.

Contenido de fans no oficial. / Unofficial fan content.

## Estructura

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La web completa: textos en los dos idiomas, buscador, formulario y avisos legales |
| `catalogo.js` | Lista de aventuras publicadas. Es el único archivo que hay que tocar para publicar una |
| `aventuras/` | Los PDF de las aventuras aprobadas |
| `gracias.html` | Página que ve el autor después de enviar su aventura |
| `netlify.toml` | Configuración de Netlify |
| `MANTENIMIENTO.md` | Cómo revisar envíos y publicar o retirar aventuras |

## Cómo se publica un cambio

Cada cambio guardado en la rama `main` se publica solo en Netlify en uno o dos minutos.

Para publicar una aventura desde el navegador, sin instalar nada:

1. En GitHub, entra en la carpeta `aventuras`, pulsa **Add file → Upload files** y sube el PDF.
2. Abre `catalogo.js`, pulsa el lápiz (**Edit**), añade el bloque de la aventura y pulsa **Commit changes**.
3. Espera un par de minutos y recarga la web.
