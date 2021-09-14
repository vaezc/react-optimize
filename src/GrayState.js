class GrayState {
  constructor() {
    this.observers = [];
    this.status = {};
  }

  attach(func) {
    if (!this.observers.includes(func)) {
      this.observers.push(func);
    }
  }

  detach(func) {
    this.observers = this.observers.filter((observer) => observer !== func);
  }

  updateStatus(val) {
    this.status = val;
    this.trigger();
  }

  trigger() {
    for (let index = 0; index < this.observers.length; index++) {
      this.observers[index](this.status);
    }
  }
}

export default new GrayState();
