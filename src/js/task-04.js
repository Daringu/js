const value2 = document.querySelector('#value')
const decrement = document.querySelector('button[data-action="decrement"]')
const increment = document.querySelector('button[data-action="increment"]')
const clicker = {
    value: 0,
    inc() {
        this.value += Number(increment.innerHTML)
        value2.innerHTML = this.value
    },
    dec() {

        this.value += Number(decrement.innerHTML)
        value2.innerHTML = this.value
    }
}


decrement.addEventListener('click', () => clicker.dec())
increment.addEventListener('click', () => clicker.inc())