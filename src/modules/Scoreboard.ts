class Scoreboard {
  score = 0
  level = 1
  scoreEle: HTMLElement
  levelEle: HTMLElement
  // maxLevel: number

  constructor(public maxLevel: number = 10, public upScore: number = 10) {
    this.scoreEle = document.getElementById('score')!
    this.levelEle = document.getElementById('level')!
  }

  addScore() {
    this.scoreEle.innerHTML = ++this.score + ''

    // 达到固定分数升级
    if (this.score % this.upScore == 0) {
      this.levelUp()
    }
  }
  levelUp() {
    // 设置游戏最高等级
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + ''
      // console.log(this.level);
    }

  }
}

export default Scoreboard