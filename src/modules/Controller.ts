import Food from "./Food";
import Snake from "./Snake";
import Scoreboard from "./Scoreboard";
import Keyboard from "./Keyboard";
const throttle = require('../../node_modules/lodash/throttle.js')

// 游戏控制器
class Controller {
  food: Food
  snake: Snake
  scoreboard: Scoreboard
  keyboard: Keyboard
  // 移动方向
  direction = ''
  // 设置snake状态
  deathOrLive = true

  constructor() {
    this.food = new Food()
    this.snake = new Snake()
    this.scoreboard = new Scoreboard(10, 2)
    this.keyboard = new Keyboard()
    this.init()
  }
  // 游戏初始化
  init() {
    if (window && (window as any)['keyboard']) {
      this.keyboard.keyboardEle.addEventListener('click', this.directionHandler.bind(this))
    } else {
      this.keyboard.keyboardEle.style.display = 'none'
      // doucument绑定控制事件
      document.addEventListener('keydown', throttle(this.keydownHandler.bind(this), 150))
    }
    this.run()
  }
  directionHandler(e: MouseEvent) {
    e.preventDefault()
    let t: string = (e.target as HTMLElement).className
    switch (t) {
      case 'icon-circle-up':
        if (this.direction === 'ArrowUp') return
        if (this.snake.bodyEle[1] && this.direction === 'ArrowDown') return
        this.direction = 'ArrowUp'
        break
      case 'icon-circle-left':
        if (this.direction === 'ArrowLeft') return
        if (this.snake.bodyEle[1] && this.direction === 'ArrowRight') return
        this.direction = 'ArrowLeft'
        break
      case 'icon-circle-down':
        if (this.direction === 'ArrowDown') return
        if (this.snake.bodyEle[1] && this.direction === 'ArrowUp') return
        this.direction = 'ArrowDown'
        break
      case 'icon-circle-right':
        if (this.direction === 'ArrowRight') return
        if (this.snake.bodyEle[1] && this.direction === 'ArrowLeft') return
        this.direction = 'ArrowRight'
        break
    }
  }
  /*
    ArrowUp   Up (兼容IE)
    ArrowDown  Down
    ArrowLeft  Left
    ArrowRight  Right
  */
  // keydown事件回调
  keydownHandler(event: KeyboardEvent) {
    // console.log(event.key, this);
    event.preventDefault()
    let k = event.key
    let d = this.direction
    // if (k === d) return
    // if (!this.snake.bodyEle[1]) {
    //   if (k == 'ArrowUp' || k == 'Up' || k == 'ArrowDown' || k == 'Down'
    //     || k == 'ArrowLeft' || k == 'Left' || k == 'ArrowRight' || k == 'Right') {
    //     this.direction = k
    //     return
    //   }
    // }
    // if (
    //   ((k == 'ArrowUp' || k == 'Up') && d !== 'ArrowDown' && d !== 'Down') ||
    //   ((k == 'ArrowDown' || k == 'Down') && d !== 'ArrowUp' && d !== 'Up') ||
    //   ((k == 'ArrowLeft' || k == 'Left') && d !== 'ArrowRight' && d !== 'Right') ||
    //   ((k == 'ArrowRight' || k == 'Right') && d !== 'ArrowLeft' && d !== 'Left')
    // ) {
    //   // console.log(k);
    //   this.direction = k
    // }
    switch (k) {
      case 'ArrowUp':
      case 'Up':
        if (d === 'ArrowUp' || d === 'Up') return
        if (this.snake.bodyEle[1] && d === 'ArrowDown' || d === 'Down') return
        this.direction = k
        break
      case 'ArrowLeft':
      case 'Left':
        if (d === 'ArrowLeft' || d === 'Left') return
        if (this.snake.bodyEle[1] && d === 'ArrowRight' || d === 'Right') return
        this.direction = k
        break
      case 'ArrowDown':
      case 'Down':
        if (d === 'ArrowDown' || d === 'Down') return
        if (this.snake.bodyEle[1] && d === 'ArrowUp' || d === 'Up') return
        this.direction = k
        break
      case 'ArrowRight':
      case 'Right':
        if (d === 'ArrowRight' || d === 'Right') return
        if (this.snake.bodyEle[1] && d === 'ArrowLeft' || d === 'Left') return
        this.direction = k
        break
    }

  }
  // snake移动,利用定时器递归调用
  run() {
    let X = this.snake.X
    let Y = this.snake.Y
    switch (this.direction) {
      case 'ArrowUp':
      case 'Up':
        Y -= 10
        break
      case 'ArrowDown':
      case 'Down':
        Y += 10
        break
      case 'ArrowLeft':
      case 'Left':
        X -= 10
        break
      case 'ArrowRight':
      case 'Right':
        X += 10
        break
    }
    // 检查蛇有没有吃到食物
    this.check(X, Y)
    try {
      this.snake.X = X
      this.snake.Y = Y
    } catch (e: any) {
      let choice = confirm(`
                               GAME OVER
                               ${e.message}
                               投币复活?`)
      if (choice) {
        location.reload()
      }
      this.deathOrLive = choice
    }

    this.deathOrLive && setTimeout(this.run.bind(this), 150 - (this.scoreboard.level - 1) * 15)
  }
  check(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      this.food.changePosition()
      this.scoreboard.addScore()
      this.snake.addBody()
    }
  }
}

export default Controller