function CoffeeAparat() {
    this.aparatMoney = 0
    this.needForMake = 0

    this.insertCoin = (rate) => {
        this.aparatMoney += rate
    }
    this.makeCoffee = (rate) => {
        if (rate <= this.aparatMoney) {
            this.aparatMoney -= rate
        } else {
            this.needForMake = +(rate - this.aparatMoney)
        }
    }
}


let aparat = new CoffeeAparat()
let counter = 0
let coins = document.querySelectorAll('.coinContanier img')
let dragCont = document.querySelector(('.draggableContanier'))
let myRate = 0;
coins.forEach(draggable => {
    draggable.addEventListener('dragstart', (event) => {
        event.preventDefault
        counter = 0
        myRate = +event.target.dataset.rate
    })
})

dragCont.addEventListener('dragover', (event) => {
    event.preventDefault()
    dragCont.classList.add('ggg')
})


dragCont.addEventListener('dragleave', (event) => {
    event.preventDefault()
    dragCont.classList.remove('ggg')
    console.log(dragCont.classList.contains('ggg'))
    if (dragCont.classList.contains('ggg')) {
        console.log('xer')
    }
})