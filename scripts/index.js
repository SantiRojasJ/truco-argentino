const CARTAS_DATA = [
  { "id": 1, "value": 1, "suit": "ORO", "image": "assets/cards/individual/ace_of_coins.png" },
  { "id": 2, "value": 2, "suit": "ORO", "image": "assets/cards/individual/two_of_coins.png" },
  { "id": 3, "value": 3, "suit": "ORO", "image": "assets/cards/individual/three_of_coins.png" },
  { "id": 4, "value": 4, "suit": "ORO", "image": "assets/cards/individual/four_of_coins.png" },
  { "id": 5, "value": 5, "suit": "ORO", "image": "assets/cards/individual/five_of_coins.png" },
  { "id": 6, "value": 6, "suit": "ORO", "image": "assets/cards/individual/six_of_coins.png" },
  { "id": 7, "value": 7, "suit": "ORO", "image": "assets/cards/individual/seven_of_coins.png" },
  { "id": 8, "value": 10, "suit": "ORO", "image": "assets/cards/individual/ten_of_coins.png" },
  { "id": 9, "value": 11, "suit": "ORO", "image": "assets/cards/individual/knight_of_coins.png" },
  { "id": 10, "value": 12, "suit": "ORO", "image": "assets/cards/individual/king_of_coins.png" },
  { "id": 11, "value": 1, "suit": "COPA", "image": "assets/cards/individual/ace_of_cups.png" },
  { "id": 12, "value": 2, "suit": "COPA", "image": "assets/cards/individual/two_of_cups.png" },
  { "id": 13, "value": 3, "suit": "COPA", "image": "assets/cards/individual/three_of_cups.png" },
  { "id": 14, "value": 4, "suit": "COPA", "image": "assets/cards/individual/four_of_cups.png" },
  { "id": 15, "value": 5, "suit": "COPA", "image": "assets/cards/individual/five_of_cups.png" },
  { "id": 16, "value": 6, "suit": "COPA", "image": "assets/cards/individual/six_of_cups.png" },
  { "id": 17, "value": 7, "suit": "COPA", "image": "assets/cards/individual/seven_of_cups.png" },
  { "id": 18, "value": 10, "suit": "COPA", "image": "assets/cards/individual/ten_of_cups.png" },
  { "id": 19, "value": 11, "suit": "COPA", "image": "assets/cards/individual/knight_of_cups.png" },
  { "id": 20, "value": 12, "suit": "COPA", "image": "assets/cards/individual/king_of_cups.png" },
  { "id": 21, "value": 1, "suit": "ESPADA", "image": "assets/cards/individual/ace_of_swords.png" },
  { "id": 22, "value": 2, "suit": "ESPADA", "image": "assets/cards/individual/two_of_swords.png" },
  { "id": 23, "value": 3, "suit": "ESPADA", "image": "assets/cards/individual/three_of_swords.png" },
  { "id": 24, "value": 4, "suit": "ESPADA", "image": "assets/cards/individual/four_of_swords.png" },
  { "id": 25, "value": 5, "suit": "ESPADA", "image": "assets/cards/individual/five_of_swords.png" },
  { "id": 26, "value": 6, "suit": "ESPADA", "image": "assets/cards/individual/six_of_swords.png" },
  { "id": 27, "value": 7, "suit": "ESPADA", "image": "assets/cards/individual/seven_of_swords.png" },
  { "id": 28, "value": 10, "suit": "ESPADA", "image": "assets/cards/individual/ten_of_swords.png" },
  { "id": 29, "value": 11, "suit": "ESPADA", "image": "assets/cards/individual/knight_of_swords.png" },
  { "id": 30, "value": 12, "suit": "ESPADA", "image": "assets/cards/individual/king_of_swords.png" },
  { "id": 31, "value": 1, "suit": "BASTO", "image": "assets/cards/individual/ace_of_clubs.png" },
  { "id": 32, "value": 2, "suit": "BASTO", "image": "assets/cards/individual/two_of_clubs.png" },
  { "id": 33, "value": 3, "suit": "BASTO", "image": "assets/cards/individual/three_of_clubs.png" },
  { "id": 34, "value": 4, "suit": "BASTO", "image": "assets/cards/individual/four_of_clubs.png" },
  { "id": 35, "value": 5, "suit": "BASTO", "image": "assets/cards/individual/five_of_clubs.png" },
  { "id": 36, "value": 6, "suit": "BASTO", "image": "assets/cards/individual/six_of_clubs.png" },
  { "id": 37, "value": 7, "suit": "BASTO", "image": "assets/cards/individual/seven_of_clubs.png" },
  { "id": 38, "value": 10, "suit": "BASTO", "image": "assets/cards/individual/ten_of_clubs.png" },
  { "id": 39, "value": 11, "suit": "BASTO", "image": "assets/cards/individual/knight_of_clubs.png" },
  { "id": 40, "value": 12, "suit": "BASTO", "image": "assets/cards/individual/king_of_clubs.png" }
]

let mazo = []
let manoJugador = []
let manoRival = []
let cartaMesaJugador = null
let cartaMesaRival = null

let rondasGanadasJugador = 0
let rondasGanadasRival = 0
let puntosMano = 1
let primeraRondaGano = null

let puntosJugador = 0
let puntosRival = 0

let idPartidaActual = null

let puntosLimite = 30

let trucoNivel = 0
let quienCantoTruco = null

let envidoNivel = 0
let quienCantoEnvido = null
let envidoBloqueado = false

let victoriasRondas = []
let quienEmpiezaRonda = 'jugador'
let faseEnvidoActiva = false

// Quien es mano de la mano actual (rota tras cada mano)
let manoActual = 'jugador'

let estadoRonda = {
  vaGanando: false,
  rondaActual: 1,
  resultadoAnterior: null
}

let personalidad = 'equilibrado'

// ========== MÁQUINA DE ESTADOS CENTRAL ==========

const estadoJuego = {
  turno: 'jugador',
  esperandoRespuesta: false,
  cantoActivo: null,
  manoTerminada: false,
  resolviendoBaza: false,
  rondaActual: 1,
  epoch: 0
}

// ========== TIMERS CONTROLADOS ==========
// Todos los temporizadores del flujo de juego pasan por aca para poder
// cancelarlos al reiniciar, terminar una mano o cambiar de partida.

let timersJuego = []

function programar(fn, ms) {
  const id = setTimeout(() => {
    timersJuego = timersJuego.filter((t) => t !== id)
    fn()
  }, ms)
  timersJuego.push(id)
  return id
}

function cancelarTimers() {
  timersJuego.forEach((id) => clearTimeout(id))
  timersJuego = []
}

function bloquearIndicador() {
  let indicador = document.getElementById('indicador-turno')
  if (!indicador) {
    indicador = document.createElement('div')
    indicador.id = 'indicador-turno'
    indicador.className = 'indicador-turno'
    document.body.appendChild(indicador)
  }
  return indicador
}

function ocultarRespuesta() {
  const area = document.getElementById('respuesta-area')
  if (area) area.classList.add('hidden')
}

// Muesta el cartel de canto con el texto correcto segun quien canto.
// Si canta el jugador se ocultan QUIERO / NO QUIERO (no hay nada que responder).
function mostrarCanto(tipo, cantor) {
  const area = document.getElementById('respuesta-area')
  const quien = document.getElementById('texto-quien')
  const canto = document.getElementById('texto-canto')
  const espera = document.getElementById('texto-espera')
  const btnQuiero = document.getElementById('btn-quiero')
  const btnNoQuiero = document.getElementById('btn-no-quiero')

  const esRival = cantor === 'rival'
  if (quien) quien.textContent = esRival ? 'El rival cantó' : 'Cantaste'
  if (canto) canto.textContent = tipo
  if (espera) {
    espera.textContent = esRival ? ' — esperá tu respuesta' : ' — esperando al rival'
    espera.classList.remove('hidden')
  }
  if (btnQuiero) btnQuiero.style.display = esRival ? '' : 'none'
  if (btnNoQuiero) btnNoQuiero.style.display = esRival ? '' : 'none'
  if (area) area.classList.remove('hidden')
  ocultarBanner()
}

function mostrarBanner(texto) {
  const banner = document.getElementById('banner-baza')
  if (!banner) return
  banner.textContent = texto
  banner.classList.remove('hidden')
}

function ocultarBanner() {
  const banner = document.getElementById('banner-baza')
  if (banner) banner.classList.add('hidden')
}

function mensajeBaza(ganadorRonda) {
  if (ganadorRonda === 'jugador') return '¡Ganaste la ronda!'
  if (ganadorRonda === 'rival') return 'El rival ganó la ronda'
  return '¡Parda! (Empate)'
}

