import { sum, asyncSum } from "./game"

describe("game", () => {
  it("sums two numbers", () => {
    expect(sum(2, 4)).toEqual(6)
  })

  it ("asynchronously sums 2 numbers", async () => {
    expect(await asyncSum(2, 4)).toEqual(6)
  })
})