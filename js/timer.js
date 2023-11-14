import Sound from "./sounds.js"

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  minutes,
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
  Sound
}) {

  function updateTimerDisplay(minutes, seconds) {
    /* padStar(parm1, parm2), é para preencher os caracteres */
    /* se ler: padStart(dois caracteres, "adicione essa string") */
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    /* padStar(parm1, parm2), é para preencher os caracteres */
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function resetControls() {
    clearTimeout(timerTimeOut)
    reset()
  }

  function pausedControls() {
    clearTimeout(timerTimeOut)
  }

  function countDown() {
    timerTimeOut = setTimeout(function () {


      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)


      updateTimerDisplay(minutes, 0)


      if (minutes <= 0 && seconds == 0) {
        reset()
        Sound().timeEnd()
        /* quando a função encontra um return, ela para a função */
        return
      }

      if (seconds <= 0) {
        seconds = 3
        --minutes
      }

      updateTimerDisplay(minutes, String(seconds - 1))
      countDown()
    }, 1000)
  }

  function reset() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
    buttonPlay.classList.toggle("hide")
    buttonPause.classList.toggle("hide")
    buttonSet.classList.toggle("hide")
    buttonStop.classList.toggle("hide")
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }
  return {
    countDown,
    pausedControls,
    updateTimerDisplay,
    resetControls,
    reset,
    updateMinutes
  }
}