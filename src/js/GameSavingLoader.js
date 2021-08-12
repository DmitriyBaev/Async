import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static async load() {
    // let str;
    try {
      const data = await read();
      const str = await json(data);
      return str;
    } catch (e) {
      return (e);
    }
    // return str;
  }
}
