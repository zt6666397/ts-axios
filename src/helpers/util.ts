import { basename } from 'path/posix'

const toString = Object.prototype.toString

export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

// export function isObjct(val: any): val is Object {
//   return val !== null && typeof val === 'object'  // val为null也是true
// }

export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}
