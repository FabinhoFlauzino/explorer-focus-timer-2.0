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
  minutes -= 5
  if (minutes < 0) {
    minutes = 0
  }

  timer.updateDisplay(minutes)
}

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle("music-on")

  if(state.isMute){
    sounds.floresta.play()
    return
  }
  
  sounds.element.pause()
}