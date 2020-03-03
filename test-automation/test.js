import peach from 'peach';

test('peach makes a silly name', () => {
  const name = peach();
  expect(typeof name).toEqual('string');
  expect(name.includes('Peach')).toBeTruthy();
});