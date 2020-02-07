const filterByTerm = require('./filterByTerm')

describe("Filter function", () => {
  // let's test!
  test("it should filter by a search term (link)", () => {
    // actual test will go here
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "http://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" }
    ]

    const output = [{ id: 3, url: "https://www.link3.dev" }]

    expect(filterByTerm(input, "link")).toEqual(output)
    expect(filterByTerm(input, "LINK")).toEqual(output)
  })
  
  test("It should filter by a search term (url)", () => {
     const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" }
    ]

    const output = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" }
    ]

    expect(filterByTerm(input, "uRl")).toEqual(output)
  })
  
  test("It should return a message if the search term is empty", () =>{
    expect(filterByTerm("")).toEqual("You must enter a search term!")

  })

})

