import GameSavingLoader from '../GameSavingLoader';

const hitman = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

test('load', async () => {
  expect(await GameSavingLoader.load()).toEqual(JSON.parse(hitman));
});
