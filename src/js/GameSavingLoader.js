import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const str = await json(data);
      return new GameSaving(JSON.parse(str));
    } catch (error) {
      return console.log(error);
    }
  }
}
