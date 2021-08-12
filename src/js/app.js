import GameSavingLoader from './GameSavingLoader';

(async () => {
  const save = await GameSavingLoader.load();
  return save;
})();
