import React from "react"
import { render, cleanup } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { FeedbackFish } from "../"

afterEach(cleanup)

it(`injects the feedback fish script tag`, () => {
  const { baseElement } = render(
    <FeedbackFish projectId="bla">
      <a href="https://feedback.fish/feedback?pid=bla">Send feedback</a>
    </FeedbackFish>
  )

  expect(baseElement).toMatchInlineSnapshot(`
    <body>
      <div>
        <a
          data-feedback-fish="true"
          href="https://feedback.fish/feedback?pid=bla"
        >
          Send feedback
        </a>
      </div>
      <script
        defer=""
        src="https://feedback.fish/ff.js?pid=bla"
      />
    </body>
  `)
})

it(`handles a single element as a child`, () => {
  const { container } = render(
    <FeedbackFish projectId="bla">
      <a href="https://feedback.fish/feedback?pid=bla">Send feedback</a>
    </FeedbackFish>
  )

  expect(container).toMatchInlineSnapshot(`
    <div>
      <a
        data-feedback-fish="true"
        href="https://feedback.fish/feedback?pid=bla"
      >
        Send feedback
      </a>
    </div>
  `)
})

it(`handles a function as a child`, () => {
  const { container } = render(
    <FeedbackFish projectId="bla">
      {(props) => (
        <a {...props} href="https://feedback.fish/feedback?pid=bla">
          Send feedback
        </a>
      )}
    </FeedbackFish>
  )

  expect(container).toMatchInlineSnapshot(`
    <div>
      <a
        data-feedback-fish="true"
        href="https://feedback.fish/feedback?pid=bla"
      >
        Send feedback
      </a>
    </div>
  `)
})

it(`handles userid`, () => {
  const { container, baseElement } = render(
    <FeedbackFish projectId="bla" userId="my-user-id">
      <a href="https://feedback.fish/feedback?pid=bla">Send feedback</a>
    </FeedbackFish>
  )

  expect(container).toMatchInlineSnapshot(`
    <div>
      <a
        data-feedback-fish="true"
        data-feedback-fish-userid="my-user-id"
        href="https://feedback.fish/feedback?pid=bla"
      >
        Send feedback
      </a>
    </div>
  `)
})

it(`handles metadata`, () => {
  const { container } = render(
    <FeedbackFish projectId="bla" metadata={{ email: "bla", website: "asdf" }}>
      <a href="https://feedback.fish/feedback?pid=bla">Send feedback</a>
    </FeedbackFish>
  )

  expect(container).toMatchInlineSnapshot(`
    <div>
      <a
        data-feedback-fish="true"
        data-feedback-fish-email="bla"
        data-feedback-fish-website="asdf"
        href="https://feedback.fish/feedback?pid=bla"
      >
        Send feedback
      </a>
    </div>
  `)
})
