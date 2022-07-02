const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];
const ul = document.querySelector('#ingredients')
const arr1 = ingredients.map(element => {
    const list = document.createElement('li')
    list.textContent = element;
    list.classList.add('item')
    console.log(list);
    return list
})
ul.append(...arr1)