function setNumeroPartida(id) {
  const el = document.getElementById('numero-partida')
  if (el) el.textContent = id
}

// Devuelve a quien le toca jugar segun el estado de la mesa
function turnoPostEnvido() {
  if (cartaMesaJugador && !cartaMesaRival) return 'rival'
  if (cartaMesaRival && !cartaMesaJugador) return 'jugador'
  return quienEmpiezaRonda
}

function habilitarCartasJugador() {
  const cartas = document.querySelectorAll('.area-jugador .carta')
  cartas.forEach(c => c.style.pointerEvents = 'auto')
  const indicador = document.getElementById('indicador-turno')
  if (indicador) indicador.style.display = 'none'
  document.querySelectorAll('.cantar-area button').forEach(b => b.disabled = false)
  actualizarBotonesTruco()
  actualizarBotonesEnvido()
}

function bloquearTodasLasAcciones(mostrarIndicador = true) {
  const cartas = document.querySelectorAll('.area-jugador .carta')
  cartas.forEach(c => c.style.pointerEvents = 'none')
  document.querySelectorAll('.cantar-area button').forEach(b => b.disabled = true)
  if (mostrarIndicador) {
    const indicador = bloquearIndicador()
    indicador.textContent = 'Turno del rival...'
    indicador.style.display = 'block'
  } else {
    const indicador = document.getElementById('indicador-turno')
    if (indicador) indicador.style.display = 'none'
  }
}

function continuarFlujoJuego() {
  if (estadoJuego.manoTerminada) return
  if (estadoJuego.esperandoRespuesta) return

  if (estadoJuego.turno === 'rival') {
    bloquearTodasLasAcciones()
    turnoRivalIA()
  }

  if (estadoJuego.turno === 'jugador') {
    habilitarCartasJugador()
  }
}

async function turnoRivalIA() {
  if (estadoJuego.manoTerminada) return
  if (estadoJuego.esperandoRespuesta) return
  if (estadoJuego.turno !== 'rival') return

  const ep = estadoJuego.epoch
  await esperar(1200)

  if (ep !== estadoJuego.epoch) return
  if (estadoJuego.manoTerminada) return
  if (estadoJuego.esperandoRespuesta) return
  if (estadoJuego.turno !== 'rival') return
  if (estadoJuego.resolviendoBaza) return

  if (cartaMesaRival) return

  const tieneAlta = manoRival.some(c => obtenerValor(c) >= 10)
  const tieneBuena = manoRival.some(c => obtenerValor(c) >= 8)

  // El rival puede iniciar el canto de truco en cualquier baza
  if (trucoNivel === 0) {
    let probTruco = 0
    if (tieneAlta) {
      probTruco = personalidad === 'agresivo' ? 0.8 : personalidad === 'conservador' ? 0.3 : 0.5
    } else if (tieneBuena) {
      probTruco = personalidad === 'agresivo' ? 0.5 : personalidad === 'conservador' ? 0.1 : 0.25
    } else if (personalidad === 'agresivo') {
      probTruco = 0.2
    }

    if (rondasGanadasJugador > rondasGanadasRival) probTruco += 0.15
    if (victoriasRondas.length >= 2 && tieneBuena) probTruco += 0.1
    probTruco += presionPuntos()
    probTruco = Math.max(0, Math.min(0.95, probTruco))

    const randTruco = Math.random()
    if (randTruco < probTruco && !cartaMesaJugador) {
      cantarTrucoRival()
      return
    }
  }

  // Si el rival no tiene carta para ganar la baza puede irse al mazo
  if (cartaMesaJugador) {
    if (Math.random() < probabilidadMazoRival()) {
      rivalSeFueAlMazo()
      return
    }
  } else {
    let probIrse = 0.05
    if (personalidad === 'conservador') probIrse = 0.1
    else if (personalidad === 'agresivo') probIrse = 0.02
    if (Math.random() < probIrse) {
      rivalSeFueAlMazo()
      return
    }
  }

  jugarCartaRival()
}

// El rival se va al mazo solo si perdio la primera baza, el jugador ya
// jugo y el rival no tiene carta para ganar esa baza.
function probabilidadMazoRival() {
  if (!cartaMesaJugador || cartaMesaRival) return 0
  if (rondasGanadasJugador !== 1 || rondasGanadasRival !== 0) return 0
  const valorJugador = obtenerValor(cartaMesaJugador)
  const tieneGanadora = manoRival.some(c => obtenerValor(c) > valorJugador)
  if (tieneGanadora) return 0
  return 0.85
}

// Que tan apurado esta el rival segun el marcador (0 si nadie esta cerca)
function presionPuntos() {
  const faltaRival = puntosLimite - puntosRival
  const faltaJugador = puntosLimite - puntosJugador
  if (faltaRival <= 3) return 0.2
  if (faltaJugador <= 3) return 0.15
  return 0
}

function rivalSeFueAlMazo() {
  if (estadoJuego.manoTerminada) return
  estadoJuego.manoTerminada = true
  estadoJuego.resolviendoBaza = false
  faseEnvidoActiva = false
  ocultarRespuesta()
  bloquearTodasLasAcciones(false)
  puntosJugador += puntosMano
  actualizarPuntuacion()
  actualizarPartida(idPartidaActual, puntosJugador, puntosRival, 'en curso')
  mostrarBanner('¡El rival se fue al mazo! Ganaste la mano.')
  siguienteManoOPartida()
}

function elegirCartaRival() {
  const cartas = [...manoRival]
  if (cartas.length === 0) return null

  const ordenadas = cartas.sort((a, b) => obtenerValor(b) - obtenerValor(a))
  const mejor = ordenadas[0]
  const peor = ordenadas[ordenadas.length - 1]

  const necesitaGanar = rondasGanadasRival < rondasGanadasJugador
  const esUltimaRonda = estadoRonda.rondaActual >= 2 || manoJugador.length <= 1

  if (cartaMesaJugador) {
    const valorJugador = obtenerValor(cartaMesaJugador)
    const ganadoras = ordenadas.filter(c => obtenerValor(c) > valorJugador)

    // Con carta del jugador en la mesa: gana con la mas chica que le alcance
    if (ganadoras.length > 0) {
      return ganadoras[ganadoras.length - 1]
    }

    if (necesitaGanar || esUltimaRonda) {
      return mejor
    }
    return peor
  }

  if (necesitaGanar || esUltimaRonda) {
    return mejor
  }
  return peor
}

function jugarCartaRival() {
  if (cartaMesaRival) return
  if (manoRival.length === 0) return
  if (estadoJuego.manoTerminada || estadoJuego.resolviendoBaza) return
  if (estadoJuego.esperandoRespuesta) return

  const cartaElegida = elegirCartaRival()
  if (!cartaElegida) return

  const index = manoRival.findIndex(c => c.id === cartaElegida.id)
  if (index === -1) return

  cartaMesaRival = manoRival[index]
  manoRival.splice(index, 1)

  ocultarBanner()
  mostrarCartas()
  guardarEstadoJuego()

  if (cartaMesaJugador) {
    estadoJuego.turno = 'jugador'
    determinarGanador()
  } else {
    estadoJuego.turno = 'jugador'
    habilitarCartasJugador()
  }
}

// ========== FUNCIONES EXISTENTES (adaptadas) ==========

function probabilidad(p) {
  return Math.random() < p
}

function getPuntosEnvido() {
  if (envidoNivel === 4) {
    // Falta Envido: los puntos que le faltan al jugador que va ganando
    // para alcanzar el objetivo de la partida.
    const lider = Math.max(puntosJugador, puntosRival)
    return Math.max(1, puntosLimite - lider)
  }
  return envidoNivel
}

function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// Jerarquia del Truco Argentino (de mayor a menor):
// 1esp > 1basto > 7esp > 7oro > 3 > 2 > 1oro=1copa > 12 > 11 > 10 > 7basto=7copa > 6 > 5 > 4
const valoresCartas = {
  'ESPADA': { 1: 14, 2: 9, 3: 10, 4: 1, 5: 2, 6: 3, 7: 12, 10: 5, 11: 6, 12: 7 },
  'BASTO': { 1: 13, 2: 9, 3: 10, 4: 1, 5: 2, 6: 3, 7: 4, 10: 5, 11: 6, 12: 7 },
  'ORO': { 1: 8, 2: 9, 3: 10, 4: 1, 5: 2, 6: 3, 7: 11, 10: 5, 11: 6, 12: 7 },
  'COPA': { 1: 8, 2: 9, 3: 10, 4: 1, 5: 2, 6: 3, 7: 4, 10: 5, 11: 6, 12: 7 }
}

function obtenerValor(carta) {
  const palo = valoresCartas[carta.suit]
  const valor = palo ? palo[carta.value] : undefined
  return typeof valor === 'number' ? valor : -1
}

