import fetchData from '../http.js';

test('check fetch data from server function', () => {
  const result = fetchData('https://127.0.0.1:8000');
  expect(result).toBe('{}');
});
