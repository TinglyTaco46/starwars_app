fetch("https://swapi.dev/api/people/") 
.then(response => response.json()) 
.then(response => {
    console.log(response)
    console.log(response.results)
})
.catch(err => {
console.log(err)
})

