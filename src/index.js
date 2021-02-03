export default () => {
  const subs = {}

  const get = () => subs

  const call = (key) => (args) => {
    subs[key] && subs[key].map((fn) => fn.apply(this, args))
  }

  const add = (key) => (fn) => {
    const sub = subs[key] = subs[key] || []
    fn && sub.push(fn)
    return subs
  }

  const define = (key) => add(key)()

  return { get, call, add, define }
}
