//arrayify() -> []
//arrayify('hello') -> ['hello']
//arrayify([1, 2, 3]) -> [1, 2, 3]

const arrayify = require('../arrayify');

test('returns an empty array when given nothing', () => {
  const result = arrayify()
  expect(result).toEqual([])
});

test('returns an array-ed version of what it is given', () => {
  const input = 'hi there';
  const result = arrayify(input);
  expect(result).toEqual([input]);
});

test('returns array if is is given an array', () => {
  const input = [1, 2, 3];
  const result = arrayify(input);
  expect(result).toEqual(input);
})