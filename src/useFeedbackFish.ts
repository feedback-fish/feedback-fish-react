import { useEffect } from "react"

export const useFeedbackFish = (projectId: string) =>
  useEffect(() => {
    // @ts-ignore
    if (window.__feedback_fish_injected__) return
    // @ts-ignore
    window.__feedback_fish_injected__ = true

    const script = document.createElement("script")
    script.src = `https://feedback.fish/ff.js?pid=${projectId}`
    script.defer = true

    const onScriptError = () => script.remove()
    script.addEventListener("error", onScriptError)

    document.body.appendChild(script)
  }, [])
