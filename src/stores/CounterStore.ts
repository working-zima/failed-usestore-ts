import { singleton } from 'tsyringe';

import { Store, Action } from 'usestore-ts';

@singleton()
@Store()
export default class CounterStore {
  count = 0;

  @Action()
  increase(step = 1) {
    this.count += step;
  }

  @Action()
  decrease(step = 1) {
    this.count -= step;
  }
}
