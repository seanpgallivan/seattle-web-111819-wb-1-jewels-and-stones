let jewels = "abeAF", stones = "aFfAECFdBeEdABFBfdbEBbCdfbeBdb"
let i, j, n, s, t, gems

document.addEventListener("DOMContentLoaded", () => {
  console.log("10,000 times with simple while loops...");
  s = performance.now()
  for (n = 0; n < 10000; n++) {
    jewelsAndStones1(jewels, stones);
  }
  t = performance.now()
  console.log("...completed in " + (t-s) + "ms.")
  console.log("10,000 times with String.indexOf()...");
  s = performance.now()
  for (n = 0; n < 10000; n++) {
    jewelsAndStones2(jewels, stones);
  }
  t = performance.now()
  console.log("...completed in " + (t-s) + "ms.")
});


// With simple While loops
jewelsAndStones1 = (jewels, stones) => {
  gems = ""
  i = 0
  while (i < jewels.length) {
    j = 0
    while (j < stones.length) {
      if (stones[j] === jewels[i]) {
        gems += stones.slice(j,j + 1)
        stones = stones.slice (0,j) + stones.slice(j+1)
        j--
      }
      j++
    }
    i++
  }
};


// With String.indexOf
jewelsAndStones2 = (jewels, stones) => {
  gems2 = ""
  k = 0
  while (k < jewels.length) {
    l = 0
    while (l > -1) {
      l = stones.indexOf(jewels[k])
      if (l > -1) {
        gems2 += stones.slice(l,l + 1)
        stones = stones.slice (0,l) + stones.slice(l+1)
      }
    }
    k++
  }
};