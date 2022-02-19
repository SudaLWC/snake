class Keyboard {
  keyboardEle: HTMLElement
  // up: HTMLElement
  // left: HTMLElement
  // down: HTMLElement
  // right: HTMLElement
  constructor() {
    this.keyboardEle = document.getElementById('keyboard')!
    // this.up = document.querySelector(".icon-circle-up")!
    // this.left = document.querySelector(".icon-circle-left")!
    // this.down = document.querySelector(".icon-circle-down")!
    // this.right = document.querySelector(".icon-circle-right")!
    // this.init()
  }
  // init() {
  //   if (window && !(window as any)['keyboard']) {
  //     this.keyboardEle.addEventListener('click', this.directionHandler)
  //   } else {
  //     this.keyboardEle.style.display = 'none'
  //   }
  // }
  // directionHandler(e: MouseEvent) {
  //   let t: string = (e.target as HTMLElement).className
  //   switch (t) {
  //     case 'icon-circle-up':
  //       this.direction = 'ArrowUp'
  //       break
  //     case 'icon-circle-left':
  //       this.direction = 'ArrowLeft'
  //       break
  //     case 'icon-circle-down':
  //       this.direction = 'ArrowDown'
  //       break
  //     case 'icon-circle-right':
  //       this.direction = 'ArrowRight'
  //       break
  //   }
  // }
  // get direction() {
  //   return this.d
  // }
  // set direction(val: string) {
  //   this.d = val
  // }
}
export default Keyboard