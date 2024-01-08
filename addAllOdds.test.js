const addAllOdds = require("./addAllOdds.js")

test("add odds of [1,2,3]", () => {
    expect(addAllOdds([1,2,3])).toBe(4)
})