function calcularEnvido(cartas) {
  const porPalo = {}
  cartas.forEach(c => {
    if (!porPalo[c.suit]) porPalo[c.suit] = []
    porPalo[c.suit].push(c)
  })

  let maxEnvido = 0

  for (const palo in porPalo) {
    const grupo = porPalo[palo]
    const esFigura = c => c.value === 10 || c.value === 11 || c.value === 12

    if (grupo.length === 3) {
      const numericas = grupo
        .filter(c => c.value >= 1 && c.value <= 7)
        .sort((a, b) => b.value - a.value)

      let sumaNumericas = 0
      if (numericas.length >= 2) {
        sumaNumericas = numericas[0].value + numericas[1].value
      } else if (numericas.length === 1) {
        sumaNumericas = numericas[0].value
      }

      maxEnvido = Math.max(maxEnvido, 20 + sumaNumericas)
    } else if (grupo.length === 2) {
      const ambasFiguras = grupo.every(esFigura)

      if (ambasFiguras) {
        maxEnvido = Math.max(maxEnvido, 20)
      } else {
        const numericas = grupo.filter(c => !esFigura(c))
        const figuras = grupo.filter(c => esFigura(c))

        if (numericas.length === 1 && figuras.length === 1) {
          maxEnvido = Math.max(maxEnvido, 20 + numericas[0].value)
        } else if (numericas.length === 2) {
          maxEnvido = Math.max(maxEnvido, 20 + numericas[0].value + numericas[1].value)
        }
      }
    } else {
      const c = grupo[0]
      const valor = c.value >= 1 && c.value <= 7 ? c.value : 0
      maxEnvido = Math.max(maxEnvido, valor)
    }
  }

  return Math.min(maxEnvido, 33)
}

function obtenerMazo() {
  return Promise.resolve([...CARTAS_DATA])
}

function mezclarMazo(cartas) {
  for (let i = cartas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[cartas[i], cartas[j]] = [cartas[j], cartas[i]]
  }
  return cartas
}

function cargarPartidas() {
  try {
    const guardadas = localStorage.getItem('partidas')
    const partidas = guardadas ? JSON.parse(guardadas) : []
    return Array.isArray(partidas) ? partidas : []
  } catch (e) {
    return []
  }
}

function guardarPartidas(partidas) {
  localStorage.setItem('partidas', JSON.stringify(partidas))
}

function crearPartida() {
  const partidas = cargarPartidas()

  partidas.forEach(p => {
    if (p.estado === 'en curso') {
      p.estado = 'abandonada'
    }
  })

  const nuevaId = Math.max(...partidas.map(p => p.id), 0) + 1

  const nuevaPartida = {
    id: nuevaId,
    jugador: 0,
    rival: 0,
    estado: 'en curso',
    fecha: new Date().toLocaleString(),
    limite: puntosLimite,
    personalidad
  }

  partidas.push(nuevaPartida)
  guardarPartidas(partidas)

  return nuevaPartida
}

function actualizarPartida(id, puntosJ, puntosR, estado) {
  const partidas = cargarPartidas()
  const index = partidas.findIndex(p => p.id === id)

  if (index !== -1) {
    partidas[index].jugador = puntosJ
    partidas[index].rival = puntosR
    partidas[index].estado = estado
    guardarPartidas(partidas)
  }
}

function guardarEstadoJuego() {
  const estado = {
    idPartidaActual,
    puntosJugador,
    puntosRival,
    puntosLimite,
    personalidad,
    rondasGanadasJugador,
    rondasGanadasRival,
    puntosMano,
    primeraRondaGano,
    mazo,
    manoJugador,
    manoRival,
    cartaMesaJugador,
    cartaMesaRival,
    manoActual,
    trucoNivel,
    quienCantoTruco,
    envidoNivel,
    quienCantoEnvido,
    envidoBloqueado,
    faseEnvidoActiva,
    victoriasRondas,
    quienEmpiezaRonda,
    estadoRonda,
    turno: estadoJuego.turno,
    esperandoRespuesta: estadoJuego.esperandoRespuesta,
    cantoActivo: estadoJuego.cantoActivo,
    manoTerminada: estadoJuego.manoTerminada,
    resolviendoBaza: estadoJuego.resolviendoBaza
  }
  sessionStorage.setItem('partidaActual', JSON.stringify(estado))
}

function recuperarEstadoJuego() {
  const estado = sessionStorage.getItem('partidaActual')
  return estado ? JSON.parse(estado) : null
}

function mostrarListadoPartidas() {
  const partidas = cargarPartidas()

  const curso = document.getElementById('partidas-curso')
  const finalizadas = document.getElementById('partidas-finalizadas')

  const enCurso = partidas.filter(p => p.estado === 'en curso')
  const terminadas = partidas.filter(p => p.estado === 'finalizada')

  if (enCurso.length === 0) {
    curso.innerHTML = '<p class="sin-partidas">No hay partidas en curso</p>'
  } else {
    curso.innerHTML = enCurso.map(p => `
      <div class="partida-item en-curso" onclick="continuarPartida(${p.id})">
        <div class="partida-info">
          <span class="partida-id">Partida #${p.id}</span>
          <span class="partida-score">Vos ${p.jugador} - ${p.rival} Rival</span>
        </div>
        <span class="partida-estado en-curso">En Curso</span>
      </div>
    `).join('')
  }

  if (terminadas.length === 0) {
    finalizadas.innerHTML = '<p class="sin-partidas">No hay partidas finalizadas</p>'
  } else {
    finalizadas.innerHTML = terminadas.map(p => `
      <div class="partida-item finalizada">
        <div class="partida-info">
          <span class="partida-id">Partida #${p.id}</span>
          <span class="partida-score">Vos ${p.jugador} - ${p.rival} Rival</span>
        </div>
        <span class="partida-estado finalizada">${p.jugador > p.rival ? 'Ganaste' : 'Perdiste'}</span>
      </div>
    `).join('')
  }
}

function continuarPartida(id) {
  idPartidaActual = id
  const partidas = cargarPartidas()
  const partida = partidas.find(p => p.id === id)

  if (partida) {
    puntosJugador = partida.jugador
    puntosRival = partida.rival
    if (typeof partida.limite === 'number') puntosLimite = partida.limite
    if (partida.personalidad) personalidad = partida.personalidad

    setNumeroPartida(id)

    document.getElementById('lista-partidas').classList.add('hidden')
    document.querySelector('.presentacion').classList.add('hidden')
    document.getElementById('game').classList.remove('hidden')

    iniciarPartida()
  }
}

function iniciarPartida() {
  cancelarTimers()
  estadoJuego.epoch++
  manoActual = 'jugador'

  obtenerMazo().then(cartas => {
    mazo = mezclarMazo([...cartas])

    manoJugador = mazo.splice(0, 3)
    manoRival = mazo.splice(0, 3)

    cartaMesaJugador = null
    cartaMesaRival = null

    rondasGanadasJugador = 0
    rondasGanadasRival = 0
    puntosMano = 1
    primeraRondaGano = null
    victoriasRondas = []
    quienEmpiezaRonda = manoActual
    envidoBloqueado = false
    envidoNivel = 0
    quienCantoEnvido = null
    trucoNivel = 0
    quienCantoTruco = null
    estadoRonda = { vaGanando: false, rondaActual: 1, resultadoAnterior: null }
    faseEnvidoActiva = false
    estadoJuego.turno = quienEmpiezaRonda
    estadoJuego.esperandoRespuesta = false
    estadoJuego.cantoActivo = null
    estadoJuego.manoTerminada = false
    estadoJuego.resolviendoBaza = false
    estadoJuego.rondaActual = 1

    ocultarRespuesta()
    ocultarBanner()
    mostrarCartas()
    actualizarPuntuacion()
    actualizarBotonesEnvido()
    actualizarBotonesTruco()
    guardarEstadoJuego()
    iniciarFaseEnvido()
  })
}

function mostrarCartas() {
  const areaJugador = document.querySelector('.area-jugador')
  const areaRival = document.querySelector('.area-rival')
  const areaMesa = document.querySelector('.area-mesa')

  areaJugador.innerHTML = '<span class="label-jugador">Vos</span>' + manoJugador.map((carta, i) => `
    <div class="carta" role="button" tabindex="0" aria-label="Jugar ${carta.value} de ${carta.suit}" onclick="jugarCarta(${i})" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();jugarCarta(${i})}">
      <img src="${carta.image}" alt="${carta.value} de ${carta.suit}">
      <span class="carta-valor">${carta.value}</span>
    </div>
  `).join('')

  areaRival.innerHTML = '<span class="label-jugador">Rival</span>' + manoRival.map(() => `
    <div class="carta-back">
      <img src="assets/cards/individual/card_back.png" alt="Carta oculta">
    </div>
  `).join('')

  let htmlMesa = '<span class="label-mesa">Mesa</span>'

  if (cartaMesaRival) {
    htmlMesa += `
      <div class="carta">
        <img src="${cartaMesaRival.image}" alt="${cartaMesaRival.value}">
        <span class="carta-valor">${cartaMesaRival.value}</span>
      </div>
    `
  }

  if (cartaMesaJugador) {
    htmlMesa += `
      <div class="carta">
        <img src="${cartaMesaJugador.image}" alt="${cartaMesaJugador.value}">
        <span class="carta-valor">${cartaMesaJugador.value}</span>
      </div>
    `
  }

  areaMesa.innerHTML = htmlMesa
}

