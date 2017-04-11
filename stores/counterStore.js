import Store from './Store';

class CounterStore extends Store {
  // Hint: extend the Store class!
  constructor () {
    super(0);
  }

  increment () {
    let newState = this.getState() + 1;
    this.setState(newState);
  }

  decrement () {
    let newState = this.getState() - 1;
    this.setState(newState);
  }
}

module.exports = new CounterStore();
