import { sum } from "./game"

describe("game", () => {
  it("sums two numbers", () => {
    expect(sum(2, 4)).toEqual(6)
  })
})