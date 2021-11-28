this.stuff = 'blabla'
const toto = 4
const self = this

setTimeout(function () {
  console.log('toto ' + toto)
  console.log('this...' + this)
  console.log('self...' + self)
}, 1000)

setTimeout(() => {
  console.log('toto ' + toto)
  console.log('this...' + this)
  console.log('self...' + self)
}, 2000)
