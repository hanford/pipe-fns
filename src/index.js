export default (value, ...fns) => fns.reduce((v, fn) => fn(v), value)
