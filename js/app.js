window.onload = (e) => {
    // document.querySelector('form').addEventListener('submit', (e) => {
    //     e.preventDefault()

        const userInput = document.querySelector('input[type="text').value
        console.log(userInput)

        fetch(`https://swapi.dev/api/people/?page2=${userInput}`).then((data) => {
            return data.json()
        }, (err) => {
            console.log(err, ' ERROR')
        }).then((char) => {
            const charArrays = char.results
            for(let i = 0; i < charArrays.length; i++) {
                let names = charArrays[i].name
                console.log(names)
            }
             console.log(charArrays)
            // console.log(char.results.name)
        const getNames = () => {
           console.log(char.results)
        } 
            document.querySelector('#Char').innerHTML = char.results.name
        })
        // getNames()
    // })
}







// fetch("https://swapi.dev/api/people/") 
// .then(response => response.json()) 
// .then(response => {
//     console.log(response)
//     console.log(response.results)
// })
// .catch(err => {
// console.log(err)
// })

// fetch("https://swapi.dev/api/planets/")
// .then(response => {
//     console.log(response)
// })
// .catch(err => {
//     console.log(err)
// })


// fetch("https://swapi.dev/api/films/")
// .then(response => {
//     console.log(response)
// })
// .catch(err => {
//     console.log(err)
// })


// fetch("https://swapi.dev/api/species/")
// .then(response => {
//     console.log(response)
// })
// .catch(err => {
//     console.log(err)
// })


// window.onload = fetch("https://swapi.dev/api/vehicles/")
// .then(response => {
//     console.log(response)
// })
// .catch(err => {
//     console.log(err)
// })



// fetch("https://swapi.dev/api/starships/")
// .then(response => {
//     console.log(response)
// })
// .catch(err => {
//     console.log(err)
// })