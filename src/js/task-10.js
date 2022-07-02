function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const allBoxes = document.querySelector('#boxes')
const inputEl = document.querySelector('input')
const destroy = document.querySelector('button[data-destroy]')
const create = document.querySelector('button[data-create]')
let used = 0;//check if collection has been created

function createBoxes(amount) {

    const arr = []
    let width = 30
    let height = 30
    let count = 0;
    while (count < amount) {
        // if (count % 5 === 0 && count !== 0) {
        //     width = 10
        //     height = 10
        // }
        const divEl = document.createElement('div')
        divEl.style.width = `${width}px`
        divEl.style.height = `${height}px`
        divEl.style.backgroundColor = getRandomHexColor()
        divEl.classList.add('item')
        arr.push(divEl)
        width += 10
        height += 10
        count += 1
    }
    used += 1
    allBoxes.append(...arr)
}

function deleteBoxes() {
    const collection = document.querySelectorAll('.item')
    for (const item of collection) {
        item.remove()
    }
    used = 0
}
create.addEventListener('click', () => {
    if (inputEl.value <= 0) {
        return alert(`enter more than ${inputEl.value}`)
    }
    if (used > 0) {
        deleteBoxes()
    }
    createBoxes(inputEl.value)
})
destroy.addEventListener('click', () => {
    if (used === 0) {
        return alert('you do not have any collection')
    }
    deleteBoxes()
})
