import { render, screen } from "@testing-library/react"
import * as React from "react"

import { FeedbackFish } from "../"

const defaultChild = <button>Send feedback</button>

const renderFeedbackFish = (propsOverwrite = {}) => {
  const props = {
    children: defaultChild,
    projectId: "bla",
    ...propsOverwrite,
  }

  return render(<FeedbackFish {...props} />)
}
const getButton = () => screen.getByRole("button", { name: /send feedback/i })

it(`injects the feedback fish script tag`, () => {
  const { baseElement } = renderFeedbackFish({ projectId: "bla" })

  expect(baseElement).toMatchInlineSnapshot(`
    <body>
      <div>
        <button
          data-feedback-fish="true"
        >
          Send feedback
        </button>
      </div>
      <script
        defer=""
        src="https://feedback.fish/ff.js?pid=bla"
      />
    </body>
  `)
})

it(`handles a single element as a child`, () => {
  renderFeedbackFish({ children: <button>Send feedback</button> })

  const button = screen.getByRole("button", { name: /send feedback/i })
  expect(button).toHaveAttribute("data-feedback-fish", "true")
})

it(`handles a function as a child`, () => {
  renderFeedbackFish({
    children: (props) => <button {...props}>Send feedback</button>,
  })

  const button = screen.getByRole("button", { name: /send feedback/i })
  expect(button).toHaveAttribute("data-feedback-fish", "true")
})

it(`handles userid`, () => {
  renderFeedbackFish({ userId: "my-user-id" })

  const button = getButton()
  expect(button).toHaveAttribute("data-feedback-fish", "true")
  expect(button).toHaveAttribute("data-feedback-fish-userid", "my-user-id")
})

it(`handles metadata`, () => {
  renderFeedbackFish({ metadata: { email: "bla", website: "asdf" } })

  const button = getButton()
  expect(button).toHaveAttribute("data-feedback-fish", "true")
  expect(button).toHaveAttribute("data-feedback-fish-email", "bla")
  expect(button).toHaveAttribute("data-feedback-fish-website", "asdf")
})
