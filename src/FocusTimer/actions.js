import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as sounds from "./sounds.js"

export function PlayPauseTimer() {
  state.isRunnig = document.documentElement.classList.toggle("running")

  if (state.isRunnig == true) {
    togglePlayPause()
  } else {
    togglePlayPause()
  }

  timer.countdown()
  sounds.click.play()
}

export function stopTimer() {
  state.isRunnig = false
  document.documentElement.classList.remove("running")
  let play = document.querySelector(".controls button:nth-child(1)")
  play.classList.add("ph-play-circle")
  play.classList.remove("ph-pause-circle")
  timer.updateDisplay()
  sounds.click.play()
}

function togglePlayPause() {
  let play = document.querySelector(".controls button:nth-child(1)")
  play.classList.toggle("ph-play-circle")
  play.classList.toggle("ph-pause-circle")
}

export function addMinutesTimer() {
  sounds.click.play()
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)
  minutes += 5
  if (minutes > 60) {
    minutes = 60
    seconds = 0
  }

  timer.updateDisplay(minutes, seconds)
}

export function decrementMinutesTimer() {
  sounds.click.play()
  let minutes = Number(el.minutes.textContent)

  if (minutes <= 5) {
    minutes--
  } else {
    minutes -= 5
  }

  if (minutes < 0) {
    minutes = 0
  }

  timer.updateDisplay(minutes)
}

export function toggleMusic(element) {
  const audioElement = getAudioElement(element)
  const progressBar = document.getElementById("progressBar");

  if((state.musicActual && state.musicActual == audioElement) || (state.musicActual && state.musicActual !== audioElement)){
    state.musicActual.pause()
  }

  if(audioElement) {
    audioElement.play()
    state.musicActual = audioElement

    audioElement.addEventListener("timeupdate", () => {
      const currentTime = audioElement.currentTime;
      const duration = audioElement.duration;
  
      // Atualiza a posição da barra de progresso
      const progress = (currentTime / duration) * 100;
      progressBar.value = progress;
  });
    return
  } else {
    alert("Audio indisponível no momento")
    audioElement.pause()
    state.musicActual = null
  }


}

function getAudioElement(action) {
  switch (action) {
      case "click":
          return sounds.click;
      case "cafeteria":
          return sounds.cafeteria;
      case "chuva":
          return sounds.chuva;
      case "floresta":
          return sounds.floresta;
      case "lareira":
          return sounds.lareira;
      case "finalizado":
          return sounds.finalizado;
      default:
          return null;
  }
}