function actualizarPuntuacion() {
  const header = document.querySelector('.game-header')
  header.innerHTML = `
    <h2>Partida #<span id="numero-partida">${idPartidaActual}</span></h2>
    <p>Vos: ${puntosJugador} | Rival: ${puntosRival}</p>
    <p>Rondas: Vos ${rondasGanadasJugador} - ${rondasGanadasRival} Rival</p>
    <p>Mano: ${manoActual === 'jugador' ? 'Vos' : 'Rival'}</p>
  `
}

function puedeCantarEnvido() {
  return motivoNoCantarEnvido() === null
}

// La ventana de envido se cierra cuando alguien gana una baza
// (una parda no cierra la ventana) o cuando ya se canto truco.
function ventanaEnvidoCerrada() {
  return victoriasRondas.some(r => r === 'jugador' || r === 'rival') || trucoNivel > 0
}

// Devuelve el motivo por el que no se puede cantar envido, o null si se puede.
function motivoNoCantarEnvido() {
  if (estadoJuego.manoTerminada) return 'La mano terminó'
  if (estadoJuego.resolviendoBaza) return 'Se está definiendo la baza'
  if (estadoJuego.esperandoRespuesta) return 'Hay un canto pendiente de respuesta'
  if (estadoJuego.turno !== 'jugador') return 'No te toca'
  if (envidoNivel > 0) return 'Ya hay un canto de envido en juego'
  if (envidoBloqueado) return 'El envido de esta mano ya se jugó'
  if (trucoNivel > 0) return 'Ya se cantó truco'
  if (ventanaEnvidoCerrada()) return 'Ya se definió una baza de esta mano'
  return null
}

function actualizarBotonMazo() {
  const btn = document.getElementById('btn-ir-al-mazo')
  if (!btn) return
  const bloqueado = estadoJuego.manoTerminada || estadoJuego.resolviendoBaza ||
    estadoJuego.esperandoRespuesta
  btn.disabled = bloqueado
  if (bloqueado) {
    btn.title = estadoJuego.esperandoRespuesta
      ? 'Esperá la respuesta al canto'
      : 'No podés irte al mazo ahora'
  } else {
    btn.removeAttribute('title')
  }
}

function actualizarBotonesEnvido() {
  const habilitar = puedeCantarEnvido()
  const motivo = motivoNoCantarEnvido()
  const botonesEnvido = ['btn-envido', 'btn-real-envido', 'btn-falta-envido']
  botonesEnvido.forEach(id => {
    const btn = document.getElementById(id)
    if (btn) {
      btn.disabled = !habilitar
      if (motivo) btn.title = motivo
      else btn.removeAttribute('title')
    }
  })
  actualizarBotonMazo()
}

function actualizarBotonesTruco() {
  const btnTruco = document.getElementById('btn-truco')
  const btnRetruco = document.getElementById('btn-retruco')
  const btnValeCuatro = document.getElementById('btn-valecuatro')

  const bloqueadoBase = estadoJuego.manoTerminada || estadoJuego.resolviendoBaza ||
    estadoJuego.esperandoRespuesta || envidoNivel > 0

  if (btnTruco) btnTruco.disabled = bloqueadoBase || trucoNivel > 0

  if (btnRetruco) {
    btnRetruco.disabled = bloqueadoBase || trucoNivel !== 2 || quienCantoTruco === 'jugador'
  }

  if (btnValeCuatro) {
    btnValeCuatro.disabled = bloqueadoBase || trucoNivel !== 3 || quienCantoTruco === 'jugador'
  }

  actualizarBotonMazo()
}

function actualizarRespuestaArea() {
  const respuestaArea = document.getElementById('respuesta-area')
  const textoCanto = document.getElementById('texto-canto')

  if (!respuestaArea || !textoCanto) return

  const mostrarRetruco = trucoNivel === 2 && quienCantoTruco === 'rival'
  const mostrarValeCuatro = trucoNivel === 3 && quienCantoTruco === 'rival'

  const mostrarRealEnvido = envidoNivel > 0 && envidoNivel === 2 && quienCantoEnvido === 'rival'
  const mostrarFaltaEnvido = envidoNivel > 0 && envidoNivel === 3 && quienCantoEnvido === 'rival'

  let btnRetrucoResp = document.getElementById('btn-retruco-respuesta')
  let btnValeCuatroResp = document.getElementById('btn-valecuatro-respuesta')
  let btnRealEnvidoResp = document.getElementById('btn-real-envido-respuesta')
  let btnFaltaEnvidoResp = document.getElementById('btn-falta-envido-respuesta')

  if (!btnRetrucoResp) {
    btnRetrucoResp = document.createElement('button')
    btnRetrucoResp.id = 'btn-retruco-respuesta'
    btnRetrucoResp.textContent = 'Retruco'
    btnRetrucoResp.className = 'btn-respuesta'
    btnRetrucoResp.onclick = () => responderConRetruco()
    respuestaArea.insertBefore(btnRetrucoResp, document.getElementById('btn-no-quiero'))
  }

  if (!btnValeCuatroResp) {
    btnValeCuatroResp = document.createElement('button')
    btnValeCuatroResp.id = 'btn-valecuatro-respuesta'
    btnValeCuatroResp.textContent = 'Vale Cuatro'
    btnValeCuatroResp.className = 'btn-respuesta'
    btnValeCuatroResp.onclick = () => responderConValeCuatro()
    respuestaArea.insertBefore(btnValeCuatroResp, document.getElementById('btn-no-quiero'))
  }

  if (!btnRealEnvidoResp) {
    btnRealEnvidoResp = document.createElement('button')
    btnRealEnvidoResp.id = 'btn-real-envido-respuesta'
    btnRealEnvidoResp.textContent = 'Real Envido'
    btnRealEnvidoResp.className = 'btn-respuesta'
    btnRealEnvidoResp.onclick = () => responderConRealEnvido()
    respuestaArea.insertBefore(btnRealEnvidoResp, document.getElementById('btn-no-quiero'))
  }

  if (!btnFaltaEnvidoResp) {
    btnFaltaEnvidoResp = document.createElement('button')
    btnFaltaEnvidoResp.id = 'btn-falta-envido-respuesta'
    btnFaltaEnvidoResp.textContent = 'Falta Envido'
    btnFaltaEnvidoResp.className = 'btn-respuesta'
    btnFaltaEnvidoResp.onclick = () => responderConFaltaEnvido()
    respuestaArea.insertBefore(btnFaltaEnvidoResp, document.getElementById('btn-no-quiero'))
  }

  btnRetrucoResp.style.display = mostrarRetruco ? 'inline-block' : 'none'
  btnValeCuatroResp.style.display = mostrarValeCuatro ? 'inline-block' : 'none'
  btnRealEnvidoResp.style.display = mostrarRealEnvido ? 'inline-block' : 'none'
  btnFaltaEnvidoResp.style.display = mostrarFaltaEnvido ? 'inline-block' : 'none'
}

function responderConRetruco() {
  if (estadoJuego.manoTerminada || estadoJuego.resolviendoBaza) return
  trucoNivel = 3
  puntosMano = 3
  quienCantoTruco = 'jugador'
  mostrarCanto('Retruco', 'jugador')
  actualizarBotonesTruco()
  actualizarRespuestaArea()

  programar(() => {
    responderTruco()
  }, 1500)
}

function responderConValeCuatro() {
  if (estadoJuego.manoTerminada || estadoJuego.resolviendoBaza) return
  trucoNivel = 4
  puntosMano = 4
  quienCantoTruco = 'jugador'
  mostrarCanto('Vale Cuatro', 'jugador')
  actualizarBotonesTruco()
  actualizarRespuestaArea()

  programar(() => {
    responderTruco()
  }, 1500)
}

function responderConRealEnvido() {
  if (envidoNivel >= 3) return
  if (estadoJuego.manoTerminada) return
  envidoNivel = 3
  quienCantoEnvido = 'jugador'
  mostrarCanto('Real Envido', 'jugador')
  actualizarBotonesTruco()
  actualizarRespuestaArea()

  programar(() => {
    responderEnvido()
  }, 1500)
}

