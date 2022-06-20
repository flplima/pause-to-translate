import { useEffect, useState } from "react"

export default function IndexPopup() {
  const [data, setData] = useState("")

  useEffect(() => {
    //(async () => {
    //})()
    //chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
      //const text = 'Hello world'
      //const res = await fetch('https://clients5.google.com/translate_a/t?client=dict-chrome-ex&sl=auto&tl=pt&q='+text)
      //const json = await res.json()
      //sendResponse(json[0][0])
    //}
    //);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}
    >
      {data}
      <input onChange={(e) => setData(e.target.value)} value={data} />
    </div>
  )
}
