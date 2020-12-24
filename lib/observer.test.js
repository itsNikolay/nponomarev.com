import { Observer } from './observer'

it('#on', () => {
  class Menu {
    constructor() { Object.assign(this, Observer); }
    run() { this.trigger('happened', "I'm done") }
  };

  let changed = []
  const menu = new Menu
  menu.on('hello', (msg) => changed = msg)
  menu.run()

  expect(changed).toEqual("I'm done")
})

