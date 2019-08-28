/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
export default function isPlainObject(obj) {
  // 不能通过typeof的 和本身就是null的肯定不是
  if (typeof obj !== 'object' || obj === null) return false

  // 找到这个对象原型链的顶层和底层看看是不是同一个 是同一个就是
  let proto = obj
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }

  return Object.getPrototypeOf(obj) === proto
}