function responderConFaltaEnvido() {
  if (envidoNivel >= 4) return
  if (estadoJuego.manoTerminada) return
  envidoNivel = 4
  quienCantoEnvido = 'jugador'
  mostrarCanto('Falta Envido', 'jugador')
  actualizarBotonesTruco()
  actualizarRespuestaArea()

  programar(() => {
    responderEnvido()
  }, 1500)
}

function iniciarFaseEnvido() {
  console.log('[FASE ENVIDO] Iniciando fase de envido')
  faseEnvidoActiva = true
  envidoNivel = 0
  quienCantoEnvido = null
  estadoJuego.turno = 'jugador'
  estadoJuego.esperandoRespuesta = false
  actualizarBotonesEnvido()
  actualizarBotonesTruco()

  programar(() => {
    if (!faseEnvidoActiva) return
    if (envidoNivel > 0 || envidoBloqueado) return
    if (estadoJuego.manoTerminada || estadoJuego.esperandoRespuesta) return

    const puntosEnv = calcularEnvido(manoRival)
    let probCantarEnvido = 0

    if (puntosEnv >= 28) {
      probCantarEnvido = personalidad === 'agresivo' ? 0.9 : personalidad === 'conservador' ? 0.6 : 0.8
    } else if (puntosEnv >= 25) {
      probCantarEnvido = personalidad === 'agresivo' ? 0.7 : personalidad === 'conservador' ? 0.3 : 0.5
    } else if (puntosEnv >= 23) {
      probCantarEnvido = personalidad === 'agresivo' ? 0.4 : personalidad === 'conservador' ? 0.1 : 0.2
    } else if (personalidad === 'agresivo' && probabilidad(0.15)) {
      probCantarEnvido = 0.2
    }

    if (probabilidad(probCantarEnvido)) {
      console.log('[FASE ENVIDO] Rival canta envido')
      cantarEnvidoRival()
    } else {
      console.log('[FASE ENVIDO] Rival no canta, termina fase')
      terminarFaseEnvido()
    }
  }, 1500)
}

function terminarFaseEnvido() {
  console.log('[FASE ENVIDO] Terminando fase')
  faseEnvidoActiva = false

  if (estadoJuego.manoTerminada) {
    actualizarBotonesEnvido()
    return
  }

  estadoJuego.turno = turnoPostEnvido()
  actualizarBotonesEnvido()
  actualizarBotonesTruco()
  continuarFlujoJuego()
}

function jugarCarta(index) {
  if (cartaMesaJugador) return
  if (estadoJuego.turno !== 'jugador') return
  if (estadoJuego.esperandoRespuesta) return
  if (estadoJuego.manoTerminada) return
  if (estadoJuego.resolviendoBaza) return

  if (quienEmpiezaRonda === 'rival' && !cartaMesaRival) {
    return
  }

  // Jugar una carta cierra la fase de envido (el timer pendiente se auto-cancela)
  if (faseEnvidoActiva) {
    faseEnvidoActiva = false
  }

  ocultarBanner()
  cartaMesaJugador = manoJugador[index]
  manoJugador.splice(index, 1)

  mostrarCartas()
  guardarEstadoJuego()
  actualizarBotonesEnvido()
  actualizarBotonesTruco()

  if (cartaMesaRival) {
    estadoJuego.turno = 'jugador'
    determinarGanador()
  } else {
    estadoJuego.turno = 'rival'
    continuarFlujoJuego()
  }
}

function cantarTrucoRival() {
  // Solo puede iniciar el canto cuando todavia no hay truco en juego;
  // las respuestas a los cantos del jugador las resuelve responderTruco()
  if (trucoNivel !== 0) {
    jugarCartaRival()
    return
  }

  puntosMano = 2
  trucoNivel = 2
  quienCantoTruco = 'rival'
  estadoJuego.cantoActivo = 'Truco'
  estadoJuego.esperandoRespuesta = true

  mostrarCanto('Truco', 'rival')
  actualizarBotonesTruco()
  actualizarBotonesEnvido()
  actualizarRespuestaArea()
}

function cantarEnvidoRival() {
  if (envidoNivel > 0 || envidoBloqueado) {
    return
  }

  const puntosEnv = calcularEnvido(manoRival)
  let tipo = 'Envido'
  let nivel = 2

  if (puntosEnv >= 30 && personalidad !== 'conservador') {
    tipo = 'Falta Envido'
    nivel = 4
  } else if (puntosEnv >= 28) {
    if (personalidad === 'agresivo' || probabilidad(0.5)) {
      tipo = 'Real Envido'
      nivel = 3
    }
  } else if (puntosEnv >= 25 && personalidad === 'agresivo' && probabilidad(0.3)) {
    tipo = 'Real Envido'
    nivel = 3
  }

  envidoNivel = nivel
  quienCantoEnvido = 'rival'
  estadoJuego.cantoActivo = tipo
  estadoJuego.esperandoRespuesta = true

  mostrarCanto(tipo, 'rival')
  actualizarBotonesEnvido()
  actualizarBotonesTruco()
  actualizarRespuestaArea()
}

// Devuelve true si la partida termino (y reinicia el juego)
function verificarFinPartida() {
  if (puntosJugador < puntosLimite && puntosRival < puntosLimite) return false

  actualizarPartida(idPartidaActual, puntosJugador, puntosRival, 'finalizada')
  if (puntosJugador >= puntosLimite) {
    alert(`¡Ganaste la partida! Score: Vos ${puntosJugador} - ${puntosRival} Rival`)
  } else {
    alert(`El rival ganó la partida. Score: Vos ${puntosJugador} - ${puntosRival} Rival`)
  }
  reiniciarJuego()
  return true
}

function siguienteManoOPartida() {
  if (!verificarFinPartida()) {
    programar(() => iniciarNuevaMano(), 2000)
  }
}

function determinarGanador() {
  if (estadoJuego.manoTerminada) return
  if (estadoJuego.resolviendoBaza) return
  estadoJuego.resolviendoBaza = true
  // Nadie puede jugar mientras se resuelve la baza
  document.querySelectorAll('.area-jugador .carta').forEach(c => c.style.pointerEvents = 'none')
  actualizarBotonesEnvido()
  actualizarBotonesTruco()

  const valorJugador = obtenerValor(cartaMesaJugador)
  const valorRival = obtenerValor(cartaMesaRival)

  let ganadorRonda = null

  if (valorJugador > valorRival) {
    rondasGanadasJugador++
    ganadorRonda = 'jugador'
    if (primeraRondaGano === null) primeraRondaGano = 'jugador'
  } else if (valorRival > valorJugador) {
    rondasGanadasRival++
    ganadorRonda = 'rival'
    if (primeraRondaGano === null) primeraRondaGano = 'rival'
  } else {
    ganadorRonda = 'empate'
  }

  victoriasRondas.push(ganadorRonda)
  estadoRonda.resultadoAnterior = ganadorRonda

  mostrarBanner(mensajeBaza(ganadorRonda))
  actualizarPuntuacion()
  guardarEstadoJuego()

  programar(procesarFinBaza, 1500)
}

// Resolucion de la baza una vez pasada la espera. Tambien se invoca
// directamente al restaurar una partida guardada a mitad de la baza.
function procesarFinBaza() {
  if (estadoJuego.manoTerminada) return
  if (!estadoJuego.resolviendoBaza) return

  const ganadorRonda = victoriasRondas[victoriasRondas.length - 1]

  if (victoriasRondas.length >= 2) {
    const r1 = victoriasRondas[0]
    const r2 = victoriasRondas[1]

    if (r1 !== 'empate' && r1 === r2) {
      finalizarMano()
      return
    }

    if (r1 === 'empate' && r2 !== 'empate') {
      finalizarMano()
      return
    }
  }

  if (rondasGanadasJugador >= 2 || rondasGanadasRival >= 2) {
    finalizarMano()
  } else if (manoJugador.length === 0 || manoRival.length === 0) {
    if (primeraRondaGano) {
      if (primeraRondaGano === 'jugador') rondasGanadasJugador++
      else rondasGanadasRival++
    }
    finalizarMano()
  } else {
    if (ganadorRonda === 'jugador') {
      quienEmpiezaRonda = 'jugador'
    } else if (ganadorRonda === 'rival') {
      quienEmpiezaRonda = 'rival'
    }
    siguienteRonda()
  }
}

