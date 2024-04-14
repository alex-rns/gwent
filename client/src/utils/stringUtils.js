export function humanize(str) {
  return str
    .replace(/_/g, ' ')
    .replace(/^(.)|\s+(.)/g, c => c.toUpperCase());
}
