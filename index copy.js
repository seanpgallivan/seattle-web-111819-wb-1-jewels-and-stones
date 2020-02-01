let a = "abeAFchsiklmopqrtuvwx", b = "aFfAaECFdBeasdwefweefEdAFABFBfdbEBbCedsjlasljkjflwji;aasjklefijoawienowiefwfweFfweFfwfdfFbeBdb"
// let a = "abeAF", b = "abcde"
let i, j, k, n, s, t, g

document.addEventListener("DOMContentLoaded", () => {

  console.log("100,000 times with even simpler while loops...");
  s = performance.now()
  for (n = 0; n < 100000; n++) {
    jewelsAndStones0(a, b);
  }
  t = performance.now()
  console.log("answer: " + g + ", completed in " + (t-s) + "ms.")

  console.log("100,000 times with simple while loops...");
  s = performance.now()
  for (n = 0; n < 100000; n++) {
    jewelsAndStones1(a, b);
  }
  t = performance.now()
  console.log("answer: " + g + ", completed in " + (t-s) + "ms.")

  console.log("100,000 times with String.indexOf()...");
  s = performance.now()
  for (n = 0; n < 100000; n++) {
    jewelsAndStones2(a, b);
  }
  t = performance.now()
  console.log("answer: " + g + ", completed in " + (t-s) + "ms.")

  console.log("100,000 times with String.indexOf(), take 2...");
  s = performance.now()
  for (n = 0; n < 100000; n++) {
    jewelsAndStones3(a, b);
  }
  t = performance.now()
  console.log("answer: " + g + ", completed in " + (t-s) + "ms.")

  console.log("100,000 times with String.indexOf(with fromIndex)");
  s = performance.now()
  for (n = 0; n < 100000; n++) {
    jewelsAndStones4(a, b);
  }
  t = performance.now()
  console.log("answer: " + g + ", completed in " + (t-s) + "ms.")

  console.log("100,000 times with String.indexOf(with fromIndex) take 2");
  s = performance.now()
  for (n = 0; n < 100000; n++) {
    jewelsAndStones5(a, b);
  }
  t = performance.now()
  console.log("answer: " + g + ", completed in " + (t-s) + "ms.")

  console.log("100,000 times with .includes, no nests");
  s = performance.now()
  for (n = 0; n < 100000; n++) {
    jewelsAndStones6(a, b);
  }
  t = performance.now()
  console.log("answer: " + g + ", completed in " + (t-s) + "ms.")

  console.log("100,000 times with for loops");
  s = performance.now()
  for (n = 0; n < 100000; n++) {
    jewelsAndStones7(a, b);
  }
  t = performance.now()
  console.log("answer: " + g + ", completed in " + (t-s) + "ms.")

  console.log("100,000 times with Matt's object solution");
  s = performance.now()
  for (n = 0; n < 100000; n++) {
    jewelsAndStones8(a, b);
  }
  t = performance.now()
  console.log("answer: " + g + ", completed in " + (t-s) + "ms.")

});


// With even simpler While loops
jewelsAndStones0 = (a, b) => {
  g = 0
  i = 0
  while (i < a.length) {
    j = 0
    while (j < b.length) {
      if (b[j] === a[i]) {
        g++
      }
      j++
    }
    i++
  }
};


// With simple While loops
jewelsAndStones1 = (a, b) => {
  g = 0
  i = 0
  while (i < a.length) {
    j = 0
    while (j < b.length) {
      if (b[j] === a[i]) {
        g++
        b = b.slice (0,j) + b.slice(j+1)
        j--
      }
      j++
    }
    i++
  }
};


// With String.indexOf
jewelsAndStones2 = (a, b) => {
  g = 0
  i = 0
  while (i < a.length) {
    j = 0
    while ((j = b.indexOf(a[i])) != -1) {
      g++
      b = b.slice (0,j) + b.slice(j+1)
    }
    i++
  }
};


// With String.indexOf take 2
jewelsAndStones3 = (a, b) => {
  g = 0
  i = 0
  while (i < a.length) {
    k = b
    while ((j = k.indexOf(a[i])) != -1) {
      g++
      k = k.slice(j+1)
    }
    i++
  }
};


// Using indexOf but also with fromIndex
jewelsAndStones4 = (a, b) => {
  g = 0
  i = 0
  while (i < a.length) {
    j = -1
    while ((j = b.indexOf(a[i], j+1)) != -1) {
      g++
    }
    i++
  }
};


// Using indexOf but also with fromIndex take 2
jewelsAndStones5 = (a, b) => {
  g = 0
  i = 0
  k = a.length
  while (i < k) {
    j = -1
    while ((j = b.indexOf(a[i], j+1)) != -1) {
      g++
    }
    i++
  }
};


// Using no nests
jewelsAndStones6 = (a, b) => {
  g = 0
  i = 0
  k = b.length
  while (i < k) {
    if (a.includes(b[i])) {
      g++
    }
    i++
  }
};


// Using for loops
jewelsAndStones7 = (a, b) => {
  g = 0
  for (i = 0; i < a.length; i++) {
    for (j = 0; j < b.length; j++) {
      if (b[j] === a[i]) {
        g++
      }
    }
  }
};


// Matt's solution
jewelsAndStones8 = (a, b) => {
  g = 0
  h = {}
  for (i = 0; i < a.length; i++) {
    h[a[i]] = 1
  }
  t = b.split('')
  u = [...new Set(t)]
  v = {}
  for (i = 0; i < b.length; i++) {
    v[t[i]] ? v[t[i]]++ : v[t[i]] = 1
  }
  u.forEach(w => {
    if (h[w]) {
      g += v[w]
    }
  })
}