function siguienteRonda() {
  cartaMesaJugador = null
  cartaMesaRival = null
  estadoJuego.resolviendoBaza = false
  estadoRonda.rondaActual++
  estadoJuego.rondaActual = estadoRonda.rondaActual

  if (manoJugador.length === 0 || manoRival.length === 0) {
    finalizarMano()
  } else {
    mostrarCartas()
    guardarEstadoJuego()
    actualizarBotonesEnvido()
    actualizarBotonesTruco()

    if (quienEmpiezaRonda === 'rival') {
      estadoJuego.turno = 'rival'
      programar(() => continuarFlujoJuego(), 800)
    } else {
      estadoJuego.turno = 'jugador'
      continuarFlujoJuego()
    }
  }
}

function finalizarMano() {
  if (estadoJuego.manoTerminada) return
  estadoJuego.manoTerminada = true
  estadoJuego.resolviendoBaza = false
  estadoJuego.esperandoRespuesta = false
  estadoJuego.cantoActivo = null
  faseEnvidoActiva = false
  ocultarRespuesta()
  bloquearTodasLasAcciones(false)

  let ganador
  if (rondasGanadasJugador > rondasGanadasRival) {
    ganador = 'jugador'
  } else if (rondasGanadasRival > rondasGanadasJugador) {
    ganador = 'rival'
  } else {
    // Tres pardas: gana el mano de la mano actual
    ganador = manoActual
  }

  if (ganador === 'jugador') {
    puntosJugador += puntosMano
    mostrarBanner(`¡Ganaste la mano! +${puntosMano} punto(s)`)
  } else {
    puntosRival += puntosMano
    mostrarBanner(`El rival ganó la mano. +${puntosMano} punto(s)`)
  }

  actualizarPuntuacion()
  actualizarPartida(idPartidaActual, puntosJugador, puntosRival, 'en curso')
  siguienteManoOPartida()
}

function iniciarNuevaMano() {
  cancelarTimers()
  estadoJuego.epoch++

  // El puesto de mano rota en cada mano
  manoActual = manoActual === 'jugador' ? 'rival' : 'jugador'

  cartaMesaJugador = null
  cartaMesaRival = null
  rondasGanadasJugador = 0
  rondasGanadasRival = 0
  puntosMano = 1
  primeraRondaGano = null
  trucoNivel = 0
  quienCantoTruco = null
  envidoNivel = 0
  quienCantoEnvido = null
  victoriasRondas = []
  quienEmpiezaRonda = manoActual
  envidoBloqueado = false
  faseEnvidoActiva = false
  estadoRonda = { vaGanando: false, rondaActual: 1, resultadoAnterior: null }
  estadoJuego.turno = manoActual
  estadoJuego.esperandoRespuesta = false
  estadoJuego.cantoActivo = null
  estadoJuego.manoTerminada = false
  estadoJuego.resolviendoBaza = false
  estadoJuego.rondaActual = 1

  ocultarRespuesta()
  ocultarBanner()

  const repartir = () => {
    manoJugador = mazo.splice(0, 3)
    manoRival = mazo.splice(0, 3)
    mostrarCartas()
    actualizarPuntuacion()
    actualizarBotonesEnvido()
    actualizarBotonesTruco()
    guardarEstadoJuego()
    iniciarFaseEnvido()
  }

  if (mazo.length < 6) {
    obtenerMazo().then(cartas => {
      mazo = mezclarMazo([...cartas])
      repartir()
    })
    return
  }

  repartir()
}

function reiniciarJuego() {
  cancelarTimers()
  estadoJuego.epoch++
  sessionStorage.removeItem('partidaActual')
  puntosJugador = 0
  puntosRival = 0
  idPartidaActual = null
  manoActual = 'jugador'
  trucoNivel = 0
  quienCantoTruco = null
  envidoNivel = 0
  quienCantoEnvido = null
  envidoBloqueado = false
  faseEnvidoActiva = false
  victoriasRondas = []
  quienEmpiezaRonda = 'jugador'
  puntosMano = 1
  estadoRonda = { vaGanando: false, rondaActual: 1, resultadoAnterior: null }
  estadoJuego.manoTerminada = true
  estadoJuego.esperandoRespuesta = false
  estadoJuego.cantoActivo = null
  estadoJuego.resolviendoBaza = false
  ocultarRespuesta()

  document.getElementById('game').classList.add('hidden')
  document.querySelector('.presentacion').classList.remove('hidden')
}

function cantarTruco(tipo) {
  if (trucoNivel >= 4) return
  if (estadoJuego.turno !== 'jugador') return
  if (estadoJuego.esperandoRespuesta) return
  if (estadoJuego.manoTerminada || estadoJuego.resolviendoBaza) return
  if (envidoNivel > 0) return

  const niveles = { 'Truco': 2, 'ReTruco': 3, 'Vale Cuatro': 4 }
  const nivel = niveles[tipo]

  if (quienCantoTruco === 'rival' && nivel <= trucoNivel) return

  if (nivel > trucoNivel) {
    // Cantar truco cierra la fase de envido
    faseEnvidoActiva = false
    puntosMano = nivel
    trucoNivel = nivel
    quienCantoTruco = 'jugador'
    estadoJuego.cantoActivo = tipo
    estadoJuego.esperandoRespuesta = true

    mostrarCanto(tipo, 'jugador')
    actualizarBotonesTruco()
    actualizarBotonesEnvido()
    actualizarRespuestaArea()

    programar(() => {
      responderTruco()
    }, 1500)
  }
}

function responderTruco() {
  if (trucoNivel === 0 || estadoJuego.manoTerminada) return
  if (estadoJuego.resolviendoBaza) return
  if (!estadoJuego.esperandoRespuesta) return

  let fuerzaRival = manoRival.reduce((sum, c) => sum + obtenerValor(c), 0) / manoRival.length

  let probAceptar = 0.5
  let probSubir = 0.0

  if (fuerzaRival > 8) {
    probAceptar += 0.3
    probSubir = 0.3
  } else if (fuerzaRival > 6) {
    probAceptar += 0.15
    probSubir = 0.15
  } else if (fuerzaRival < 4) {
    probAceptar -= 0.3
  } else if (fuerzaRival < 6) {
    probAceptar -= 0.15
  }

  if (personalidad === 'agresivo') {
    probAceptar += 0.1
    probSubir += 0.1
  } else if (personalidad === 'conservador') {
    probAceptar -= 0.1
    probSubir -= 0.1
  }

  if (rondasGanadasRival > rondasGanadasJugador) {
    probAceptar += 0.2
    probSubir += 0.1
  } else if (rondasGanadasJugador > rondasGanadasRival) {
    probAceptar -= 0.2
  }

  if (trucoNivel === 2) {
    probSubir = Math.min(probSubir, 0.4)
  } else if (trucoNivel === 3) {
    probSubir = Math.min(probSubir, 0.3)
  } else if (trucoNivel === 4) {
    probSubir = 0
  }

  // En cantos altos con mano floja el rival duda mas
  if (trucoNivel >= 3 && fuerzaRival < 6) {
    probAceptar -= 0.15
  }

  probAceptar = Math.max(0.1, Math.min(0.9, probAceptar))
  probSubir = Math.max(0, Math.min(0.9, probSubir))

  const rand = Math.random()

  if (rand < probSubir && trucoNivel < 4 && quienCantoTruco === 'jugador') {
    if (trucoNivel === 2) {
      trucoNivel = 3
      puntosMano = 3
      quienCantoTruco = 'rival'
      estadoJuego.cantoActivo = 'ReTruco'
      estadoJuego.esperandoRespuesta = true
      mostrarCanto('ReTruco', 'rival')
      actualizarBotonesTruco()
      actualizarBotonesEnvido()
      actualizarRespuestaArea()
      return
    } else if (trucoNivel === 3) {
      trucoNivel = 4
      puntosMano = 4
      quienCantoTruco = 'rival'
      estadoJuego.cantoActivo = 'Vale Cuatro'
      estadoJuego.esperandoRespuesta = true
      mostrarCanto('Vale Cuatro', 'rival')
      actualizarBotonesTruco()
      actualizarBotonesEnvido()
      actualizarRespuestaArea()
      return
    }
  }

  if (rand < probAceptar) {
    mostrarBanner('El rival dijo: ¡QUIERO!')
    estadoJuego.esperandoRespuesta = false
    estadoJuego.cantoActivo = null
    ocultarRespuesta()
    actualizarBotonesTruco()
    actualizarBotonesEnvido()
    continuarFlujoJuego()
  } else {
    mostrarBanner(`El rival dijo: NO QUIERO (+${trucoNivel - 1} punto(s))`)
    resolverRechazoTruco('jugador')
  }
}

