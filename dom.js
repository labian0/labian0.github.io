const projectCards = document.getElementsByClassName("project-card")
let cardWithCursor = projectCards[0]

for (const card of projectCards) {
    card.addEventListener("mouseover",()=>{
        setCardWithCursor(card)
    })
}
const setCardWithCursor = (card) => {
    hideCursor(cardWithCursor)
    showCursor(card)
    cardWithCursor = card
}
const hideCursor = (card) => {
    let cursor = card.querySelector(".pointer-space > .pointer.img-wrapper > img")
    cursor.className = "hidden"    
}
const showCursor = (card) => {
    let cursor = card.querySelector(".pointer-space > .pointer.img-wrapper > img")
    cursor.className = "" 
}