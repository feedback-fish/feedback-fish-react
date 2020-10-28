import { useEffect } from "react"

export const useFeedbackFish = (projectId: string) =>
  useEffect(() => {
    const script = document.createElement("script")
    script.src = `https://feedback.fish/ff.js?pid=${projectId}`
    script.defer = true

    const onScriptError = () => script.remove()
    script.addEventListener("error", onScriptError)

    document.body.appendChild(script)

    return () => {
      script.removeEventListener("error", onScriptError)

      script.remove()
    }
  }, [])