function resolverRechazoTruco(ganador) {
  const puntos = Math.max(1, trucoNivel - 1)

  estadoJuego.manoTerminada = true
  estadoJuego.resolviendoBaza = false
  estadoJuego.esperandoRespuesta = false
  estadoJuego.cantoActivo = null
  faseEnvidoActiva = false
  ocultarRespuesta()
  bloquearTodasLasAcciones(false)

  if (ganador === 'jugador') {
    puntosJugador += puntos
  } else {
    puntosRival += puntos
  }

  actualizarPuntuacion()
  actualizarPartida(idPartidaActual, puntosJugador, puntosRival, 'en curso')

  if (!verificarFinPartida()) {
    programar(() => iniciarNuevaMano(), 2000)
  }
}

function irAlMazo() {
  if (estadoJuego.manoTerminada || estadoJuego.resolviendoBaza) return
  if (estadoJuego.esperandoRespuesta) return

  estadoJuego.manoTerminada = true
  faseEnvidoActiva = false
  ocultarRespuesta()
  bloquearTodasLasAcciones(false)
  puntosRival += puntosMano
  actualizarPuntuacion()
  actualizarPartida(idPartidaActual, puntosJugador, puntosRival, 'en curso')
  mostrarBanner('¡Te fuiste al mazo! El rival gana la mano.')
  if (!verificarFinPartida()) {
    programar(() => iniciarNuevaMano(), 2000)
  }
}

// ========== EVENT LISTENERS ==========

const btnJugar = document.getElementById('btn-jugar')
const btnPartidas = document.getElementById('btn-partidas')
const btnNuevaPartida = document.getElementById('btn-nueva-partida')
const btnVolver = document.getElementById('btn-volver-partidas')

const presentacion = document.querySelector('.presentacion')
const game = document.getElementById('game')
const listaPartidas = document.getElementById('lista-partidas')

btnJugar.addEventListener('click', () => {
  puntosLimite = parseInt(document.getElementById('puntos-limite').value)
  personalidad = document.getElementById('personalidad-rival').value

  const existentes = cargarPartidas()
  const enCurso = existentes.filter(p => p.estado === 'en curso')

  if (enCurso.length > 0) {
    const continuar = confirm('Tenés una partida en curso. ¿Querés continuar o crear una nueva?')
    if (continuar) {
      continuarPartida(enCurso[0].id)
    } else {
      actualizarPartida(enCurso[0].id, 0, 0, 'abandonada')
      const nueva = crearPartida()
      idPartidaActual = nueva.id
      document.getElementById('numero-partida').textContent = nueva.id

      presentacion.classList.add('hidden')
      game.classList.remove('hidden')
      iniciarPartida()
    }
  } else {
    const nueva = crearPartida()
    idPartidaActual = nueva.id
    document.getElementById('numero-partida').textContent = nueva.id

    presentacion.classList.add('hidden')
    game.classList.remove('hidden')
    iniciarPartida()
  }
})

btnPartidas.addEventListener('click', () => {
  mostrarListadoPartidas()
  presentacion.classList.add('hidden')
  listaPartidas.classList.remove('hidden')
})

btnNuevaPartida.addEventListener('click', () => {
  puntosLimite = parseInt(document.getElementById('puntos-limite').value)
  personalidad = document.getElementById('personalidad-rival').value
  const nueva = crearPartida()
  idPartidaActual = nueva.id
  document.getElementById('numero-partida').textContent = nueva.id

  listaPartidas.classList.add('hidden')
  document.querySelector('.presentacion').classList.add('hidden')
  game.classList.remove('hidden')
  iniciarPartida()
})

btnVolver.addEventListener('click', () => {
  listaPartidas.classList.add('hidden')
  presentacion.classList.remove('hidden')
})

const btnReportarBug = document.getElementById('btn-reportar-bug')
const modalBug = document.getElementById('modal-bug')
const btnCerrarBug = document.getElementById('btn-cerrar-bug')
const formBug = document.getElementById('form-bug')

if (btnReportarBug) {
  btnReportarBug.addEventListener('click', () => {
    if (modalBug) {
      modalBug.classList.remove('hidden')
    }
  })
}

if (btnCerrarBug) {
  btnCerrarBug.addEventListener('click', () => {
    if (modalBug) {
      modalBug.classList.add('hidden')
    }
    if (formBug) {
      formBug.reset()
    }
  })
}

if (modalBug) {
  modalBug.addEventListener('click', (e) => {
    if (e.target === modalBug) {
      modalBug.classList.add('hidden')
      if (formBug) {
        formBug.reset()
      }
    }
  })
}

if (formBug) {
  formBug.addEventListener('submit', async (e) => {
    e.preventDefault()
    const formData = new FormData(formBug)
    const nombre = (formData.get('nombre') || '').toString().trim()
    const apellido = (formData.get('apellido') || '').toString().trim()
    const descripcion = (formData.get('descripcion') || '').toString().trim()
    const captura = formData.get('captura')

    if (!nombre || !apellido || !descripcion) {
      alert('Por favor, completá todos los campos obligatorios (nombre, apellido y descripción).')
      return
    }

    const submitBtn = formBug.querySelector('.btn-enviar-bug')
    if (submitBtn) {
      submitBtn.disabled = true
      submitBtn.textContent = 'Enviando...'
    }

    try {
      const payload = new FormData()
      payload.append('nombre', nombre)
      payload.append('access_key', 'f9d9e077-4bce-4479-b404-d6e6d5e8ec6f')
      payload.append('apellido', apellido)
      payload.append('descripcion', descripcion)
      payload.append('pagina', window.location.href)
      payload.append('navegador', navigator.userAgent)
      if (captura && captura.size > 0) {
        payload.append('captura', captura)
      }

      // Usando Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: payload,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        const result = await response.json()
        if (result.success) {
          alert('Comentario enviado correctamente. ¡Gracias por tu ayuda!')
          formBug.reset()
          modalBug.classList.add('hidden')
        } else {
          throw new Error(result.message || 'Error al enviar el reporte')
        }
      } else {
        throw new Error('Error al enviar el reporte')
      }
    } catch (error) {
      console.error('Error al enviar reporte:', error)
      alert('No se pudo enviar el comentario. Por favor, intentá nuevamente.')
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false
        submitBtn.textContent = 'Enviar'
      }
    }
  })
}

document.getElementById('btn-truco').addEventListener('click', () => cantarTruco('Truco'))
document.getElementById('btn-retruco').addEventListener('click', () => cantarTruco('ReTruco'))
document.getElementById('btn-valecuatro').addEventListener('click', () => cantarTruco('Vale Cuatro'))
document.getElementById('btn-ir-al-mazo').addEventListener('click', () => irAlMazo())

function cantarEnvido(tipo) {
  const niveles = { 'Envido': 2, 'Real Envido': 3, 'Falta Envido': 4 }
  const nivel = niveles[tipo]

  if (nivel <= envidoNivel) return
  if (!puedeCantarEnvido()) return

  // Cantar envido cierra la fase de envido
  faseEnvidoActiva = false
  envidoNivel = nivel
  quienCantoEnvido = 'jugador'
  estadoJuego.cantoActivo = tipo
  estadoJuego.esperandoRespuesta = true

  mostrarCanto(tipo, 'jugador')
  actualizarBotonesEnvido()
  actualizarBotonesTruco()
  actualizarRespuestaArea()

  programar(() => {
    responderEnvido()
  }, 1500)
}

document.getElementById('btn-envido').addEventListener('click', () => cantarEnvido('Envido'))
document.getElementById('btn-real-envido').addEventListener('click', () => cantarEnvido('Real Envido'))
document.getElementById('btn-falta-envido').addEventListener('click', () => cantarEnvido('Falta Envido'))

// Cierra la resolucion del envido y deja el estado listo para seguir la mano
function cerrarEnvido() {
  envidoBloqueado = true
  envidoNivel = 0
  quienCantoEnvido = null
  faseEnvidoActiva = false
  estadoJuego.esperandoRespuesta = false
  estadoJuego.cantoActivo = null
  ocultarRespuesta()
  actualizarBotonesEnvido()
  actualizarBotonesTruco()
  actualizarPuntuacion()
  actualizarPartida(idPartidaActual, puntosJugador, puntosRival, 'en curso')
}

// El envido se acepto: compara puntos y suma al ganador
function resolverEnvido() {
  const envidoJugador = calcularEnvido(manoJugador)
  const envidoRival = calcularEnvido(manoRival)
  const puntos = getPuntosEnvido()
  const cantor = quienCantoEnvido

  let ganador
  if (envidoJugador > envidoRival) {
    ganador = 'jugador'
  } else if (envidoRival > envidoJugador) {
    ganador = 'rival'
  } else {
    // En caso de empate, gana quien cantó
    ganador = cantor === 'rival' ? 'rival' : 'jugador'
  }

  if (ganador === 'jugador') puntosJugador += puntos
  else puntosRival += puntos

  let mensaje = `Tu envido: ${envidoJugador}\nEnvido rival: ${envidoRival}\n`
  if (envidoJugador === envidoRival) {
    mensaje += `Empate. Gana quien cantó (${ganador === 'jugador' ? 'Vos' : 'Rival'}). `
  }
  mensaje += ganador === 'jugador'
    ? `¡Ganaste el Envido! +${puntos} punto(s)`
    : `El rival ganó el Envido. +${puntos} punto(s)`

  cerrarEnvido()
  alert(mensaje)

  if (!verificarFinPartida()) {
    terminarFaseEnvido()
  }
}

