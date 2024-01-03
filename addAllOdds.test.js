const addAllOdds = require("./addAllOdds.js")

test("reverse [1,2,3] ", () => {
    expect(addAllOdds([1,2,3])).toBe([4])
})