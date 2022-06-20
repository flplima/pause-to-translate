import type { PlasmoContentScript } from "plasmo"
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'

export const config: PlasmoContentScript = {
  matches: ["https://www.primevideo.com/detail/*"]
}

let tooltip

function translateSubtitles() {
  const el = document.querySelector<HTMLSpanElement>('span.atvwebplayersdk-captions-text')
  const text = el.innerText.replace(/(\r\n|\n|\r)/gm, " ")
  const message = { type: 'translate', text }
  chrome.runtime.sendMessage(message, (response) => {
    tooltip = tippy(el, {
      content: response.result,
    })
    tooltip.show()
  });
}

window.addEventListener("keydown", (e) => {
  if (e.code !== 'Space') {
    return
  }
  if (tooltip) {
    tooltip.hide()
  }
  const isPausing = !!document.querySelector('[aria-label="Pause"]')
  if (isPausing) {
    translateSubtitles()
  }
})

window.addEventListener("mousedown", () => {
  if (tooltip) {
    tooltip.hide()
  }
  const isPausing = !!document.querySelector('[aria-label="Pause"]')
  if (isPausing) {
    translateSubtitles()
  }
})
