const itemsEl = document.querySelectorAll('.item')
console.log(`Number of categories:${itemsEl.length}`);
itemsEl.forEach((element, index, array) => {
    console.log(`category:${element.querySelector('h2').textContent}`);
    console.log(`elements:${element.querySelectorAll('li').length}`);
})