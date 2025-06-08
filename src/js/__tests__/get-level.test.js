import getLevel from '../get-level.js';
import fetchData from '../http.js';
jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});
test.each([
  ['succesful response', {status: 'ok', level: '80'}, 'Ваш текущий уровень: 80'],
  ['failed response', {status: 'not ok'}, 'Информация об уровне временно недоступна'],
])('testing %s response with %o', (_, responseData, expectedValue) => {
  fetchData.mockReturnValue(responseData);
  const outputValue = getLevel(1);
  expect(outputValue).toEqual(expectedValue);
});
