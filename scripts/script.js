const FRONT = 'card_front'
const BACK = 'card_back'

techs = [
    'bootstrap',
    'css',
    'electron',
    'firebase',
    'html',
    'javascript',
    'jquery',
    'mongo',
    'node',
    'react'
]

function createCardsFromTechs(techs){
    let cards = []

    for(let tech of techs){
        cards.push(createPairFromTech(tech))
    }

    console.log(cards.flatMap(card=>card))
}

function createPairFromTech(tech){
    return [{
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false
    },
    {
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false
    }]

    
}


function createIdWithTech(tech){
    return tech + Math.trunc(Math.random() * 1000)

}

createCardsFromTechs(techs)