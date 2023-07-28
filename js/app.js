    window.onload = (e) => {
        const getCharInfo = () => {
        fetch("https://swapi.dev/api/people").then((data) => {
            return data.json()
            }, (err) => {
                console.log(err, ' ERROR')
            }).then((char) => {
                const userInput = document.querySelector('#input').value
                // console.log(userInput)
                // console.log(char.results)
                const getNames = () => {
                    const charArrays = char.results
                    // console.log(charArrays)
                    for(let i = 0; i < charArrays.length; i++) {
                        let names = charArrays[i].name
                        const charObjects = charArrays[i]
                        // console.log(charObjects)
                        // console.log(names)
                        if(names.toLowerCase().includes(userInput.toLowerCase())) {
                            document.querySelector('#name').innerText = charObjects.name
                            document.querySelector('#height').innerText = charObjects.height
                            document.querySelector('#mass').innerText = charObjects.mass
                            document.querySelector('#hair').innerText = charObjects.hair_color
                            document.querySelector('#skin').innerText = charObjects.skin_color
                        }
                    } 
                }
                getNames()
            })
        }
        getCharInfo()
         document.querySelector('#submit').addEventListener('click', (e) => {
            e.preventDefault()
            getCharInfo()
        })
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