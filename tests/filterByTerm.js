function filterByTerm(inputArr, searchTerm) {
  if (!searchTerm){
    return "You must enter a search term!"
  }
  else {
    return inputArr.filter(function(arrayElement){
      return arrayElement.url.match(searchTerm.toLowerCase())
    })
  }
}

module.exports = filterByTerm
