class Food {
  foodEle: HTMLElement

  constructor() {
    this.foodEle = document.getElementById('food')!
  }

  get X() {
    return this.foodEle.offsetLeft
  }
  get Y() {
    return this.foodEle.offsetTop
  }
  changePosition() {

    let left = Math.floor(Math.random() * 30) * 10
    let top = Math.floor(Math.random() * 30) * 10

    this.foodEle.style.left = left + 'px'
    this.foodEle.style.top = top + 'px'
  }
}

export default Food