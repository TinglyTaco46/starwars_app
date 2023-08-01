 window.onload = (e) => {
    const displayCharInfo = (characterInfo) => {
        fetch(`https://swapi.dev/api/people/?search=${characterInfo}`).then((response) => response.json()).then((data) => {
            const char = data.results[0]
            if(char) {
                document.querySelector('#modalName').innerText = char.name
                document.querySelector('#modalHeight').innerText = char.height
                document.querySelector('#modalMass').innerText = char.mass
                document.querySelector('#modalHair').innerText = char.hair_color
                document.querySelector('#modalSkin').innerText = char.skin_color
                document.querySelector('#modalBirth').innerText = char.birth_year
                document.querySelector('#modalEye').innerText = char.eye_color
            }
             const modal = document.getElementById('charModal')
                 modal.style.display = 'block'
        }).catch((error) => {
            console.log('error')
        })
     }
    const characterEl = document.querySelectorAll('.container ul li')
    characterEl.forEach((characterEl) => {
        characterEl.addEventListener('click', (e) => {
            const characterInfo = e.currentTarget.textContent
            displayCharInfo(characterInfo)
        })
    })
    const closeModal = document.getElementById('closeModal')
    closeModal.addEventListener('click', () => {
        const modal = document.getElementById('charModal')
        modal.style.display = 'none'
    })
}
  
