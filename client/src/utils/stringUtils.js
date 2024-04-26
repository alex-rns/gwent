export function humanize(str) {
  if (!str) {
    return str
  }
  return str.replace(/_/g, ' ').replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase())
}
