# Informe final — BLOQUE 19 · Truco Argentino (front-end)

Proyecto estático: `index.html` + `scripts/index.js` (JS clásico, sin bundler) + `styles/index.css`.
El juego es totalmente jugable de forma local (un jugador vs. la IA mediante `turnoRivalIA`).
No se implementó backend: el proyecto es 100% front-end y `db.json` es un esquema de datos de prueba que **no** se consume en runtime (`obtenerMazo()` utiliza `CARTAS_DATA` local).

---

## ✅ FUNCIONA (verificado — 86 checks automáticos en `tests/run-tests.js`)

- **Reparto del mazo**: 40 cartas de baraja española, repartidas 3 a cada mano, mazo y descarte por partida.
- **Jerarquía de cartas** (escala implementada):
  1) 1 de espadas → 2) 1 de bastos → 3) 7 de espadas → 4) 7 de oros → 5) tres → 6) dos → 7) 1 de oros/copas → 8) 12 (reyes) → 9) 11 (caballos) → 10) 10 (sotas) → 11) 7 de bastos/copas → 12) seis → 13) cinco → 14) cuatro.
- **Cálculo de Envido**: correcto para flor y envido simple (paño mayor + 20; paño menor + 18; sin naipes del mismo palo → 0 tantos comparables).
- **Turnos**: alternancia jugador ↔ rival, gana el que ganó la baza y comienza la siguiente ronda.
- **Pardas**: baza empatada no cuenta para nadie; 2 primeras pardas y se sigue con la 3ª baza; **3 pardas → gana el mano** de la mano.
- **Ronda / Mano**: 2 de 3 bazas definen la mano; la mano la marca `manoActual` y rota entre jugador y rival en cada mano nueva (regla del mano estándar).
- **Truco / Retruco / Vale cuatro**: cantos, subidas y respuestas correctas; puntos por rechazo = `trucoNivel - 1` (Truco 1, Retruco 2, Vale cuatro 3).
- **Envido / Real Envido / Falta Envido**: cantos legales (ventana correcta: sin bazas ganadas y sin truco en curso), respuestas "quiero"/"no quiero"/subida; **empate de envido → gana quien lo cantó**; "no quiero" al envido otorga 1 punto.
- **Falta Envido**: valor = `limite - max(puntosJugador, puntosRival)`; si alcanza el límite la partida termina.
- **Irse al mazo**: abandono de la mano (1 punto al rival), bloqueado mientras haya un canto pendiente de respuesta.
- **Fin de partida / reinicio**: al alcanzar el límite se anuncia el ganador, se guarda la partida como `finalizada` y se vuelve al menú; se puede iniciar una segunda partida sin recargar la página (`#numero-partida`).
- **Anti-spam / estabilidad**: guardas contra doble clic, jugadas fuera de turno, spam de cantos, timers vencidos tras reinicio (`estadoJuego.epoch` + registro `timersJuego`/`cancelarTimers()`) y `resolviendoBaza` para evitar reentrada del resolver.

## ❌ ERRORES (corregidos en esta entrega)

- **Cantos duplicados y fuera de turno**: se podía cantar/envido varias veces seguidas o jugar carta estando bloqueado. Resuelto con guardas centralizadas (`bloquearTodasLasAcciones`, `esperandoRespuesta`, `manoTerminada`, `resolviendoBaza`, `ventanaEnvido`).
- **Envido "atascado"**: `envidoBloqueado` se activaba al terminar la fase y nunca se liberaba, dejando el truco bloqueado el resto de la mano → ahora la fase se cierra y se reanuda el turno con `turnoPostEnvido()`/`continuarFlujoJuego()`.
- **Truco cantado por el rival con la mano sin definir**: el rival cantaba truco aunque no era su turno → `cantarTrucoRival()` cae a `jugarCartaRival()`.
- **Baza doble / carta jugada dos veces**: la IA llegaba a jugar la 1ª carta de una baza 2 con `quienEmpiezaRonda='rival'` sin que el jugador hubiera jugado la 1ª → se respeta siempre quién inicia cada baza.
- **Alerta de fin no acorde**: se agregó `verificarFinPartida()` que unifica el aviso y el reinicio.
- **Imagen de OG/Twitter**: apuntaba a un recurso inexistente; hoy → `assets/cards/individual/ace_of_swords.png`.
- **`db.json` inconsistente**: sotas con value 0/1; reescrito con las 40 cartas (ids 1-40) y `value:10` para las sotas (consistentes con `CARTAS_DATA`).
- **`overflow:hidden` en `body`**: roto el scroll en móvil → `overflow-x:hidden; overflow-y:auto`.
- **Botones de respuesta**: `.btn-respuesta` no estaban estilizados y los `:disabled` no se distinguían.

