import { capitalize } from './format'

test('capitalizes string', () => {
  expect(capitalize('hello')).toBe('Hello')
  expect(capitalize('')).toBe('')
})
