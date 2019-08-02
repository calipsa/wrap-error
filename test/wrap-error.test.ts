import wrapError from '../src'

const err = wrapError(new Error('foo\nbar'), 'baz')

describe('Wrap error', () => {
  it('should be correct', () => {
    expect(err).toMatchSnapshot()
  })

  it('should have the correct message', () => {
    expect(err.message).toMatchSnapshot()
  })

  it('should have the correct stack trace', () => {
    expect(err.stack).toMatch(/Error: baz.+?Error: foo\nbar/s)
  })
})
