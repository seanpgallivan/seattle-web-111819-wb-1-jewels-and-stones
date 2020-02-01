// This is my version of a non-recursive merge-sort...
mergeArrays = (a, b) => {
  result = []
  while (a.length > 0 && b.length > 0) {
    if (a[0] < b[0]) {
      result.push(a.shift())
    } else {
      result.push(b.shift())
    }
  }
  return result.concat(a).concat(b)
}
mergeSortNonRecursive = a => {
  let l = [], m = [], r = [[...a]]
  while (true) {
    m = r.shift()
    if (m.length > 2) {
      r.unshift(m.splice(0,2 * Math.round(m.length / 4)),m)
    } else {
      if (m.length == 2) {
        m = mergeArrays(m.splice(1),m)
      }
      while (l.length && (!r[0] || (m.length == l[0].length))) {
        m = mergeArrays(l.shift(), m)
      }
      if (!r[0]) {
        return m
      }
      l.unshift(m)
    }
  }
}
// My version ends


// standard recursive:
mergeSort = a => {
  if (a.length <= 1) {
    return a;
  }
  const m = Math.floor(a.length / 2);
  const l = a.slice(0, m);
  const r = a.slice(m);
  return mergeArrays(mergeSort(l), mergeSort(r));
}

// comparisons:
longArray = (a, b) => {
  let n = []
  for (let i = 0; i < a; i++) {
    n.push(Math.floor(Math.random() * b))
  }
  return n
}

comparison = (a, b, c) => {
  let t, n = longArray(a, b)
  t = performance.now()
  for (let i = 0; i < c; i++) {
    mergeSortNonRecursive(n)
  }
  console.log("Mine:      " + (performance.now()-t))
  t = performance.now()
  for (let i = 0; i < c; i++) {
    mergeSort(n)
  }
  console.log("Recursive: " + (performance.now()-t))
}