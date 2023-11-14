
export default function Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
  buttonSoundOff,
  buttonSoundOn
}) {

  function hide() {
    buttonPlay.classList.toggle("hide")
    buttonPause.classList.toggle("hide")
    buttonSet.classList.toggle("hide")
    buttonStop.classList.toggle("hide")
  }
  function hideSoundOnOff() {
    buttonSoundOn.classList.toggle('hide')
    buttonSoundOff.classList.toggle('hide')
  }

  function getMinutes() {
    let newMinutes = prompt('Quantos minutos?')
    if (!newMinutes) {
      return false
    }
    return newMinutes
  }

  return {
    hide,
    hideSoundOnOff,
    getMinutes
  }
}