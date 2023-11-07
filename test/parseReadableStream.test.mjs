//@ts-check
import assert from "assert"
import pkg from "zunit"

import { TransparentStateWriter } from "../src/state.mjs"
import parseReadableStream from "../src/parseReadableStream.mjs"

const { describe, it, beforeEach, odescribe } = pkg

const testString =
  '<div class="hello world"><link type="stylesheet" />Hello world!<br /></div>'

describe("parseReadableStream", () => {
  let testStream
  beforeEach(() => {
    testStream = new Blob([testString], { type: "text/plain" }).stream()
  })
  it("works", async () => {
    const state = new TransparentStateWriter()
    await parseReadableStream(testStream, state)
    assert.equal(state.output, testString)
  })
})
