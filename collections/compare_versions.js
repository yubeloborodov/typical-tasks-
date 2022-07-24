const compareVersions = (first, second) => {
  const oldParts = first.split('.')
  const newParts = second.split('.')
  for (var i = 0; i < newParts.length; i++) {
    const a = +newParts[i] // parse int
    const b = +oldParts[i] // parse int
    if (a > b) return -1;
    if (a < b) return 1;
  }
  return 0;
}

console.log(compareVersions("0.1", "1.1"))
console.log(compareVersions("0.12", "0.2"))
console.log(compareVersions("4.2", "4.2"))