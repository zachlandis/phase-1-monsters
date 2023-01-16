fetch('http://localhost:3000/monsters')
    .then(res => res.json())
    .then(data => (data.forEach(monster => loadMonsters(monster))))

    function loadMonsters(monster) {
        if (monster.id <= 50) {
            let monsterName = document.createElement('h3')
            monsterName.textContent = `${monster.name}`
            
            let monsterAge = document.createElement('h6')
            monsterAge.textContent = `${monster.age}`

            let monsterDescription = document.createElement('p')
            monsterDescription.textContent = `${monster.description}`

            let monsterId = document.createElement('p')
            monsterId.textContent = `${monster.id}`

            document.getElementById(['monster-container']).append(monsterName, monsterAge, monsterDescription, monsterId)
        }
    }

document.addEventListener('DOMContentLoaded', () => {
    const createMonsterForm = document.createElement('form')
    createMonsterForm.id = 'monster-form'
    document.getElementById('create-monster').appendChild(createMonsterForm)


    let nameInput = document.createElement('input')
    nameInput.id = 'name'
    nameInput.placeholder = 'name...'

    let ageInput = document.createElement('input')
    ageInput.id = 'age'
    ageInput.placeholder = 'age...'

    let descriptionInput = document.createElement('input')
    descriptionInput.id = 'description'
    descriptionInput.placeholder = 'description...'

    let formSubmitBtn = document.createElement('button')
    formSubmitBtn.textContent = 'Create'
    formSubmitBtn.id = 'form_btn'

    createMonsterForm.append(nameInput, ageInput, descriptionInput, formSubmitBtn)


    let formBtn = document.querySelector('form')
    formBtn.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/monsters', {
        method: 'POST',
        headers: {
            'accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            "name": `${nameInput.value}`,
            "age": `${ageInput.value}`,
            "description": `${descriptionInput.value}`
        })
    })
    .then(res => res.json())
    .then(data => console.log(data))
})

/////////////////// NEXT 50 MONSTERS BUTTON ////////////////////

let moreMonstersBtn = document.createElement('button')
moreMonstersBtn.textContent = 'Load More Monsters'
moreMonstersBtn.addEventListener('click', loadMoreMonsters)  
document.querySelector(['#monster-container']).append(moreMonstersBtn)

function loadMoreMonsters(nextMonsters) {
    
    let monsterName = document.createElement('h3')
    monsterName.textContent = `${nextMonsters.name}`
    
    let monsterAge = document.createElement('h6')
    monsterAge.textContent = `${nextMonsters.age}`

    let monsterDescription = document.createElement('p')
    monsterDescription.textContent = `${nextMonsters.description}`

    let monsterId = document.createElement('p')
    monsterId.textContent = `${nextMonsters.id}`

    document.getElementById(['monster-container']).append(monsterName, monsterAge, monsterDescription, monsterId)
    }

})