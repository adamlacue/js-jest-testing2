const countNumOfEvens = require("./countNumOfEvens.js")

test("count number of even nums in [1,2,3]", () => {
    expect(countNumOfEvens([1,2,3])).toBe(1)
})