# pipe-fns

[![npm package][npm-badge]][npm]

Easily pipe functions, similar to the [proposal pipeline operator](https://github.com/tc39/proposal-pipeline-operator) but with a more familiar syntax

### Usage

```js
const pipe = require('pipe-fns')

const capitalize = txt => txt.toUpperCase()
const exclame = txt => `${txt}!`

pipe('pipe it up', capitalize, exclame) // PIPE IT UP!
```

[npm-badge]: https://img.shields.io/npm/v/pipe-fns.png?style=flat-square
[npm]: https://www.npmjs.org/package/pipe-fns

## License

MIT © [Jack Hanford](http://jackhanford.com)
