function filterByTerm(inputArr, searchTerm) {
  return inputArr.filter(function(arrayElement){
    return arrayElement.url.match(searchTerm)
  })
}

describe("Filter function", () => {
  // let's test!
  test("it should filter by a search term (link)", () => {
    // actual test will go here
    const input = [
      { id: 1, url: "https://ww.url1.dev" },
      { id: 2, url: "http://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" }
    ]

    const output = [{ id: 3, url: "https://www.link3.dev" }]

    expect(filterByTerm(input, "link")).toEqual(output)

  })
})

