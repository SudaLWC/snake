class Snake {
  snakeEle: HTMLElement
  bodyEle: HTMLCollectionOf<HTMLElement>
  head: HTMLElement

  constructor() {
    this.snakeEle = document.getElementById('snake')!
    this.bodyEle = this.snakeEle.getElementsByTagName('div')
    this.head = document.querySelector('#snake>div')!
  }

  get X() {
    return this.head.offsetLeft
  }
  get Y() {
    return this.head.offsetTop
  }
  set X(val: number) {
    if (this.X === val) return
    if (val > 290 || val < 0) throw new Error('撞墙了!')
    // 蛇不能掉头
    // if (this.bodyEle[1] && this.bodyEle[1].offsetLeft === val) {
    //   if (val > this.X) {
    //     val = this.X - 10
    //   } else {
    //     val = this.X + 10
    //   }
    // }
    this.moveBody()
    this.head.style.left = val + 'px'
    // 检查是否撞到自己
    this.check()
  }
  set Y(val: number) {
    if (this.Y === val) return
    if (val > 290 || val < 0) throw new Error('撞墙了!')
    // 蛇不能掉头
    // if (this.bodyEle[1] && this.bodyEle[1].offsetTop === val) {
    //   if (val > this.Y) {
    //     val = this.Y - 10
    //   } else {
    //     val = this.Y + 10
    //   }
    // }
    this.moveBody()
    this.head.style.top = val + 'px'
    // 检查是否撞到自己
    this.check()
  }
  addBody() {
    this.snakeEle.insertAdjacentHTML('beforeend', '<div/>')
  }
  moveBody() {
    for (let i = this.bodyEle.length - 1; i > 0; i--) {
      let X = this.bodyEle[i - 1].offsetLeft
      let Y = this.bodyEle[i - 1].offsetTop
      this.bodyEle[i].style.left = X + 'px'
      this.bodyEle[i].style.top = Y + 'px'
    }
  }
  check() {
    // if(this.bodyEle)
    for (let i = 1; i < this.bodyEle.length; i++) {
      if (this.bodyEle[i].offsetLeft === this.X && this.bodyEle[i].offsetTop === this.Y) {
        throw new Error('撞到自己了!')
      }
    }
  }

}

export default Snake