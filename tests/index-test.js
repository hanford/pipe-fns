import expect from 'expect'

import pipe from 'src/index'

const capitalize = txt => txt.toUpperCase()
const exclame = txt => `${txt}!`

describe('Pipe Fns', () => {
  it('pipes functions to a value, returning the output of each function', () => {
    expect(pipe('pipe it up', exclame, capitalize)).toBe('PIPE IT UP!')
  })
})
