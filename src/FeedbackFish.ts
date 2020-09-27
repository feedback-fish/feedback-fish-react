import { useEffect } from "react"

export const FeedbackFish = ({ projectId }: { projectId: string }) => {
  useEffect(() => {
    const ffScript = document.createElement("script");
    ffScript.setAttribute(
      "src",
      `https://feedback.fish/ff.js?pid=${projectId}`
    );
    ffScript.defer = true;
    document.body.appendChild(ffScript);
  }, [])

  return null
}