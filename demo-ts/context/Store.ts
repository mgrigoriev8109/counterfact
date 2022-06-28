// This file will be maintained by hand.

interface Visits {
  [name: string]: number;
}

export class Store {
  public visits: Visits = {};
}

// Counterfact will load this object and use it as the initial state.
export const store = new Store();