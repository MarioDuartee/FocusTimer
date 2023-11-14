// EcmaScript - ES6 Modules - 2015
import Timer from "./timer.js"
import Controls from "./controls.js"
import { elements } from "./elements.js"
import Sound from "./sounds.js"

const {
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonSoundOff,
  buttonSoundOn,
  buttonStop,
  minutesDisplay,
  secondsDisplay
} = elements

const sound = Sound()
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut



const controle = Controls({
  buttonPause,
  buttonPlay,
  buttonSoundOff,
  buttonSet,
  buttonSoundOn,
  buttonStop
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  resetControls: controle.reset,
  minutes,
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
})

/* Eventos */

buttonPlay.addEventListener('click', function () {
  controle.hide()
  timer.countDown()
  sound.pressButton()
})
buttonPause.addEventListener('click', function () {
  controle.hide()
  timer.pausedControls()
  sound.pressButton()
})

buttonStop.addEventListener('click', function () {
  timer.resetControls()
  timer.hide()

})

buttonSet.addEventListener('click', function () {
  let newMinutes = controle.getMinutes()
  if (!newMinutes) {
    timer.reset()
    return
  }
  minutes = newMinutes
  timer.updateTimerDisplay(minutes, 0)
  timer.updateMinutes(minutes)
  sound.pressButton()
})

buttonSoundOn.addEventListener('click', function () {
  controle.hideSoundOnOff()
  sound.bgAudio.pause()
})
buttonSoundOff.addEventListener('click', function () {
  controle.hideSoundOnOff()
  sound.bgAudio.play()
})
