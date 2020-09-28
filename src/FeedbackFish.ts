import { FunctionComponent } from "react"

import { useFeedbackFish } from "./useFeedbackFish"

type Props = {
  projectId: Parameters<typeof useFeedbackFish>[0]
}
export const FeedbackFish: FunctionComponent<Props> = ({ projectId }) => {
  useFeedbackFish(projectId)

  return null
}