// Uno de los dos no quiso el envido: 1 punto para quien cantó
function resolverRechazoEnvido(ganador, mensaje) {
  if (ganador === 'jugador') puntosJugador += 1
  else puntosRival += 1
  cerrarEnvido()
  mostrarBanner(mensaje)
  if (!verificarFinPartida()) {
    terminarFaseEnvido()
  }
}

function responderEnvido() {
  if (envidoNivel === 0 || estadoJuego.manoTerminada) return
  if (!estadoJuego.esperandoRespuesta) return
  const envidoRival = calcularEnvido(manoRival)
  let probAceptar = 0.5
  let probSubir = 0

  if (envidoRival >= 28) {
    probAceptar = 0.85
    probSubir = 0.3
  } else if (envidoRival >= 25) {
    probAceptar = 0.7
    probSubir = 0.15
  } else if (envidoRival >= 23) {
    probAceptar = 0.5
    probSubir = 0.05
  } else if (envidoRival >= 20) {
    probAceptar = 0.3
  } else {
    probAceptar = 0.1
  }

  if (personalidad === 'agresivo') {
    probAceptar += 0.1
    probSubir += 0.1
  } else if (personalidad === 'conservador') {
    probAceptar -= 0.1
    probSubir = 0
  }

  if (envidoNivel >= 4) {
    probSubir = 0
  }

  probAceptar = Math.max(0.1, Math.min(0.9, probAceptar))
  probSubir = Math.max(0, Math.min(0.5, probSubir))

  const rand = Math.random()

  if (rand < probSubir && envidoNivel < 4 && quienCantoEnvido === 'jugador') {
    estadoJuego.esperandoRespuesta = true
    if (envidoNivel === 2) {
      envidoNivel = 3
      quienCantoEnvido = 'rival'
      estadoJuego.cantoActivo = 'Real Envido'
      mostrarCanto('Real Envido', 'rival')
    } else if (envidoNivel === 3) {
      envidoNivel = 4
      quienCantoEnvido = 'rival'
      estadoJuego.cantoActivo = 'Falta Envido'
      mostrarCanto('Falta Envido', 'rival')
    }
    actualizarBotonesEnvido()
    actualizarBotonesTruco()
    actualizarRespuestaArea()
    return
  }

  if (rand < probAceptar) {
    resolverEnvido()
  } else {
    resolverRechazoEnvido('jugador', 'El rival dijo: NO QUIERO. Ganás 1 punto por el canto.')
  }
}

document.getElementById('btn-quiero').addEventListener('click', () => {
  if (estadoJuego.manoTerminada) return

  if (envidoNivel > 0) {
    if (quienCantoEnvido === 'jugador') return
    if (!estadoJuego.esperandoRespuesta) return
    resolverEnvido()
  } else if (trucoNivel > 0) {
    if (quienCantoTruco === 'jugador') return
    if (!estadoJuego.esperandoRespuesta) return
    estadoJuego.esperandoRespuesta = false
    estadoJuego.cantoActivo = null
    ocultarRespuesta()
    actualizarBotonesTruco()
    actualizarBotonesEnvido()
    continuarFlujoJuego()
  }
})

document.getElementById('btn-no-quiero').addEventListener('click', () => {
  if (estadoJuego.manoTerminada) return

  if (envidoNivel > 0) {
    if (quienCantoEnvido === 'jugador') return
    if (!estadoJuego.esperandoRespuesta) return
    resolverRechazoEnvido('rival', 'No quisiste el Envido. El rival gana 1 punto por el canto.')
    return
  }

  if (trucoNivel > 0) {
    if (quienCantoTruco === 'jugador') return
    if (!estadoJuego.esperandoRespuesta) return
    mostrarBanner(`Perdiste la mano. No quisiste el canto. +${Math.max(1, trucoNivel - 1)} punto(s) para el rival`)
    resolverRechazoTruco('rival')
  }
})

// ========== RESTAURACION DE PARTIDA ==========
// Si la sesion se interrumpe (recarga / cierre) se propone continuar
// la partida desde el ultimo estado guardado.

function intentarRestaurarPartida() {
  const estado = recuperarEstadoJuego()
  if (!estado || !estado.idPartidaActual) return

  const partida = cargarPartidas().find(p => p.id === estado.idPartidaActual)
  const partidaValida = partida && partida.estado === 'en curso'

  if (!partidaValida || estado.manoTerminada) {
    sessionStorage.removeItem('partidaActual')
    return
  }

  const continuar = confirm('Tenés una partida a medias de la sesión anterior. ¿Querés continuarla?')
  if (!continuar) {
    sessionStorage.removeItem('partidaActual')
    return
  }

  cancelarTimers()

  idPartidaActual = estado.idPartidaActual
  puntosJugador = estado.puntosJugador || 0
  puntosRival = estado.puntosRival || 0
  puntosLimite = typeof estado.puntosLimite === 'number' ? estado.puntosLimite : 30
  personalidad = estado.personalidad || 'equilibrado'
  rondasGanadasJugador = estado.rondasGanadasJugador || 0
  rondasGanadasRival = estado.rondasGanadasRival || 0
  puntosMano = estado.puntosMano || 1
  primeraRondaGano = typeof estado.primeraRondaGano === 'string' ? estado.primeraRondaGano : null
  mazo = Array.isArray(estado.mazo) ? estado.mazo : []
  manoJugador = Array.isArray(estado.manoJugador) ? estado.manoJugador : []
  manoRival = Array.isArray(estado.manoRival) ? estado.manoRival : []
  cartaMesaJugador = estado.cartaMesaJugador || null
  cartaMesaRival = estado.cartaMesaRival || null
  manoActual = estado.manoActual === 'rival' ? 'rival' : 'jugador'
  trucoNivel = estado.trucoNivel || 0
  quienCantoTruco = estado.quienCantoTruco || null
  envidoNivel = estado.envidoNivel || 0
  quienCantoEnvido = estado.quienCantoEnvido || null
  envidoBloqueado = !!estado.envidoBloqueado
  victoriasRondas = Array.isArray(estado.victoriasRondas) ? estado.victoriasRondas : []
  quienEmpiezaRonda = estado.quienEmpiezaRonda === 'rival' ? 'rival' : 'jugador'
  estadoRonda = estado.estadoRonda && typeof estado.estadoRonda === 'object'
    ? estado.estadoRonda
    : { vaGanando: false, rondaActual: 1, resultadoAnterior: null }

  estadoJuego.turno = estado.turno === 'rival' ? 'rival' : 'jugador'
  estadoJuego.esperandoRespuesta = !!estado.esperandoRespuesta
  estadoJuego.cantoActivo = estado.cantoActivo || null
  estadoJuego.manoTerminada = false
  estadoJuego.resolviendoBaza = !!estado.resolviendoBaza
  estadoJuego.rondaActual = estadoRonda.rondaActual || 1
  faseEnvidoActiva = !!estado.faseEnvidoActiva

  document.querySelector('.presentacion').classList.add('hidden')
  document.getElementById('lista-partidas').classList.add('hidden')
  document.getElementById('game').classList.remove('hidden')
  setNumeroPartida(idPartidaActual)
  mostrarCartas()
  actualizarPuntuacion()

  if (faseEnvidoActiva) {
    // La ventana de envido no se reabre: se cierra y sigue el turno que tocaba
    faseEnvidoActiva = false
    estadoJuego.turno = turnoPostEnvido()
  }

  actualizarBotonesEnvido()
  actualizarBotonesTruco()

  if (estadoJuego.resolviendoBaza) {
    mostrarBanner(mensajeBaza(victoriasRondas[victoriasRondas.length - 1]))
    procesarFinBaza()
    return
  }

  if (estadoJuego.esperandoRespuesta) {
    const cantor = envidoNivel > 0 ? quienCantoEnvido : quienCantoTruco
    if (estadoJuego.cantoActivo) mostrarCanto(estadoJuego.cantoActivo, cantor)
    actualizarRespuestaArea()
    if (cantor === 'jugador') {
      programar(() => {
        if (envidoNivel > 0) responderEnvido()
        else responderTruco()
      }, 1500)
    }
    return
  }

  guardarEstadoJuego()
  continuarFlujoJuego()
}

intentarRestaurarPartida()
