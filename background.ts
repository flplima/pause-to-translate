const BASE_URL = 'https://clients5.google.com/translate_a/t'

chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
  (async () => {
    if (request.type === 'translate') {
      const params = new URLSearchParams({
        client: 'dict-chrome-ex',
        sl: 'auto',
        tl: 'pt',
        q: request.text,
      })
      const res = await fetch(`${BASE_URL}?${params}`)
      const json = await res.json()
      sendResponse({
        result: json[0][0],
      })
    }
  })()

  return true
});

export {}