## ⚠️ FALTANTES / PENDIENTES (fuera de alcance o no implementado)

- **Multijugador en línea / login / registro / ranking**: no implementado (proyecto front-end estático; ver 🌐 PREPARACIÓN ONLINE).
- **Falta Envido "malas/buenas" (15)**: la variante *real envido enviado (15)* no está incluida; criterio a definir.
- **Jerarquía 6 > 5 > 4**: implementada según la pauta pedida, aunque la tradición del Truco Argentino establece 4 = 5 = 6. Documentado como decisión del proyecto.
- **Envido cuando hay mano en curso**: la ventana de canto se cierra tras la primera baza (regla estándar), pero no se muestra un aviso explícito de "ya no se puede" (solo se deshabilita el botón).
- **Sonido / animaciones de cantos**: inexistentes.

## 🌐 PREPARACIÓN ONLINE (arquitectura propuesta para evolucionar)

En el estado actual el juego es local y el "rival" es una IA (`turnoRivalIA`). Para hacerlo online:

1. **API REST** con `db.json` (ya existe el esqueleto `npm run api` con json-server):
   - `POST /partidas` → crea partida; `GET /partidas`; `PATCH /partidas/:id` → estado en curso/finalizada; recursos de cartas servidos estáticamente.
2. **Reemplazar el rival IA por un segundo jugador real**:
   - `turnoRivalIA()` (quién juega, cantos, decisiones aleatorias) deja de auto-ejecutarse; su lugar lo ocupa la llegada de eventos del rival.
   - La resolución de bazas, envido y truco ya es función pura del estado (`determinarGanador`, `resolverEnvido`, etc.) y se ejecuta **en el servidor** como fuente de verdad para evitar trampas.
3. **Realtime**: WebSockets (p. ej. `socket.io`) o SSE; el cliente solo envía la *acción* (`jugarCarta`, `cantarTruco`) y el servidor devuelve el estado siguiente; casos de uso típicos:
   - `carta jugada` → broadcast; `canto` → broadcast (más `timeout` de respuesta); `irse al mazo` → broadcast.
4. **Seguridad**: validar turno en el servidor (nunca confiar en el cliente), firma de canto (no revelar cartas del rival a través del mazo), CORS y HTTPS.
5. **Persistencia real**: json-server solo para mocks → pasar a una BD real (Postgres/MySQL) con las 40 cartas, partidas, usuarios y ranking.

## 📱 RESPONSIVE

- Media query (`max-width: 600px`): cartas más chicas (52×78), botones compactos, `cantar-area` y `accionar-area` con wrap.
- `body` permite scroll vertical; `.respuesta-area` limitada al ancho del contenedor.
- No blockea en desktop: `.mesa` con `max-width: 800px` y centrado.

## 🧹 MEJORAS (opcionales)

- Mostrar aviso al intentar cantar fuera de la ventana legal.
- Historial de la mano (log de cantos/bazas) para el jugador.
- Selector de límite de puntos (15/30/45) ya presente en el menú; persistirlo por partida.
- IA configurable por "personalidad" (ya existe el selector en el menú; conectarlo con `eleccionIA`).
- Sonidos y animaciones de cantos/bazas.
- Extraer la lógica de juego a un módulo ES (`game-core.js`) para poder compartirla entre cliente y servidor (evita duplicar reglas).

## 🚀 PRIORIDADES

| Prioridad | Item |
|---|---|
| P0 | Corregir bugs de turnos/cantos y estabilizar (✅ hecho: 86 tests OK) |
| P1 | Definir criterio de Falta Envido (malas/buenas · 15) |
| P1 | Definir jerarquía definitiva (6>5>4 vs 4=5=6) |
| P2 | Backend mínimo (API + sesión) para partidas 2 jugadores |
| P2 | Persistir partidas a BD y ranking |
| P3 | Login/registro + matchmaking + realtime completo |

---
*Estado final: `npm test` → 86 ok, 0 fallos · `node --check scripts/index.js` → OK.*